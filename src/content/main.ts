import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";

hljs.registerLanguage("go", go);

// ============================================================
// Settings storage helper (Chrome extension storage)
// ============================================================

const THEME_STYLE_ID = "hljs-theme-style";
const THEME_CDN_BASE = "https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles";
const DEFAULT_THEME = "panda-syntax-dark.min.css";

class Settings {
  static THEME_KEY = "theme";
  static IS_EXTENSION_ENABLED_KEY = "isExtensionEnabled";

  static async getTheme(): Promise<string> {
    const result = await chrome.storage.local.get(this.THEME_KEY);
    if (result.theme) return result.theme as string;
    await this.setTheme(DEFAULT_THEME);
    return DEFAULT_THEME;
  }

  static async setTheme(theme: string) {
    await chrome.storage.local.set({ [this.THEME_KEY]: theme });
  }

  static async isExtensionEnabled(): Promise<boolean> {
    const result = await chrome.storage.local.get(this.IS_EXTENSION_ENABLED_KEY);
    if (typeof result.isExtensionEnabled !== "boolean") {
      await this.setExtensionEnabled(true);
      return true;
    }
    return result.isExtensionEnabled as boolean;
  }

  static async setExtensionEnabled(enabled: boolean) {
    await chrome.storage.local.set({
      [this.IS_EXTENSION_ENABLED_KEY]: enabled,
    });
  }
}

// ============================================================
// Theme management
// ============================================================

async function loadTheme() {
  const theme = await Settings.getTheme();
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
  document.querySelectorAll("pre").forEach((pre) => highlightPreElement(pre as HTMLPreElement));
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
})();
