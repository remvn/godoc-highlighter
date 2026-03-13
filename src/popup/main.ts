// ============================================================
// Constants
// ============================================================

const DEFAULT_THEME = "panda-syntax-dark.min.css";

interface Theme {
  name: string;
  type: string;
}

const AVAILABLE_THEMES: Theme[] = [
  // --- Featured / top themes ---
  { name: "androidstudio.min.css",       type: "dark"  },
  { name: "atom-one-dark.min.css",        type: "dark"  },
  { name: "github-dark-dimmed.min.css",   type: "dark"  },
  { name: "panda-syntax-dark.min.css",    type: "dark"  },
  { name: "stackoverflow-dark.min.css",   type: "dark"  },
  { name: "tokyo-night-dark.min.css",     type: "dark"  },

  // --- Standard themes ---
  { name: "a11y-dark.min.css",            type: "dark"  },
  { name: "a11y-light.min.css",           type: "light" },
  { name: "agate.min.css",                type: "dark"  },
  { name: "an-old-hope.min.css",          type: "dark"  },
  { name: "arduino-light.min.css",        type: "light" },
  { name: "arta.min.css",                 type: "dark"  },
  { name: "ascetic.min.css",              type: "light" },
  { name: "atom-one-dark-reasonable.min.css", type: "dark" },
  { name: "atom-one-light.min.css",       type: "light" },
  { name: "brown-paper.min.css",          type: "mid"   },
  { name: "codepen-embed.min.css",        type: "dark"  },
  { name: "color-brewer.min.css",         type: "light" },
  { name: "dark.min.css",                 type: "dark"  },
  { name: "default.min.css",              type: "light" },
  { name: "devibeans.min.css",            type: "dark"  },
  { name: "docco.min.css",                type: "light" },
  { name: "far.min.css",                  type: "dark"  },
  { name: "felipec.min.css",              type: "dark"  },
  { name: "foundation.min.css",           type: "light" },
  { name: "github-dark.min.css",          type: "dark"  },
  { name: "github.min.css",               type: "light" },
  { name: "gml.min.css",                  type: "dark"  },
  { name: "googlecode.min.css",           type: "light" },
  { name: "gradient-dark.min.css",        type: "dark"  },
  { name: "gradient-light.min.css",       type: "light" },
  { name: "grayscale.min.css",            type: "light" },
  { name: "hybrid.min.css",               type: "dark"  },
  { name: "idea.min.css",                 type: "light" },
  { name: "intellij-light.min.css",       type: "light" },
  { name: "ir-black.min.css",             type: "dark"  },
  { name: "isbl-editor-dark.min.css",     type: "dark"  },
  { name: "isbl-editor-light.min.css",    type: "light" },
  { name: "kimbie-dark.min.css",          type: "dark"  },
  { name: "kimbie-light.min.css",         type: "light" },
  { name: "lightfair.min.css",            type: "light" },
  { name: "lioshi.min.css",               type: "dark"  },
  { name: "magula.min.css",               type: "light" },
  { name: "mono-blue.min.css",            type: "light" },
  { name: "monokai.min.css",              type: "dark"  },
  { name: "monokai-sublime.min.css",      type: "dark"  },
  { name: "night-owl.min.css",            type: "dark"  },
  { name: "nnfx-dark.min.css",            type: "dark"  },
  { name: "nnfx-light.min.css",           type: "light" },
  { name: "nord.min.css",                 type: "dark"  },
  { name: "obsidian.min.css",             type: "dark"  },
  { name: "panda-syntax-light.min.css",   type: "light" },
  { name: "paraiso-dark.min.css",         type: "dark"  },
  { name: "paraiso-light.min.css",        type: "light" },
  { name: "pojoaque.min.css",             type: "dark"  },
  { name: "purebasic.min.css",            type: "light" },
  { name: "qtcreator-dark.min.css",       type: "dark"  },
  { name: "qtcreator-light.min.css",      type: "light" },
  { name: "rainbow.min.css",              type: "dark"  },
  { name: "routeros.min.css",             type: "light" },
  { name: "school-book.min.css",          type: "light" },
  { name: "shades-of-purple.min.css",     type: "dark"  },
  { name: "srcery.min.css",               type: "dark"  },
  { name: "stackoverflow-light.min.css",  type: "light" },
  { name: "sunburst.min.css",             type: "dark"  },
  { name: "tokyo-night-light.min.css",    type: "light" },
  { name: "tomorrow-night-blue.min.css",  type: "dark"  },
  { name: "tomorrow-night-bright.min.css",type: "dark"  },
  { name: "vs2015.min.css",               type: "dark"  },
  { name: "vs.min.css",                   type: "light" },
  { name: "xcode.min.css",                type: "light" },
  { name: "xt256.min.css",                type: "dark"  },

  // --- Base16 themes ---
  { name: "base16/3024.min.css",                              type: "dark"  },
  { name: "base16/apathy.min.css",                            type: "dark"  },
  { name: "base16/apprentice.min.css",                        type: "dark"  },
  { name: "base16/ashes.min.css",                             type: "dark"  },
  { name: "base16/atelier-cave-light.min.css",                type: "light" },
  { name: "base16/atelier-cave.min.css",                      type: "dark"  },
  { name: "base16/atelier-dune-light.min.css",                type: "light" },
  { name: "base16/atelier-dune.min.css",                      type: "dark"  },
  { name: "base16/atelier-estuary-light.min.css",             type: "light" },
  { name: "base16/atelier-estuary.min.css",                   type: "dark"  },
  { name: "base16/atelier-forest-light.min.css",              type: "light" },
  { name: "base16/atelier-forest.min.css",                    type: "dark"  },
  { name: "base16/atelier-heath-light.min.css",               type: "light" },
  { name: "base16/atelier-heath.min.css",                     type: "dark"  },
  { name: "base16/atelier-lakeside-light.min.css",            type: "light" },
  { name: "base16/atelier-lakeside.min.css",                  type: "dark"  },
  { name: "base16/atelier-plateau-light.min.css",             type: "light" },
  { name: "base16/atelier-plateau.min.css",                   type: "dark"  },
  { name: "base16/atelier-savanna-light.min.css",             type: "light" },
  { name: "base16/atelier-savanna.min.css",                   type: "dark"  },
  { name: "base16/atelier-seaside-light.min.css",             type: "light" },
  { name: "base16/atelier-seaside.min.css",                   type: "dark"  },
  { name: "base16/atelier-sulphurpool-light.min.css",         type: "light" },
  { name: "base16/atelier-sulphurpool.min.css",               type: "dark"  },
  { name: "base16/atlas.min.css",                             type: "dark"  },
  { name: "base16/bespin.min.css",                            type: "dark"  },
  { name: "base16/black-metal-bathory.min.css",               type: "dark"  },
  { name: "base16/black-metal-burzum.min.css",                type: "dark"  },
  { name: "base16/black-metal-dark-funeral.min.css",          type: "dark"  },
  { name: "base16/black-metal-gorgoroth.min.css",             type: "dark"  },
  { name: "base16/black-metal-immortal.min.css",              type: "dark"  },
  { name: "base16/black-metal-khold.min.css",                 type: "dark"  },
  { name: "base16/black-metal-marduk.min.css",                type: "dark"  },
  { name: "base16/black-metal-mayhem.min.css",                type: "dark"  },
  { name: "base16/black-metal.min.css",                       type: "dark"  },
  { name: "base16/black-metal-nile.min.css",                  type: "dark"  },
  { name: "base16/black-metal-venom.min.css",                 type: "dark"  },
  { name: "base16/brewer.min.css",                            type: "dark"  },
  { name: "base16/bright.min.css",                            type: "dark"  },
  { name: "base16/brogrammer.min.css",                        type: "dark"  },
  { name: "base16/brush-trees-dark.min.css",                  type: "dark"  },
  { name: "base16/brush-trees.min.css",                       type: "dark"  },
  { name: "base16/chalk.min.css",                             type: "dark"  },
  { name: "base16/circus.min.css",                            type: "dark"  },
  { name: "base16/classic-dark.min.css",                      type: "dark"  },
  { name: "base16/classic-light.min.css",                     type: "light" },
  { name: "base16/codeschool.min.css",                        type: "dark"  },
  { name: "base16/colors.min.css",                            type: "dark"  },
  { name: "base16/cupcake.min.css",                           type: "light" },
  { name: "base16/cupertino.min.css",                         type: "light" },
  { name: "base16/danqing.min.css",                           type: "dark"  },
  { name: "base16/darcula.min.css",                           type: "dark"  },
  { name: "base16/darkmoss.min.css",                          type: "dark"  },
  { name: "base16/darktooth.min.css",                         type: "dark"  },
  { name: "base16/dark-violet.min.css",                       type: "dark"  },
  { name: "base16/decaf.min.css",                             type: "dark"  },
  { name: "base16/default-dark.min.css",                      type: "dark"  },
  { name: "base16/default-light.min.css",                     type: "light" },
  { name: "base16/dirtysea.min.css",                          type: "light" },
  { name: "base16/dracula.min.css",                           type: "dark"  },
  { name: "base16/edge-dark.min.css",                         type: "dark"  },
  { name: "base16/edge-light.min.css",                        type: "light" },
  { name: "base16/eighties.min.css",                          type: "dark"  },
  { name: "base16/embers.min.css",                            type: "dark"  },
  { name: "base16/equilibrium-dark.min.css",                  type: "dark"  },
  { name: "base16/equilibrium-gray-dark.min.css",             type: "dark"  },
  { name: "base16/equilibrium-gray-light.min.css",            type: "light" },
  { name: "base16/equilibrium-light.min.css",                 type: "light" },
  { name: "base16/espresso.min.css",                          type: "dark"  },
  { name: "base16/eva-dim.min.css",                           type: "dark"  },
  { name: "base16/eva.min.css",                               type: "dark"  },
  { name: "base16/flat.min.css",                              type: "dark"  },
  { name: "base16/framer.min.css",                            type: "dark"  },
  { name: "base16/fruit-soda.min.css",                        type: "light" },
  { name: "base16/gigavolt.min.css",                          type: "dark"  },
  { name: "base16/github.min.css",                            type: "light" },
  { name: "base16/google-dark.min.css",                       type: "dark"  },
  { name: "base16/google-light.min.css",                      type: "light" },
  { name: "base16/grayscale-dark.min.css",                    type: "dark"  },
  { name: "base16/grayscale-light.min.css",                   type: "light" },
  { name: "base16/green-screen.min.css",                      type: "dark"  },
  { name: "base16/gruvbox-dark-hard.min.css",                 type: "dark"  },
  { name: "base16/gruvbox-dark-medium.min.css",               type: "dark"  },
  { name: "base16/gruvbox-dark-pale.min.css",                 type: "dark"  },
  { name: "base16/gruvbox-dark-soft.min.css",                 type: "dark"  },
  { name: "base16/gruvbox-light-hard.min.css",                type: "light" },
  { name: "base16/gruvbox-light-medium.min.css",              type: "light" },
  { name: "base16/gruvbox-light-soft.min.css",                type: "light" },
  { name: "base16/hardcore.min.css",                          type: "dark"  },
  { name: "base16/harmonic16-dark.min.css",                   type: "dark"  },
  { name: "base16/harmonic16-light.min.css",                  type: "light" },
  { name: "base16/heetch-dark.min.css",                       type: "dark"  },
  { name: "base16/heetch-light.min.css",                      type: "light" },
  { name: "base16/helios.min.css",                            type: "dark"  },
  { name: "base16/hopscotch.min.css",                         type: "dark"  },
  { name: "base16/horizon-dark.min.css",                      type: "dark"  },
  { name: "base16/horizon-light.min.css",                     type: "light" },
  { name: "base16/humanoid-dark.min.css",                     type: "dark"  },
  { name: "base16/humanoid-light.min.css",                    type: "light" },
  { name: "base16/ia-dark.min.css",                           type: "dark"  },
  { name: "base16/ia-light.min.css",                          type: "light" },
  { name: "base16/icy-dark.min.css",                          type: "dark"  },
  { name: "base16/ir-black.min.css",                          type: "dark"  },
  { name: "base16/isotope.min.css",                           type: "dark"  },
  { name: "base16/kimber.min.css",                            type: "dark"  },
  { name: "base16/london-tube.min.css",                       type: "dark"  },
  { name: "base16/macintosh.min.css",                         type: "dark"  },
  { name: "base16/marrakesh.min.css",                         type: "dark"  },
  { name: "base16/material-darker.min.css",                   type: "dark"  },
  { name: "base16/material-lighter.min.css",                  type: "light" },
  { name: "base16/material.min.css",                          type: "dark"  },
  { name: "base16/material-palenight.min.css",                type: "dark"  },
  { name: "base16/material-vivid.min.css",                    type: "dark"  },
  { name: "base16/materia.min.css",                           type: "dark"  },
  { name: "base16/mellow-purple.min.css",                     type: "dark"  },
  { name: "base16/mexico-light.min.css",                      type: "light" },
  { name: "base16/mocha.min.css",                             type: "dark"  },
  { name: "base16/monokai.min.css",                           type: "dark"  },
  { name: "base16/nebula.min.css",                            type: "dark"  },
  { name: "base16/nord.min.css",                              type: "dark"  },
  { name: "base16/nova.min.css",                              type: "dark"  },
  { name: "base16/oceanicnext.min.css",                       type: "dark"  },
  { name: "base16/ocean.min.css",                             type: "dark"  },
  { name: "base16/onedark.min.css",                           type: "dark"  },
  { name: "base16/one-light.min.css",                         type: "light" },
  { name: "base16/outrun-dark.min.css",                       type: "dark"  },
  { name: "base16/papercolor-dark.min.css",                   type: "dark"  },
  { name: "base16/papercolor-light.min.css",                  type: "light" },
  { name: "base16/paraiso.min.css",                           type: "dark"  },
  { name: "base16/pasque.min.css",                            type: "dark"  },
  { name: "base16/phd.min.css",                               type: "dark"  },
  { name: "base16/pico.min.css",                              type: "dark"  },
  { name: "base16/pop.min.css",                               type: "dark"  },
  { name: "base16/porple.min.css",                            type: "dark"  },
  { name: "base16/qualia.min.css",                            type: "dark"  },
  { name: "base16/railscasts.min.css",                        type: "dark"  },
  { name: "base16/rebecca.min.css",                           type: "dark"  },
  { name: "base16/ros-pine-dawn.min.css",                     type: "light" },
  { name: "base16/ros-pine.min.css",                          type: "dark"  },
  { name: "base16/ros-pine-moon.min.css",                     type: "dark"  },
  { name: "base16/sagelight.min.css",                         type: "light" },
  { name: "base16/sandcastle.min.css",                        type: "dark"  },
  { name: "base16/seti-ui.min.css",                           type: "dark"  },
  { name: "base16/shapeshifter.min.css",                      type: "light" },
  { name: "base16/silk-dark.min.css",                         type: "dark"  },
  { name: "base16/silk-light.min.css",                        type: "light" },
  { name: "base16/snazzy.min.css",                            type: "dark"  },
  { name: "base16/solar-flare-light.min.css",                 type: "light" },
  { name: "base16/solar-flare.min.css",                       type: "dark"  },
  { name: "base16/solarized-dark.min.css",                    type: "dark"  },
  { name: "base16/solarized-light.min.css",                   type: "light" },
  { name: "base16/spacemacs.min.css",                         type: "dark"  },
  { name: "base16/summercamp.min.css",                        type: "dark"  },
  { name: "base16/summerfruit-dark.min.css",                  type: "dark"  },
  { name: "base16/summerfruit-light.min.css",                 type: "light" },
  { name: "base16/synth-midnight-terminal-dark.min.css",      type: "dark"  },
  { name: "base16/synth-midnight-terminal-light.min.css",     type: "light" },
  { name: "base16/tango.min.css",                             type: "dark"  },
  { name: "base16/tender.min.css",                            type: "dark"  },
  { name: "base16/tomorrow.min.css",                          type: "light" },
  { name: "base16/tomorrow-night.min.css",                    type: "dark"  },
  { name: "base16/twilight.min.css",                          type: "dark"  },
  { name: "base16/unikitty-dark.min.css",                     type: "dark"  },
  { name: "base16/unikitty-light.min.css",                    type: "light" },
  { name: "base16/vulcan.min.css",                            type: "dark"  },
  { name: "base16/windows-10-light.min.css",                  type: "light" },
  { name: "base16/windows-10.min.css",                        type: "dark"  },
  { name: "base16/windows-95-light.min.css",                  type: "light" },
  { name: "base16/windows-95.min.css",                        type: "dark"  },
  { name: "base16/windows-high-contrast-light.min.css",       type: "light" },
  { name: "base16/windows-high-contrast.min.css",             type: "dark"  },
  { name: "base16/windows-nt-light.min.css",                  type: "light" },
  { name: "base16/windows-nt.min.css",                        type: "dark"  },
  { name: "base16/woodland.min.css",                          type: "dark"  },
  { name: "base16/xcode-dusk.min.css",                        type: "dark"  },
  { name: "base16/zenburn.min.css",                           type: "dark"  },
];

// ============================================================
// Settings storage helper (Chrome extension storage)
// ============================================================

class Settings {
  static THEME_KEY = "theme";
  static IS_EXTENSION_ENABLED_KEY = "isExtensionEnabled";

  static async getTheme(): Promise<string> {
    const result = await chrome.storage.local.get(this.THEME_KEY);
    if (result.theme) return result.theme as string;
    // No theme saved yet — set and return the default
    await this.setTheme(DEFAULT_THEME);
    return DEFAULT_THEME;
  }

  static async setTheme(theme: string): Promise<void> {
    await chrome.storage.local.set({ [this.THEME_KEY]: theme });
  }

  static async isExtensionEnabled(): Promise<boolean> {
    const result = await chrome.storage.local.get(this.IS_EXTENSION_ENABLED_KEY);
    if (typeof result.isExtensionEnabled !== "boolean") {
      // No value saved yet — default to enabled
      await this.setExtensionEnabled(true);
      return true;
    }
    return result.isExtensionEnabled as boolean;
  }

  static async setExtensionEnabled(enabled: boolean): Promise<void> {
    await chrome.storage.local.set({ [this.IS_EXTENSION_ENABLED_KEY]: enabled });
  }
}

// ============================================================
// UI helpers
// ============================================================

/**
 * Populate the theme <select> element with all available themes.
 * Each option label is a human-readable version of the filename,
 * e.g. "panda-syntax-dark.min.css" → "panda syntax dark (dark)".
 */
function populateThemeSelector(themes: Theme[]): void {
  const selector = document.getElementById("themeSelector") as HTMLSelectElement;

  themes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme.name;

    // Strip ".css" suffix, replace hyphens with spaces, then strip ".min"
    let label = theme.name.replace(".css", "").replaceAll("-", " ");
    if (label.endsWith(".min")) label = label.slice(0, label.length - 4);

    option.textContent = `${label} (${theme.type})`;
    selector.appendChild(option);
  });
}

/**
 * Returns true if the given URL is on go.dev.
 */
function isGoDev(url: string): boolean {
  return url.includes("go.dev");
}

/**
 * Reload all open go.dev tabs so they pick up the new settings.
 */
async function reloadGoDevTabs(): Promise<void> {
  const tabs = await chrome.tabs.query({});
  tabs.forEach((tab) => {
    if (tab.id && tab.url && isGoDev(tab.url)) {
      chrome.tabs.reload(tab.id);
    }
  });
}

/**
 * Set up the enable/disable toggle slider.
 * - Reads the current enabled state and reflects it in the checkbox.
 * - Disables the theme selector when the extension is turned off.
 * - Reloads go.dev tabs whenever the toggle changes.
 *
 * Note: the CSS transition on the slider is temporarily set to 0s
 * during initialisation so it doesn't animate into its starting state.
 */
async function initToggle(): Promise<void> {
  const slider = document.getElementById("toggle-extension-slider") as HTMLInputElement;
  const themeSelector = document.getElementById("themeSelector") as HTMLSelectElement;

  // Disable the slide animation while we set the initial state
  document.documentElement.style.setProperty("--slider-transition", "0.0s");

  const isEnabled = await Settings.isExtensionEnabled();
  slider.checked = isEnabled;
  themeSelector.disabled = !isEnabled;

  slider.addEventListener("change", async (event) => {
    const enabled = (event.target as HTMLInputElement).checked;
    await Settings.setExtensionEnabled(enabled);
    themeSelector.disabled = !enabled;
    await reloadGoDevTabs();
  });

  // Re-enable the animation after a short delay so future toggles animate
  setTimeout(() => {
    document.documentElement.style.setProperty("--slider-transition", "0.4s");
  }, 10);
}

// ============================================================
// Entry point
// ============================================================

(async () => {
  // Populate the dropdown with a shallow copy of the themes array
  populateThemeSelector(AVAILABLE_THEMES.map((theme) => ({ ...theme })));

  // Set the dropdown to the currently saved theme
  const themeSelector = document.getElementById("themeSelector") as HTMLSelectElement;
  const savedTheme = await Settings.getTheme();
  themeSelector.value = savedTheme;

  // Save the new theme whenever the user changes the dropdown
  themeSelector.addEventListener("change", () => {
    Settings.setTheme(themeSelector.value);
  });

  // Set up the enable/disable toggle
  await initToggle();
})();
