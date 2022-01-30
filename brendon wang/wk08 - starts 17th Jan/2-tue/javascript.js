var input = document.querySelector('input')
var btn = document.querySelector('button')

var api_key = 'mpHXPdCf4kDsupTBWMjvEaPhB3W7Yh0y'

function searching(event) {
    var search = input.value
    event.preventDefault()
    images = document.querySelectorAll('img')
    images.forEach(image => {
        image.remove()
    })
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=10&offset=0&rating=g&lang=en`).then(res => {
        let gifs = res.data.data
        gifs.forEach(gif => {
            let img = document.createElement('img')
            img.src = gif.images.original.url
            document.body.appendChild(img)
        });
    })
}


btn.addEventListener('click', searching)