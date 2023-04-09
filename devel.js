
let root = document.getRootNode()
let body = document.body

var devbox = document.createElement("div")
devbox.setAttribute("id", "devbox")
var markup = `
    <div>
      <header>
        <h3>Show/Hide</h3>
      </header>
      <form>
        <input id='input-show-lines' type='checkbox' value='A'/>Horizontal lines</br>
        <input id='input-show-vertical-lines' type='checkbox' value='B'/>Vertical lines
      </form>
    </div>
`
devbox.innerHTML = markup

body.appendChild(devbox)


var input_show_lines = document.getElementById("input-show-lines");

input_show_lines.addEventListener("click", (e) => {
  let element = e.target
  let body = document.getElementsByTagName("html")[0]
  if (element.checked) {
    // switch-off development 
    body.style.backgroundImage = "linear-gradient(var(--devcolor) 1px, transparent 1px)"  
    console.log(body.style.backgroundImage, body.style.backgroundColor)
  }else {
    body.style.backgroundImage = "linear-gradient(linear-gradient(var(--devcolor) 0px, transparent 0px)"
    console.log(body.style.backgroundImage)
  }
})

// Make the DIV element draggable:
window.onload = (function() {
    dragElement(document.getElementById("devbox"));
})()

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}