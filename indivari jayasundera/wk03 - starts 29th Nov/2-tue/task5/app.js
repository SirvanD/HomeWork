var boxes = document.querySelectorAll(".box");

var count = 0;
function goGreen() {
  boxes.forEach((box) => {
    box.style.backgroundColor = "green";
  });
}

function handleClick(event) {
  count++;
  var boxClicked = event.target;
  boxClicked.style.backgroundColor = "red";
  if (count == 3) {
    count = 0;
    setTimeout(goGreen, 500);
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});
