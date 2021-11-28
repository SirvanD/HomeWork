//.2
document.querySelector('h1').textContent = 'do not change any html code';


//.3
document.querySelector('#mercury').textContent = '5'


//.4 fav num
document.querySelector('#mars').textContent = '7'


//.5
document.querySelectorAll('li')[5].style.color = "purple"

//.6
var num1 = document.querySelector('#mars').textContent; 

function favNum () {
    var plusMe = Number(num1) + 1;
    return num1;
}
window.addEventListener('click', favNum);

//7.i need help with this one ;/