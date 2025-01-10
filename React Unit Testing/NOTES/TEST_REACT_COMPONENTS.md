## Testing the React Components

### What to test?

- How they render
- How they respond to user interactions

- **Quote** : Write tests that are maintainable, readable, robust and trustworthy.

1 Test the functionality of the components, not the implementation details.
2 Do not test Style of the components.

### Testing React Components

- **toBeInTheDocument** : Check if the element is in the document.
- **toHaveTextContent** : Check if the element has the text content. Means the text content is present in the element.
- **getByRole** : Get the element by role like button, heading, etc.

```jsx
// files should be .tsx or .jsx
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
```

### Testing Components with Query

- **queryByRole** : Get the element by role like button, heading, etc. If the element is not present then it will return null.

```jsx
describe("UserAccount", () => {
  it("should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "Noman", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button if user is not admin", () => {
    const user: User = { id: 1, name: "Noman" };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button"); // This will return null if the element is not present
    expect(button).not.toBeInTheDocument();
  });
});
```

### Testing Components of UserList

- **name: user.name**: Matches the text inside the link or the value of its aria-label.
- **Role "link**: Ensures the element is a link.
-

```jsx
describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render ", () => {
    const users: User[] = [
      { id: 1, name: "Noman" },
      { id: 2, name: "Ali" },
    ];

    render(<UserList users={users} />);
    users.forEach((user) => {
      // Get the link by the name of the user
      // example: <a href="/users/1">Noman</a>
      // name is the text inside the link is Noman
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
```

### Testing Images List

- **src**: Matches the src attribute of the image.

```jsx
it("should render nothing if given an empty array", () => {
  const { container } = render(<ProductImageGallery imageUrls={[]} />);
  // Check if the container is empty that render Above component
  expect(container).toBeEmptyDOMElement();
});
```

### Testing User Interaction

first install the user-event library

```bash
npm install @testing-library/user-event
```

- **userEvent.click**: Simulate a user clicking on an element.

```jsx
it("should enable the button when the checkbox is checked", async () => {
  render(<TermsAndConditions />);
  const checkbox = screen.getByRole("checkbox");
  const user = userEvent.setup();
  await user.click(checkbox);

  expect(screen.getByRole("button")).toBeEnabled();
});
```

### Testing User Interaction with Button Click

- **userEvent.click**: Simulate a user clicking on an element.

```jsx
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
```

### Simplified Version of Testing func

- renderComponents: This function will render the component and return the elements of the component that we need to check in the document.

```jsx
describe("TermsAndConditions", () => {
  const renderCompnents = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };
  it("should render with correct text and inital state", () => {
    const { heading, button, checkbox } = renderCompnents();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox } = renderCompnents();
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
```

- Note: screen.getByRole("button", { name: /more/i });
  Above Property by name if does not match then it will throw an error our test will automatically fail.
