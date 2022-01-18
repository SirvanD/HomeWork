var brushBox = document.querySelector("#brush-box");
var brushBtn = document.querySelector("#set");
var color = document.querySelector(".colorName");

// step 1
var changebrushBox = function (event) {
  event.preventDefault();
  brushBox.style.backgroundColor = color.value;
};

brushBtn.addEventListener("click", changebrushBox);

// step 2
var numOfPixels = 2050;
var canvas = document.querySelector("#canvas");

for (var i = 0; i < numOfPixels; i++) {
  var elem = document.createElement("div");
  elem.classList.add("canvas");
  canvas.appendChild(elem);
}

// step 3 - 4 - 5 - 6
var pixels = document.querySelector("#canvas");

// got to the parent and add event listener
var changePixelColor = function (event) {
  if (event.target.classList.contains("canvas")) {
    event.target.style.backgroundColor = color.value;
  }
};

pixels.addEventListener("click", changePixelColor);

// step 7
var movieBtn = document.querySelector("#movie");
var movieName = document.querySelector(".movieName");

movieBtn.addEventListener("click", (event) => {
  event.preventDefault();

  axios
    .get(`https://omdbapi.com/?t=${movieName.value}&apikey=8f66dc3c`)
    .then((res) => {
      console.log(res.data.Poster);
      canvas.style.backgroundImage = `url(${res.data.Poster})`;
    });
});
