import { DEFAULT_THEME, IS_EXTENSION_ENABLED_KEY, THEME_KEY } from "./constants";
import { Store } from "./store";

async function getTheme(): Promise<string> {
  let theme = await Store.get(THEME_KEY);
  if (theme == null) {
    theme = DEFAULT_THEME;
    await Store.set(THEME_KEY, theme);
  }
  return theme as string;
}

async function setTheme(theme: string) {
  await Store.set(THEME_KEY, theme);
}

async function isExtensionEnabled(): Promise<boolean> {
  let value = await Store.get(IS_EXTENSION_ENABLED_KEY);
  if (value == null) {
    value = true;
    await Store.set(IS_EXTENSION_ENABLED_KEY, value);
  }
  return value as boolean;
}

async function setExtensionEnabled(isEnabled: boolean) {
  await Store.set(IS_EXTENSION_ENABLED_KEY, isEnabled);
}

export const Settings = {
  getTheme,
  setTheme,
  isExtensionEnabled,
  setExtensionEnabled,
};
