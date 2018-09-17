String.prototype.lines = () ->
  return this.split /\r*\n/

String.prototype.lineCount = () ->
  return this.lines().length

showLength = (str) ->
  unless typeof str is 'string'
    str = document.getElementById('editor').value
  inputLength = document.getElementById 'inputlength'
  target = str;
  if JSON.parse(localStorage.ignoreNewline)
    target = target.replace /\r?\n/g, ''
  textNode = document.createTextNode(target.length)
  inputLength.replaceChild textNode, inputLength.lastChild
  max = parseInt document.getElementById('maxinput').value
  updateLines(target)
  if target.length > max
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
    text = document.getElementById('editor').value
    json = JSON.parse(text)
    document.getElementById('editor').select()
    if text.includes('\n')
      document.execCommand("insertText", false, JSON.stringify(json))
    else
      document.execCommand("insertText", false, JSON.stringify(json, null, 2))
  catch error
    console.log error

uniqueList = () ->
  try
    text = document.getElementById('editor').value
    list = Array.from(new Set(text.split('\n')))
    document.getElementById('editor').select()
    document.execCommand("insertText", false, list.join('\n'))
  catch error
    console.log error

sortList = () ->
  try
    document.getElementById('editor').select()
    document.execCommand("insertText", false, document.getElementById('editor').value.split('\n').filter((text) => text.length > 0).sort().join('\n').replace(/^\n/g, ''))
  catch error
    console.log error

applyDisplayButton = (id) ->
  if document.getElementById(id).style.display == 'inline'
    document.getElementById(id).style.display = 'none'
  else
    Array.from(document.querySelectorAll('.btmf')).forEach((div) -> div.style.display = 'none')
    document.getElementById(id).style.display = 'inline'

displayBottom = () -> applyDisplayButton('btmfl')

replaceText = () ->
  try
    pattern = document.getElementById('regex_pattern').innerText
    text = document.getElementById('replacing_text').innerText
    result = pattern.match(/\/(.*)\/(.*)/)
    if result
      regex = new RegExp(result[1], result[2])
    else
      regex = new RegExp(pattern)
    document.getElementById('editor').select()
    document.execCommand("insertText", false, document.getElementById('editor').value.replace(new RegExp(regex), text))
  catch error
    console.log error

resizeEditor = () ->
  try
    height = document.body.clientHeight - 124
    document.getElementById('text-container').style.height = "#{height}px"
    document.getElementById('editor').style.height = "#{height}px"
  catch error
    console.log error

applyIgnoreNewLine = () ->
  if JSON.parse(localStorage.ignoreNewline)
    document.getElementById('ignore_newline').style.backgroundColor = '#13bb8e';
    document.getElementById('ignore_newline').style.color = '#dffff1';
  else
    document.getElementById('ignore_newline').style.backgroundColor = '#000000';
    document.getElementById('ignore_newline').style.color = '#7eeea8';

clickIgnoreNewline = () ->
  localStorage.ignoreNewline = !JSON.parse(localStorage.ignoreNewline)
  applyIgnoreNewLine()
  showLength()

clearEditor = () ->
  result = window.confirm("データを削除しますか？")
  if result
    document.getElementById('editor').select()
    document.execCommand("insertText", false, '')

displayBottom2 = () ->  applyDisplayButton('btmf2')

execFistIndex = (start, end, apply) ->
  value = document.getElementById('editor').value
  splitedValue = value.split '\n'
  unless splitedValue
    splitedValue = []
  if isNaN(start) or start < 0
    start = 0
  if isNaN(end) or end > splitedValue.length
    end = splitedValue.length
  result = []
  for target, index in splitedValue
    if index < start or index > end
      result.push target
      continue
    match = /[-0-9][0-9]*/.exec(target)
    unless match
      result.push target
      continue
    idx = match.index
    num = parseInt match[0], 10
    if isNaN(num)
      result.push target
      continue
    num = apply(num)
    incStr = target.slice(0, idx) + target.slice(idx +  match[0].length)
    incStr = incStr.slice(0, idx) + num + incStr.slice(idx)
    result.push incStr
  document.getElementById('editor').select()
  document.execCommand("insertText", false, result.join('\n'))

fistIncrement = () ->
  start = parseInt document.getElementById('first_increment_decrement_start').value, 10
  end = parseInt document.getElementById('first_increment_decrement_end').value, 10
  execFistIndex(start, end, (num) -> num + 1);

firstDecrement = () ->
  start = parseInt document.getElementById('first_increment_decrement_start').value, 10
  end = parseInt document.getElementById('first_increment_decrement_end').value, 10
  execFistIndex(start, end, (num) -> num - 1);

window.onload = () ->
  oldCount = 0
  if localStorage.ignoreNewline == undefined
    localStorage.ignoreNewline = false
  updateLines ""
  resizeEditor()
  applyIgnoreNewLine()
  window.addEventListener 'resize', resizeEditor
  document.getElementById('maxinput').addEventListener 'blur', editMaxCount
  document.addEventListener 'keyup', showLength
  document.addEventListener 'keypress', showLength
  document.getElementById('save_button').addEventListener 'click', saveText
  document.getElementById('read_button').addEventListener 'click', fireReadFile
  document.getElementById('read_file').addEventListener 'change', loadFile
  document.getElementById('clear_button').addEventListener 'click', clear
  document.getElementById('save_name').addEventListener 'keydown', noNewLine
  document.getElementById('json_parse_button').addEventListener 'click', parseJson
  document.getElementById('unique_list').addEventListener 'click', uniqueList
  document.getElementById('sort_list').addEventListener 'click', sortList
  document.getElementById('replace_show').addEventListener 'click', displayBottom
  document.getElementById('replace_button').addEventListener 'click', replaceText
  document.getElementById('regex_pattern').addEventListener 'keydown', noNewLine
  document.getElementById('replacing_text').addEventListener 'keydown', noNewLine
  document.getElementById('ignore_newline').addEventListener 'click', clickIgnoreNewline
  document.getElementById('clear_editor').addEventListener 'click', clearEditor
  document.getElementById('first_increment_button').addEventListener 'click', displayBottom2
  document.getElementById('first_increment_apply_button').addEventListener 'click', fistIncrement
  document.getElementById('first_decrement_apply_button').addEventListener 'click', firstDecrement
