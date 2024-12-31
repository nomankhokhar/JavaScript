import { describe, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA Pattern
    // Arrange: Turn on the TV
    const a = 2;
    const b = 1;

    // Act: Press the power button
    const result = max(a, b);

    // Assert: Verify TV is off
    expect(result).toBe(2);
  });

  it("should return second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return first argument if argument are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("FizzBuzz", () => {
  it("should return FizzBuzz if arg divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if arg divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz if arg divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return arg in string if it is not divisible by 3 and 5", () => {
    expect(fizzBuzz(31)).toBe("31");
  });
});

describe("calculateAverage", () => {
  it("should return array");

  it("should return the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate avg of two element", () => {
    expect(calculateAverage([2, 3])).toBe(2.5);
  });

  it("should calculate avg of three element", () => {
    expect(calculateAverage([2, 3, 4])).toBe(3);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given negative number", () => {
    expect(factorial(-1)).toBeUndefined;
  });
});

describe("test suite", () => {
  it("test case", () => {
    // below test will fail because toBe is used to compare primitive values and going to match values on different memory locations
    const result = { name: "Noman" };
    // expect(result).toBe({ name: "Noman" });

    // below test will pass because toEqual is used to compare objects and going to match values on different memory locations
    expect(result).toEqual(result);
    expect(result).toHaveProperty("name");
    expect(typeof result.name).toBe("string");
  });
});
