
const API_KEY = "SsZ2O8HrkmtmwrBBbgLhYTMkjlttgjTd";
const SEARCH_BTN = document.querySelector('button');
const WRAPPER = document.querySelector('.wrapper');

SEARCH_BTN.addEventListener('click', getImages)

function getImages(event) {
    event.preventDefault();
    var input = document.querySelector('input');
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${API_KEY}&limit=10&rating=g`)
       .then(res => {
            let results = res.data.data;
            results.forEach(result => {
                let image = result.images.downsized.url
                let element = document.createElement('img')
                element.src = image
                WRAPPER.appendChild(element)
            })
    })
}