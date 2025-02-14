export function htmlUniqueLine() {
  return `
    <div id="unique-line">
      <button id="unique-line__button">ユニーク</button>
    </div>
  `;
};

export function setupUniqueLine(editorElement, onChangeEditorValueListener) {
  if (!editorElement) return;
  const buttonElement = document.querySelector("#unique-line__button");
  buttonElement.addEventListener("click", () => {
    const text = editorElement.value;
    const lines = text.split("\n");
    const uniqueLines = Array.from(new Set(lines));
    if (onChangeEditorValueListener) {
      onChangeEditorValueListener(uniqueLines.join("\n"));
    }
  });
};