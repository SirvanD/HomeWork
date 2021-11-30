console.log('make them green')

// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

var divs = document.querySelectorAll('.green');

function turnRed(event) {
    let clickedOnBox = event.target;
    if ((divs[0].className == "red") && (divs[1].className == "red") && (divs[1].className == "red")) {
        turnGreen()
    } else if (clickedOnBox.className == "green") {
        clickedOnBox.className = "red";
    } else {
        clickedOnBox.className = "green";
    }
}

divs.forEach(function(boxes) {
    boxes.addEventListener('click', turnRed);
})

function turnGreen() {
    divs[0].className = "green";
    divs[1].className = "green";
    divs[2].className = "green";
}

// function turnGreen(event) {
//     let clickedOnBox = event.target;

//     if (clickedOnBox.className == "green") {
//         clickedOnBox.className = "red";
//     } else {
//         clickedOnBox.className = "green";
//     }
// }

// divs.forEach(function(boxes) {
//     boxes.addEventListener('click', turnGreen);
// })


// if all 3 boxs are red, change them to green
//cycle through the array and check if every index has a class of red
//store the yes info somewhere
//if yes = 3 classes all change back to green