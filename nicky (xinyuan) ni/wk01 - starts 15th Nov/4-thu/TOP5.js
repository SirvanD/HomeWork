const topSnacks = ["Twix", "Snickers", "M&M", "Diam", "KitKat"]

var i = 0;

while (i + 1<= topSnacks.length) {
    if(i < 1){
        console.log("My 1st choice is " + topSnacks[i])
    } else if(1 <= i && i < 2) {
        console.log("My 2nd choice is " + topSnacks[i])
    } else if(2 <= i && i < 3) {
        console.log("My 3rd choice is " + topSnacks[i])
    } else {
        console.log("My " + Number(i + 1) +"th choice is " + topSnacks[i])
    }
    i++
}

