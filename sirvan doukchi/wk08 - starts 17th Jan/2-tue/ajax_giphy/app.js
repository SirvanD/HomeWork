const inputBtn = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const board = document.querySelector(".giphy_board");
const API = "uUnuri4uNHHKfe4GSx7FyTUDJycs3pcU";
const image_test = document.querySelector(".img_test");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("test");
  console.log(inputBtn.value);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${inputBtn.value}&api_key=${API}&limit=6`
    )

    .then((res) => {
      var images = res.data.data;
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.images.downsized.url;
        img.classList.add("col");
        board.appendChild(img);
      });

      console.log("test");
    });
});
