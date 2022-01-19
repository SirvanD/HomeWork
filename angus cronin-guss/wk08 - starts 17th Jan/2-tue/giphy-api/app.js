
function handleRespose(res) {    
    let gifs = res.data.data
    
    gifs.forEach(gif => {
        let img = document.createElement('img')
        img.src = gif.images.downsized.url
        document.body.appendChild(img)
    })
    
}


let apiKey = "KICrnwVNPOHalEtHdNbaEuUsLk2YZj58"
document.getElementById("button").addEventListener('click', e => {
    e.preventDefault();
    let str = document.querySelector("input").value;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${str}`).then(handleRespose)
})