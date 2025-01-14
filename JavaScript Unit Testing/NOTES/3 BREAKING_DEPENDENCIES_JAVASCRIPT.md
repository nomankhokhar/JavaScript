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

### Mocking Modules

```javascript
import { getExchangeRate } from "../libs/currency";
import { getShippingQuote } from "../libs/shipping";

// When this file executed Every exported function in this module will be mocked func
// This file will be Hoisted
vi.mock("../libs/currency");
vi.mock("../libs/shipping");

// Now we can test the main module without worrying about the dependencies

// getPriceInCurrency
describe("getPriceInCurrency", () => {
  it("should return price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, "AUD");

    expect(price).toBe(15);
  });
});
// getShippingInfo
describe("getShippingInfo", () => {
  it("should return unavailable if quote cannot be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const quote = getShippingInfo("Area 51");
    expect(quote).toMatch(/unavailable/i);
  });

  it("should return shipping info if quote can be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 10, estimatedDays: 2 });

    const quote = getShippingInfo("Area 51");
    expect(quote).toMatch("$10");
    expect(quote).toMatch(/2 days/i);
    expect(quote).toMatch(/shipping cost: \$10 \(2 days\)/i);
  });
});
```

### Partial Mocks

In some cases, you may want to mock only a specific function in a module, while keeping the rest of the module intact.

```javascript
import { sendEmail } from "../libs/email";

vi.mock("../libs/email", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    sendEmail: vi.fn(),
  };
});

describe("signUp", () => {
  const email = "name@domain.com";
  it("should return false if email is not valid", async () => {
    const result = await signUp("s");
    expect(result).toBe(false);
  });

  it("should return true if email is valid", async () => {
    const result = await signUp(email);
    expect(result).toBe(true);
  });

  it("should send the welcome email if email is valid", async () => {
    const result = await signUp(email);

    expect(sendEmail).toHaveBeenCalled();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});
```

### Spying on Functions

To monitor the behavior of a function during test execution

```javascript
describe("login", () => {
  it("should email the one-time login code", async () => {
    const email = "name@gmail.com";
    const spy = vi.spyOn(security, "generateCode");

    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});
```

### Resetting Mocks

```javascript
describe("resetting mocks", () => {
  beforeEach(() => {
    // vi.mocked(sendEmail).mockClear();
    vi.clearAllMocks();
  });
  it("should reset all mocks", () => {
    const greet = vi.fn();
    greet.mockReturnValue("Hello from mock!");

    expect(greet()).toBe("Hello from mock!");

    vi.resetAllMocks(); // Reset all mocks

    expect(greet()).toBeUndefined();
  });
});
```

### Mocking the Date

```javascript
describe("getDayOfWeek", () => {
  it("should return the day of the week", () => {
    const date = new Date("2021-01-01");
    const spy = vi.spyOn(global, "Date").mockImplementation(() => date);

    const day = getDayOfWeek();
    expect(day).toBe("Friday");

    spy.mockRestore();
  });
});
```

### Mocking the Timer

- Are deterministic
- Are not dependent on random data
- Are not dependent on the current time/date
- Are not dependent on global state

```javascript
describe("isOnline", () => {
  it("should return false if current hour is outside opening hours", () => {
    vi.setSystemTime("2024-01-01 7:59");
    expect(isOnline()).toBe(false);

    vi.setSystemTime("2024-01-01 20:01");
    expect(isOnline()).toBe(false);
  });

  it("should return true if current hour is within opening hours", () => {
    vi.setSystemTime("2024-01-01 8:00");
    expect(isOnline()).toBe(true);

    vi.setSystemTime("2024-01-01 19:59");
    expect(isOnline()).toBe(true);
  });
});
```
