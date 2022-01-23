

var input = document.querySelector('#input-color')

// Step 1 & 2
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault()
    
    let brushBox = document.querySelector('.brush-box')
    
    brushBox.style.backgroundColor = input.value 
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
let btn = document.getElementById('movie-btn')
btn.addEventListener('click', () => {
    event.preventDefault()
    let background = document.querySelector('#movie')
    axios.get(`http://www.omdbapi.com/?t=${background.value}&apikey=2f6435d9`).then(res => {
        let body = document.querySelector("body")
        body.style.backgroundImage = `url(${res.data.Poster})`
    })
})
