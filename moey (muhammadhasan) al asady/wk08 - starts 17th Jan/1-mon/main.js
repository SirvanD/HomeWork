var canvas = document.querySelector('.canvas')
const colorButton = document.querySelector('.color_btn');
const movieButton = document.querySelector('.movie_btn');
const colorInput = document.querySelector('.color');
const switcher = document.querySelector('.switch-btn');






for (var i = 0; i < 1998; i++) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)

}

canvas.addEventListener('click', event => {
    event.target.style.backgroundColor = colorInput.value.toString();
    if (colorInput.value == "") {
        event.target.style.backgroundColor = 'green'
    }
})

// canvas.addEventListener('mouseover', event => {
//     event.target.style.backgroundColor = colorInput.value.toString();
//     if (colorInput.value == "") {
//         event.target.style.backgroundColor = 'green'
//     }
// })

// var counter = 0;

// movieButton.mouseoverSwitch('click', event =>{
//     var userClick = event.target;
//     if (switcher == 'Click'){
//     switcher.textContent = 'mouseover';
//     } else {
//     switcher.textContent = 'Click';
//     }
// })


{
    
}

// canvas.addEventListener('mouserover', event => {
//     event.target.style.backgroundColor = colorInput.value.toString();
//     if (colorInput.value == "") {
//         event.target.style.backgroundColor = 'green'
//     }
// })

// btn.addEventListener('click', () => {
//     axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
//         let img = document.createElement('img')
//         img.src = res.data.message
//         document.body.appendChild(img)
//     })
// })
// movieButton.addEventListener("click", (event) => {  
//     axios.get(`https://www.omdbapi.com/?t=${movie.value}&apikey=6139fe0d`)
//       .then((res) => {
//         document.style.backgroundImage = `url(${res.data.Poster})`;
//       });
//   });

