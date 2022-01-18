var canvas = document.querySelector('.canvas')

for (var i = 0; i < 10; i++) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    //pixel = createElement()
    //pixel.addEventListner() - NO
    //pixel.appendChild('canvas')
    canvas.appendChild(pixel)

}

canvas.addEventListener('click', event => {
    event.target.style.backgroundColor = 'red'
})

// pixels = quereySelectorAll('.pixels')

// pixels.forEach(p => {
//     p.addEventListner
// })