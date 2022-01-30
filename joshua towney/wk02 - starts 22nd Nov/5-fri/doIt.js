document.querySelector('#sun').textContent = 'cheese';
document.querySelector('h1').textContent = 'do not change my html code';
document.querySelector('#mercury').textContent = '5';
document.querySelector('#mars').textContent = '23';
document.querySelectorAll('.jupiter')[1].style.color = 'purple';
//use all to set up a faux array to select the second .jupiter
document.querySelector('.saturn').value = 'sega saturn';
document.querySelector('#pluto').className = 'dwarf planet';


var plusOneButton = document.querySelector('.plus-one-btn');
var tomatoColorButton = document.querySelector('.tomato-color-btn');
var mars =  document.querySelector('#mars');
var newPluto = document.querySelector('#pluto');


//var mars =  document.querySelector('#mars').textContent creates a copy and stopped the number from incrementing on the page bt it still incremenets in consolelog Removing.textContent from the variable address lets us alter the page congtent. 
function favPlusOne() {
    mars.textContent++;
}

function plutoBackgroundChange() {
    newPluto.style.backgroundColor = 'tomato';
}

plusOneButton.addEventListener('click', favPlusOne);
tomatoColorButton.addEventListener('click', plutoBackgroundChange);



