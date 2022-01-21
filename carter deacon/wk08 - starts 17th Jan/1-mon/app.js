const BOARD = document.querySelector('section');
const COLOR_BTN = document.querySelector('#color');
const IMG_BTN = document.querySelector('#img');
const CURRENT_COLOR = document.querySelector('.current-color');

function createBoard() {
    for (let i = 0; i < 7000; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "squares";
        BOARD.appendChild(newDiv);
    }
}

createBoard();

function addEvents() {
    var nodes = document.querySelectorAll('.squares')
    nodes.forEach(node => {
        node.addEventListener('mouseover', handlePaint)
    })
}

addEvents();

COLOR_BTN.addEventListener('click', selectColor)

function selectColor() {
    let colorText = document.querySelector('.color-text')
    console.log(colorText.value)
    CURRENT_COLOR.style.backgroundColor = colorText.value;
    return CURRENT_COLOR.style.backgroundColor;
}


function handlePaint(event) {
    let chosenSquare = event.target;
    chosenSquare.style.backgroundColor = CURRENT_COLOR.style.backgroundColor;
}

IMG_BTN.addEventListener('click', getImage)

function getImage() {
    let query = document.querySelector('.img-text')
    console.log(`http://www.omdbapi.com/?apikey=2f6435d9&t=${query.value}`)
    axios.get(`http://www.omdbapi.com/?apikey=2f6435d9&t=${query.value}`)
        .then(function(res) {
            let poster = res.data.Poster;
            console.log(res.data.Poster);
            document.body.style.backgroundImage = `url(${poster})`;
        })
}