const colourInput = document.querySelector('.colour-name')
// create a variable with the colours in it
const paintBr = document.querySelector('#square')

// create a loop to populate the background


for(let i = 0; i < 2000; i++){
    let boxes = document.createElement('div')
    boxes.className = "boxes";
    boxes.style.border = '1px solid black';
    boxes.style.width = '30px';
    boxes.style.height = '30px';
    boxes.style.display = 'inline-block';
    document.body.appendChild(boxes)
}



function setColour() {
    let fillColour = colourInput.value
    console.log(fillColour)
    paintBr.style.backgroundColor = fillColour
    return false
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

