// IMPORTANT!!! answer the following using javascript only and without modifying any HTML

// 1. change the text "sun" to "cheese"
document.querySelector('#sun').textContent = 'cheese';

// 2. change the text "welcome to the universe" to "do not change any html code"
document.querySelector('h1').textContent = 'do not change any html code';

// 3. change the text "mercury" to 5
document.querySelector('#mercury').textContent = "5";

// 4. change the text "mars" to your favourite number (pick any number)
document.querySelector('#mars').innerText = "11";

// 5. change the font colour of jupiter to purple
document.querySelectorAll('.jupiter')[1].style.color = 'purple'

// 6. clicking on the plus one button should increment your favourite number by one. clicking again should increment again.
var plusOne = document.querySelector('.plus-one-btn');

function addOne() {
    var strNum = document.querySelector('#mars').innerText;
    var number = Number(strNum);    
    document.querySelector('#mars').innerText = number + 1;
}

plusOne.addEventListener('click', addOne)

// 7. change the text "saturn" to "sega saturn"
document.querySelector('.saturn').value = 'sega saturn';

// 8. clicking on the tomato color button should set the background colour of pluto to tomato
var tomato = document.querySelector('.tomato-color-btn');

function redPluto() {
    document.querySelector('#pluto').style.backgroundColor = 'tomato';
}

tomato.addEventListener('click', redPluto);

// 9. using the className property set pluto to have the class dwarf-planet
document.querySelector('#pluto').className = 'dwarf-planet'