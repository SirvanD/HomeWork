// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue.


//  first create an array (nsync members lol)

var favourites = [
    'Justin',
    'Lance',
    'Joey',
    'JC',
    'Chris',
];

var number = 0;

//test these in the console at each step

// then use a while loop to output your choices in order 

// the goal is to log every item in order (my first choice is etc)

while (number < favourites.length) {
    console.log("my # ", number, "is ", favourites[number]);
    number = number + 1;
  }

