var btnSetColor = document.getElementById("btn-color");
var brushbox = document.getElementById("brush-box");
var colorPicker = document.getElementById("color-picker");
var moviePicker = document.getElementById("movie-picker");
var btnSetMovie = document.getElementById("btn-movie");
var container = document.getElementById("container");

const setColor = () => {
  brushbox.style.backgroundColor = colorPicker.value;
};

const getMoviePoster = () => {
  var movie = moviePicker.value;
  axios.get(`https://omdbapi.com/?t=${movie}&apikey=2f6435d9`).then((res) => {
    console.log(res);
    var imgPoster = document.createElement("img");
    document.getElementById(
      "container"
    ).style.backgroundImage = `url(${res.data.Poster})`;
  });
};

btnSetColor.addEventListener("click", setColor);
btnSetMovie.addEventListener("click", getMoviePoster);

colorPicker.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    brushbox.style.background = colorPicker.value;
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
    divElement.addEventListener("mouseover", setBackground);
  }
};

const setBackground = (event) => {
  event.target.style.backgroundColor = colorPicker.value;
};

window.onload = createBrushBoxes;
