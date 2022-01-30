cities = ["NYC", "SF", "LA", "SYD", "ATX"]
var cityType = document.querySelector('#city-type')

cities.forEach(city => {
    var option = document.createElement('option')
    option.textContent = city
    cityType.appendChild(option)
});


function changeBackground() {
    console.log(`clicking ${cityType.value}`)
    citycode = cityType.value.toLowerCase()
    if (citycode == "syd") {
        citycode = "sydney"
    } else if (citycode == "atx") {
        citycode = "austin"
    }
    document.body.className = `${citycode}`
}

cityType.addEventListener('change', changeBackground)