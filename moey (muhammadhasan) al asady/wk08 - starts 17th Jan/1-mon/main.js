var canvas = document.querySelector('.canvas')
const colorButton = document.querySelector('.color_btn');
const movieButton = document.querySelector('.movie_btn');
const colorInput = document.querySelector('.color');
const switcher = document.querySelector('.switch-btn');
const form1 = document.querySelector('.form1');





let color = 'green'


for (var i = 0; i < 1998; i++) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)
    pixel.addEventListener('click', event => {
        event.target.style.backgroundColor = colorInput.value;
        if (colorInput.value == "") {
            event.target.style.backgroundColor = 'green'
        }
        // console.log(color)

    })
    
}

form1.addEventListener('submit', event => {
    event.preventDefault()
    color = colorInput.value
    console.log(color)

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


// {
    
// }

// canvas.addEventListener('mouseover', event => {
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
movieButton.addEventListener("click", (event) => {  
    event.preventDefault()
    var movie = document.querySelector('.movie').value
    console.log(movie)
    axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=6139fe0d`)
        .then(res => {
            document.body.style.backgroundImage = `url(${res.data.Poster})`;
        })     
  });

