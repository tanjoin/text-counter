(function(){var e,t,n,d,l,r,o,u,i,c,a;String.prototype.lines=function(){return this.split(/\r*\n/)},String.prototype.lineCount=function(){return this.lines().length},u=function(e){var t,n,d;"string"!=typeof e&&(e=document.getElementById("editor").value),t=document.getElementById("inputlength"),d=document.createTextNode(e.length),t.replaceChild(d,t.lastChild),n=parseInt(document.getElementById("maxinput").value),a(e),e.length>n?t.style.color="red":t.style.color="white"},t=function(){var e;e=document.getElementById("editor").value,u(e)},a=function(e){var t,n,d;if((t=e.lineCount())!==d)return d=t,n=document.getElementById("linenav"),n.innerText="Line count: "+t},o=function(){var e,t,n,d,l;return d=document.getElementById("editor").value,e=new Blob([d],{type:"text/plain"}),l=window.URL.createObjectURL(e),n=document.createElement("a"),t=document.getElementById("save_name"),t=t.innerText.replace("\n","").replace(/\s+$/g,""),null==t&&(t="textfile.txt"),n.download=t,n.href=l,n.click()},d=function(){var e,t;if(document.getElementById("read_button").style.display="none",document.getElementById("clear_button").style.display="inline",e=document.getElementById("read_file").files[0])return document.getElementById("save_name").innerText=e.name,t=new FileReader,t.onload=function(e){var t;return t=e.target.result,document.getElementById("editor").value=t,u(t)},t.readAsText(e,"UTF-8")},e=function(){return document.getElementById("clear_button").style.display="none",document.getElementById("read_button").style.display="inline",document.getElementById("read_file").value="",document.getElementById("editor").value="",u("")},n=function(){return document.getElementById("read_file").click()},l=function(e){if(13===e.keyCode)return e.preventDefault()},r=function(){var e,t,n;try{return n=document.getElementById("editor").value,t=JSON.parse(n),document.getElementById("editor").select(),n.includes("\n")?document.execCommand("insertText",!1,JSON.stringify(t)):document.execCommand("insertText",!1,JSON.stringify(t,null,2))}catch(t){return e=t,console.log(e)}},c=function(){var e,t,n;try{return n=document.getElementById("editor").value,t=Array.from(new Set(n.split("\n"))),document.getElementById("editor").select(),document.execCommand("insertText",!1,t.join("\n"))}catch(t){return e=t,console.log(e)}},i=function(){var e;try{return document.getElementById("editor").value=document.getElementById("editor").value.split("\n").filter(function(e){return function(e){return e.length>0}}()).sort().join("\n").replace(/^\n/g,"")}catch(t){return e=t,console.log(e)}},window.onload=function(){return 0,a(""),document.getElementById("maxinput").addEventListener("blur",t),document.getElementById("editor").addEventListener("keyup",u),document.getElementById("save_button").addEventListener("click",o),document.getElementById("read_button").addEventListener("click",n),document.getElementById("read_file").addEventListener("change",d),document.getElementById("clear_button").addEventListener("click",e),document.getElementById("save_name").addEventListener("keydown",l),document.getElementById("json_parse_button").addEventListener("click",r),document.getElementById("unique_list").addEventListener("click",c),document.getElementById("sort_list").addEventListener("click",i)}}).call(this);