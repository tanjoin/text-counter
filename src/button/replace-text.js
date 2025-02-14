export function htmlReplaceText() {
  return `
    <div id="replace-text">
        <button id="replace-text__button">置換</button>
    </div>
  `;
};

export function htmlReplaceTextDialog() {
    return `
        <dialog id="replace-text-dialog">
            <input id="replace-text-dialog__input-before" type="text">
            <input id="replace-text-dialog__input-after" type="text">
            <label for="replace-text-dialog__case-all">
              <input id="replace-text-dialog__case-all" type="checkbox">
              <span>一括</span>
            </label>
            <button id="replace-text-dialog__button">置換</button>
            <button id="replace-text-dialog__cancel">閉じる</button>
        </dialog>
    `;
}

export function setupReplaceText(editorElement, onChangeEditorValueListener) {
    if (!editorElement) return;
    const buttonElement = document.querySelector("#replace-text__button");
    buttonElement.addEventListener("click", () => {
        // ダイアログを出して、置換する文字列を入力してもらう
        const dialog = document.querySelector("#replace-text-dialog");
        if (!dialog) return;
        dialog.showModal();
    });
    const dialogElement = document.querySelector("#replace-text-dialog");
    dialogElement.addEventListener("close", (event) => {
        const replacedText = event.target.returnValue;
        if (!replacedText) return;
        if (onChangeEditorValueListener) {
            onChangeEditorValueListener(replacedText);
        }
    });
    const dialogReplaceButtonElement = document.querySelector("#replace-text-dialog__button");
    dialogReplaceButtonElement.addEventListener("click", () => {
        const inputBeforeElement = document.querySelector("#replace-text-dialog__input-before");
        const inputAfterElement = document.querySelector("#replace-text-dialog__input-after");    
        const beforeText = inputBeforeElement.value;
        const afterText = inputAfterElement.value;
        const text = editorElement.value;
        const caseAllElement = document.querySelector("#replace-text-dialog__case-all");
        if (caseAllElement.checked) {
            const replacedText = text.replace(new RegExp(beforeText, "g"), afterText);
            if (!dialogElement) return;
            dialogElement.close(replacedText);
        } else {
            const replacedText = text.replace(beforeText, afterText);
            if (!dialogElement) return;
            dialogElement.close(replacedText);
        }
    });
    const dialogCancelButtonElement = document.querySelector("#replace-text-dialog__cancel");
    dialogCancelButtonElement.addEventListener("click", () => {
        if (!dialogElement) return;
        dialogElement.close();
    });
};