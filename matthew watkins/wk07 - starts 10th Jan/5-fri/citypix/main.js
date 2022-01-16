
let cities = [ 'NYC', 
    'SF',
    'LA',
    'SYD',
    'ATX'
]

var citySection = document.getElementById(`city-type`)
var option = document.createElement(`option`)


cities.forEach(city => {
    
    var option = document.createElement(`option`)
    option.textContent = city
    citySection.appendChild(option)
});

var optionSelector = document.getElementsByName(`option`)

console.log(optionSelector)



//var austinBackground = document.body.style.backgroundImage = "url('images/austin.jpg')"


citySection.addEventListener('change',function () {
    
    var curVal = (this.value)
    if (curVal == `SF`){
        document.body.style.backgroundImage = "url('images/sf.jpg')"
    }
    if (curVal == `NYC`) {
        document.body.style.backgroundImage = "url('images/nyc.jpg')"
    }
    if (curVal == 'ATX') {
        document.body.style.backgroundImage = "url('images/austin.jpg')"
    }
    if (curVal == 'LA') {
        document.body.style.backgroundImage = "url('images/la.jpg')"
    }
    if (curVal == 'SYD') {
        document.body.style.backgroundImage = "url('images/sydney.jpg')"
    }

})

//document.body.classList.add(`sydney`)
