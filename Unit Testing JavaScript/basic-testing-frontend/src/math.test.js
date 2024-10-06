import { expect, it } from "vitest";
import { add } from "./math";

// AAA Pattern

// 1 Arrange: Setting up the values
// 2 Act:   Acting on the values
// 3 Assert: Asserting the values of that result

it("should summarize all number values in an array", () => {
  // Arranging the values
  const numbers = [1, 2, 3, 4, 5];

  // Acting on the values
  const result = add(numbers);

  // Asserting the values
  const expectedValues = numbers.reduce((acc, value) => acc + value, 0);
  expect(result).toBe(expectedValues);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["input", 1];

  const result = add(inputs);
});
