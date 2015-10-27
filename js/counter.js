function showLength(str) {
  var inputlength = document.getElementById("inputlength");

  inputlength.replaceChild(document.createTextNode(str.length), inputlength.lastChild);

  var max = parseInt(document.getElementById("maxinput").value);
  if (str.length > max) {
    inputlength.style.color = "red";
  } else {
    inputlength.style.color = "white";
  }
}

function editMaxCount() {
  var str = document.getElementById("editor").value;
  showLength(str);
}
