var city = document.getElementById("city-type");

const cities = [
  ["NYC", "nyc"],
  ["SF", "sf"],
  ["LA", "la"],
  ["SYD", "sydney"],
  ["ATX", "austin"],
];

// var city = document.querySelector("select");
// cityName =[

// ]

for (let i = 0; i < cities.length; i++) {
  var option = document.createElement("option");
  option.text = cities[i][0];
  option.value = cities[i][1];
  city.options.add(option);
}

function changeBackground() {
  var selectedValue = city.options[city.selectedIndex].value;
  // could've used city.value straight away
  document.body.className = city.value;

  // if (selectedValue === "NYC") {
  //   document.body.className = "nyc";
  // } else if (selectedValue === "SF") {
  //   document.body.className = "sf";
  // } else if (selectedValue === "LA") {
  //   document.body.className = "la";
  // } else if (selectedValue === "SYD") {
  //   document.body.className = "sydney";
  // } else if (selectedValue === "ATX") {
  //   document.body.className = "austin";
  // }
}

city.addEventListener("change", changeBackground);
