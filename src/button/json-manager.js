export function htmlJsonManager() {
    return `
        <div id="json-manager">
            <button id="json-parse-minify-button">JSON</button>
        </div>
    `;
};

export function setupJsonManager(editorElement, onChangeEditorValueListener, onErrorListener) {
    const jsonParseMinifyButton = document.querySelector('#json-parse-minify-button');

    jsonParseMinifyButton.addEventListener('click', () => {
        try {
            const json = JSON.parse(editorElement.value);
            if (editorElement.value.includes('\n')) {
                if (onChangeEditorValueListener) {
                    onChangeEditorValueListener(JSON.stringify(json));
                }
            } else {
                if (onChangeEditorValueListener) {
                    onChangeEditorValueListener(JSON.stringify(json, null, 2));
                }
            }
        } catch (error) {
            if (onErrorListener) {
                onErrorListener(error);
            }          
        }
    });

};