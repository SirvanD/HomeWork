const body = document.querySelector('body')
const pixelContainer = document.querySelector('.pixels-container')
let brushColor = document.querySelector('.color').value
let brushBox = document.querySelector('.brush-box')
let brushColorBox = document.querySelector('.brush-color-box')

for (let i = 0; i < 2000; i++){
    let pixelDiv = document.createElement('div');
    pixelDiv.className = "pixel"
    pixelDiv.style.width = '25px'
    pixelDiv.style.height = '25px'
    pixelDiv.style.border = '1px solid black'
    pixelDiv.style.display = 'inline-flex'
    pixelDiv.style.marginBottom = "-3px"
    pixelDiv.style.marginRight = "1px"
    pixelContainer.appendChild(pixelDiv)
}

// reload the css file here 


const handleColorSubmit = () => {
    brushColor = document.querySelector('.color').value
    brushColorBox.style.backgroundColor = brushColor
    return false
}

const handleBackgroundSubmit = () => {
    let movieTitle = document.querySelector(".movie-title").value

    axios.get(`https://omdbapi.com/?t=${movieTitle}&apikey=c4c2784c`).then( res => {
        posterImg = res.data.Poster
        console.log(posterImg)
        pixelContainer.style.backgroundImage = `url(${posterImg})`
        pixelContainer.style.backgroundRepeat = 'repeat'
    })
    return false
}


const handleClick = event => {
    let targetDiv = event.target
    targetDiv.style.backgroundColor = brushColor
}


let pixels = document.querySelectorAll('.pixel')

for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener('mouseover', handleClick)
}