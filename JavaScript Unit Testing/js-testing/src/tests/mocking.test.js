import { vi, it, expect, describe } from "vitest";
import { getPriceInCurrency, getShippingInfo, renderPage } from "../mocking";
import { getExchangeRate } from "../libs/currency";
import { getShippingQuote } from "../libs/shipping";
import { trackPageView } from "../libs/analytics";

// When this file executed Every exported function in this module will be mocked func
// This file will be Hoisted
vi.mock("../libs/currency");
vi.mock("../libs/shipping");
vi.mock("../libs/analytics");

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
