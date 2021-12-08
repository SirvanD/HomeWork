// var num1 = 4,
// var num2 = 3,
// var num3 = 2,





// function transmogrified (num1, num2, num3) {
//     (num1 + num2) * num3
// }

// transmogrified (num1, num2, num3);



//MAKE THEM GREEN

var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');

function turnRed(event){
    var userClick = event.target;
    console.log(event.target);
    userClick.disabled = true;
    userClick.style.backgroundColor = "red";


    if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
    }
}
// function turnRedd(event){
//     var userClick = event.target;
//     userClick.disabled = true;
//     box2.style.backgroundColor = "red";
//     if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
//         box1.style.backgroundColor = "green";
//         box2.style.backgroundColor = "green";
//         box3.style.backgroundColor = "green";
//     }
// }
// function turnReddd(event){
//     var userClick = event.target;
//     userClick.disabled = true;
//     box3.style.backgroundColor = "red";
//     if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
//         box1.style.backgroundColor = "green";
//         box2.style.backgroundColor = "green";
//         box3.style.backgroundColor = "green";
//     }
// }

// function turn

box1.addEventListener('click', turnRed);
box2.addEventListener('click', turnRed);
box3.addEventListener('click', turnRed);



// if (box1.backgroundColor == "red" && box2.backgroundColor == "red" && box3.backgroundColor == "red") {
//     box1.style.backgroundColor = "green";
//     box2.style.backgroundColor = "green";
//     box3.style.backgroundColor = "green";
// }






