## Code Quality and Static Analysis

### What are Static Analysis Tools?

Tools that analyze code without executing it. They can be used to find bugs, security vulnerabilities, and code smells. They can also be used to enforce coding standards and best practices.

- Catch potential erros early in the development process.
- Enforce coding standards and best practices.
- Improve code quality.
- Ensure consistent code quality across the team.

### Popular Static Analysis Tools

- ESLint: JavaScript linter.
- Pretter: Code formatter.
- TypeScript: Typed superset of JavaScript.

```bash
npm install --D prettier
npx prettier --write . // Format all files in the current directory
```

### ESLint

- Catch common coding mistakes early.
- Enforce coding standards and best practices.
- Improve code consistency and readability.
- Facilitate collaboration within teams.

```bash
npx init @eslint/config@latest // Always check Eslint's documentation for the latest version

// After all setup is complete
npx eslint . --fix // Fix all fixable issues
```

### TypeScript Benefits

- Catch potential errors early in the development process.
- Imporve code documentation and readability.
- Better tooling for refactoring and code navigation.
- Stronger codebase with fewer issues.

### Automated Code Quality Checks with Husky

A popular tool for Git hooks automation

- Husky: Git hooks made easy.
- Lint-staged: Run linters on git staged files.

```bash
npm install --D husky lint-staged

- After installing husky and lint-staged,
- add the following to pre-commit hook
- add commands to run ESLint and Prettier
- before committing the code into the repository

npx lint-staged
```
