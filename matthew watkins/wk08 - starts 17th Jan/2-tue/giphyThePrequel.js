console.log('ballsfarting')
var body = document.querySelector('body')

var searchTerm = document.querySelector('input').value

var div = document.createElement('div')
body.appendChild(div)

var button = document.querySelector('button')





button.addEventListener('click', () => {
    // event.preventDefault()
    console.log(`click`)
    console.log(searchTerm)
    
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YmeVNpMPCMenN19rAQxFpn6vj2JLKFP2&limit=10`).then(handleResponse)
    var imgSrc = document.createElement('img')
    body.appendChild(imgSrc)
    imgSrc.src = `${gifUrl}`
    function handleResponse(res) {
        console.log(res.data)
        
        res.data.data.forEach(data => {
            var gifUrl = data.images.original.url
            
        });
        
    }
})
//data[0].images.original.url
