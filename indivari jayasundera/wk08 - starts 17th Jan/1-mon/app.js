var btnSetColor = document.querySelector("button");
var brushBoxDivs = document.getElementsByClassName("pixel");
var colorPicker = document.getElementById("color-picker");

const setColor = () => {
  for (let i = 0; i < brushBoxDivs.length; i++) {
    brushBoxDivs[i].style.backgroundColor = colorPicker.value;
  }
};

btnSetColor.addEventListener("click", setColor);
