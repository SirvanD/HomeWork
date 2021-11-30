var boxOne = document.querySelector(".box-one");
var boxTwo = document.querySelector(".box-two");
var boxThree = document.querySelector(".box-three");

function goGreen() {
  boxOne.style.backgroundColor = "green";
  boxTwo.style.backgroundColor = "green";
  boxThree.style.backgroundColor = "green";

  boxOne.classList.remove("red");
  boxTwo.classList.remove("red");
  boxThree.classList.remove("red");
}

function handleClick(event) {
  var boxClicked = event.target;
  boxClicked.style.backgroundColor = "red";
  boxClicked.classList.add("red");

  if (
    boxOne.className == "box-one red" &&
    boxTwo.className == "box-two red" &&
    boxThree.className == "box-three red"
  ) {
    setTimeout(goGreen, 500);
  }
}

boxOne.addEventListener("click", handleClick);
boxTwo.addEventListener("click", handleClick);
boxThree.addEventListener("click", handleClick);
