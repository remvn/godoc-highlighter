# Purpose and Tech Stack

## Purpose
The `godoc-highlighter` is a Chrome extension that adds syntax highlighting to Go documentation code blocks on `https://pkg.go.dev/*`. It improves the reading experience by providing over 200 themes and automatic language detection (focused on Go).

## Tech Stack
- **Framework**: Chrome Extension API (Manifest V3)
- **Language**: TypeScript
- **Bundler/Build Tool**: Vite with CRXJS plugin
- **Syntax Highlighting**: HighlightJS (v11)
- **External CSS**: HighlightJS themes are loaded via CDN (jsDelivr)
- **Storage**: Chrome Storage API (`chrome.storage.local`) for theme and settings persistence
- **Other Tools**: `vite-plugin-zip-pack` for releases
