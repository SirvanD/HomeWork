
let str = document.querySelector("input").value;
let apiKey = "&api_key=KICrnwVNPOHalEtHdNbaEuUsLk2YZj58"
document.getElementById("button").addEventListener('click', e => {
    e.preventDefault();
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${str}`).then(res => {
        let img = document.createElement('img')
        img.src = res.data[0].images.downsized.url
        document.body.appendChild(img)
    })
})