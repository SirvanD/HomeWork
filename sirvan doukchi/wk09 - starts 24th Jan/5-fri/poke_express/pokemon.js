const express = require("express");
const axios = require("axios");

const { redirect } = require("express/lib/response");
const app = express();
const PORT = 8080;

app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var pokemon = [
  {
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
  },
  {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
  },
  {
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg",
  },
  {
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg",
  },
  {
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg",
  },
  {
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg",
  },
  {
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg",
  },
];

app.get("/api/pokemon", (req, res) => {
  res.json(pokemon);
});

app.post("/api/pokemon", (req, res) => {
  // console.log(req.body.name);
  let name = req.body.name;
  let img = req.body.img_url;
  pokemon.push({ name: name, img: img });
  console.log(pokemon);
  // redirect("/");
});

app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});
