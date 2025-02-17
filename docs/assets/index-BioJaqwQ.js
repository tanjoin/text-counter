(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function N(){return`
    <div id="information">
        <span id="input-length">0</span>
        <span>/</span>
        <input id="input-max-length" type="number" value="0" />
        <span>文字</span>
    </div>
    `}const I="red";let w=0,q=!1;function $(e){const t=document.querySelector("#input-length");t.innerHTML=e,e>w?t.style.color=I:t.style.color=""}function x(e){if(!e)return;let t=e.value;q&&(t=t.replace(/\n/g,"")),$(t.length)}function D(e,t){w=t,x(e)}function R(e,t){if(!e)return;const n=document.querySelector("#input-max-length");n.addEventListener("input",()=>{D(e,n.value)}),e.addEventListener("input",()=>{x(e)}),x(e),q=t}function T(e){e&&x(e)}function O(e,t){q=t,T(e)}function E(e){e&&localStorage.setItem("text",e.value)}function M(e){const t=localStorage.getItem("text");t&&e&&e(t)}function A(e,t){e&&(M(t),e.addEventListener("input",()=>{E(e)}))}function B(e){e&&E(e)}function j(){return`
    <p id="line-navigation"></p>
    `}function H(e){if(!e)return;const t=document.querySelector("#line-navigation"),n=i=>{t.innerHTML=i};(()=>{e.addEventListener("input",()=>{const i=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(r)}),e.addEventListener("selectionchange",()=>{const i=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(r)}),e.addEventListener("touchstart",()=>{const i=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(r)})})(),n("行: 1 / 1")}function F(e){if(!e)return;const t=document.querySelector("#line-navigation"),n=e.value.split(`
`),i=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;t.innerHTML=i}function U(e,t){if(!e)return;const n=document.querySelector("#line-navigation"),c=e.value.split(`
`),o=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${c.length} ${t}`;n.innerHTML=o}function C(){return`
        <div id="data-io">
            <input type="file" id="file-input" />
            <button id="file-load-button">ファイル選択</button>
            <button id="file-save-button">保存</button>
            <span id="file-status" contenteditable="true">textfile.txt</span>
            <button id="file-clear-button">リセット</button>
        </div>
    `}function J(e,t,n){const c=document.querySelector("#file-input"),i=document.querySelector("#file-load-button"),o=document.querySelector("#file-save-button"),r=document.querySelector("#file-status"),f=document.querySelector("#file-clear-button");i.addEventListener("click",()=>{c.click()}),c.addEventListener("change",()=>{const l=c.files[0];if(!l)return;if(l.type.includes("image/")){n&&n(l);return}const u=new FileReader;u.onload=()=>{t&&t(u.result)},u.readAsText(l),r.textContent=l.name}),o.addEventListener("click",()=>{const l=new Blob([e.value],{type:"text/plain"}),u=URL.createObjectURL(l),s=document.createElement("a");s.href=u,s.download=r.textContent,s.click(),URL.revokeObjectURL(u)}),f.addEventListener("click",()=>{t&&t(null),r.textContent="textfile.txt"}),r.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),r.blur())}),r.addEventListener("blur",()=>{r.textContent.trim()===""&&(r.textContent="textfile.txt")}),r.addEventListener("drop",l=>{l.preventDefault();const u=l.dataTransfer.files[0];if(!u)return;if(u.type.includes("image/")){n&&n(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),r.textContent=u.name}),document.addEventListener("paste",l=>{l.clipboardData.types[1]==="Files"&&n&&n(l.clipboardData.items[1].getAsFile());const u=l.clipboardData.items[0].getAsFile();if(!u)return;if(u.type.includes("image/")){console.log("image"),n&&n(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),r.textContent=u.name}),document.addEventListener("keydown",l=>{l.ctrlKey&&l.key==="o"&&(l.preventDefault(),c.click()),l.ctrlKey&&l.key==="s"&&(l.preventDefault(),o.click()),l.ctrlKey&&l.key==="d"&&(l.preventDefault(),f.click())}),c.style.display="none",r.draggable=!0,r.contentEditable=!0,r.spellcheck=!1,r.textContent="textfile.txt"}function P(){return`
        <div id="json-manager">
            <button id="json-parse-minify-button">JSON</button>
        </div>
    `}function K(e,t,n){document.querySelector("#json-parse-minify-button").addEventListener("click",()=>{try{const i=JSON.parse(e.value);e.value.includes(`
`)?t&&t(JSON.stringify(i)):t&&t(JSON.stringify(i,null,2))}catch(i){n&&n(i)}})}function z(e){return`
        <span style="color: magenta;">${e}</span>
    `}function W(){return`
    <div id="unique-line">
      <button id="unique-line__button">ユニーク</button>
    </div>
  `}function X(e,t){if(!e)return;document.querySelector("#unique-line__button").addEventListener("click",()=>{const i=e.value.split(`
`),o=Array.from(new Set(i));t&&t(o.join(`
`))})}function G(){return`
    <div id="sort-line">
        <button id="sort-line__button">ソート</button>
    </div>
  `}function Q(e,t){if(!e)return;document.querySelector("#sort-line__button").addEventListener("click",()=>{const o=e.value.split(`
`).sort();t&&t(o.join(`
`))})}function Y(){return`
    <div id="replace-text">
        <button id="replace-text__button">置換</button>
    </div>
  `}function Z(){return`
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
    `}function V(e,t){if(!e)return;document.querySelector("#replace-text__button").addEventListener("click",()=>{const r=document.querySelector("#replace-text-dialog");r&&r.showModal()});const c=document.querySelector("#replace-text-dialog");c.addEventListener("close",r=>{const f=r.target.returnValue;f&&t&&t(f)}),document.querySelector("#replace-text-dialog__button").addEventListener("click",()=>{const r=document.querySelector("#replace-text-dialog__input-before"),f=document.querySelector("#replace-text-dialog__input-after"),l=r.value,u=f.value,s=e.value;if(document.querySelector("#replace-text-dialog__case-all").checked){const d=s.replace(new RegExp(l,"g"),u);if(!c)return;c.close(d)}else{const d=s.replace(l,u);if(!c)return;c.close(d)}}),document.querySelector("#replace-text-dialog__cancel").addEventListener("click",()=>{c&&c.close()})}function ee(){return`
        <div id="ignore-newline-dialog">
            <button id="ignore-newline-dialog__button">改行無視</button>
        </div>
    `}let b=!1;function te(){return b}function ne(e,t){if(!e)return;const n=document.querySelector("#ignore-newline-dialog__button");n.addEventListener("click",()=>{b?(n.style.backgroundColor="#000000",n.style.color="#7eeea8"):(n.style.backgroundColor="#13bb8e",n.style.color="#dffff1"),b=!b,t&&t(e,b)})}function ie(){return`
        <div id="increment-decrement">
            <button id="increment-decrement__button">ｲﾝｸﾘﾒﾝﾄ･ﾃﾞｸﾘﾒﾝﾄ</button>
        </div>
    `}function re(){return`
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
    `}function oe(e,t,n,c){if(!e)return;let i=e.value;const o=document.querySelector("#increment-decrement-dialog"),r=document.querySelector("#increment-decrement__button"),f=document.querySelector("#increment-decrement-dialog__increment"),l=document.querySelector("#increment-decrement-dialog__decrement"),u=document.querySelector("#increment-decrement-dialog__close"),s=document.querySelector("#increment-decrement-dialog__reset");r.addEventListener("click",()=>{if(!o)return;o.showModal(),n(),i=e.value;const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end");m.value="0",d.value=i.split(`
`).length}),o.addEventListener("close",m=>{n();const d=m.target.returnValue;d&&c&&c(d)}),f.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),S=Number(d.value);i=i.split(`
`).map((g,y)=>_<=y+1&&y+1<=S?g.replace(/[+-]?\d+/g,h=>String(Number(h)+1)):g).join(`
`),t.value=i}),l.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),S=Number(d.value);i=i.split(`
`).map((g,y)=>_<=y+1&&y+1<=S?g.replace(/[+-]?\d+/g,h=>String(Number(h)-1)):g).join(`
`),t.value=i}),u.addEventListener("click",()=>{o&&o.close(i)}),s.addEventListener("click",()=>{o&&o.close()})}function L(){const e=[...document.querySelectorAll("#tool-bar, #information, #line-navigation")].reduce((n,c)=>n+c.clientHeight,0);document.querySelectorAll("textarea").forEach(n=>{n.style.height="auto",n.style.height=document.body.clientHeight-e-8+"px"})}function ce(){window.addEventListener("resize",()=>{L()}),L()}function le(){return`
        <div id="image-viewer">
            <canvas id="image-canvas"></canvas>
        </div>
    `}function ue(){const e=document.querySelector("#image-viewer");if(!e)return;e.addEventListener("click",()=>{e.style.display="none"}),e.style.display="none";const t=document.querySelector("#image-canvas");t&&(t.width=0,t.height=0)}function ae(e){const t=document.querySelector("#image-canvas");if(!t)return;const n=new Image;n.onload=()=>{t.width=n.width,t.height=n.height;const i=t.getContext("2d");i.drawImage(n,0,0);const o=i.getImageData(0,0,n.width,n.height),r=document.querySelector("#image-viewer");if(r){if(!o){r.style.display="none";return}r.style.display="inline-block"}};const c=new FileReader;c.onload=()=>{n.src=c.result},c.readAsDataURL(e)}document.querySelector("#app").innerHTML=`
  <div id="tool-bar">
    <h1 id="title"><a href="https://github.com/tanjoin/text-counter">Text Counter</a></h1>
    ${C()}
    ${P()}
    ${W()}
    ${G()}
    ${Y()}
    ${ee()}
    ${ie()}
  </div>
  ${N()}
  <div id="editor-container">
    <textarea id="editor"></textarea>
    <textarea id="dummy-editor" readonly></textarea>
    ${j()}
    ${le()}
  </div>
  ${Z()}
  ${re()}
`;const a=document.querySelector("#editor"),v=document.querySelector("#dummy-editor");function p(e){e===null?(a.focus(),a.select(),document.execCommand("delete")):e&&(a.focus(),a.select(),document.execCommand("insertText",!1,e)),F(a),B(a),T(a)}function se(e){U(a,z(e))}function de(){v.value=a.value,a.style.display==="none"?(a.style.display="inline-block",v.style.display="none"):(a.style.display="none",v.style.display="block",v.style.display="inline-block")}function fe(e){e&&(console.log(e.type),e.type.includes("image/")&&ae(e))}A(a,p);R(a,te());H(a);J(a,p,fe);K(a,p,se);X(a,p);Q(a,p);V(a,p);ne(a,O);oe(a,v,de,p);ce();ue();
