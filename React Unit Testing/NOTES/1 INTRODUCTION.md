## Testing React Components

### These packages that are used for testing React components:

- @testing-library/react
- @testing-library/jest-dom
- concurrently
- jsdom

- 1 @testing-library/react: Tests React components as users interact with them.
- 2 @testing-library/jest-dom: Provides additional matchers for better DOM testing.
- 3 concurrently: Runs multiple scripts/processes in parallel.
- 4 jsdom: Simulates a browser environment for DOM-related testing in Node.js.

```bash
npm i -D @testing-library/react
npm i -D @testing-library/jest-dom
npm i -D concurrently
npm i -D jsdom
```

### Setup commands:

```bash
 "test": "vitest",
 "test:ui": "vitest --ui",
 "test:watch": "vitest --watch"
```

### What to test?

- How they render
- How they respond to user interactions

- **Quote** : Write tests that are maintainable, readable, robust and trustworthy.
