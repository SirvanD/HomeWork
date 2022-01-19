var searchBtn = document.getElementsByClassName(".searchbtn");
var searchBox = document.getElementsByClassName(".searchbox");
var giphyPage = document.getElementsByClassName(".giphypage");
var image = document.getElementsByClassName(".img");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${searchBox.value}&api_key=xeprBk75YdCdApwGosmITe3FTLFgI7kC&limit=6`
    )
    .then((res) => {
      var images = res.data;
      images.forEach((image) => {
        var img = document.createElement("img");
        img.src = image.images.url;
        img.classList.add("col");
        giphyPage.appendChild(img);
      });
    });
});
