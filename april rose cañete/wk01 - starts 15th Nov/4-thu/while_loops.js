
  /** Activity 1: The even/odd reporter */ 
  
  function isEven(num) {
    return num % 2 == 0;
  }

  num = 0;

  // print number from 0-20 
  while (num <= 20) {
      // check if number is odd or even
      if (isEven(num)) {
          console.log(`${num} is even`);
      } else {
          console.log(`${num} is odd`);
      }
    num++;
  }


    /** Activity 2: Multiplication tables */

    var multiplicator = 9; 

    function multiply(num) {
      return num * multiplicator;
    }

    //console.log(multiply(2));

    num = 0;

    while (num <= 10) {
      console.log(`${num} x ${multiplicator} = ${multiply(num)}`);
      num++;
    }

    /** Activity 3: Your top choices */
    
    var bands = ['Last Dinasours', 'Ben and Ben', 'Coldplay', 'Queens', 'IV of Spades'];

    // reference: https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
    function numSuffix(num) {
        var a = num % 10;
        var b = num % 100;
        //console.log(a);

        if (a == 1 && b != 11) {
            return num + 'st';
        } else if (a == 2 && b != 12) {
            return num + 'nd';
        } else if (a == 3 && b != 13) {
            return num + 'rd';
        } else {
            return num + 'th'
        }   
    }
    //console.log(numSuffix(14));

    counter = 0;

    while (counter < bands.length) {
        var num = counter+1;
        
        console.log(`My ${numSuffix(num)} choice is ${bands[counter]}`);
        counter++;
    }
    
    


