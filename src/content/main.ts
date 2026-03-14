import { Settings } from "@/common/settings";
import { highlightAll } from "./highlighter";
import { initThemeManager } from "./theme-manager";
import { injectTextareaEditors } from "./editor";

(async () => {
  if (!(await Settings.isExtensionEnabled())) return;

  // Initialize theme management (loads current theme and listens for changes)
  await initThemeManager();

  // Highlight immediately (for static content)
  highlightAll();

  // Highlight again after a short delay (for dynamically loaded content)
  // Some Go docs pages load content dynamically or via JS, so we re-scan
  setTimeout(highlightAll, 2000);
  
  // Inject Monaco editors into any textareas marked for code
  setTimeout(injectTextareaEditors, 3000);
})();

