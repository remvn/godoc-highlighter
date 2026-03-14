import { randomString } from "@/common/utils";
import "monaco-editor/esm/vs/basic-languages/go/go.contribution.js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

monaco.languages.register({ id: "go" });

export function injectTextareaEditors() {
  const elements = document.querySelectorAll<HTMLTextAreaElement>("textarea.code");
  for (const textArea of elements) {
    if (textArea.id) return;
    const id = randomString(20);
    textArea.id = `${id}-textarea`;

    const container = document.createElement("div");
    container.id = `${id}-container`;
    container.style.height = `${textArea.offsetHeight}px`;
    container.style.border = "var(--border)";
    container.style.borderRadius = "var(--border-radius)";
    
    // disable jump menu inside editor
    container.addEventListener("keydown", (event) => {
      if (event.key === "f") {
        event.stopPropagation();
      }
    });
    
    textArea.parentElement?.prepend(container);
    textArea.style.display = "none";

    const editor = monaco.editor.create(container, {
      value: textArea.value,
      language: "go",
      theme: "vs-dark",
    });
    
    editor.onDidChangeModelContent(() => {
      textArea.value = editor.getValue();
    });
  }
}
