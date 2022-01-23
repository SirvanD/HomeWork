// Write a while loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen

var counter = 0;

while(counter <=20){
    if(counter % 2 == 0){
        console.log(counter + " is an even number")
    }else{
        console.log(counter + " is an odd number")
    }
    counter ++;
}