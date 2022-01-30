// IMPORTANT!!! answer the following using javascript only and without modifying any HTML

// 1. change the text "sun" to "cheese"
// document.querySelector('#sun').textContent = 'cheese';

// 2. change the text "welcome to the universe" to "do not change any html code"

document.querySelector('h1').textContent = 'do not change any html code';
// 3. change the text "mercury" to 5
document.querySelector('#mercury').textContent = '5';
// 4. change the text "mars" to your favourite number (pick any number)
document.querySelector('#mars').textContent = '37';
// 5. change the font colour of jupiter to purple
document.querySelector("li.jupiter").style.color = 'purple';
// 6. clicking on the plus one button should increment your favourite number by one. clicking again should increment again.
var plusOneBtn = document.querySelector('.plus-one-btn');
function plusOne() {
    var favNum = document.querySelector('#mars').textContent;
    favNum = Number(favNum) + 1;
    document.querySelector('#mars').textContent = favNum;
};
plusOneBtn.addEventListener('click', plusOne);
// 7. change the text "saturn" to "sega saturn"
document.querySelector('input.saturn').value = "sega saturn";
// 8. clicking on the tomato color button should set the background colour of pluto to tomato
document.querySelector('button.tomato-color-btn').onclick = function () {
    document.querySelector('#pluto').style.backgroundColor = "tomato";
}
// 9. using the className property set pluto to have the class dwarf-planet
document.querySelector('#pluto').className = "dwarf-planet";
