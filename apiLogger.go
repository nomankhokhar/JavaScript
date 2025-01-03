package apilogger

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"
)

type APILog struct {
	Timestamp   time.Time `json:"timestamp"`
	Method      string    `json:"method"`
	URL         string    `json:"url"`
	RemoteAddr  string    `json:"remote_addr"`
	UserAgent   string    `json:"user_agent"`
	StatusCode  int       `json:"status_code"`
	ResponseTime string    `json:"response_time"`
}

type APILogger struct {
	logs []APILog
	mu   sync.Mutex
}

func NewAPILogger() *APILogger {
	return &APILogger{
		logs: make([]APILog, 0),
	}
}

func (al *APILogger) LogMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		// Capture the response status code
		recorder := &statusRecorder{ResponseWriter: w, statusCode: http.StatusOK}
		next.ServeHTTP(recorder, r)

		// Calculate the response time
		responseTime := time.Since(start)

		// Log the request
		al.mu.Lock()
		al.logs = append(al.logs, APILog{
			Timestamp:   time.Now(),
			Method:      r.Method,
			URL:         r.URL.String(),
			RemoteAddr:  r.RemoteAddr,
			UserAgent:   r.UserAgent(),
			StatusCode:  recorder.statusCode,
			ResponseTime: responseTime.String(),
		})
		al.mu.Unlock()
	})
}

func (al *APILogger) GetLogs(w http.ResponseWriter, r *http.Request) {
	al.mu.Lock()
	defer al.mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(al.logs); err != nil {
		http.Error(w, "Failed to encode logs", http.StatusInternalServerError)
		return
	}
}

type statusRecorder struct {
	http.ResponseWriter
	statusCode int
}

func (rec *statusRecorder) WriteHeader(code int) {
	rec.statusCode = code
	rec.ResponseWriter.WriteHeader(code)
}

// Usage Example
func main() {
	logger := NewAPILogger()
	mux := http.NewServeMux()

	mux.HandleFunc("/logs", logger.GetLogs) // Endpoint to fetch logs

	mux.Handle("/api", logger.LogMiddleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "API endpoint hit!")
	})))

	server := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	log.Println("Server is running on port 8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

