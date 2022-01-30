console.log("universe");

//1
document.querySelector('#sun').textContent = 'cheese';
//2
document.querySelector('h1').textContent = 'do not change any html code';
//3
document.querySelector('#mercury').textContent = '5';
//4
var favNum = 42;
document.querySelector('#mars').textContent = favNum;
//5
document.querySelectorAll('.jupiter')[1].style.color = 'purple'

//6
var favNum = 42;
var plusOneButton = document.querySelector('.plus-one-btn');
plusOneButton.addEventListener('click',plusOne);
function plusOne(){
    favNum++; 
    document.getElementById('mars').textContent = favNum;
}

//7
document.getElementsByClassName('saturn').value = 'sega saturn';

//8
var pluto = document.getElementById('pluto');
var colorChangeButton = document.querySelector('.tomato-color-btn');
colorChangeButton.addEventListener('click',colorChange);
function colorChange(){
    pluto.style.backgroundColor = 'tomato'; 
}

//9
function addClass() {
    var element = document.getElementById('pluto');
    element.classList.add('dwarf-planet');
}


