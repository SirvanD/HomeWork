//OPTIONS & IMG URLS
let cityVals = [
  {
    name: "Select a City",
    url: "citipix_skyline.jpg",
  },
  {
    name: "NYC",
    url: "nyc.jpg",
  },
  {
    name: "ATX",
    url: "austin.jpg",
  },
  {
    name: "SYD",
    url: "sydney.jpg",
  },
  {
    name: "LA",
    url: "la.jpg",
  },
  {
    name: "SF",
    url: "sf.jpg",
  },
];
let select = document.getElementById("city-type");
let option = document.createElement("option");

//REMOVE EXISTING OPTION
select.remove(0);

//ADD OPTIONS FROM OBJ
cityVals.forEach((city) => {
  select.options.add(new Option(city.name, city.url));
});

//ADD EVENT LISTENER
select.addEventListener("change", () => {
  document.body.style.backgroundImage = `url('./images\/${select.value}')`;
});
