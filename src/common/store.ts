async function get(key: string) {
  const obj = await chrome.storage.local.get(key);
  return obj[key];
}

async function set(key: string, value: unknown) {
  await chrome.storage.local.set({
    [key]: value,
  });
}

export const Store = {
  get,
  set,
};
