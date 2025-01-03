import { vi, it, expect, describe } from "vitest";

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
