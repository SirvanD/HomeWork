// addeventlistener to parent instead of children 
// can create event listener in the for loop function instead of using memory to define pixels after
// worst
// var allPixels = document.querySelectorAll('.pixel')
// allPixels.forEach(pixel => {
//     pixel.addEventListener('click', changeColor)
// })
// Bad
// div.addEventListener('click', changeColor)


var btn = document.querySelector('button')
var inputColor = document.querySelector('.inputColor')
var primaryPixel = document.querySelector('.pixel')
var movieBtn = document.querySelector('.movieBtn')
var inputMovie = document.querySelector('.inputMovie')
var canvas = document.querySelector('.canvas')

for (let i = 0; i < 2000; i++) {
    var div = document.createElement('div')
    div.className = "pixel"
    canvas.appendChild(div)
}

function primaryColor() {
    primaryPixel.style.backgroundColor = inputColor.value
}

function changeColor(event) {
    event.target.style.backgroundColor = inputColor.value
}

function movieBackground() {
    movie = inputMovie.value
    axios.get(`https://omdbapi.com/?t=${movie}&apikey=9be659e0`).then(res => {
        let movieImg = res.data.Poster
        console.log(movieImg)
        document.body.style.backgroundImage = `url(${movieImg})`
    })
}

canvas.addEventListener('click', event => {
    if (event.target.classList.contains('pixel')) { // prevent changing color of parent/canvas
        event.target.style.backgroundColor = inputColor.value
    }
})

// movieBtn.addEventListener('click', movieBackground)
movieBtn.addEventListener('click', event => {
    event.preventDefault()
    movieBackground()
    console.log('clicked')
})


// btn.addEventListener('click', primaryColor)
btn.addEventListener('click', event => {
    event.preventDefault()
    primaryColor()
    console.log('clicked')
})









