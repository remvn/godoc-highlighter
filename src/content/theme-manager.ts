import { Settings } from "@/common/settings";
import { THEME_KEY, THEME_STYLE_ID } from "../common/constants";
import { AVAILABLE_THEMES } from "@/common/themes";

export async function initThemeManager() {
  await loadTheme();

  // Listen for theme changes from other extension pages
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes[THEME_KEY]) {
      applyTheme(changes[THEME_KEY].newValue as string);
    }
  });
}

async function loadTheme() {
  const theme = await Settings.getTheme();
  applyTheme(theme);
}

function applyTheme(theme: string) {
  let element = document.getElementById(THEME_STYLE_ID) as HTMLStyleElement | null;
  if (!element) {
    element = document.createElement("style");
    element.id = THEME_STYLE_ID;
    document.head.appendChild(element);
  }

  let content = "";
  for (const item of AVAILABLE_THEMES) {
    if (item.name === theme) content = item.content;
  }
  element.textContent = content;
}
