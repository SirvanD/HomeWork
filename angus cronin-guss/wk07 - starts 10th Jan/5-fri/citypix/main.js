const select = document.querySelector('select');
var body = document.querySelector('body');
var btn = document.createElement('button');

cities = [
    'NYC', 
    'SF',
    'LA',
    'SYD',
    'ATX'
]

cities.forEach(city => {
    let option = document.createElement('option')
    option.textContent = city
    
    
    select.appendChild(option)
});



