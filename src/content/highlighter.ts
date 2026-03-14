import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";

hljs.registerLanguage("go", go);

/**
 * Highlight a single <pre> element with Go syntax highlighting.
 */
function highlightPreElement(pre: HTMLPreElement) {
  if (!shouldHighlight(pre)) return;

  // Remove default padding so highlight.js styling takes over
  pre.style.padding = "0";

  // Wrap text with <code> tag
  if (!pre.querySelector("code")) {
    const code = document.createElement("code");
    code.textContent = pre.textContent;
    pre.textContent = "";
    pre.appendChild(code);
  }

  const codeEl = pre.querySelector("code");
  if (!codeEl) return;
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
  if (pre == null || !pre.textContent) return false;
  if (pre.classList.contains("hljs")) return false;

  // ignore Go playground output
  const outputSpan = pre.querySelector("span.Documentation-exampleOutputLabel");
  if (outputSpan) return false;

  const codeEl = pre.querySelector("code");
  if (codeEl && codeEl.classList.contains("hljs")) return false;
  return true;
}

/**
 * Highlight all <pre> blocks on the page.
 */
export function highlightAll() {
  const elements = document.querySelectorAll<HTMLPreElement>("pre");
  for (const pre of elements) {
    highlightPreElement(pre);
  }
}
