export class Settings {
  static THEME_KEY = "theme";
  static IS_EXTENSION_ENABLED_KEY = "isExtensionEnabled";

  static async getTheme(defaultTheme: string): Promise<string> {
    const result = await chrome.storage.local.get(this.THEME_KEY);
    if (result.theme) return result.theme as string;
    await this.setTheme(defaultTheme);
    return defaultTheme;
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
