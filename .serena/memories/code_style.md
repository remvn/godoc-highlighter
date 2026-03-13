# Code Style and Conventions

## General

- **Indentation**: 2 spaces
- **Line Endings**: LF (standard for this project)
- **Semicolons**: Always used
- **Quotes**: Double quotes preferred for strings in TS, unless single quotes are necessary.

## TypeScript

- **Naming**:
  - Classes: `PascalCase`
  - Functions/Methods: `camelCase`
  - Variables/Constants: `camelCase` or `UPPER_SNAKE_CASE` for global constants (e.g., `THEME_STYLE_ID`)
- **Strictness**: `strict: true` in `tsconfig.json`. Use explicit types where it improves clarity, but allow inference where obvious.
- **Async/Await**: Preferred over Promises/callbacks for asynchronous operations.
- **Organization**: Section off code parts with clear comment blocks (e.g., `// === SECTION ===`).

## HTML/CSS

- Follow standard Vite/Extension boilerplate structures.
- CSS files are located in `src/assets/css`.
