export function htmlLineNavigation() {
    return `
    <p id="line-navigation"></p>
    `
};

export function setupLineNavigation(editorElement) {
    if (!editorElement) return;
    const lineNavigationElement = document.querySelector('#line-navigation');
    const setLineNavigation = (lineInformationText) => {
        lineNavigationElement.innerHTML = lineInformationText;
    }
    const setEditorElementEventListener = () => {
        editorElement.addEventListener('input', () => {
            const lines = editorElement.value.split('\n');
            const currentLine = editorElement.value.substr(0, editorElement.selectionStart).split('\n').length;
            const lineInformationText = `行: ${currentLine} / ${lines.length}`;
            setLineNavigation(lineInformationText);
        });
        editorElement.addEventListener('selectionchange', () => {
            const lines = editorElement.value.split('\n');
            const currentLine = editorElement.value.substr(0, editorElement.selectionStart).split('\n').length;
            const lineInformationText = `行: ${currentLine} / ${lines.length}`;
            setLineNavigation(lineInformationText);
        });
        editorElement.addEventListener('touchstart', () => {
            const lines = editorElement.value.split('\n');
            const currentLine = editorElement.value.substr(0, editorElement.selectionStart).split('\n').length;
            const lineInformationText = `行: ${currentLine} / ${lines.length}`;
            setLineNavigation(lineInformationText);
        });
    }
    setEditorElementEventListener();
    setLineNavigation('行: 1 / 1');
};

export function updateLineNavigation(editorElement) {
    if (!editorElement) return;
    const lineNavigationElement = document.querySelector('#line-navigation');
    const lines = editorElement.value.split('\n');
    const currentLine = editorElement.value.substr(0, editorElement.selectionStart).split('\n').length;
    const lineInformationText = `行: ${currentLine} / ${lines.length}`;
    lineNavigationElement.innerHTML = lineInformationText;
};

export function updateLineNavigationWithMessage(editorElement, message) {
    if (!editorElement) return;
    const lineNavigationElement = document.querySelector('#line-navigation');
    const lines = editorElement.value.split('\n');
    const currentLine = editorElement.value.substr(0, editorElement.selectionStart).split('\n').length;
    const lineInformationText = `行: ${currentLine} / ${lines.length} ${message}`;
    lineNavigationElement.innerHTML = lineInformationText;
};