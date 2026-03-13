import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
    action: {
        default_popup: 'src/popup/popup.html',
    },
    content_scripts: [
        {
            js: ['src/content/main.ts'],
            matches: ['https://pkg.go.dev/*'],
        },
    ],
    description:
        'Adds syntax highlighting to Go documentation code blocks with 200+ themes to choose from.',
    icons: {
        128: 'public/icons/icon-128.png',
        16: 'public/icons/icon-16.png',
        48: 'public/icons/icon-48.png',
    },
    manifest_version: 3,
    name: 'Go Docs Syntax Highlighter',
    permissions: ['storage', 'tabs'],
    update_url: 'https://clients2.google.com/service/update2/crx',
    version: '1.0.0',
})
