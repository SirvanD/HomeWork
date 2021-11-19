
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
var count = 0;
    while (count < 4) {
        count = count + 1;
    console.log("My fav fruit is " + colors[count])
    }