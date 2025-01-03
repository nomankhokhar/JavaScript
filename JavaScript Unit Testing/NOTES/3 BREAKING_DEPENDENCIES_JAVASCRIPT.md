## Breaking Dependencies in JavaScript with Mocks

### Creating Mock Functions

A function that imitates the behavior of a real function.

```javascript
import { describe, it, expect, vi } from "vitest";

// Example 1: Simple sync mock
describe("Mocking a simple function", () => {
  it("should mock the greet function with a custom implementation", () => {
    // Create a mock function using vi.fn()
    const greet = vi.fn();

    // Define the mock behavior
    greet.mockImplementation((name) => `Hello, ${name}!`);

    // Call the mock function
    const result = greet("Alice");

    // Check that the mock was called exactly once
    expect(greet).toHaveBeenCalledOnce();

    // Check that it was called with "Alice"
    expect(greet).toHaveBeenCalledWith("Alice");

    // Check the return value from the mock
    expect(result).toBe("Hello, Alice!");
  });
});

// Example 2: Using mockReturnValue (synchronous)
describe("Using mockReturnValue", () => {
  it("should return a fixed value using mockReturnValue", () => {
    const greet = vi.fn();

    // This will always return "Hello from mock!"
    greet.mockReturnValue("Hello from mock!");

    const result = greet("John");

    // Even though we passed 'John', the mock ignores that and returns our set value
    expect(result).toBe("Hello from mock!");
  });
});

// Example 3: Using mockResolvedValue (asynchronous)
describe("Using mockResolvedValue with async functions", () => {
  it("should return a promise resolved value", async () => {
    const fetchData = vi.fn();

    // Simulate an async operation that resolves with an object
    fetchData.mockResolvedValue({ data: "Some async data" });

    // Because it's async, we can await the result
    const response = await fetchData();

    expect(response).toEqual({ data: "Some async data" });
    expect(fetchData).toHaveBeenCalledOnce();
  });
});

// Example 4: Multiple calls tracking
describe("Tracking multiple calls and arguments", () => {
  it("should track how many times the mock was called and with which arguments", () => {
    const calculate = vi.fn();

    calculate.mockImplementation((a, b) => a + b);

    // Call the mock function multiple times
    calculate(2, 3);
    calculate(10, 5);

    // The mock should have been called twice
    expect(calculate).toHaveBeenCalledTimes(2);

    // First call arguments
    expect(calculate).toHaveBeenNthCalledWith(1, 2, 3);

    // Second call arguments
    expect(calculate).toHaveBeenNthCalledWith(2, 10, 5);

    // Last return value should be 15
    expect(calculate).toReturnWith(15);
  });
});

// -> Another Example of Mock Examples:

import { describe, it, expect, vi } from "vitest";

describe("mock test example", () => {
  it("should return a mocked response", async () => {
    // Suppose we have a function `fetchData` that calls an API
    const fetchData = vi.fn();

    // Mock the async response
    fetchData.mockResolvedValue({ data: "Hello from mock!" });

    // When we call the mocked function, we get the controlled response
    const response = await fetchData();

    expect(response).toEqual({ data: "Hello from mock!" });
    expect(fetchData).toHaveBeenCalledOnce();
  });
});
```
