// Make a form so the user can enter a search term, get the first 10 images from Giphy, and arrange them vertically on the page.

// axios.get is an ASYNCHRONOUS function. this is why you had trouble accessing the api values, caus nothing was populated yet.

const submitButton = document.querySelector('button')
const gifBox = document.querySelector('.gif_box')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let gifSearch = document.querySelector('input').value;

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9R89lvl3alNtGPSmreCoC4XONb2GxG3k&q=${gifSearch}&limit=10&offset=0&rating=g&lang=en`).then(res => {
            
            for(let i = 0; i < 10; i++) {
                let gif = res.data.data[i].images.original.webp;
                let img = document.createElement('img')
                img.src = gif
                gifBox.appendChild(img)
            }
    })
});