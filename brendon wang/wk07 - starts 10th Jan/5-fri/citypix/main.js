cities = ["NYC", "SF", "LA", "SYD", "ATX"]
var cityForm = document.querySelector('#city-type')

cities.forEach(city => {
    var option = document.createElement('option')
    option.textContent = city
    cityForm.appendChild(option)
});


function changebackground() {
    console.log(`clicking ${cityForm.value}`)
    citycode = cityForm.value.toLowerCase()
    if (citycode == "syd") {
        citycode = "sydney"
    } else if (citycode == "atx") {
        citycode = "austin"
    }
    document.body.className = `${citycode}`
}

cityForm.addEventListener('change', changebackground)