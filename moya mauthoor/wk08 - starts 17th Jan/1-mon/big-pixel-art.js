
const colourBtn = document.querySelector(".colour-btn");
const brushBox = document.querySelector(".brush-box");
const colourInput = document.querySelector(".colour-input");
const colourForm = document.querySelector(".colour-form");
const canvas = document.querySelector(".canvas")

// Refactored to attach the event listener to the form (not button) since there's only one button. Will tell a better narrative - show you're submitting a form. Clicking a button doesn't always mean submitting a form. Also gives you 'submit' ability. 
colourForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let colour = colourInput.value;
    brushBox.style.backgroundColor = colour;
});

for (let i = 1; i <= 2000; i++) {
   let pixel = document.createElement("div");
   pixel.classList.add("pixel");
   canvas.appendChild(pixel);
}

// Better way to do the above - event delegation/event bubbling. Get the parent to catch the event instead of the children. Would need to create a 'canvas' div for the pixels to live in though. 

// const pixels = document.querySelectorAll(".pixel");

// pixels.forEach(pixel => {
//     pixel.addEventListener("mouseover", (event) => {
//         let pixel = event.target;
//         // Step 4 - change pixel colour to green
//         // pixel.style.backgroundColor = "green";
//         pixel.style.backgroundColor = brushBox.style.backgroundColor;
//     });
// });

// better way to do this:
canvas.addEventListener("mouseover", event => {
    if (event.target.classList.contains("pixel")) {
        let pixel = event.target;
        // Step 4 - change pixel colour to green
        // pixel.style.backgroundColor = "green";
        pixel.style.backgroundColor = brushBox.style.backgroundColor;
    }
   
})

const movieInput = document.querySelector(".movie-input");
const movieForm = document.querySelector(".movie-form");

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let movie = movieInput.value;
    axios.get(`https://omdbapi.com/?t=${movie}&apikey=8f66dc3c`).then(res => {
        let moviePoster = res.data.Poster;
        document.body.style.backgroundImage = `url('${moviePoster}')`;
    });
});


