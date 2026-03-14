import { Settings } from "@/common/settings";
import { THEME_CDN_BASE, THEME_KEY, THEME_STYLE_ID } from "../common/constants";

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
