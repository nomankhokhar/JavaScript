// Core Unit Testing Technologies

// What makes test a Good Test?

// Good tests are maintainable, robust, and trustworthy.

// Maintainable Tests

// 1. Have a clear name
// 2. Test a single behavior
// 3. Are small (ideally, less then 10 line).
// 4. Have clear variables/constants
// 5. Are properly formatted.

// Robust Test

// 1. A test that is resilient to changes in code.
// 2. Test the behavior, not implementation.
// 3. Avoid tight assertions

// Trust Worthy Test

// 1. Validate the correct behavior
// 2. Test boundary conditions
// 3. Are deterministic
// 4. Are not dependent on random data.
// 5. Are not dependent on current data/time.

// Tests should be isolated

// Truthiness

// 1. toBeTruthy -> Checks if a value is considered truthy (i.e., evaluates to true in a boolean context).

expect(1).toBeTruthy(); // Passes, because 1 is truthy
expect("hello").toBeTruthy(); // Passes, non-empty strings are truthy

// 2. toBeFalsy -> Checks if a value is considered falsy (i.e., evaluates to false in a boolean context).

expect(0).toBeFalsy(); // Passes, because 0 is falsy
expect("").toBeFalsy(); // Passes, an empty string is falsy

// 3. toBeNull -> Specifically checks if a value is null.

expect(null).toBeNull(); // Passes, value is exactly null

// 4. toBeUndefined -> Checks if a value is undefined.

let a;
expect(a).toBeUndefined(); // Passes, because `a` is not initialized

// 5. toBeDefined -> Opposite of toBeUndefined, checks if a value is not undefined.

let b = 5;
expect(b).toBeDefined(); // Passes, `a` is defined

// Numbers

// 1. toBeGreaterThen -> Checks if a value is greater than a specific number.

expect(10).toBeGreaterThan(5); // Passes, because 10 > 5

// 2. toBeGreaterThanOrEqualTo -> Checks if a value is greater than or equal to a specific number.

expect(10).toBeGreaterThanOrEqual(10); // Passes, because 10 >= 10

// 3. toBeLessThan -> Checks if a value is less than a specific number.

expect(5).toBeLessThan(10); // Passes, because 5 < 10

// 4. toBeLessThanOrEqualTo -> Checks if a value is less than or equal to a specific number.

expect(5).toBeLessThanOrEqual(5); // Passes, because 5 <= 5

// 5. toBeCloseTo -> Checks if a floating-point number is approximately equal to another, useful for avoiding precision errors with floats.

expect(0.1 + 0.2).toBeCloseTo(0.3, 5); // Passes, precision error handled

// Strings

// 1. toMatch -> Checks if a string matches a regular expression or a substring.

expect("hello world").toMatch(/world/); // Passes, 'world' is in the string
expect("12345").toMatch(/\d+/); // Passes, the string contains digits

// Objects

// 1. toMatchObject -> Checks if an object contains the expected key-value pairs.

expect({ name: "Noman", age: 30 }).toMatchObject({ name: "Noman" }); // Passes, because the name matches

// 2. toHaveProperty -> Checks if an object has a specific property.

expect({ name: "Noman", age: 30 }).toHaveProperty("age"); // Passes, the object has the 'age' property

// Arrays

// 1. toContain -> Checks if an array contains a specific value.

expect([1, 2, 3]).toContain(2); // Passes, because 2 is in the array

// 2. toHaveLength -> Checks if an array (or string) has the expected length.

expect([1, 2, 3]).toHaveLength(3); // Passes, because the array has 3 elements

// Exceptions

// 1. toThrowError -> Checks if a function throws an error when executed.

const errorFunction = () => {
  throw new Error("Something went wrong");
};
expect(errorFunction).toThrowError("Something went wrong"); // Passes, because the error is thrown
