


document.querySelector('#sun').textContent = 'cheese';
document.querySelector('h1').textContent = 'do not change any html code';
document.querySelector('#mercury').textContent = '5';
document.querySelector('#mars').textContent = '23';
document.querySelectorAll('.jupiter')[1].style.backgroundColor = 'purple';

var plusOneButton = document.querySelector('.plus-one-btn');
var tomatoColorButton = document.querySelector('.tomato-color-btn');
var destroyAllPlanetsButton = document.querySelector('.destroy-btn');
var marsText = document.querySelector('#mars').textContent


var favNumber = 23;

function plusOne(){
    favNumber++
    document.querySelector('#mars').textContent = favNumber;
}

function tomatoPluto(){
    document.querySelector('#pluto').style.backgroundColor = 'tomato'
}

function obliterate(){
    document.children[0].children[1].children[2].style.visibility = 'hidden'
}


tomatoColorButton.addEventListener('click', tomatoPluto)
plusOneButton.addEventListener('click', plusOne);

document.querySelector('.saturn').value = 'sega saturn';

document.querySelector('#pluto').className = 'dwarf-planet';

destroyAllPlanetsButton.addEventListener('click', obliterate);