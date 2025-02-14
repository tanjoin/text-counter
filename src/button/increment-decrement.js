export function htmlIncrementDecrement() {
    return `
        <div id="increment-decrement">
            <button id="increment-decrement__button">ｲﾝｸﾘﾒﾝﾄ･ﾃﾞｸﾘﾒﾝﾄ</button>
        </div>
    `;
};

export function htmlIncrementDecrementDialog() {
    return `
        <dialog id="increment-decrement-dialog">
            <label>   
                <span>開始位置</span>
                <input id="increment-decrement-dialog__input-start" type="number">
            </label>
            <label>
                <span>終了位置</span>
                <input id="increment-decrement-dialog__input-end" type="number">
            </label>
            <button id="increment-decrement-dialog__increment">+</button>
            <button id="increment-decrement-dialog__decrement">-</button>
            <button id="increment-decrement-dialog__close">完了</button>
            <button id="increment-decrement-dialog__reset">閉じる</button>
        </dialog>
    `;
};

export function setupIncrementDecrement(editorElement, dummyEditorElement, switchDummyEditor, onChangeEditorValueListener) {
    if (!editorElement) return;
    let text = editorElement.value;
    const dialogElement = document.querySelector("#increment-decrement-dialog");
    const buttonElement = document.querySelector("#increment-decrement__button");
    const dialogIncrementButtonElement = document.querySelector("#increment-decrement-dialog__increment");
    const dialogDecrementButtonElement = document.querySelector("#increment-decrement-dialog__decrement");
    const dialogCloseButtonElement = document.querySelector("#increment-decrement-dialog__close");
    const dialogResetButtonElement = document.querySelector("#increment-decrement-dialog__reset");

    buttonElement.addEventListener("click", () => {
        if (!dialogElement) return;
        dialogElement.showModal();
        switchDummyEditor();
        text = editorElement.value;
        const startElement = document.querySelector("#increment-decrement-dialog__input-start");
        const endElement = document.querySelector("#increment-decrement-dialog__input-end");
        startElement.value = '0';
        endElement.value = text.split("\n").length;
    });

    dialogElement.addEventListener("close", (event) => {
        switchDummyEditor();
        const replacedText = event.target.returnValue;
        if (!replacedText) return;
        if (onChangeEditorValueListener) {
            onChangeEditorValueListener(replacedText);
        }
    });

    dialogIncrementButtonElement.addEventListener("click", () => {
        const inputStartElement = document.querySelector("#increment-decrement-dialog__input-start");
        const inputEndElement = document.querySelector("#increment-decrement-dialog__input-end");
        const start = Number(inputStartElement.value);
        const end = Number(inputEndElement.value);
        const replacedText = text.split("\n").map((line, index) => {
            if (start <= index + 1 && index + 1 <= end) {
                return line.replace(/[+-]?\d+/g, (number) => {
                    return String(Number(number) + 1);
                });
            } else {
                return line;
            }
        }).join("\n");
        text = replacedText;
        dummyEditorElement.value = text;
    });

    dialogDecrementButtonElement.addEventListener("click", () => {
        const inputStartElement = document.querySelector("#increment-decrement-dialog__input-start");
        const inputEndElement = document.querySelector("#increment-decrement-dialog__input-end");
        const start = Number(inputStartElement.value);
        const end = Number(inputEndElement.value);
        const replacedText = text.split("\n").map((line, index) => {
            if (start <= index + 1 && index + 1 <= end) {
                return line.replace(/[+-]?\d+/g, (number) => {
                    return String(Number(number) - 1);
                });
            } else {
                return line;
            }
        }).join("\n");
        text = replacedText;
        dummyEditorElement.value = text;
    });

    dialogCloseButtonElement.addEventListener("click", () => {
        if (!dialogElement) return;
        dialogElement.close(text);
    });

    dialogResetButtonElement.addEventListener("click", () => {
        if (!dialogElement) return;
        dialogElement.close();
    });
};