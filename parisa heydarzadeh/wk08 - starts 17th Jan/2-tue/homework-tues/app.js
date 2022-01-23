var searchBtn = document.querySelector(".searchbtn");
var searchBox = document.querySelector(".searchbox");
var image = document.querySelector(".img");
var giphyPage = document.querySelector(".giphypage");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${searchBox.value}&api_key=xeprBk75YdCdApwGosmITe3FTLFgI7kC&limit=6`
    )
    .then((res) => {
      var images = res.data.data;
      images.forEach((image) => {
        console.log(image);
        var img = document.createElement("img");
        img.src = image.images.original.url;
        giphyPage.appendChild(img);
      });
    });
});
