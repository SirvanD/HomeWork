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
var numOfPixels = 2000;
var checkBox = document.querySelector("#pixel");

for (var i = 0; i < numOfPixels; i++) {
  var elem = document.createElement("div");
  elem.classList.add("pixel");
  checkBox.appendChild(elem);
}

// step 3 - 4 - 5 - 6
var pixels = document.querySelector("#pixel");

// got to the parent and add event listener
var changePixelColor = function (event) {
  if (event.target.classList.contains("pixel")) {
    event.target.style.backgroundColor = color.value;
  }
};

pixels.addEventListener("mouseover", changePixelColor);

// step 7
var movieBtn = document.querySelector("#movie");
var movieName = document.querySelector(".movieName");

movieBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`aahaaha`, aahaaha);
  // axios
  //   .get(`https://www.omdbapi.com/?t=${movieName.value}&apikey=2f6435d9`)
  //   .then((res) => {
  //     checkBox.style.backgroundImage = `url(${res.Poster})`;
  //   });
});
