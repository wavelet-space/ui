
// Element shortcuts
let root = document.getRootNode()
let body = document.body


//--------------------------------------------------------------------------------------------//
// Create development box 
var devbox = document.createElement("div")
devbox.setAttribute("id", "devbox")
devbox.innerHTML = `
<div>
  <h3>Show/Hide</h3>
  <form>
    <fieldset>
      <input id='input-show-lines' type='checkbox' value='A'/>Horizontal lines</br>
      <input id='input-show-vertical-lines' type='checkbox' value='B'/>Vertical lines
    </fieldset>
  </form>
</div>`

body.appendChild(devbox)

var input_show_lines = document.getElementById("input-show-lines");

// Default styles
let overlay = document.getElementById("overlay")
overlay.style.backgroundImage = "linear-gradient(var(--devcolor) 1px, transparent 1px)"  
overlay.style.backgroundSize = "auto calc(var(--line-height) * 0)"
overlay.style.backgroundColor = "rgba(1, 1, 1, 0.2)" 
overlay.style.zIndex = "999" 


//--------------------------------------------------------------------------------------------//

/** 
 * Returns the one half of the current mouse coordinates relative to the browser window.
 * Assumes the axis parameter to be uppercase: Either "X" or "Y".
 */
function getMouseCoordinate(event, axis) {
  let property = (axis == "X") ? "scrollLeft" : "scrollTop";
  if (event.pageX) {
      return event["page"+axis];
  } else {
      return event["client"+axis] + (document.documentElement[property] ? document.documentElement[property] : document.body[property]);;
  }
};

/** 
 * Return the mouse position coordinates.
 */ 
function getMousePosition(event) {
    return { 
        x: getMouseCoordinate(event, "X"),
        y: getMouseCoordinate(event, "Y")
    }
}

function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    element.onmousedown = dragMouseDown;
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


window.addEventListener("load", (event) => {

  overlay.style.visibility = "hidden"
  console.log(overlay.style.visibility)

  // Height

  console.log(body.scrollHeight)
    
  console.log(event)
  
  // Make the `div` element draggable.
  dragElement(document.getElementById("devbox"));

  //Show/hide overlay on Escape key down.
  document.addEventListener('keydown', function(event) {
    
    let overlay= this.getElementById("overlay");

    if (event.key === 'Escape') {
      event.preventDefault();
      if (overlay.style.visibility == "hidden") {
        overlay.style.visibility = "visible"; 
        overlay.style.height = body.scrollHeight   + "px"
      } else {
        overlay.style.visibility = "hidden";
      }
    }
  });

  // Listen on mouse move and log the mouse position.
  document.addEventListener("mousemove", (event) => {
    console.log(getMousePosition(event))
  })

  // Listen on checkbox.
  input_show_lines.addEventListener("click", (e) => {
    let element = e.target
    let overlay = document.getElementById("overlay")
    if (element.checked) {
      overlay.style.backgroundImage = "linear-gradient(var(--devcolor) 1px, transparent 1px)"  
      overlay.style.backgroundSize = "auto var(--line-height)"
    } else {
      overlay.style.backgroundImage = "linear-gradient(linear-gradient(var(--devcolor) 0px, transparent 0px)"
      overlay.style.backgroundSize = "auto 0"
    }
  })

})
