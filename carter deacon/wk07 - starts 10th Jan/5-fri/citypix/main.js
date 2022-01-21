const cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];
var selector = document.querySelector('#city-type');

cities.forEach(city => {
    var option = document.createElement('option');
    option.textContent = city;
    selector.appendChild(option);
});

function handleBackground() {
    document.body.removeAttribute("class");
    if (selector.value == 'NYC') {
        document.body.classList.add('nyc')
    } else if (selector.value == 'LA') {
        document.body.classList.add('la')
    } else if (selector.value == 'SF') {
        document.body.classList.add('sf')
    } else if (selector.value == 'ATX') {
        document.body.classList.add('austin') 
    } else if (selector.value == 'SYD') {
        document.body.classList.add('sydney')
    }
}

selector.addEventListener('change', handleBackground);
