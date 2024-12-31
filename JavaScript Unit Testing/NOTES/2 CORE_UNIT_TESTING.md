## Core Unit Testing Techniques

### Good Characteristics of a Unit Test

- **Fast**: A unit test should be fast to run. If a test takes a long time to run, developers will be less likely to run it frequently. This can lead to bugs being introduced into the codebase.

- **Isolated**: A unit test should be isolated from other tests. This means that a test should not rely on the state of another test. This is important because if a test fails, you want to know that it is failing because of the code that it is testing, not because of some other test that is running.

### Primitive Types and Objects

- **Primitive Types**: A primitive type is a type that is not an object. In JavaScript, there are six primitive types: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`.

- **Non Primitive Types**: Non-primitive types are types that are not primitive. In JavaScript, there are two non-primitive types: `object` and `function`.

### Testing Non Primitive Types

- **Testing Objects**: When testing objects, you should test the properties of the object. You should also test the methods of the object.

```javascript
describe("test suite", () => {
  it("test case", () => {
    // below test will fail because toBe is used to compare primitive values and going to match values on different memory locations
    const result = { name: "Noman" };
    expect(result).toBe({ name: "Noman" });

    // below test will pass because toEqual is used to compare objects and going to match values on different memory locations
    expect(result).toEqual(result);
  });
});
```

### For Truthiness

- toBeTruthy: Matches any value that an if statement treats as true.
- toBeFalsy: Matches any value that an if statement treats as false.
- toBeNull: Matches only null.
- toBeUndefined: Matches only undefined.
- toBeDefined: The value is defined

```javascript
describe("For Truthiness", () => {
  it("should handle truthy and falsy values", () => {
    expect(1).toBeTruthy(); // Passes because 1 is truthy
    expect(0).toBeFalsy(); // Passes because 0 is falsy
    expect(null).toBeNull(); // Passes because the value is null
    expect(undefined).toBeUndefined(); // Passes because the value is undefined
    expect(1).toBeDefined(); // Passes because 1 is a defined value
  });
});
```

### For Numbers

- toBeGreaterThan: Matches any number that is greater than the expected value.

- toBeGreaterThanOrEqual: Matches any number that is greater than or equal to the expected value.
- toBeLessThan: Matches any number that is less than the expected value.
- toBeLessThan: Matches any number that is less than or equal to the expected value.
- toBeCloseTo: Matches any number that is close to the expected value.

```javascript
describe("For Numbers", () => {
  it("should compare numbers correctly", () => {
    expect(10).toBeGreaterThan(5); // Passes because 10 > 5
    expect(10).toBeGreaterThanOrEqual(10); // Passes because 10 >= 10
    expect(5).toBeLessThan(10); // Passes because 5 < 10
    expect(5).toBeLessThanOrEqual(5); // Passes because 5 <= 5
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5); // Passes because values are close
  });
});
```

### For Strings

- toMatch: Matches the string that contains the expected value.

```javascript
describe("For Strings", () => {
  it("should match strings correctly", () => {
    expect("hello world").toMatch(/world/); // Passes because 'world' is a substring
    expect("JavaScript").toMatch("Java"); // Passes because 'Java' is part of the string
  });
});
```

### For Objects

- toMatchObject: Matches the object that contains the expected value.
- toHaveProperty: Matches the object that has the expected property.

```javascript
describe("For Objects", () => {
  it("should match objects correctly", () => {
    const obj = { name: "John", age: 30 };
    expect(obj).toMatchObject({ name: "John" }); // Passes because object contains 'name'
    expect(obj).toHaveProperty("age", 30); // Passes because 'age' exists with value 30
  });
});
```

### For Arrays

- toContain: Matches the array that contains the expected value.
- toContainEqual: Matches the array that contains the expected value.
- toHaveLength: Matches the array that has the expected length.

```javascript
describe("For Arrays", () => {
  it("should handle arrays correctly", () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2); // Passes because 2 is in the array
    expect(arr).toContainEqual(2); // Passes because array contains value equal to 2
    expect(arr).toHaveLength(3); // Passes because the array length is 3
  });
});
```

### For Exceptions

- toThrow: Matches the function that throws an exception.
- toThrowError: Matches the function that throws an error.

```javascript
describe("For Exceptions", () => {
  it("should handle exceptions correctly", () => {
    const throwError = () => {
      throw new Error("Something went wrong");
    };
    expect(throwError).toThrow(); // Passes because the function throws an exception
    expect(throwError).toThrowError("Something went wrong"); // Passes because the error message matches
  });
});
```

### Positive and Negative Testing

- **Positive Testing**: Positive testing is when you test that a function works as expected when given valid input.

- **Negative Testing**: Negative testing is when you test that a function works as expected when given invalid input.

```javascript
describe("Positive and Negative Testing", () => {
  it("should handle positive and negative testing", () => {
    const add = (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers");
      }
      return a + b;
    };

    // Positive testing
    expect(add(1, 2)).toBe(3); // Passes because 1 + 2 = 3

    // Negative testing
    expect(() => add("1", 2)).toThrowError("Both arguments must be numbers"); // Passes because '1' is not a number
  });
});
```

### Boundary Testing

- **Boundary Testing**: A testing technique that focuses on the boundaries of input values.

```javascript
export function isPriceInRange(price, min, max) {
  return price >= min && price <= max;
}
```

Testing the `isPriceInRange` function:

- Price is in range: Test that the function returns true when the price is within the range.
- Price is below the range: Test that the function returns false when the price is below the range.
- Price is above the range: Test that the function returns false when the price is above the range.

```javascript
describe("isPriceInRange", () => {
  it("should return true when price is outside of range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });

  it("should return true when price is equal to min or max", () => {
    expect(isPriceInRange(1, 1, 10)).toBe(true);
    expect(isPriceInRange(10, 1, 10)).toBe(true);
  });

  it("should return true if price is in range", () => {
    expect(isPriceInRange(7, 1, 10)).toBe(true);
    expect(isPriceInRange(2, 1, 10)).toBe(true);
  });
});
```

### Parameterized Tests

A way to run the same test multiple times with different sets of input data

```javascript
export function canDrive(age, countryCode) {
  const legalDrivingAge = {
    US: 16,
    UK: 17,
  };

  if (!legalDrivingAge[countryCode]) {
    return "Invalid country code";
  }

  return age >= legalDrivingAge[countryCode];
}

describe("canDrive", () => {
  it("should return error for invalid country code", () => {
    expect(canDrive(20, "FR")).toMatch(/invalid/i);
  });

  it.each([
    { age: 15, country: "US", result: false },
    { age: 16, country: "US", result: true },
    { age: 17, country: "US", result: true },

    { age: 16, country: "UK", result: false },
    { age: 17, country: "UK", result: true },
    { age: 18, country: "UK", result: true },
  ])("should return $result for $age, $country", ({ age, country, result }) => {
    expect(canDrive(age, country)).toBe(result);
  });
});
```

### Testing Asynchronous Code

- **Callback Functions**: A callback function is a function that is passed as an argument to another function and is executed after some event has occurred.

```javascript
export function fetchData() {
  return Promise.reject({ reason: "Operation failed" });
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    });
  });
}

it("should return a problem that will resolve to an array", async () => {
  try {
    const result = await fetchData();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  } catch (error) {
    expect(error).toHaveProperty("reason");
    expect(error.reason).toMatch(/failed/i);
  }
});
```

### Setup and Teardown

- **beforeAll**: A function that is run once before all tests.

- **afterAll**: A function that is run once after all tests.

- **beforeEach**: A function that is run before each test.

- **afterEach**: A function that is run after each test.

```javascript
describe("test suite", () => {
  beforeAll(() => {
    console.log("beforeAll called");
  });

  beforeEach(() => {
    console.log("beforeEach called");
  });

  afterEach(() => {
    console.log("afterEach called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });

  it("test case 1", () => {});

  it("test case 2", () => {});
});
```
