const colourInput = document.querySelector('.colour-name')
// create a variable with the colours in it
const paintBr = document.querySelector('#square')

// create a loop to populate the background

function setColour() {
    let fillColour = colourInput.value
    console.log(fillColour)
    paintBr.style.backgroundColor = fillColour
    return false
}

for(let i = 0; i < 2000; i++){
    let boxes = document.createElement('div')
    boxes.className = "boxes";
    document.body.appendChild(boxes)
}

const squares = document.querySelectorAll('.boxes')
    
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = colourInput.value
    })
})

let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    axios.get("http://www.omdbapi.com/?t=legally-blonde&apikey=1e36cb2c").then((res) => {
        console.log(res.data.Poster);
        document.body.style.backgroundImage = `url(${res.data.Poster})`;
    });
})

// event delegation - tell the parent to handle the event listener 
// event bubbling 

// canvas.addEventListener('click', event => {
//     event.target.style.backgroundColor = fillColour
// }) ---> you'd need to create a parent div for the canvas 
// you need to write an if statement to make sure the event.target.classList.contains('.boxes')