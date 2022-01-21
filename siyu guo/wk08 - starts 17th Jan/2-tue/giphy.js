var container = document.querySelector(".container")
var form = document.querySelector(".form")
var input = document.querySelector("input")
var api_key = "41jNHjRPHKY0VVFacRXoaAyvqn4Fnztr"
var url = ""

var keyword = ""
var result = ""
form.addEventListener("submit", event => {
    event.preventDefault()
    keyword = input.value
    console.log(keyword)
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${keyword}&limit=10&rating=pg&api_key=${api_key}`)
        .then(function (res) {
            result = res["data"]
            for (let i = 0; i < 10; i++) {
                var gif = document.createElement('IMG');
                url = result["data"][i]["images"]["original"]["url"];
                gif.setAttribute("src", url);
                gif.setAttribute("width", "100");
                gif.setAttribute("height", "100");
                container.appendChild(gif)
            }
        })
})

