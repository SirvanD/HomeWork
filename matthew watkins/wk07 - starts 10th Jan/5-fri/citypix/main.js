
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



//document.body.style.backgroundImage = "url('images/austin.jpg')"

cities.forEach(city =>  {
    
    addEventListener(`click`, () => {
        console.log(city.indexOf(city))
    });
});


// addEventListener(`click`, () => {
//     console.log(`clicked`)
// });



document.body.classList.add(`sydney`)
