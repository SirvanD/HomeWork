
const colourBtn = document.querySelector(".colour-btn");
const brushBox = document.querySelector(".brush-box");
const colourInput = document.querySelector(".colour-input");

colourBtn.addEventListener("click", (event) => {
    let colour = colourInput.value;
    brushBox.style.backgroundColor = colour;
    event.preventDefault();
});

for (let i = 1; i <= 2000; i++) {
   let pixel = document.createElement("div");
   pixel.classList.add("pixel");
   document.body.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", (event) => {
        let pixel = event.target;
        // Step 4 - change pixel colour to green
        // pixel.style.backgroundColor = "green";
        pixel.style.backgroundColor = brushBox.style.backgroundColor;
    });
});

const movieInput = document.querySelector(".movie-input");
const movieBtn = document.querySelector(".movie-btn");

movieBtn.addEventListener("click", (event) => {
    let movie = movieInput.value;
    axios.get(`https://omdbapi.com/?t=${movie}&apikey=8f66dc3c`).then(res => {
        let moviePoster = res.data.Poster;
        document.body.style.backgroundImage = `url('${moviePoster}')`;
    });
    event.preventDefault();
});


