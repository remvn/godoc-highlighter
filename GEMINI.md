# Go Docs Syntax Highlighter (godoc-highlighter)

## Project Overview
This project is a Chrome extension designed to add syntax highlighting to Go documentation code blocks on `https://pkg.go.dev/*`. 

## Reference

## Features
- **Syntax Highlighting**: Automatically detects and highlights Go code blocks within the Go documentation.
- **200+ Themes**: Provides a vast collection of over 200 themes, allowing users to deeply customize their reading experience.
- **Popup UI**: An easy-to-use popup interface for users to select their preferred theme and manage settings.

## Architecture & Directory Structure
- `manifest.json`: Defines the extension configurations, permissions (`storage`, `tabs`), and assets based on Manifest V3.
- `content/`: Scripts injected into the target web pages.
  - `main.js`: Core logic for parsing pages, detecting code blocks, and applying styles.
- `popup/`: Source files for the extension's popup interface (HTML/JS/CSS).
- `assets/`: Static assets such as the extension's icons.

## Technologies Used
- **Chrome Extension API (Manifest V3)**
- **JavaScript (Vanilla)**
- **Highlight Engine** (e.g. highlight.js)
- **Chrome Storage API** for persisting theme preferences

## External References
- **Boilerplate Source:** `https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite`. Just use this project as an example, Do not clone it to replace existing project.

## Setup and Installation
1. Navigate to `chrome://extensions/` in your Chrome browser.
2. Enable **Developer mode** in the top right corner.
3. Click on **Load unpacked** and select the `d:\Workspace\godoc-highlighter` directory.
4. Visit `https://pkg.go.dev/` to see the extension in action.
