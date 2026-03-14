// Not possible to load worker due to this bug: https://issues.chromium.org/issues/41098022

import "monaco-editor/esm/vs/editor/editor.api.js";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_workerId: any, _label: string) {
    return new EditorWorker();
  },
};
