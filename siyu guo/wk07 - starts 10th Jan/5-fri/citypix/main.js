

// var cityClass = { "New York": "nyc", "San Francisco": "sf", "Los Angeles": "la", "Sydney": "sydney", "Austin": "austin" }

var cities = ["New York", "San Francisco", "Los Angeles", "Sydney", "Austin"]
var classes = ["nyc", "sf", "la", "sydney", "austin"]


var section = document.getElementById("city-type")
var page = document.querySelector("body")

// for (var i = 0; i < cities.length; i++) {
//     var option = document.createElement("option")
//     option.textContent = cities[i]
//     option.addEventListener('change', () => page.classList.add(classes[i]))
//     section.appendChild(option)
// }

cities.forEach(city => {
    var option = document.createElement("option")
    option.textContent = city
    section.appendChild(option)
})

function listItemClicked() {
    var e = document.getElementById("city-type");
    page.classList.add(classes[e.selectedIndex - 1]);
}

document.getElementById("city-type").onchange = listItemClicked;