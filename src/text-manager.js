export function saveText(editorElement) {
  if (!editorElement) return;
  localStorage.setItem('text', editorElement.value);
};

export function loadText(onChangeEditorValueListener) {
  const text = localStorage.getItem('text');
  if (text) {
    if (onChangeEditorValueListener) {
      onChangeEditorValueListener(text);
    }
  }
};

export function setupTextManager(editorElement, onChangeEditorValueListener) {
  if (!editorElement) return;
  loadText(onChangeEditorValueListener);
  editorElement.addEventListener('input', () => {
    saveText(editorElement);
  });
};

export function updateTextManager(editorElement) {
  if (!editorElement) return;
  saveText(editorElement);
};
