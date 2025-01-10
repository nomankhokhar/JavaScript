import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const shortText = "Noman Ali";
  const longText = "a".repeat(256);
  const turncateText = longText.substring(0, 255) + "...";

  it("should render the full text if less than 255 character", () => {
    render(<ExpandableText text={shortText} />);

    const shortTextCon = screen.getByText(shortText);
    expect(shortTextCon).toBeInTheDocument();
  });

  it("should render turncate the full text if more than 255 character", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(turncateText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });

  it("should render the full text if more than 255 character click on user", async () => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(showLessButton);
    expect(screen.getByText(turncateText)).toBeInTheDocument();
    expect(showMoreButton).toHaveTextContent(/more/i);
  });
});
