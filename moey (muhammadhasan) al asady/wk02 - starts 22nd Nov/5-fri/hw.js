//.2
document.querySelector('h1').textContent = 'do not change any html code';


//.3
document.querySelector('#mercury').textContent = '5'


//.4 fav num
document.querySelector('#mars').textContent = '7'


//.5
document.querySelectorAll('li')[5].style.color = "purple"

//.6


var mars = document.querySelector('#mars'); 

var plusOneBtn = document.querySelector('.plus-one-btn');


function handleClick () {
var number = Number(mars.textContent) + 1;
mars.textContent = number
}
plusOneBtn.addEventListener('click', handleClick);

//.7

document.querySelector('.saturn').value = 'sega saturn'

//.8 

var tomoatoBtn = document.querySelector('.tomato-color-btn');

var pluto = document.querySelector('#pluto')

function turnRed () {
    pluto.style.background = 'red'
}

tomoatoBtn.addEventListener('click',turnRed )


//.9
pluto.classList.add ('dwarf-planet')

