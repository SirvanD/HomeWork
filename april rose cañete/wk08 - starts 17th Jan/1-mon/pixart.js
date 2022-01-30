console.log('PIXART');

const brushBoxForm = document.querySelector('.brush-box-form');
const brushBoxDiv = document.querySelector('.brush-box');
let userInput = document.querySelector('.brush-box-input');

const movieSearchForm = document.querySelector('.movie-search')

brushBoxForm.addEventListener('submit', (event) => {
    event.preventDefault();

    brushBoxDiv.style.backgroundColor = userInput.value
})


for (let x = 0; x < 2000; x++) {
    let div = document.createElement('div');

    div.className = 'pixel'

    document.body.appendChild(div)
  
}

const pixelBoxes = document.querySelectorAll('.pixel')


pixelBoxes.forEach(pixel => {
    pixel.addEventListener('mouseover', (event) => {

        event.target.style.backgroundColor = userInput.value

    }, false);
});

movieSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let movieTitle = document.querySelector('.movie-search-title').value

    axios.get(`https://www.omdbapi.com/?s=${movieTitle}&apikey=2f6435d9`).then((res) => {
        const imgURL = res.data.Search[0].Poster

        document.body.style.backgroundImage = `url(${imgURL})`
    })
})



