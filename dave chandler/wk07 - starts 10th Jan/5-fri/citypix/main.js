//OPTIONS & IMG URLS
let cityVals = [
  {
    name: "Select a City",
    class: "",
  },
  {
    name: "New York",
    class: "nyc",
  },
  {
    name: "San Fran",
    class: "sf",
  },
  {
    name: "Los Angeles",
    class: "la",
  },
  {
    name: "Austin",
    class: "austin",
  },
  {
    name: "Sydney",
    class: "sydney",
  },
];
let select = document.getElementById("city-type");
let option = document.createElement("option");

//REMOVE EXISTING OPTION
select.remove(0);

//ADD OPTIONS FROM OBJ
cityVals.forEach((city) => {
  select.options.add(new Option(city.name, city.class));
});

//ADD EVENT LISTENER
select.addEventListener("change", () => {
  document.body.className = select.value;
});
