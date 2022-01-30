
// Question 1
var counter = 0;
while (counter < 20) { 
    counter = counter + 1;
    if (counter % 2 === 0) {
        console.log(counter + " is even.");
         
    } else {
        console.log(counter + " is odd.");
         
    }
}

// Question 2

var nines = 0;
while (nines < 10) {
    nines = nines + 1;
    console.log(nines + " x 9 " + "= " + nines * 9 )
}

// Question 3
var colors = ["blue", "orange", "grey", "red", "green"];
var choices = ["My #1 choice is ", "My #2 choice is ", "My #3 choice is ", "My #4 choice is ", "My #5 choice is "];
var count = -1;
    while (count < 4) {
        count = count + 1;
        console.log(choices[count] + colors[count])
    }