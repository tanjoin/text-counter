String.prototype.lines = () ->
  return this.split /\r*\n/

String.prototype.lineCount = () ->
  return this.lines().length

showLength = (str) ->
  unless typeof str is 'string'
    str = document.getElementById('editor').value
  inputLength = document.getElementById 'inputlength'
  textNode = document.createTextNode(str.length)
  inputLength.replaceChild textNode, inputLength.lastChild
  max = parseInt document.getElementById('maxinput').value
  updateLines(str)
  if str.length > max
    inputLength.style.color = 'red'
  else
    inputLength.style.color = 'white'
  return

editMaxCount = () ->
  str = document.getElementById('editor').value
  showLength str
  return

updateLines = (str) ->
  count = str.lineCount()
  unless count is oldCount
    oldCount = count
    linenav = document.getElementById 'linenav'
    linenav.innerText = "Line count: #{count}"

saveText = () ->
  str = document.getElementById('editor').value
  blob = new Blob([str], {type: "text/plain"})
  url = window.URL.createObjectURL blob
  link = document.createElement 'a'
  filename = document.getElementById("save_name")
  filename = filename.innerText.replace("\n","").replace(/\s+$/g, "")
  filename = "textfile.txt" unless filename?
  link.download = filename
  link.href = url
  link.click()

loadFile = () ->
  document.getElementById('read_button').style.display = 'none'
  document.getElementById('clear_button').style.display = 'inline'
  file = document.getElementById('read_file').files[0]
  unless file
    return
  document.getElementById('save_name').innerText = file.name
  reader = new FileReader()
  reader.onload = (event) ->
    data = event.target.result
    document.getElementById('editor').value = data
    showLength data
  reader.readAsText file, 'UTF-8'

clear = () ->
  document.getElementById('clear_button').style.display = 'none'
  document.getElementById('read_button').style.display = 'inline'
  document.getElementById('read_file').value = ""
  document.getElementById('editor').value = ""
  showLength ""

fireReadFile = () ->
  document.getElementById('read_file').click()

noNewLine = (e) ->
  if e.keyCode is 13
    e.preventDefault()

parseJson = () ->
  try
    text = document.getElementById('editor').value;
    json = JSON.parse(text);
    document.getElementById('editor').select();
    if text.includes('\n')
      document.execCommand("insertText", false, JSON.stringify(json));
    else
      document.execCommand("insertText", false, JSON.stringify(json, null, 2));
  catch error

uniqueList = () ->
  try
    text = document.getElementById('editor').value;
    list = Array.from(new Set(text.split('\n')));
    document.getElementById('editor').select();
    document.execCommand("insertText", false, list.join('\n'));
  catch error
    console.log(error)

window.onload = () ->
  oldCount = 0
  updateLines ""
  document.getElementById('maxinput').addEventListener 'blur', editMaxCount
  document.getElementById('editor').addEventListener 'keyup', showLength
  document.getElementById('save_button').addEventListener 'click', saveText
  document.getElementById('read_button').addEventListener 'click', fireReadFile
  document.getElementById('read_file').addEventListener 'change', loadFile
  document.getElementById('clear_button').addEventListener 'click', clear
  document.getElementById('save_name').addEventListener 'keydown', noNewLine
  document.getElementById('json_parse_button').addEventListener 'click', parseJson
  document.getElementById('unique_list').addEventListener 'click', uniqueList
