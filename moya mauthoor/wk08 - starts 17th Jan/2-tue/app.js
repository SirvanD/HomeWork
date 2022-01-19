// Make a form so the user can enter a search term, get the first 10 images from Giphy, and arrange them vertically on the page.

const form = document.querySelector("form");
const input = document.querySelector("input");
const giphyDiv = document.querySelector(".giphy-div");

const giphyApiKey = "tjRTg9rN7dKeYEQyL2iwKwiM5XDB9miC";


form.addEventListener("submit", event => {
    event.preventDefault();
    if (giphyDiv.children.length > 0) {
        giphyDiv.innerHTML = "";
    }

    let searchTerm = input.value;

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=10`).then(res => {
        let gifs = res.data.data;
        for (let i = 0; i < gifs.length; i++) {
            let gifUrl = gifs[i].images.fixed_height_small.url
            let gifImg = document.createElement("img");
            gifImg.src = gifUrl;
            gifImg.style.display = "block";
            gifImg.style.margin = "0 auto";
            gifImg.style.padding = "10px";
            giphyDiv.appendChild(gifImg);
        }
    })
})




