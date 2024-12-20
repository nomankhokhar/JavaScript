## JavaScript Unit Testing

### What is Unit Testing?

A form of automated testing where we write codeto test our code.

- Detects bugs early
- Facilitates Refactoring
- Improves code quality
- Documentation code

Unit Testing is a an Investment in Quality. The later we fix a bug, the more expensive it is to fix for the business. Write tests that are maintainable, robust, and trustworthy.

### Types of Testing

- Unit Testing
- Integration Testing
- End-to-End Testing

Unit Testing is the most granular level of testing. It tests the smallest unit of code in isolation. It is the most important type of testing because it is the foundation of all other types of testing.

Integration Testing tests how different units of code work together. It is the next level of testing after Unit Testing.

End-to-End Testing tests the entire application from start to finish. It is the highest level of testing.

Note More Unit testing then Integration Testing then End-to-End Testing.

### Testing Frameworks

- **Test Runner**: Executes tests and provides results.
- **Assertion Library**: Verifies test results.
- **Mocking Library**: Creates fake objects for testing.
- **Code Coverage**: Measures how much of our code is covered by tests that we have written so far.

### JavaScript Testing Frameworks

- **Jasmine**: Behavior-Driven Development (BDD) framework.
- **Mocha**: Test Runner.
- **Vitest**: Test Runner. Supports ESM, TypeScript, and Browser Testing.
- **Jest**: Test Runner.
- **Cypress**: End-to-End Testing.
- **Playwright**: End-to-End Testing.

To install vitest run `npm install --save-dev vitest`

### Writing First Tests Case to check Max value

- **Arrange**: Setup the test.
- **Act**: Execute the test.
- **Assert**: Verify the test.

```javascript
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

import { describe, it, expect } from "vitest";
import { max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA Pattern
    // Arrange: Turn on the TV
    const a = 2;
    const b = 1;

    // Act: Press the power button
    const result = max(a, b);

    // Assert: Verify TV is off
    expect(result).toBe(2);
  });
});
```
