export function htmlDataIO() {
    return `
        <div id="data-io">
            <input type="file" id="file-input" />
            <button id="file-load-button">ファイル選択</button>
            <button id="file-save-button">保存</button>
            <span id="file-status" contenteditable="true">textfile.txt</span>
            <button id="file-clear-button">リセット</button>
        </div>
    `;
};

export function setupDataIO(editorElement, onChangeEditorValueListener) {
    const fileInput = document.querySelector('#file-input');
    const fileLoadButton = document.querySelector('#file-load-button');
    const fileSaveButton = document.querySelector('#file-save-button');
    const fileStatus = document.querySelector('#file-status');
    const fileClearButton = document.querySelector('#file-clear-button');

    fileLoadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (onChangeEditorValueListener) {
                onChangeEditorValueListener(reader.result);
            }
        };
        reader.readAsText(file);
        fileStatus.textContent = file.name;
    });

    fileSaveButton.addEventListener('click', () => {
        const blob = new Blob([editorElement.value], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileStatus.textContent;
        a.click();
        URL.revokeObjectURL(url);
    });

    fileClearButton.addEventListener('click', () => {
        if (onChangeEditorValueListener) {
            onChangeEditorValueListener(null);
        }
        fileStatus.textContent = 'textfile.txt';
    });

    fileStatus.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            fileStatus.blur();
        }
    });

    fileStatus.addEventListener('blur', () => {
        if (fileStatus.textContent.trim() === '') {
            fileStatus.textContent = 'textfile.txt';
        }
    });

    fileStatus.addEventListener('drop', (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (onChangeEditorValueListener) {
                onChangeEditorValueListener(reader.result);
            }
        };
        reader.readAsText(file);
        fileStatus.textContent = file.name;
    });

    document.addEventListener('paste', (event) => {
        const file = event.clipboardData.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (onChangeEditorValueListener) {
                onChangeEditorValueListener(reader.result);
            }
        };
        reader.readAsText(file);
        fileStatus.textContent = file.name;
    });

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'o') {
            event.preventDefault();
            fileInput.click();
        }
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            fileSaveButton.click();
        }
        if (event.ctrlKey && event.key === 'd') {
            event.preventDefault();
            fileClearButton.click();
        }
    });

    fileInput.style.display = 'none';
    fileStatus.draggable = true;
    fileStatus.contentEditable = true;
    fileStatus.spellcheck = false;
    fileStatus.textContent = 'textfile.txt';
};