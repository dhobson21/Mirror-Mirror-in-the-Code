let messageBox = document.getElementById("message")
let boxes = document.getElementsByTagName("article")



function copyToBoxes (event) {
  for(i = 0; i < boxes.length; i++) {
  boxes[i].innerHTML  = event.target.value

  }
}
messageBox.addEventListener("keyup", copyToBoxes)