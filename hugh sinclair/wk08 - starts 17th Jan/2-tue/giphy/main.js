const form = document.querySelector('.img-request')
const gifsDiv = document.querySelector('.gifs-container')
const inputBox = document.querySelector('.input-box')

let obj = undefined

let reqUrl = 'https://api.giphy.com/v1/gifs/search?api_key=oBgAsej72Q4upM5RTJLubFHu7QKVRZ8w&q=adam+driver&limit=10&offset=0&rating=g&lang=en'

const handleClick = event => {
    event.preventDefault()

    let searchTermUnedited = inputBox.value
    let searchTerm = searchTermUnedited.split(' ').join('+')
    obj = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=oBgAsej72Q4upM5RTJLubFHu7QKVRZ8w&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`).then( res => {
       console.log('got it!')
       url = res.data.data[0].images.fixed_height.url
       for (let i = 0; i < res.data.data.length; i++){
           let gifUrl = res.data.data[i].images.fixed_height.url
           let gif = document.createElement('img')
           gif.src = `${gifUrl}`
           gif.style.display = 'block'
           gif.style.padding = "5px"
           gifsDiv.appendChild(gif)
       }
    })
   
}

form.addEventListener('submit', handleClick)

// need to split the user input on a space, then join it back with a +