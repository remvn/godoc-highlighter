import { randomString } from "@/common/utils";
import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";
import "monaco-editor/esm/vs/basic-languages/go/go.contribution.js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { DEFAULT_THEME, THEME_CDN_BASE, THEME_STYLE_ID } from "../common/constants";
import { Settings } from "../common/settings";
// import "./monaco-worker";

monaco.languages.register({ id: "go" });
hljs.registerLanguage("go", go);

// ============================================================
// Theme management
// ============================================================

async function loadTheme() {
  const theme = await Settings.getTheme(DEFAULT_THEME);
  applyTheme(theme);
}

function applyTheme(theme: string) {
  let link = document.getElementById(THEME_STYLE_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = THEME_STYLE_ID;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
  }
  link.href = `${THEME_CDN_BASE}/${theme}`;
}

// Listen for theme changes from other extension pages
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes[Settings.THEME_KEY]) {
    applyTheme(changes[Settings.THEME_KEY].newValue as string);
  }
});

// ============================================================
// DOM helpers for syntax highlighting <pre> blocks
// ============================================================

/**
 * Highlight a single <pre> element with Go syntax highlighting.
 */
function highlightPreElement(pre: HTMLPreElement) {
  if (!shouldHighlight(pre)) return;

  // Remove default padding so highlight.js styling takes over
  pre.style.padding = "0";

  // Wrap bare text in a <code> element if needed
  if (!pre.querySelector("code")) {
    const code = document.createElement("code");
    code.textContent = pre.textContent;
    pre.textContent = "";
    pre.appendChild(code);
  }

  const codeEl = pre.querySelector("code");
  if (!codeEl) return;

  // Ensure it's tagged as Go
  if (!codeEl.classList.contains("language-go")) {
    codeEl.classList.add("language-go");
  }

  try {
    hljs.highlightElement(codeEl);
  } catch (err) {
    console.error(`Failed to highlight element: ${err}`);
  }
}

/**
 * Determine whether a <pre> element should be highlighted.
 * Skips elements already highlighted, or elements containing
 * code blocks tagged for a different language.
 */
function shouldHighlight(pre: HTMLPreElement | null): boolean {
  if (!pre || !pre.textContent || pre.classList.contains("hljs")) return false;
  // ignore Go playground output
  const outputSpan = pre.querySelector("span.Documentation-exampleOutputLabel");
  if (outputSpan) return false;

  const codeEl = pre.querySelector("code");

  if (codeEl) {
    // Skip if already highlighted
    if (codeEl.classList.contains("hljs")) return false;
    // Skip if tagged for a different language
    const hasOtherLanguage = Array.from(codeEl.classList).some(
      (cls) => cls.startsWith("language-") && cls !== "language-go",
    );
    return !hasOtherLanguage;
  }

  return true;
}

/**
 * Highlight all <pre> blocks on the page.
 */
function highlightAll() {
  const elements = document.querySelectorAll<HTMLPreElement>("pre");
  for (const pre of elements) {
    highlightPreElement(pre);
  }
}

function injectTextareaEditors() {
  const elements = document.querySelectorAll<HTMLTextAreaElement>("textarea.code");
  for (const textArea of elements) {
    if (textArea.id) return;
    const id = randomString(20);
    textArea.id = `${id}-textarea`;

    const container = document.createElement("div");
    container.id = `${id}-container`;
    container.style.height = `${textArea.offsetHeight}px`;
    container.style.border = "var(--border)";
    container.style.borderRadius = "var(--border-radius)";
    // disable jump menu inside editor
    container.addEventListener("keydown", (event) => {
      if (event.key === "f") {
        event.stopPropagation();
      }
    });
    textArea.parentElement?.prepend(container);
    textArea.style.display = "none";

    const editor = monaco.editor.create(container, {
      value: textArea.value,
      language: "go",
      theme: "vs-dark",
    });
    editor.onDidChangeModelContent((_) => {
      textArea.value = editor.getValue();
    });
  }
}

// ============================================================
// Entry point
// ============================================================

(async () => {
  if (!(await Settings.isExtensionEnabled())) return;

  // Load the syntax highlighting theme
  await loadTheme();

  // Highlight immediately (for static content)
  highlightAll();

  // Highlight again after a short delay (for dynamically loaded content)
  setTimeout(highlightAll, 2000);
  setTimeout(injectTextareaEditors, 3000);
})();
