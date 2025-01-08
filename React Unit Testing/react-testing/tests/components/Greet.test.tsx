import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when is provided", () => {
    render(<Greet name="Noman" />);
    const heading = screen.getByRole("heading"); // This will get the any heading from the dom like h1, h2, h3, h4
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Noman/i);
  });

  it("should render login if name is not provided", () => {
    render(<Greet />);
    const heading = screen.getByRole("button"); // This will get the any heading from the dom like h1, h2, h3, h4, button
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/login/i);
  });
});
