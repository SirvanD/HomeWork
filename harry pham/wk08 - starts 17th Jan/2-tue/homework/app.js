// 'https://api.giphy.com/v1/gifs/search?api_key=ATc3LIBtVi8NxlwUVUxEBCNvtEHKAAwr&q=food&limit=25&offset=0&rating=pg&lang=en'
// api_key = ATc3LIBtVi8NxlwUVUxEBCNvtEHKAAwr

const container = document.querySelector('.container')
const imagesElement = document.querySelector('.images')
const form = document.querySelector('form')
const inputSearch = document.querySelector('input')
const resetBtn = document.querySelector('.reset')

function handleImages(result) {
    console.log(result)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ATc3LIBtVi8NxlwUVUxEBCNvtEHKAAwr&q=${result}&limit=10&lang=en`).then(res => {
        for(let i=0; i < res.data.data.length; i++) {
            const image = document.createElement('img')
            image.src = res.data.data[i].images.original.url
            imagesElement.appendChild(image)
        }
    })
}

form.addEventListener('click', event => {
    event.preventDefault()
    handleImages(inputSearch.value)
})

