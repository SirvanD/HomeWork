
const board = document.querySelector('.board')
const color = document.querySelector('.color')
const movieBtn = document.querySelector('.movie-btn')
const resetBtn = document.querySelector('.reset-btn')
var draw = false

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

for (let i = 0; i < 2000; i++) {
let div = document.createElement('div')
div.classList.add('pixel')
div.addEventListener('mouseover', function(){
    if(draw == true){
        div.style.backgroundColor = color.value
    }
})
div.addEventListener('mousdown', function(){
    div.style.backgroundColor = color.value
})

board.appendChild(div)
}

movieBtn.addEventListener('click', () => {
    var movieChosen = 'http://omdbapi.com/?t=' + document.querySelector('.movie').value + '&apikey=2f6435d9';
    console.log(movieChosen);
    axios.get(movieChosen).then(res => {
        console.log(res.data.Poster)
        document.body.style.backgroundImage = "url(" +res.data.Poster +")";
    })   
})


resetBtn.addEventListener('click', reset)
function reset(){
    // board.style.backgroundColor = none
    color.value = "#ffe4e1"
}



