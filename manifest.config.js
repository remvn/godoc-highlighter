import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "./package.json" with { type: "json" };

export default defineManifest({
  manifest_version: 3,
  name: "Go Docs Syntax Highlighter",
  permissions: ["storage"],
  host_permissions: ["https://pkg.go.dev/*"],
  update_url: "https://clients2.google.com/service/update2/crx",
  version: packageJson.version,
  key: "LS0tLSBCRUdJTiBTU0gyIFBVQkxJQyBLRVkgLS0tLQ0KQ29tbWVudDogInJzYS1rZXktMjAyNjAzMTMiDQpBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDb0ZPVjFNN3duYVlKZWx5RU81QmhIbEhmMWFYMGZ4OHVPDQoycG9ud0VHNUZzRkVvL21WVFd3QklTVWhON0JGR3NVQkJNRXMzWm5COGZBdTJSTEhvYlE3RE40VDRGZmZVVzFRDQpRSXhLbkIyUi9UdFl2dWRkZjVhcExLWHBNZU5QRVlBSFBqa3lzaWdhMEdmWHVBMmZST2FqakhkS3ZUV0ZhaTNtDQpKbVlmcTRrT1JmbTZqdnQ5Y0ttTlVuZUF6YytYNDNYUW5Td2hKVVZwVldsK3d2YVJnS2tnYWF4dzlNYjM4a01DDQpUcCtKZWxNZVJUK0JOQm1hTUZmWWIrNWxKQW9qRVJiWEZNL3R6L3puUUVubncrSzNKaW5Pb1ZneElvWWYrMXdHDQpLaGp4am1RNlhDazM2OEVzd3h4WTVQSndvcFcrbVNjN0tncDFJVStrTlk4a091NFUrbFVQDQotLS0tIEVORCBTU0gyIFBVQkxJQyBLRVkgLS0tLQ0K",
  action: {
    default_popup: "src/popup/popup.html",
  },
  content_scripts: [
    {
      js: ["src/content/main.ts"],
      matches: ["https://pkg.go.dev/*"],
    },
  ],
  description:
    "Adds syntax highlighting to Go documentation code blocks with 200+ themes to choose from.",
  icons: {
    128: "public/icons/icon-128.png",
    16: "public/icons/icon-16.png",
    48: "public/icons/icon-48.png",
  },
  browser_specific_settings: {
    gecko: {
      id: "godoc-highlighter@remvn",
      strict_min_version: "58.0",
      data_collection_permissions: {
        required: ["none"],
      },
    },
  },
});
