var colorInput = document.querySelector("#color")
var colorBtn = document.querySelector("#colorBtn")
var movieInput = document.querySelector("#movie")
var movieBtn = document.querySelector("#movieBtn")
var brush = document.querySelector(".brush")
var color = ""
var body = document.querySelector("body")
var imgUrl = ""
var movieName = ""
// const API_KEY = process.env.OMDB_API_KEY
var checkSubmit = e => {
    e.preventDefault()
    color = colorInput.value
    brush.style.backgroundColor = color
}

var checkMovieName = e => {
    e.preventDefault()
    movieName = movieInput.value
    console.log(movieName)
    axios.get(`http://omdbapi.com/?t=${movieName}&apikey=2c6318ac`)
        .then(res => {
            console.log(res.data["Poster"])
            body.style.backgroundImage = `url(${res.data["Poster"]})`
        })
}
colorBtn.addEventListener('click', checkSubmit)
movieBtn.addEventListener('click', checkMovieName)

for (var x = 0; x < 2000; x++) {
    var newDiv = document.createElement("div")

    newDiv.style.width = "50px"
    newDiv.style.height = "50px"
    newDiv.style.border = "solid #f0f8ff"
    newDiv.style.display = "inline-block"
    newDiv.classList.add("pixel")
    body.appendChild(newDiv)
    newDiv.addEventListener("click", function (event) {
        event.target.style.backgroundColor = color
    })
    // newDiv.addEventListener("mouseover", function (event) {
    //     event.target.style.backgroundColor = color
    // });
}