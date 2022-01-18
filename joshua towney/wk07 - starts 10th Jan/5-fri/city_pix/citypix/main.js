
const cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];
const cityPics = {
    'Select a City': 'citipix_skyline.jpg',
    'NYC': 'nyc.jpg',
    'SF': 'sf.jpg',
    'LA': 'la.jpg',
    'SYD': 'sydney.jpg',
    'ATX': 'austin.jpg' 
};
var dropdown = document.querySelector('#city-type');

cities.forEach(city => {
    var option = document.createElement('option');
    option.text = city; // create element 'option' with a value of the city in the active loop
    dropdown.add(option);
});

var form = document.querySelector('form');
var selectedCity = '';

form.addEventListener('change', () => {
    selectedCity = document.querySelector('#city-type').selectedOptions[0].value; //selected item in dropdown always in position 0
    document.querySelector('body').style.backgroundImage = `url("images/${cityPics[selectedCity]}")`;
    //document.body.className = selectedCity
});