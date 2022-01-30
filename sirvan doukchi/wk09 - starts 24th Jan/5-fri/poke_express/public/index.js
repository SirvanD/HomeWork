// const { default: axios } = require("axios");

// const testDiv = document.createElement("div");
// testDiv.textContent = "it works";
// document.body.appendChild(testDiv);

const contentDiv = document.querySelector(".content");
const titlesDiv = document.querySelector(".titles");
const imagesDiv = document.querySelector(".images");

const btnShow = document.querySelector("#btn-Show");
const btnHide = document.querySelector("#btn-Hide");
const btnPost = document.querySelector("#btn-Post");

const getPokemons = () => {
  axios.get("/api/pokemon").then((res) => {
    var pokemons = res.data;
    pokemons.forEach((pokemon) => {
      const pokemonName = document.createElement("p");
      const pokemonCard = document.createElement("img");
      pokemonName.textContent = pokemon.name;
      pokemonCard.src = pokemon.img;
      pokemonCard.classList.add("image");
      contentDiv.appendChild(pokemonName);
      contentDiv.appendChild(pokemonCard);
    });
  });
};

app.post("/api/pokemon").then();

btnShow.addEventListener("click", getPokemons);

// window.onload = () => {
//   getPokemons();
// };
