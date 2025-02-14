(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function N(){return`
    <div id="information">
        <span id="input-length">0</span>
        <span>/</span>
        <input id="input-max-length" type="number" value="0" />
        <span>文字</span>
    </div>
    `}const I="red";let h=0,q=!1;function $(e){const t=document.querySelector("#input-length");t.innerHTML=e,e>h?t.style.color=I:t.style.color=""}function x(e){if(!e)return;let t=e.value;q&&(t=t.replace(/\n/g,"")),$(t.length)}function w(e,t){h=t,x(e)}function O(e,t){if(!e)return;const o=document.querySelector("#input-max-length");o.addEventListener("input",()=>{w(e,o.value)}),e.addEventListener("input",()=>{x(e)}),x(e),q=t}function T(e){e&&x(e)}function M(e,t){q=t,T(e)}function E(e){e&&localStorage.setItem("text",e.value)}function R(e){const t=localStorage.getItem("text");t&&e&&e(t)}function B(e,t){e&&(R(t),e.addEventListener("input",()=>{E(e)}))}function D(e){e&&E(e)}function j(){return`
    <p id="line-navigation"></p>
    `}function A(e){if(!e)return;const t=document.querySelector("#line-navigation"),o=n=>{t.innerHTML=n};(()=>{e.addEventListener("input",()=>{const n=e.value.split(`
`),u=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;o(u)}),e.addEventListener("selectionchange",()=>{const n=e.value.split(`
`),u=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;o(u)}),e.addEventListener("touchstart",()=>{const n=e.value.split(`
`),u=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;o(u)})})(),o("行: 1 / 1")}function U(e){if(!e)return;const t=document.querySelector("#line-navigation"),o=e.value.split(`
`),n=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${o.length}`;t.innerHTML=n}function H(e,t){if(!e)return;const o=document.querySelector("#line-navigation"),c=e.value.split(`
`),i=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${c.length} ${t}`;o.innerHTML=i}function J(){return`
        <div id="data-io">
            <input type="file" id="file-input" />
            <button id="file-load-button">ファイル選択</button>
            <button id="file-save-button">保存</button>
            <span id="file-status" contenteditable="true">textfile.txt</span>
            <button id="file-clear-button">リセット</button>
        </div>
    `}function P(e,t){const o=document.querySelector("#file-input"),c=document.querySelector("#file-load-button"),n=document.querySelector("#file-save-button"),i=document.querySelector("#file-status"),u=document.querySelector("#file-clear-button");c.addEventListener("click",()=>{o.click()}),o.addEventListener("change",()=>{const r=o.files[0];if(!r)return;const a=new FileReader;a.onload=()=>{t&&t(a.result)},a.readAsText(r),i.textContent=r.name}),n.addEventListener("click",()=>{const r=new Blob([e.value],{type:"text/plain"}),a=URL.createObjectURL(r),s=document.createElement("a");s.href=a,s.download=i.textContent,s.click(),URL.revokeObjectURL(a)}),u.addEventListener("click",()=>{t&&t(null),i.textContent="textfile.txt"}),i.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),i.blur())}),i.addEventListener("blur",()=>{i.textContent.trim()===""&&(i.textContent="textfile.txt")}),i.addEventListener("drop",r=>{r.preventDefault();const a=r.dataTransfer.files[0];if(!a)return;const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(a),i.textContent=a.name}),document.addEventListener("paste",r=>{const a=r.clipboardData.files[0];if(!a)return;const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(a),i.textContent=a.name}),document.addEventListener("keydown",r=>{r.ctrlKey&&r.key==="o"&&(r.preventDefault(),o.click()),r.ctrlKey&&r.key==="s"&&(r.preventDefault(),n.click()),r.ctrlKey&&r.key==="d"&&(r.preventDefault(),u.click())}),o.style.display="none",i.draggable=!0,i.contentEditable=!0,i.spellcheck=!1,i.textContent="textfile.txt"}function C(){return`
        <div id="json-manager">
            <button id="json-parse-minify-button">JSON</button>
        </div>
    `}function F(e,t,o){document.querySelector("#json-parse-minify-button").addEventListener("click",()=>{try{const n=JSON.parse(e.value);e.value.includes(`
`)?t&&t(JSON.stringify(n)):t&&t(JSON.stringify(n,null,2))}catch(n){o&&o(n)}})}function K(e){return`
        <span style="color: magenta;">${e}</span>
    `}function z(){return`
    <div id="unique-line">
      <button id="unique-line__button">ユニーク</button>
    </div>
  `}function W(e,t){if(!e)return;document.querySelector("#unique-line__button").addEventListener("click",()=>{const n=e.value.split(`
`),i=Array.from(new Set(n));t&&t(i.join(`
`))})}function X(){return`
    <div id="sort-line">
        <button id="sort-line__button">ソート</button>
    </div>
  `}function G(e,t){if(!e)return;document.querySelector("#sort-line__button").addEventListener("click",()=>{const i=e.value.split(`
`).sort();t&&t(i.join(`
`))})}function Q(){return`
    <div id="replace-text">
        <button id="replace-text__button">置換</button>
    </div>
  `}function Y(){return`
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
    `}function Z(e,t){if(!e)return;document.querySelector("#replace-text__button").addEventListener("click",()=>{const u=document.querySelector("#replace-text-dialog");u&&u.showModal()});const c=document.querySelector("#replace-text-dialog");c.addEventListener("close",u=>{const r=u.target.returnValue;r&&t&&t(r)}),document.querySelector("#replace-text-dialog__button").addEventListener("click",()=>{const u=document.querySelector("#replace-text-dialog__input-before"),r=document.querySelector("#replace-text-dialog__input-after"),a=u.value,s=r.value,y=e.value;if(document.querySelector("#replace-text-dialog__case-all").checked){const d=y.replace(new RegExp(a,"g"),s);if(!c)return;c.close(d)}else{const d=y.replace(a,s);if(!c)return;c.close(d)}}),document.querySelector("#replace-text-dialog__cancel").addEventListener("click",()=>{c&&c.close()})}function V(){return`
        <div id="ignore-newline-dialog">
            <button id="ignore-newline-dialog__button">改行無視</button>
        </div>
    `}let b=!1;function ee(){return b}function te(e,t){if(!e)return;const o=document.querySelector("#ignore-newline-dialog__button");o.addEventListener("click",()=>{b?(o.style.backgroundColor="#000000",o.style.color="#7eeea8"):(o.style.backgroundColor="#13bb8e",o.style.color="#dffff1"),b=!b,t&&t(e,b)})}function ne(){return`
        <div id="increment-decrement">
            <button id="increment-decrement__button">ｲﾝｸﾘﾒﾝﾄ･ﾃﾞｸﾘﾒﾝﾄ</button>
        </div>
    `}function ie(){return`
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
    `}function oe(e,t,o,c){if(!e)return;let n=e.value;const i=document.querySelector("#increment-decrement-dialog"),u=document.querySelector("#increment-decrement__button"),r=document.querySelector("#increment-decrement-dialog__increment"),a=document.querySelector("#increment-decrement-dialog__decrement"),s=document.querySelector("#increment-decrement-dialog__close"),y=document.querySelector("#increment-decrement-dialog__reset");u.addEventListener("click",()=>{if(!i)return;i.showModal(),o(),n=e.value;const f=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end");f.value="0",d.value=n.split(`
`).length}),i.addEventListener("close",f=>{o();const d=f.target.returnValue;d&&c&&c(d)}),r.addEventListener("click",()=>{const f=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(f.value),S=Number(d.value);n=n.split(`
`).map((m,g)=>_<=g+1&&g+1<=S?m.replace(/[+-]?\d+/g,L=>String(Number(L)+1)):m).join(`
`),t.value=n}),a.addEventListener("click",()=>{const f=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(f.value),S=Number(d.value);n=n.split(`
`).map((m,g)=>_<=g+1&&g+1<=S?m.replace(/[+-]?\d+/g,L=>String(Number(L)-1)):m).join(`
`),t.value=n}),s.addEventListener("click",()=>{i&&i.close(n)}),y.addEventListener("click",()=>{i&&i.close()})}document.querySelector("#app").innerHTML=`
  <div id="tool-bar">
    <h1 id="title"><a href="https://github.com/tanjoin/text-counter">Text Counter</a></h1>
    ${J()}
    ${C()}
    ${z()}
    ${X()}
    ${Q()}
    ${V()}
    ${ne()}
  </div>
  ${N()}
  <div id="editor-container">
    <textarea id="editor"></textarea>
    <textarea id="dummy-editor" readonly></textarea>
  </div>
  ${Y()}
  ${ie()}
  ${j()}
`;const l=document.querySelector("#editor"),v=document.querySelector("#dummy-editor");function p(e){e===null?(l.focus(),l.select(),document.execCommand("delete")):e&&(l.focus(),l.select(),document.execCommand("insertText",!1,e)),U(l),D(l),T(l)}function re(e){H(l,K(e))}function ce(){v.value=l.value,l.style.display==="none"?(l.style.display="inline-block",v.style.display="none"):(l.style.display="none",v.style.display="block",v.style.display="inline-block")}B(l,p);O(l,ee());A(l);P(l,p);F(l,p,re);W(l,p);G(l,p);Z(l,p);te(l,M);oe(l,v,ce,p);
