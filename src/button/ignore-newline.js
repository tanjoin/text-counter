export function htmlIgnoreNewline() {
    return `
        <div id="ignore-newline-dialog">
            <button id="ignore-newline-dialog__button">改行無視</button>
        </div>
    `;
};

let _isIgnoreNewline = false;

export function isIgnoreNewline() {
    return _isIgnoreNewline;
};

export function setupIgnoreNewline(editorElement, onChangeIgnoreNewlineListener) {
    if (!editorElement) return;
    const buttonElement = document.querySelector("#ignore-newline-dialog__button");
    buttonElement.addEventListener("click", () => {
        if (_isIgnoreNewline) {
            buttonElement.style.backgroundColor = "#000000";
            buttonElement.style.color = "#7eeea8";
        } else {
            buttonElement.style.backgroundColor = "#13bb8e";
            buttonElement.style.color = "#dffff1";
        }
        _isIgnoreNewline = !_isIgnoreNewline;
        if (onChangeIgnoreNewlineListener) {
            onChangeIgnoreNewlineListener(editorElement, _isIgnoreNewline);
        }
    });
};
