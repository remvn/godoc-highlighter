# Go Docs Syntax Highlighter (godoc-highlighter)

## Project Overview
This project is a Chrome extension designed to add syntax highlighting to Go documentation code blocks on `https://pkg.go.dev/*`. 

## Features
- **Syntax Highlighting**: Automatically detects and highlights Go code blocks within the Go documentation.
- **200+ Themes**: Provides a vast collection of over 200 themes, allowing users to deeply customize their reading experience.
- **Popup UI**: An easy-to-use popup interface for users to select their preferred theme and manage settings.

## Architecture & Directory Structure
- `manifest.config.js`: Configuration for CRXJS to dynamically generate the `manifest.json`.
- `vite.config.js`: Vite configuration for building and hot-reloading the extension.
- `src/`: Main source directory.
  - `content/main.ts`: Content script injected into Go documentation pages to detect and highlight code blocks.
  - `popup/`: Files for the extension's popup interface.
    - `popup.html`: The HTML structure for the settings popup.
    - `main.ts`: Main logic for handling theme selection and user settings.
  - `assets/`: Global styling and CSS assets.
- `public/`: Static assets such as the extension's icons.
- `package.json`: Project dependencies, scripts, and build configurations.
- `tsconfig.json`: TypeScript configuration for the project.

## Technologies Used
- **Chrome Extension API (Manifest V3)**: Core extension framework.
- **Chrome Storage API**: Used for persisting user theme preferences.
- **TypeScript**: Ensures type safety and improves developer experience.
- **Vite**: Modern frontend build tool for fast development and optimized builds.
- **CRXJS**: Vite plugin for building Chrome Extensions with HMR support.
- **HighlightJS**: Powerful syntax highlighter for 190+ languages.

## External References
- **Boilerplate Source:** `https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite`. Just use this project as an example, Do not clone it to replace existing project.