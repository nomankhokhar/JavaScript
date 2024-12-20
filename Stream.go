package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

// ServeVideo handles video streaming in chunks
func ServeVideo(w http.ResponseWriter, r *http.Request) {
	// Get the video file path
	videoPath := "./videos/sample.mp4" // Adjust the path to your video file

	// Open the video file
	file, err := os.Open(videoPath)
	if err != nil {
		log.Printf("Error opening video file: %v", err)
		http.Error(w, "Video not found", http.StatusNotFound)
		return
	}
	defer file.Close()

	// Get the file size
	stat, err := file.Stat()
	if err != nil {
		log.Printf("Error getting file stats: %v", err)
		http.Error(w, "Error accessing video", http.StatusInternalServerError)
		return
	}
	fileSize := stat.Size()

	// Parse the "Range" header for partial content requests
	rangeHeader := r.Header.Get("Range")
	if rangeHeader == "" {
		// Serve entire file if no Range header is provided
		w.Header().Set("Content-Type", "video/mp4")
		w.Header().Set("Content-Length", string(fileSize))
		if _, err := file.Seek(0, 0); err != nil {
			http.Error(w, "Error seeking file", http.StatusInternalServerError)
			return
		}
		if _, err := io.Copy(w, file); err != nil {
			log.Printf("Error streaming video: %v", err)
		}
		return
	}

	ranges := strings.Split(rangeHeader, "=")
	if len(ranges) != 2 {
		http.Error(w, "Invalid Range header", http.StatusBadRequest)
		return
	}

	rangeStart, rangeEnd := 0, fileSize-1
	fmt.Sscanf(ranges[1], "%d-%d", &rangeStart, &rangeEnd)
	if rangeStart > rangeEnd || rangeStart >= fileSize {
		http.Error(w, "Invalid Range", http.StatusRequestedRangeNotSatisfiable)
		return
	}

	contentLength := rangeEnd - rangeStart + 1
	w.Header().Set("Content-Type", "video/mp4")
	w.Header().Set("Content-Range", fmt.Sprintf("bytes %d-%d/%d", rangeStart, rangeEnd, fileSize))
	w.Header().Set("Content-Length", fmt.Sprintf("%d", contentLength))
	w.WriteHeader(http.StatusPartialContent)

	if _, err := file.Seek(int64(rangeStart), 0); err != nil {
		log.Printf("Error seeking in file: %v", err)
		return
	}

	if _, err := io.CopyN(w, file, int64(contentLength)); err != nil {
		log.Printf("Error streaming video: %v", err)
	}
}

func main() {
	http.HandleFunc("/video", ServeVideo)
	log.Println("Server started at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
