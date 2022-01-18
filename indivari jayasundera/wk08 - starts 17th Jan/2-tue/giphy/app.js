// https://api.giphy.com/v1/gifs/search?q=cats&api_key=YuprO7hy60upsPqQuKdWKlJsN3HXe7nt&q=cats&limit=25&offset=0&rating=g&lang=en

var btnSearch = document.querySelector(".search-btn");
var searchInput = document.querySelector("input");

// var btnSearch = document.getElementById("search-btn");

const getImages = () => {
  let searchKey = searchInput.value;
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=YuprO7hy60upsPqQuKdWKlJsN3HXe7nt&q=cats&limit=25&offset=0&rating=g&lang=en`
    )
    .then((res) => {
      console.log(res);

      for (var i = 0; i < 10; i++) {
        var giphyURL = res.data.data[i].images.fixed_height.url;
        var newImage = document.createElement("img");
        newImage.src = giphyURL;
        document.body.appendChild(newImage);
      }
    });
};
btnSearch.addEventListener("click", getImages);
