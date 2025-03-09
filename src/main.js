import "./css/style.css";
import { htmlInformation, setupInformation, updateInformation, updateIgnoreNewline as updateIgnoreNewline } from "./information.js";
import { setupTextManager, updateTextManager } from "./text-manager.js";
import { htmlLineNavigation, setupLineNavigation, updateLineNavigation, updateLineNavigationWithMessage } from "./line-navigation.js";
import { htmlDataIO, setupDataIO } from "./button/data-io.js";
import { htmlJsonManager, setupJsonManager } from "./button/json-manager.js";
import { mazentaColorHtml } from "./color-html.js";
import { htmlUniqueLine, setupUniqueLine } from "./button/unique-line.js";
import { htmlSortLine, setupSortLine } from "./button/sort-line.js";
import { htmlReplaceText, htmlReplaceTextDialog, setupReplaceText } from "./button/replace-text.js";
import { htmlIgnoreNewline, setupIgnoreNewline, isIgnoreNewline } from "./button/ignore-newline.js";
import { htmlIncrementDecrement, htmlIncrementDecrementDialog, setupIncrementDecrement } from "./button/increment-decrement.js";
import { setupTextArea } from "./textarea.js";
import { htmlImageViewer, setupImageViewer, updateImageViewer } from "./image-viewer.js";
import { htmlJekyllPage, setupJekyllPage } from "./button/jekyll-page.js";

document.querySelector("#app").innerHTML = `
  <div id="tool-bar">
    <h1 id="title"><a href="https://github.com/tanjoin/text-counter">Text Counter</a></h1>
    ${htmlDataIO()}
    ${htmlJsonManager()}
    ${htmlUniqueLine()}
    ${htmlSortLine()}
    ${htmlReplaceText()}
    ${htmlIgnoreNewline()}
    ${htmlIncrementDecrement()}
    ${htmlJekyllPage()}
  </div>
  ${htmlInformation()}
  <div id="editor-container">
    <textarea id="editor"></textarea>
    <textarea id="dummy-editor" readonly></textarea>
    ${htmlLineNavigation()}
    ${htmlImageViewer()}
  </div>
  ${htmlReplaceTextDialog()}
  ${htmlIncrementDecrementDialog()}
`;

const editorElement = document.querySelector("#editor");
const dummyEditorElement = document.querySelector("#dummy-editor");

function changeEditorValue(value) {
  // redo / undo がしたいので、document.execCommand を使う
  if (value　=== null) {
    // リセット
    editorElement.focus();
    editorElement.select();
    document.execCommand('delete');
  } else if (value) {
    // テキスト入力
    editorElement.focus();
    editorElement.select();
    document.execCommand('insertText', false, value);
  }
  updateLineNavigation(editorElement);
  updateTextManager(editorElement);
  updateInformation(editorElement);
}

function showError(error) {
  updateLineNavigationWithMessage(editorElement, mazentaColorHtml(error));
}

function switchDummyEditor() {
  dummyEditorElement.value = editorElement.value;
  if (editorElement.style.display === "none") {
    editorElement.style.display = "inline-block";
    dummyEditorElement.style.display = "none";
  } else {
    editorElement.style.display = "none";
    dummyEditorElement.style.display = "block";
    dummyEditorElement.style.display = "inline-block";
  }
}

function loadImage(file) {
  if (!file) {
    return;
  }
  console.log(file.type);
  if (!file.type.includes("image/")) {
    return;
  }
  updateImageViewer(file);
}

setupTextManager(editorElement, changeEditorValue);
setupInformation(editorElement, isIgnoreNewline());
setupLineNavigation(editorElement);
setupDataIO(editorElement, changeEditorValue, loadImage);
setupJsonManager(editorElement, changeEditorValue, showError);
setupUniqueLine(editorElement, changeEditorValue);
setupSortLine(editorElement, changeEditorValue);
setupReplaceText(editorElement, changeEditorValue);
setupIgnoreNewline(editorElement, updateIgnoreNewline);
setupIncrementDecrement(editorElement, dummyEditorElement, switchDummyEditor, changeEditorValue);
setupTextArea();
setupImageViewer();
setupJekyllPage(changeEditorValue);