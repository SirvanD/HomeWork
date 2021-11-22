function findlongestWord(array) {
         var i = 0;
         var longestWord = array[i];
         while (i < array.length) {
             var currentWord = array[i]; 
             if(i > 0) {
                 var currentWordLength = currentWord.length;
                 if(currentWordLength > longestWord.length) {
                     longestWord = currentWord;
                 }
             }
            i ++;
         } 
         console.log(longestWord.length) 
     }
     findlongestWord(['matthew', 'red', 'panacota', ` we like to party`]);