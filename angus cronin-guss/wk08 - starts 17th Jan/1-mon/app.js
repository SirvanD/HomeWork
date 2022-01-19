window.axios = require('axios');

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
// function handleRespose(res) {
//     console.log(res.data.Search[0]);
    
//     let movie = res.data.Search[0]
//     let body = document.querySelector('body')
//     let img = document.createElement('img')
//     img.src = movie.Poster
//     body.appendChild(img)
    
// }
// axios.get('http://www.omdbapi.com/?s=jaws&apikey=2f6435d9').then(handleRespose)

let btn = document.getElementById('movie-btn')
btn.addEventListener('click', () => {
    event.preventDefault()
    axios.get('http://www.omdbapi.com/?s=jaws&apikey=2f6435d9').then(res => {
        let img = document.createElement('img')
        img.src = res.data.Search.Poster
        document.body.appendChild(img)
    })
})


// var movieBackground = document.createElement('img')
// var movie = document.getElementById('movie')
// var url = `http://www.omdbapi.com/?t=${movie}&apikey=2f6435d9`
// movieBackground.source = url.poster
// body.appendChild(movieBackground)

// body.addEventListener('click', bgi => {
//     bgi.style.backgoundImage = movieBackground
// })