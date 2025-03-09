(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();function N(){return`
    <div id="information">
        <span id="input-length">0</span>
        <span>/</span>
        <input id="input-max-length" type="number" value="0" />
        <span>文字</span>
    </div>
    `}const $="red";let L=0,w=!1;function D(e){const t=document.querySelector("#input-length");t.innerHTML=e,e>L?t.style.color=$:t.style.color=""}function x(e){if(!e)return;let t=e.value;w&&(t=t.replace(/\n/g,"")),D(t.length)}function I(e,t){L=t,x(e)}function A(e,t){if(!e)return;const i=document.querySelector("#input-max-length");i.addEventListener("input",()=>{I(e,i.value)}),e.addEventListener("input",()=>{x(e)}),x(e),w=t}function k(e){e&&x(e)}function R(e,t){w=t,k(e)}function T(e){e&&localStorage.setItem("text",e.value)}function M(e){const t=localStorage.getItem("text");t&&e&&e(t)}function O(e,t){e&&(M(t),e.addEventListener("input",()=>{T(e)}))}function j(e){e&&T(e)}function B(){return`
    <p id="line-navigation"></p>
    `}function H(e){if(!e)return;const t=document.querySelector("#line-navigation"),i=n=>{t.innerHTML=n};(()=>{e.addEventListener("input",()=>{const n=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;i(r)}),e.addEventListener("selectionchange",()=>{const n=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;i(r)}),e.addEventListener("touchstart",()=>{const n=e.value.split(`
`),r=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${n.length}`;i(r)})})(),i("行: 1 / 1")}function U(e){if(!e)return;const t=document.querySelector("#line-navigation"),i=e.value.split(`
`),n=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${i.length}`;t.innerHTML=n}function C(e,t){if(!e)return;const i=document.querySelector("#line-navigation"),l=e.value.split(`
`),o=`行: ${e.value.substr(0,e.selectionStart).split(`
`).length} / ${l.length} ${t}`;i.innerHTML=o}function F(){return`
        <div id="data-io">
            <input type="file" id="file-input" />
            <button id="file-load-button">ファイル選択</button>
            <button id="file-save-button">保存</button>
            <span id="file-status" contenteditable="true">textfile.txt</span>
            <button id="file-clear-button">リセット</button>
        </div>
    `}function J(e,t,i){const l=document.querySelector("#file-input"),n=document.querySelector("#file-load-button"),o=document.querySelector("#file-save-button"),r=document.querySelector("#file-status"),f=document.querySelector("#file-clear-button");n.addEventListener("click",()=>{l.click()}),l.addEventListener("change",()=>{const c=l.files[0];if(!c)return;if(c.type.includes("image/")){i&&i(c);return}const u=new FileReader;u.onload=()=>{t&&t(u.result)},u.readAsText(c),r.textContent=c.name}),o.addEventListener("click",()=>{const c=new Blob([e.value],{type:"text/plain"}),u=URL.createObjectURL(c),s=document.createElement("a");s.href=u,s.download=r.textContent,s.click(),URL.revokeObjectURL(u)}),f.addEventListener("click",()=>{t&&t(null),r.textContent="textfile.txt"}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),r.blur())}),r.addEventListener("blur",()=>{r.textContent.trim()===""&&(r.textContent="textfile.txt")}),r.addEventListener("drop",c=>{c.preventDefault();const u=c.dataTransfer.files[0];if(!u)return;if(u.type.includes("image/")){i&&i(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),r.textContent=u.name}),document.addEventListener("paste",c=>{c.clipboardData.types[1]==="Files"&&i&&i(c.clipboardData.items[1].getAsFile());const u=c.clipboardData.items[0].getAsFile();if(!u)return;if(u.type.includes("image/")){console.log("image"),i&&i(u);return}const s=new FileReader;s.onload=()=>{t&&t(s.result)},s.readAsText(u),r.textContent=u.name}),document.addEventListener("keydown",c=>{c.ctrlKey&&c.key==="o"&&(c.preventDefault(),l.click()),c.ctrlKey&&c.key==="s"&&(c.preventDefault(),o.click()),c.ctrlKey&&c.key==="d"&&(c.preventDefault(),f.click())}),l.style.display="none",r.draggable=!0,r.contentEditable=!0,r.spellcheck=!1,r.textContent="textfile.txt"}function P(){return`
        <div id="json-manager">
            <button id="json-parse-minify-button">JSON</button>
        </div>
    `}function K(e,t,i){document.querySelector("#json-parse-minify-button").addEventListener("click",()=>{try{const n=JSON.parse(e.value);e.value.includes(`
`)?t&&t(JSON.stringify(n)):t&&t(JSON.stringify(n,null,2))}catch(n){i&&i(n)}})}function z(e){return`
        <span style="color: magenta;">${e}</span>
    `}function Y(){return`
    <div id="unique-line">
      <button id="unique-line__button">ユニーク</button>
    </div>
  `}function W(e,t){if(!e)return;document.querySelector("#unique-line__button").addEventListener("click",()=>{const n=e.value.split(`
`),o=Array.from(new Set(n));t&&t(o.join(`
`))})}function X(){return`
    <div id="sort-line">
        <button id="sort-line__button">ソート</button>
    </div>
  `}function G(e,t){if(!e)return;document.querySelector("#sort-line__button").addEventListener("click",()=>{const o=e.value.split(`
`).sort();t&&t(o.join(`
`))})}function Q(){return`
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
    `}function V(e,t){if(!e)return;document.querySelector("#replace-text__button").addEventListener("click",()=>{const r=document.querySelector("#replace-text-dialog");r&&r.showModal()});const l=document.querySelector("#replace-text-dialog");l.addEventListener("close",r=>{const f=r.target.returnValue;f&&t&&t(f)}),document.querySelector("#replace-text-dialog__button").addEventListener("click",()=>{const r=document.querySelector("#replace-text-dialog__input-before"),f=document.querySelector("#replace-text-dialog__input-after"),c=r.value,u=f.value,s=e.value;if(document.querySelector("#replace-text-dialog__case-all").checked){const d=s.replace(new RegExp(c,"g"),u);if(!l)return;l.close(d)}else{const d=s.replace(c,u);if(!l)return;l.close(d)}}),document.querySelector("#replace-text-dialog__cancel").addEventListener("click",()=>{l&&l.close()})}function ee(){return`
        <div id="ignore-newline-dialog">
            <button id="ignore-newline-dialog__button">改行無視</button>
        </div>
    `}let b=!1;function te(){return b}function ne(e,t){if(!e)return;const i=document.querySelector("#ignore-newline-dialog__button");i.addEventListener("click",()=>{b?(i.style.backgroundColor="#000000",i.style.color="#7eeea8"):(i.style.backgroundColor="#13bb8e",i.style.color="#dffff1"),b=!b,t&&t(e,b)})}function ie(){return`
        <div id="increment-decrement">
            <button id="increment-decrement__button">ｲﾝｸﾘﾒﾝﾄ･ﾃﾞｸﾘﾒﾝﾄ</button>
        </div>
    `}function oe(){return`
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
    `}function re(e,t,i,l){if(!e)return;let n=e.value;const o=document.querySelector("#increment-decrement-dialog"),r=document.querySelector("#increment-decrement__button"),f=document.querySelector("#increment-decrement-dialog__increment"),c=document.querySelector("#increment-decrement-dialog__decrement"),u=document.querySelector("#increment-decrement-dialog__close"),s=document.querySelector("#increment-decrement-dialog__reset");r.addEventListener("click",()=>{if(!o)return;o.showModal(),i(),n=e.value;const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end");m.value="0",d.value=n.split(`
`).length}),o.addEventListener("close",m=>{i();const d=m.target.returnValue;d&&l&&l(d)}),f.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),h=Number(d.value);n=n.split(`
`).map((g,y)=>_<=y+1&&y+1<=h?g.replace(/[+-]?\d+/g,S=>String(Number(S)+1)):g).join(`
`),t.value=n}),c.addEventListener("click",()=>{const m=document.querySelector("#increment-decrement-dialog__input-start"),d=document.querySelector("#increment-decrement-dialog__input-end"),_=Number(m.value),h=Number(d.value);n=n.split(`
`).map((g,y)=>_<=y+1&&y+1<=h?g.replace(/[+-]?\d+/g,S=>String(Number(S)-1)):g).join(`
`),t.value=n}),u.addEventListener("click",()=>{o&&o.close(n)}),s.addEventListener("click",()=>{o&&o.close()})}function q(){const e=[...document.querySelectorAll("#tool-bar, #information, #line-navigation")].reduce((i,l)=>i+l.clientHeight,0);document.querySelectorAll("textarea").forEach(i=>{i.style.height="auto",i.style.height=document.body.clientHeight-e-8+"px"})}function le(){window.addEventListener("resize",()=>{q()}),q()}function ce(){return`
        <div id="image-viewer">
            <canvas id="image-canvas"></canvas>
        </div>
    `}function ue(){const e=document.querySelector("#image-viewer");if(!e)return;e.addEventListener("click",()=>{e.style.display="none"}),e.style.display="none";const t=document.querySelector("#image-canvas");t&&(t.width=0,t.height=0)}function ae(e){const t=document.querySelector("#image-canvas");if(!t)return;const i=new Image;i.onload=()=>{t.width=i.width,t.height=i.height;const n=t.getContext("2d");n.drawImage(i,0,0);const o=n.getImageData(0,0,i.width,i.height),r=document.querySelector("#image-viewer");if(r){if(!o){r.style.display="none";return}r.style.display="inline-block"}};const l=new FileReader;l.onload=()=>{i.src=l.result},l.readAsDataURL(e)}function se(){return`
        <div id="jekyll-page">
            <button id="jekyll-page-nikki-button" class="hidden">Jekyll</button>
        </div>
    `}function de(e){const t=document.querySelector("#jekyll-page-nikki-button");t.addEventListener("click",()=>{let o=new Date,r=o.getFullYear(),f=("0"+(o.getMonth()+1)).slice(-2),c=("0"+o.getDate()).slice(-2);const u=`---
layout: post
title:  ""
categories: unknown
date: "${r}-${f}-${c} 00:00:00"
---

`;e(u)});const i=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];let l=i.length,n=0;document.addEventListener("keydown",o=>{o.code===i[n]?(n++,n===l&&(console.log("%c実績","color:white; background-color: blue; padding: 2px 4px; border-radius: 4px;","Congratulations! You found a hidden command!"),t.classList.remove("hidden"),n=0)):n=0})}document.querySelector("#app").innerHTML=`
  <div id="tool-bar">
    <h1 id="title"><a href="https://github.com/tanjoin/text-counter">Text Counter</a></h1>
    ${F()}
    ${P()}
    ${Y()}
    ${X()}
    ${Q()}
    ${ee()}
    ${ie()}
    ${se()}
  </div>
  ${N()}
  <div id="editor-container">
    <textarea id="editor"></textarea>
    <textarea id="dummy-editor" readonly></textarea>
    ${B()}
    ${ce()}
  </div>
  ${Z()}
  ${oe()}
`;const a=document.querySelector("#editor"),v=document.querySelector("#dummy-editor");function p(e){e===null?(a.focus(),a.select(),document.execCommand("delete")):e&&(a.focus(),a.select(),document.execCommand("insertText",!1,e)),U(a),j(a),k(a)}function fe(e){C(a,z(e))}function me(){v.value=a.value,a.style.display==="none"?(a.style.display="inline-block",v.style.display="none"):(a.style.display="none",v.style.display="block",v.style.display="inline-block")}function pe(e){e&&(console.log(e.type),e.type.includes("image/")&&ae(e))}O(a,p);A(a,te());H(a);J(a,p,pe);K(a,p,fe);W(a,p);G(a,p);V(a,p);ne(a,R);re(a,v,me,p);le();ue();de(p);
