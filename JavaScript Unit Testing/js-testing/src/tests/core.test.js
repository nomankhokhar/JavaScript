import {
  it,
  expect,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import {
  calculateDiscount,
  canDrive,
  fetchData,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  Stack,
  validateUserInput,
} from "../core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();

    // Check if all coupons have a code property and it is a string
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid discounts", () => {
    const coupons = getCoupons();

    // Check if all coupons have a discount property and it is a number
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThanOrEqual(0);
      expect(coupon.discount).toBeLessThanOrEqual(1);
    });
  });
});

describe("Calculate Discount", () => {
  it("should return discount price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    const result = calculateDiscount("10", "SAVE10");
    // i is for case-insensitive like "Invalid Price" or "Invalid price"
    expect(result).toMatch(/Invalid/i);
  });

  it("should return negative price", () => {
    const result = calculateDiscount(-10, "SAVE20");
    expect(result).toMatch(/Invalid/i);
  });

  it("should handle non-string discount code", () => {
    const result = calculateDiscount(10, 10);
    expect(result).toMatch(/Invalid/i);
  });

  it("should handle invalid discound code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  it("should return uccessif given valid input", () => {
    expect(validateUserInput("noman", 42)).toMatch(/success/i);
  });

  it("should return an error if username is not a string", () => {
    expect(validateUserInput("1", 42)).toMatch(/invalid/i);
  });

  it("should retirn an error if username is less than 3 characters", () => {
    expect(validateUserInput("xD", 32)).toMatch(/invalid/i);
  });

  it("should return an error if username is longer than 255 character", () => {
    expect(validateUserInput("A".repeat(256), 42)).toMatch(/invalid/i);
  });

  it("should return an error if age is not a number", () => {
    expect(validateUserInput("B".repeat(32), "-19")).toMatch(/invalid/i);
  });

  it("should return an error if age is less than 18", () => {
    expect(validateUserInput("Noman Ali", 17)).toMatch(/invalid/i);
  });

  it("should return an error if age is greater than 100", () => {
    expect(validateUserInput("Noman Ali", 101)).toMatch(/invalid/i);
  });

  it("should return an error if userName and age both are invalid", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isPriceInRange", () => {
  it.each([
    { scenario: "price < mix", price: -10, min: 0, max: 100, result: false },
    { scenario: "price > max", price: 200, min: 0, max: 100, result: false },
    { scenario: "price = mix", price: 1, min: 1, max: 10, result: true },
    { scenario: "price = max", price: 10, min: 1, max: 10, result: true },
    { scenario: "price is in range", price: 7, min: 1, max: 10, result: true },
    {
      scenario: "price is between in range",
      price: 2,
      min: 1,
      max: 10,
      result: true,
    },
  ])("should return $result when $snenario", ({ price, min, max, result }) => {
    expect(isPriceInRange(price, min, max)).toBe(result);
  });
});

describe("isValidUsername", () => {
  it("should return true if username length is in range", () => {
    expect(isValidUsername("Noman")).toBe(true);
  });

  it("should return false if username length is not in range", () => {
    expect(isValidUsername("Ali")).toBe(false);
  });

  it("should return false if username is empty", () => {
    expect(isValidUsername("")).toBe(false);
  });

  it("should return false if username is too long", () => {
    expect(isValidUsername("A".repeat(100))).toBe(false);
  });

  it("should return false if we pass null, undefined and number", () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(-10)).toBe(false);
  });
});

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

describe("fetchData", () => {
  // it("should return a problem that will resolve to an array of numbers", () => {
  //   fetchData().then((result) => {
  //     expect(Array.isArray(result)).toBe(true);
  //     expect(result.length).toBeGreaterThan(0);
  //   });
  // });
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
});

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

describe("Stack", () => {
  let stack;

  // Before each run of it it will initilize Stack using beforeEach func
  beforeEach(() => {
    stack = new Stack();
  });

  it("push should add an item to the stack", () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
  });

  it("pop should remove and return the top item from the stack", () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it("pop should throw an error if stack is empty", () => {
    expect(() => {
      stack.pop();
    }).toThrow(/empty/i);
  });

  it("peek should return the top item from the stack without removing it", () => {
    stack.push(1);
    stack.push(2);

    const peekedItem = stack.peek();

    expect(peekedItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it("peek should throw an error if stack is empty", () => {
    expect(() => {
      stack.peek();
    }).toThrow(/empty/i);
  });

  it("isEmpty should return true if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("isEmpty should return false if stack is empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("size should return the number of items", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  it("clear should remove all item from the stack", () => {
    stack.push(1);
    stack.push(2);

    stack.clear();

    expect(stack.size()).toBe(0);
  });
});
