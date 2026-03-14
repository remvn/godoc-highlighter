# Go Docs Syntax Highlighter (godoc-highlighter)

## Project Overview

This project is a Chrome extension designed to add syntax highlighting to Go documentation code blocks on `https://pkg.go.dev/*`.

## Features

- **Syntax Highlighting**: Automatically detects and highlights Go code blocks within the Go documentation using Highlight.js.
- **Interactive Code Editors**: Enhances code textareas by injecting Monaco Editor for a premium coding experience.
- **200+ Themes**: Provides a vast collection of over 200 themes, allowing users to deeply customize their reading experience.
- **Searchable Popup UI**: An easy-to-use popup interface with a search bar to quickly find and select themes.

## Architecture & Directory Structure

- `manifest.config.js`: Configuration for CRXJS to dynamically generate the `manifest.json`.
- `vite.config.js`: Vite configuration for building and hot-reloading the extension.
- `src/`: Main source directory.
  - `common/`: Shared logic including constants, settings management, and theme utilities.
  - `content/`: Content scripts injected into Go documentation pages.
    - `highlighter.ts`: Detects and highlights static code blocks.
    - `editor.ts`: Handles Monaco Editor injection for interactive elements.
    - `theme-manager.ts`: Manages theme application and real-time updates.
    - `main.ts`: Main entry point for the content script.
  - `popup/`: Files for the extension's settings popup.
  - `assets/`: Global styling, CSS assets, and theme configurations.
- `public/`: Static assets such as the extension's icons.
- `package.json`: Project dependencies, scripts, and build configurations.
- `tsconfig.json`: TypeScript configuration for the project.

## Technologies Used

- **Chrome Extension API (Manifest V3)**: Core extension framework.
- **Chrome Storage API**: Used for persisting user theme preferences and settings.
- **TypeScript**: Ensures type safety and improves developer experience.
- **Vite**: Modern frontend build tool for fast development and optimized builds.
- **CRXJS**: Vite plugin for building Chrome Extensions with HMR support.
- **HighlightJS**: Powerful syntax highlighter for code block detection.
- **Monaco Editor**: Integrated to provide high-quality interactive code editing.

## External References

- **Boilerplate Source:** `https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite`. Just use this project as an example, Do not clone it to replace existing project.
