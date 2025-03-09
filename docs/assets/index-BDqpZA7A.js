(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function $(){return`
    <div id="information">
        <span id="input-length">0</span>
        <span>/</span>
        <input id="input-max-length" type="number" value="0" />
        <span>文字</span>
    </div>
    `}const N="red";let L=0,q=!1;function D(e){const t=document.querySelector("#input-length");t.innerHTML=e,e>L?t.style.color=N:t.style.color=""}function x(e){if(!e)return;let t=e.value;q&&(t=t.replace(/\n/g,"")),D(t.length)}function I(e,t){L=t,x(e)}function A(e,t){if(!e)return;const n=document.querySelector("#input-max-length");n.addEventListener("input",()=>{I(e,n.value)}),e.addEventListener("input",()=>{x(e)}),x(e),q=t}function k(e){e&&x(e)}function R(e,t){q=t,k(e)}function T(e){e&&localStorage.setItem("text",e.value)}function M(e){const t=localStorage.getItem("text");t&&e&&e(t)}function O(e,t){e&&(M(t),e.addEventListener("input",()=>{T(e)}))}function j(e){e&&T(e)}function B(){return`
    <p id="line-navigation"></p>
    `}function F(e){if(!e)return;const t=document.querySelector("#line-navigation"),n=i=>{t.innerHTML=i};(()=>{e.addEventListener("input",()=>{const i=e.value.split(`
`),o=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(o)}),e.addEventListener("selectionchange",()=>{const i=e.value.split(`
`),o=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(o)}),e.addEventListener("touchstart",()=>{const i=e.value.split(`
`),o=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;n(o)})})(),n("行: 1 / 1")}function H(e){if(!e)return;const t=document.querySelector("#line-navigation"),n=e.value.split(`
`),i=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;t.innerHTML=i}function C(e,t){if(!e)return;const n=document.querySelector("#line-navigation"),l=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${l.length} ${t}`;n.innerHTML=r}function U(){return`
        <div id="data-io">
            <input type="file" id="file-input" />
            <button id="file-load-button">ファイル選択</button>
            <button id="file-save-button">保存</button>
            <span id="file-status" contenteditable="true">textfile.txt</span>
            <button id="file-clear-button">リセット</button>
        </div>
    `}function J(e,t,n){const l=document.querySelector("#file-input"),i=document.querySelector("#file-load-button"),r=document.querySelector("#file-save-button"),o=document.querySelector("#file-status"),d=document.querySelector("#file-clear-button");i.addEventListener("click",()=>{l.click()}),l.addEventListener("change",()=>{const c=l.files[0];if(!c)return;if(c.type.includes("image/")){n&&n(c);return}const u=new FileReader;u.onload=()=>{t&&t(u.result)},u.readAsText(c),o.textContent=c.name}),r.addEventListener("click",()=>{const c=new Blob([e.value],{type:"text/plain"}),u=URL.createObjectURL(c),s=document.createElement("a");s.href=u,s.download=o.textContent,s.click(),URL.revokeObjectURL(u)}),d.addEventListener("click",()=>{t&&t(null),o.textContent="textfile.txt"}),o.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),o.blur())}),o.addEventListener("blur",()=>{o.textContent.trim()===""&&(o.textContent="textfile.txt")}),o.addEventListener("drop",c=>{c.preventDefault();const u=c.dataTransfer.files[0];if(!u)return;if(u.type.includes("image/")){n&&n(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),o.textContent=u.name}),document.addEventListener("paste",c=>{c.clipboardData.types[1]==="Files"&&n&&n(c.clipboardData.items[1].getAsFile());const u=c.clipboardData.items[0].getAsFile();if(!u)return;if(u.type.includes("image/")){console.log("image"),n&&n(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),o.textContent=u.name}),document.addEventListener("keydown",c=>{c.ctrlKey&&c.key==="o"&&(c.preventDefault(),l.click()),c.ctrlKey&&c.key==="s"&&(c.preventDefault(),r.click()),c.ctrlKey&&c.key==="d"&&(c.preventDefault(),d.click())}),l.style.display="none",o.draggable=!0,o.contentEditable=!0,o.spellcheck=!1,o.textContent="textfile.txt"}function P(e){const t=document.querySelector("#file-status");t.textContent=e}function K(){return`
        <div id="json-manager">
            <button id="json-parse-minify-button">JSON</button>
        </div>
    `}function z(e,t,n){document.querySelector("#json-parse-minify-button").addEventListener("click",()=>{try{const i=JSON.parse(e.value);e.value.includes(`
`)?t&&t(JSON.stringify(i)):t&&t(JSON.stringify(i,null,2))}catch(i){n&&n(i)}})}function Y(e){return`
        <span style="color: magenta;">${e}</span>
    `}function W(){return`
    <div id="unique-line">
      <button id="unique-line__button">ユニーク</button>
    </div>
  `}function X(e,t){if(!e)return;document.querySelector("#unique-line__button").addEventListener("click",()=>{const i=e.value.split(`
`),r=Array.from(new Set(i));t&&t(r.join(`
`))})}function G(){return`
    <div id="sort-line">
        <button id="sort-line__button">ソート</button>
    </div>
  `}function Q(e,t){if(!e)return;document.querySelector("#sort-line__button").addEventListener("click",()=>{const r=e.value.split(`
`).sort();t&&t(r.join(`
`))})}function Z(){return`
    <div id="replace-text">
        <button id="replace-text__button">置換</button>
    </div>
  `}function V(){return`
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
    `}function ee(e,t){if(!e)return;document.querySelector("#replace-text__button").addEventListener("click",()=>{const o=document.querySelector("#replace-text-dialog");o&&o.showModal()});const l=document.querySelector("#replace-text-dialog");l.addEventListener("close",o=>{const d=o.target.returnValue;d&&t&&t(d)}),document.querySelector("#replace-text-dialog__button").addEventListener("click",()=>{const o=document.querySelector("#replace-text-dialog__input-before"),d=document.querySelector("#replace-text-dialog__input-after"),c=o.value,u=d.value,s=e.value;if(document.querySelector("#replace-text-dialog__case-all").checked){const f=s.replace(new RegExp(c,"g"),u);if(!l)return;l.close(f)}else{const f=s.replace(c,u);if(!l)return;l.close(f)}}),document.querySelector("#replace-text-dialog__cancel").addEventListener("click",()=>{l&&l.close()})}function te(){return`
        <div id="ignore-newline-dialog">
            <button id="ignore-newline-dialog__button">改行無視</button>
        </div>
    `}let b=!1;function ne(){return b}function ie(e,t){if(!e)return;const n=document.querySelector("#ignore-newline-dialog__button");n.addEventListener("click",()=>{b?(n.style.backgroundColor="#000000",n.style.color="#7eeea8"):(n.style.backgroundColor="#13bb8e",n.style.color="#dffff1"),b=!b,t&&t(e,b)})}function oe(){return`
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
    `}function le(e,t,n,l){if(!e)return;let i=e.value;const r=document.querySelector("#increment-decrement-dialog"),o=document.querySelector("#increment-decrement__button"),d=document.querySelector("#increment-decrement-dialog__increment"),c=document.querySelector("#increment-decrement-dialog__decrement"),u=document.querySelector("#increment-decrement-dialog__close"),s=document.querySelector("#increment-decrement-dialog__reset");o.addEventListener("click",()=>{if(!r)return;r.showModal(),n(),i=e.value;const m=document.querySelector("#increment-decrement-dialog__input-start"),f=document.querySelector("#increment-decrement-dialog__input-end");m.value="0",f.value=i.split(`
`).length}),r.addEventListener("close",m=>{n();const f=m.target.returnValue;f&&l&&l(f)}),d.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),f=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),h=Number(f.value);i=i.split(`
`).map((g,y)=>_<=y+1&&y+1<=h?g.replace(/[+-]?\d+/g,S=>String(Number(S)+1)):g).join(`
`),t.value=i}),c.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),f=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),h=Number(f.value);i=i.split(`
`).map((g,y)=>_<=y+1&&y+1<=h?g.replace(/[+-]?\d+/g,S=>String(Number(S)-1)):g).join(`
`),t.value=i}),u.addEventListener("click",()=>{r&&r.close(i)}),s.addEventListener("click",()=>{r&&r.close()})}function w(){const e=[...document.querySelectorAll("#tool-bar, #information, #line-navigation")].reduce((n,l)=>n+l.clientHeight,0);document.querySelectorAll("textarea").forEach(n=>{n.style.height="auto",n.style.height=document.body.clientHeight-e-8+"px"})}function ce(){window.addEventListener("resize",()=>{w()}),w()}function ue(){return`
        <div id="image-viewer">
            <canvas id="image-canvas"></canvas>
        </div>
    `}function ae(){const e=document.querySelector("#image-viewer");if(!e)return;e.addEventListener("click",()=>{e.style.display="none"}),e.style.display="none";const t=document.querySelector("#image-canvas");t&&(t.width=0,t.height=0)}function se(e){const t=document.querySelector("#image-canvas");if(!t)return;const n=new Image;n.onload=()=>{t.width=n.width,t.height=n.height;const i=t.getContext("2d");i.drawImage(n,0,0);const r=i.getImageData(0,0,n.width,n.height),o=document.querySelector("#image-viewer");if(o){if(!r){o.style.display="none";return}o.style.display="inline-block"}};const l=new FileReader;l.onload=()=>{n.src=l.result},l.readAsDataURL(e)}function de(){return`
        <div id="jekyll-page">
            <button id="jekyll-page-nikki-button" class="hidden">Jekyll</button>
        </div>
    `}function fe(e,t){const n=document.querySelector("#jekyll-page-nikki-button");n.addEventListener("click",()=>{let o=new Date,d=o.getFullYear(),c=("0"+(o.getMonth()+1)).slice(-2),u=("0"+o.getDate()).slice(-2);const s=`---
layout: post
title:  ""
categories: unknown
date: "${d}-${c}-${u} 00:00:00"
---

`;e(s),t(`${d}-${c}-${u}-report.md`)});const l=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];let i=l.length,r=0;document.addEventListener("keydown",o=>{o.code===l[r]?(r++,r===i&&(console.log("%c実績","color:white; background-color: blue; padding: 2px 4px; border-radius: 4px;","Congratulations! You found a hidden command!"),n.classList.remove("hidden"),r=0)):r=0})}document.querySelector("#app").innerHTML=`
  <div id="tool-bar">
    <h1 id="title"><a href="https://github.com/tanjoin/text-counter">Text Counter</a></h1>
    ${U()}
    ${K()}
    ${W()}
    ${G()}
    ${Z()}
    ${te()}
    ${oe()}
    ${de()}
  </div>
  ${$()}
  <div id="editor-container">
    <textarea id="editor"></textarea>
    <textarea id="dummy-editor" readonly></textarea>
    ${B()}
    ${ue()}
  </div>
  ${V()}
  ${re()}
`;const a=document.querySelector("#editor"),v=document.querySelector("#dummy-editor");function p(e){e===null?(a.focus(),a.select(),document.execCommand("delete")):e&&(a.focus(),a.select(),document.execCommand("insertText",!1,e)),H(a),j(a),k(a)}function me(e){P(e)}function pe(e){C(a,Y(e))}function ge(){v.value=a.value,a.style.display==="none"?(a.style.display="inline-block",v.style.display="none"):(a.style.display="none",v.style.display="block",v.style.display="inline-block")}function ye(e){e&&(console.log(e.type),e.type.includes("image/")&&se(e))}O(a,p);A(a,ne());F(a);J(a,p,ye);z(a,p,pe);X(a,p);Q(a,p);ee(a,p);ie(a,R);le(a,v,ge,p);ce();ae();fe(p,me);
