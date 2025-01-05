import { vi, it, expect, describe, beforeEach } from "vitest";
import {
  getDiscount,
  getPriceInCurrency,
  getShippingInfo,
  isOnline,
  login,
  renderPage,
  signUp,
  submitOrder,
} from "../mocking";
import { getExchangeRate } from "../libs/currency";
import { getShippingQuote } from "../libs/shipping";
import { trackPageView } from "../libs/analytics";
import { charge } from "../libs/payment";
import { sendEmail } from "../libs/email";
import security from "../libs/security";

// When this file executed Every exported function in this module will be mocked func
// This file will be Hoisted
vi.mock("../libs/currency");
vi.mock("../libs/shipping");
vi.mock("../libs/analytics");
vi.mock("../libs/payment");
vi.mock("../libs/email", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    sendEmail: vi.fn(),
  };
});

describe("test suite", () => {
  it("test case", () => {
    const greet = vi.fn();
    // mockReturnValue
    // mockResolvedValue
    // mockImplementation
    greet.mockImplementation((name) => "Hello " + name);

    const result = greet("Noman Ali");
    // expect(greet).toHaveBeenCalled();
    // expect(greet).toHaveBeenCalledWith("Noman Ali");

    expect(greet).toHaveBeenCalledOnce();
  });
});

describe("test suite", () => {
  it("should", () => {
    // Create a mock for following function
    const sendText = vi.fn();
    sendText.mockReturnValue("ok");

    // Call the mock function
    const result = sendText("message");

    // Assert that the mock function is Called
    expect(sendText).toHaveBeenCalledWith("message");
    // Assert that the result is 'ok'
    expect(result).toBe("ok");
  });
});

// getPriceInCurrency
describe("getPriceInCurrency", () => {
  it("should return price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, "AUD");

    expect(price).toBe(15);
  });
});

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

describe("renderPage", () => {
  it("should return correct content", async () => {
    const result = await renderPage();
    expect(result).toMatch(/content/i);
  });

  it("should call analytics", async () => {
    await renderPage();

    expect(trackPageView).toHaveBeenCalledWith("/home");
  });
});

describe("submitOrder", () => {
  const order = { totalAmount: 10 };
  const creditCard = { creditCardNumber: "1234" };
  it("should charge the customer", async () => {
    vi.mocked(charge).mockReturnValue({ status: "success" });
    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it("should return success when payment is not successfull", async () => {
    vi.mocked(charge).mockReturnValue({ status: "failed" });
    const result = await submitOrder(order, creditCard);
    expect(result).toEqual({ success: false, error: "payment_error" });
  });

  it("should return success when payment is successfull", async () => {
    vi.mocked(charge).mockReturnValue({ status: "success" });
    const result = await submitOrder(order, creditCard);
    expect(result).toEqual({ success: true });
  });
});

describe("signUp", () => {
  const email = "name@domain.com";

  beforeEach(() => {
    // vi.mocked(sendEmail).mockClear();
    vi.clearAllMocks();
  });

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

    // sendEmail should called once whenever signUp func called.
    expect(sendEmail).toHaveBeenCalled();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

describe("login", () => {
  it("should email the one-time login code", async () => {
    const email = "name@gmail.com";
    const spy = vi.spyOn(security, "generateCode");

    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});

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

describe("getDiscount", () => {
  it("should return .2 on Christmas day", () => {
    vi.setSystemTime("2024-12-25 00:01");
    expect(getDiscount()).toBe(0.2);
  });

  it("should return 0 without on Christmas day", () => {
    vi.setSystemTime("2024-12-26 00:01");
    expect(getDiscount()).toBe(0);
  });
});
