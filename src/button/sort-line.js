export function htmlSortLine() {
  return `
    <div id="sort-line">
        <button id="sort-line__button">ソート</button>
    </div>
  `;
};

export function setupSortLine(editorElement, onChangeEditorValueListener) {
  if (!editorElement) return;
  const buttonElement = document.querySelector("#sort-line__button");
  buttonElement.addEventListener("click", () => {
      const text = editorElement.value;
      const lines = text.split("\n");
      const sortedLines = lines.sort();
      if (onChangeEditorValueListener) {
        onChangeEditorValueListener(sortedLines.join("\n"));
      }
  });
};