

//using a while loop print the following in the console:

counter = 18
while(counter > 0) {
    if(counter % 2 == 1) {
        console.log(counter);
    }
    counter --;
}

//loop through the days array using a while loop to print the following in the console

var days = ["Thursday", "Friday", "Saturday", "Sunday"];
counter = 0

while(counter < 4){
    console.log(counter + " " + days[counter])
    counter ++;
}
