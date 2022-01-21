// IMPORTANT!!! answer the following using javascript only and without modifying any HTML

// 1. change the text "sun" to "cheese"
// document.querySelector('#sun').textContent = 'cheese';

// 2. change the text "welcome to the universe" to "do not change any html code"
// 3. change the text "mercury" to 5
// 4. change the text "mars" to your favourite number (pick any number)
// 5. change the font colour of jupiter to purple
// 6. clicking on the plus one button should increment your favourite number by one. clicking again should increment again.
// 7. change the text "saturn" to "sega saturn"

// 8. clicking on the tomato color button should set the background colour of pluto to tomato
// 9. using the className property set pluto to have the class dwarf-planet

document.querySelector('#sun').textContent = 'cheese';

document.querySelector('h1').textContent = 'do not change any html code';

document.querySelector('#mercury').textContent = '5';

document.querySelector('#mars').textContent = '23';

document.querySelectorAll('.jupiter')[1].style.color = 'purple';

function plusone() {
    return document.querySelector('#mars').textContent = Number(document.querySelector('#mars').textContent) + 1;
}

document.querySelector('.plus-one-btn').addEventListener('click', plusone);

document.querySelector('.saturn').value = 'sega saturn';

function turnTomato() {
    document.querySelector('#pluto').style.backgroundColor = 'tomato';
}

document.querySelector('.tomato-color-btn').addEventListener('click', turnTomato);

document.querySelector('#pluto').className = 'dwarf-planet';
// document.querySelector('#pluto').setAttribute('class', 'dwarf-planet');