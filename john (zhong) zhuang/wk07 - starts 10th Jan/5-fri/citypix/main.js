// City Pix
// Clone this down to your homework repo, and please remember to remove the inner git repo.

// Do NOT modify the index.html file. Complete the following tasks:

// Update the drop down box to show the five cities NYC, SF, LA, SYD, ATX. Note: You might need to research how to add DOM objects to a web page to be able to add option tags to the select tag.

let cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];
let citiesClassName = ['nyc', 'sf', 'la', 'sydney', 'austin']
let select = document.getElementById('city-type');
for (let i = 0; i < cities.length; i++) {
    let option = document.createElement('option')
    option.className = citiesClassName[i]
    option.text = [cities[i]]
    select.add(option, 0)
}

// When you select a city in the drop-down box, the background image should change to show that city. The images for the five cities are in the images folder. We have already provided the css code for changing the background image in the style.css file (at the bottom). Feel free to use those classes.

// let selectCities = document.querySelectorAll('option')
// for (let j = 0; j < selectCities.length - 1; j++) {
//     document.body.className = this.selectCities[j].className
// }
// document.body.classList.add(
//     document.querySelector('option').className
// )

let bg = document.getElementById("city-type");
bg.onchange = function () {
    let index = document.getElementById('city-type').selectedIndex;
    document.body.className = document.getElementById('city-type')[index].className;
}


