var counter = 17;

function isOdd(counter){
   return(counter % 2 !== 0)
}

while (counter >= 1 ){
   if (isOdd(counter)){
    console.log(counter)
   }
   counter--;
}

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
var i = 0

while (i + 1<= days.length) {
   console.log(i + " " + days[i])
   i++;
}



