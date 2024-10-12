import { describe, expect, it, vi } from "vitest";
import { getCoupons } from "../src/core";

// Use toBe for primitive types (numbers, strings, booleans, etc.) where strict equality matters.
// Use toEqual for comparing objects, arrays, or other complex types where you want to check for deep equality.

describe("test suite", () => {
  it("test case", () => {
    const result = { name: "Noman Ali" };
    expect(result).toEqual({ name: "Noman Ali" });

    const res = "The requested file was not found!";
    // Loose (too general)
    expect(res).toBeDefined();

    // Tight (too specific)
    // expect(res).toBe("The requested file was not found.");

    // Better Assertion
    expect(res).toMatch(/not found/i);

    const resArr = [1, 2, 3];

    // loose Assertion
    expect(resArr).toBeDefined;

    // Tight Assertion
    expect(resArr).toEqual(expect.arrayContaining([2, 1, 3]));

    // can be Check at length
    expect(resArr).toHaveLength(3);

    const resObj = { name: "Noman Ali", id: 1 };

    expect(resObj).toMatchObject({ name: "Noman Ali" });
    expect(resObj).toHaveProperty("name");
    expect(typeof resObj.name).toBe("string");
  });
});

describe("getCoupens", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(coupons.length).toBeGreaterThan(0);
  });
});
