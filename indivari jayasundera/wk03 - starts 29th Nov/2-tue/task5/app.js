var boxOne = document.querySelector(".box-one");
var boxTwo = document.querySelector(".box-two");
var boxThree = document.querySelector(".box-three");

function goGreen() {
  boxOne.style.backgroundColor = "green";
  boxTwo.style.backgroundColor = "green";
  boxThree.style.backgroundColor = "green";
}

function handleClick(event) {
  var boxClicked = event.target;
  boxClicked.style.backgroundColor = "red";

  if (
    boxOne.style.backgroundColor == "red" &&
    boxTwo.style.backgroundColor == "red" &&
    boxThree.style.backgroundColor == "red"
  ) {
    setTimeout(goGreen, 500);
  }
}

boxOne.addEventListener("click", handleClick);
boxTwo.addEventListener("click", handleClick);
boxThree.addEventListener("click", handleClick);
