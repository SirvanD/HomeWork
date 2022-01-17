var btnSetColor = document.getElementById("btn-color");
var brushBoxDivs = document.getElementsByClassName("pixel");
var colorPicker = document.getElementById("color-picker");
var moviePicker = document.getElementById("movie-picker");
var btnSetMovie = document.getElementById("btn-movie");
var container = document.getElementById("container");

const setColor = () => {
  for (let i = 0; i < brushBoxDivs.length; i++) {
    brushBoxDivs[i].style.backgroundColor = colorPicker.value;
  }
};

const getMoviePoster = () => {
  axios.get("https://omdbapi.com/?t=jaws&apikey=2f6435d9").then((res) => {
    console.log(res);
    var imgPoster = document.createElement("img");
    // imgPoster.src = res.data.Poster;
    // document.body.appendChild(imgPoster);
    document.body.style.backgroundImage = res.data.Poster;
  });
};

btnSetColor.addEventListener("click", setColor);
btnSetMovie.addEventListener("click", getMoviePoster);

colorPicker.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    for (let i = 0; i < brushBoxDivs.length; i++) {
      brushBoxDivs[i].style.backgroundColor = colorPicker.value;
    }
  }
});

const createBrushBoxes = () => {
  for (let i = 1; i <= 2000; i++) {
    var divElement = document.createElement("div");
    divElement.style.width = "50px";
    divElement.style.height = "50px";
    divElement.style.border = "1px solid grey";
    divElement.className = "pixel";
    divElement.style.float = "left";
    container.appendChild(divElement);
  }
};

const setBackground = (event) => {
  event.target.style.backgroundColor = colorPicker.value;
};

for (let i = 0; i < brushBoxDivs.length; i++) {
  brushBoxDivs[i].addEventListener("mouseover", setBackground);
}

window.onload = createBrushBoxes;
