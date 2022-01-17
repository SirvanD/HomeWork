// big pixel art
// It's paint with big pixels!!!

// Step 1
// add a regular sqaure div to represent a brush box.
// add a form and have a input box and button inside. label the button set color
// When I click the "Set Color" button, it should change the color of the brush box div to the color I specify in the input field. expect the user type in a valid CSS color name.
// Use the DOM API to find the element and add event listeners to handle the set color action


let brushBox = document.createElement('section');
brushBox.className = "brush"
document.querySelector('body').appendChild(brushBox);

document.getElementById('colorbtn').addEventListener("click", function () {
    brushBox.style.backgroundColor = document.getElementById('brushcolor').value;
})


// Step 2
// The same thing should happen when I press the enter key from inside the input field instead of the button

document.getElementById('brushcolor').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        brushBox.style.backgroundColor = document.getElementById('brushcolor').value;
    }
});

// Step 3
// Create 2000 divs with the "pixel" class and append them to the body. The pixel class should be styled as a square around 50px by 50px. (you can make the square a little bit bigger or smaller if you want)

for (let i = 0; i < 2000; i++) {
    let pixel = document.createElement('div');
    pixel.className = "pixel";
    document.body.appendChild(pixel)
}


// Step 4
// Add functionality so that when I click on each div with the class "pixel", it changes the color of that individual square to "green"

// Step 5
// Modify your code so that when I click on each "pixel", it changes to the color I set on my brush box instead of "green" every time.

// Step 6
// Change the event that changes your pixels colors from 'click' to 'mouseover'.

let divs = document.querySelectorAll('div')
divs.forEach(div =>
    div.addEventListener('mouseover', function () { return div.style.backgroundColor = document.getElementById('brushcolor').value; })
    // div.addEventListener('mouseover', function () { return div.style.backgroundColor = 'green' })
)

// Step 7
// add another form to allow users to pick a movie poster with a movie title using the OMDB API.
// set the background of your drawing area to the movie poster image fetched from the api.


document.getElementById('bgbtn').addEventListener('click', () => {
    let bg = document.getElementById('bgimage').value;
    axios.get(`http://omdbapi.com/?t=${bg}&apikey=89b0ed0b`).then(res => {
        document.body.style.backgroundImage = `url(${res.data.Poster})`
    })
})

// Step 8
// feel free to tweak the styling, the size and number of pixels to make it look pretty.