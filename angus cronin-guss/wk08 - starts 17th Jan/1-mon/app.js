var input = document.querySelector('input')

// Step 1 & 2
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault()
    
    let brushBox = document.querySelector('.brush-box')
    brushBox.style.backgroundColor = input.value // to test
})

// Step 3
var canvas = document.querySelector('.canvas')
for (let i = 0; i < 2000; i++) { 
    let div = document.createElement('div');
    div.className = 'pixel'
    canvas.appendChild(div)
    
}


// Step 4
canvas.addEventListener('click', e => {
    e.target.style.backgroundColor = 'green'
})

// Step 5 & 6
canvas.addEventListener('mouseover', clickColor => {
    clickColor.target.style.backgroundColor = input.value
})


// Step 7
//http://www.omdbapi.com/?t=jaws&apikey=2f6435d9

var movieBackground = document.createElement('img')
var movie = document.getElementById('movie')
var url = `http://www.omdbapi.com/?t=${movie}&apikey=2f6435d9`
movieBackground.source = url.poster
body.appendChild(movieBackground)

body.addEventListener('click', bgi => {
    bgi.style.backgoundImage = movieBackground
})