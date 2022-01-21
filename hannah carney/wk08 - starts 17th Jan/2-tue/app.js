const btn = document.querySelector('button')
const input = document.querySelector('input')
    
btn.addEventListener('click',  event => {
    event.preventDefault()
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=t9ljiFuYwTSA9N47Upb0iLzIdG7ttoyu&limit=10`).then(res =>  {
    
    let results = res.data.data
    console.log(results)

    results.forEach(result => {
        let img = result.images.downsized.url
        let imageResult = document.createElement('img')
        imageResult.src = img
        document.body.appendChild(imageResult)
        });
    })
})




