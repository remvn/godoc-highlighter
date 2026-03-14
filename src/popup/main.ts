import { Settings } from "@/common/settings";
import { AVAILABLE_THEMES, formatThemeName, type Theme } from "../common/themes";

// ============================================================
// UI helpers
// ============================================================

/**
 * Populate the theme <select> element with all available themes,
 * optionally filtered by a search query.
 * Each option label is a human-readable version of the filename,
 * e.g. "panda-syntax-dark.min.css" → "panda syntax dark (dark)".
 */
async function populateThemeSelector(themes: Theme[], searchQuery: string = "") {
  const selector = document.getElementById("themeSelector") as HTMLSelectElement;
  selector.innerHTML = ""; // Clear existing options

  const filteredThemes = themes.filter((theme) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    const nameLower = theme.name.toLowerCase();
    const typeLower = theme.type.toLowerCase();
    return nameLower.includes(searchLower) || typeLower.includes(searchLower);
  });

  filteredThemes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme.name;

    const label = formatThemeName(theme.name);
    option.textContent = `${label} (${theme.type})`;
    selector.appendChild(option);
  });

  selector.value = await Settings.getTheme();
}



/**
 * Reload all open go.dev tabs so they pick up the new settings.
 * It dynamically retrieves URLs from the manifest content_scripts matches.
 */
async function reloadGoDevTabs() {
  const manifest = chrome.runtime.getManifest();
  const matches = manifest.content_scripts?.[0]?.matches || [];

  if (matches.length > 0) {
    const tabs = await chrome.tabs.query({ url: matches });
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.reload(tab.id);
      }
    });
  }
}

/**
 * Set up the enable/disable toggle slider.
 * - Reads the current enabled state and reflects it in the checkbox.
 * - Disables the theme selector and search input when the extension is turned off.
 * - Reloads go.dev tabs whenever the toggle changes.
 *
 * Note: the CSS transition on the slider is temporarily set to 0s
 * during initialisation so it doesn't animate into its starting state.
 */
async function initToggle() {
  const slider = document.getElementById("toggle-extension-slider") as HTMLInputElement;
  const themeSelector = document.getElementById("themeSelector") as HTMLSelectElement;
  const themeSearch = document.getElementById("themeSearch") as HTMLInputElement;

  // Disable the slide animation while we set the initial state
  document.documentElement.style.setProperty("--slider-transition", "0.0s");

  const isEnabled = await Settings.isExtensionEnabled();
  slider.checked = isEnabled;
  themeSelector.disabled = !isEnabled;
  themeSearch.disabled = !isEnabled;

  slider.addEventListener("change", async (event) => {
    const enabled = (event.target as HTMLInputElement).checked;
    await Settings.setExtensionEnabled(enabled);
    themeSelector.disabled = !enabled;
    themeSearch.disabled = !enabled;
    await reloadGoDevTabs();
  });

  // Re-enable the animation after a short delay so future toggles animate
  setTimeout(() => {
    document.documentElement.style.setProperty("--slider-transition", "0.4s");
  }, 10);
}

function setVersion() {
  const versionElement = document.getElementById("version");
  if (versionElement) {
    const manifest = chrome.runtime.getManifest();
    versionElement.textContent = `v${manifest.version}`;
  }
}

// ============================================================
// Entry point
// ============================================================

(async () => {
  // Populate the dropdown with all available themes
  await populateThemeSelector(AVAILABLE_THEMES);

  // Set the dropdown to the currently saved theme
  const themeSelector = document.getElementById("themeSelector") as HTMLSelectElement;
  const themeSearch = document.getElementById("themeSearch") as HTMLInputElement;

  const savedTheme = await Settings.getTheme();
  themeSelector.value = savedTheme;

  // Search input listener
  themeSearch.addEventListener("input", async (e) => {
    const query = (e.target as HTMLInputElement).value;
    await populateThemeSelector(AVAILABLE_THEMES, query);
  });

  // Save the new theme whenever the user changes the dropdown
  themeSelector.addEventListener("change", () => {
    Settings.setTheme(themeSelector.value);
  });

  // Set up the enable/disable toggle
  await initToggle();

  // Set the version number in the footer
  setVersion();
})();
