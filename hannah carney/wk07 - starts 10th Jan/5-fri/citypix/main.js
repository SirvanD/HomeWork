const CITIES = ["nyc", "sf", "la", "sydney", "austin"];
let dropdown = document.getElementById("city-type");

CITIES.forEach(city => {
    let names = document.createElement('option')
    names.textContent = city
    names.value = city
    dropdown.appendChild(names)
})


dropdown.addEventListener('change', () => {
    document.body.className = dropdown.value
})
