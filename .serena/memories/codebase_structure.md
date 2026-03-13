# Codebase Structure

## Root Directories

- `src/`: Main source code.
  - `content/`: Content scripts injected into `pkg.go.dev`.
    - `main.ts`: Logic for highlighting code blocks and managing themes.
  - `popup/`: Extension popup UI.
    - `main.ts`: Logic for settings and theme selection.
    - `popup.html`: Structure for the popup.
  - `assets/`: Styling and CSS.
    - `css/`: Theme-related styles and general UI styles.
- `public/`: Static assets (icons, manifest-related assets).
- `dist/`: Build output (not tracked).
- `release/`: Packaged zip files (not tracked).

## Configuration Files

- `manifest.config.js`: CRXJS configuration for the extension manifest.
- `vite.config.js`: Vite build configuration.
- `package.json`: Dependencies and scripts.
- `tsconfig.json`: TypeScript compiler settings.
- `GEMINI.md`: Project documentation and guidelines.
