import { describe, expect, it } from "vitest";

// Use toBe for primitive types (numbers, strings, booleans, etc.) where strict equality matters.
// Use toEqual for comparing objects, arrays, or other complex types where you want to check for deep equality.

describe("test suite", () => {
  it("test case", () => {
    const result = { name: "Noman Ali" };
    expect(result).toEqual({ name: "Noman Ali" });
  });
});
