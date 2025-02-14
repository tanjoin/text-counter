export function htmlInformation() {
    return `
    <div id="information">
        <span id="input-length">0</span>
        <span>/</span>
        <input id="input-max-length" type="number" value="0" />
        <span>文字</span>
    </div>
    `
};

const COUNT_OVER_TEXT_COLOR = 'red';
let _maxLength = 0;
let _isIgnoreNewline = false;

function setInputLength(length) {
    const inputLengthElement = document.querySelector('#input-length');
    inputLengthElement.innerHTML = length;
    // 最大文字数を超えていれば赤くする
    if (length > _maxLength) {
        inputLengthElement.style.color = COUNT_OVER_TEXT_COLOR;
    } else {
        inputLengthElement.style.color = '';
    }
};

function updateEditorElement(editorElement) {
    if (!editorElement) return;
    let text = editorElement.value;
    if (_isIgnoreNewline) {
        text = text.replace(/\n/g, '');
    }
    setInputLength(text.length);
}

function setInputMaxLength(editorElement, length) {
    _maxLength = length;
    updateEditorElement(editorElement);
};

export function setupInformation(editorElement, isIgnoreNewline) {
    if (!editorElement) return; 
    const inputMaxLengthElement = document.querySelector('#input-max-length');
    inputMaxLengthElement.addEventListener('input', () => {
        setInputMaxLength(editorElement, inputMaxLengthElement.value);
    });
    editorElement.addEventListener('input', () => {
        updateEditorElement(editorElement);
    });
    updateEditorElement(editorElement);
    _isIgnoreNewline = isIgnoreNewline;
};

export function updateInformation(editorElement) {
    if (!editorElement) return;
    updateEditorElement(editorElement);
};

export function updateIgnoreNewline(editorElement, isIgnoreNewline) {
    _isIgnoreNewline = isIgnoreNewline;
    updateInformation(editorElement);
};
