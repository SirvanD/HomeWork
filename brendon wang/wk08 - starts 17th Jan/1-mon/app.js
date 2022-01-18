var btn = document.querySelector('button')
var inputColor = document.querySelector('.inputColor')
var pixel1 = document.querySelector('.pixel')

function changeColor() {
    pixel1.style.backgroundColor = inputColor.value
}

// btn.addEventListener('click', changeColor)
btn.addEventListener('click', event => {
    event.preventDefault()
    changeColor()
    console.log('clicked')
})


for (let i = 0; i < 2000; i++) {
    var div = document.createElement('div')
    div.className = "pixel"
    document.body.appendChild(div)
}

var allPixels = document.querySelectorAll('.pixel')

function turnGreen(event) {
    event.target.style.backgroundColor = inputColor.value
}

allPixels.forEach(pixel => {
    pixel.addEventListener('click', turnGreen)
})

var movieBtn = document.querySelector('.movieBtn')
var inputMovie = document.querySelector('.inputMovie')


function movieBackground() {
    movie = inputMovie.value
    axios.get(`https://omdbapi.com/?t=${movie}&apikey=9be659e0`).then(res => {
        let movieImg = res.data.Poster
        console.log(movieImg)
        document.body.style.backgroundImage = `url(${movieImg})`
    })
}

// movieBtn.addEventListener('click', movieBackground)
movieBtn.addEventListener('click', event => {
    event.preventDefault()
    movieBackground()
    console.log('clicked')
})