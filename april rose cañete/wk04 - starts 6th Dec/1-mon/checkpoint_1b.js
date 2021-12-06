 console.log('checkpoint');


 // 1. Vowel Count

    function vowelCount(string) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var strSplit = string.toLowerCase().split('');
        var numOfVowels = strSplit.filter(char => vowels.includes(char)).length

        return numOfVowels;
    }


// 2. Grandma returns

    var message = prompt('talk to grandma');
    var yearsList = [];

    function yearRange(yearFrom, yearTo) {    
        
        for (let i = yearFrom; i <= yearTo; i++) {  
            yearsList.push(i);
        }
        return yearsList;
    }

   // console.log(message);
    var userInputs = [];

    while (userInputs.length != 3) {

        yearRange(1930, 1950);

        var randIdx = Math.floor(Math.random() * yearsList.length);

        message = prompt(yearsList[randIdx]); 

        if (message == 'BYE') {
         userInputs.push(message);
        }

        // if (message == message.toUpperCase()) {
        //     message = prompt('NO, NOT SINCE 1938!');
        // } else {
        //     message = prompt('HUH?! SPEAK UP, SONNY!'); 
        // 
        // }
   }
 

// 3. Lord buckethead

    var users = {
        theresa: {
        party: "Conserative",
        favoriteNumbers: [12, 42, 75]
        },
        Lord_Buckethead: {
        party: "Gremloids",
        favoriteNumbers: [8, 12, 24, 9]
        },
        mr_fishfinger: {
        party: "Independent",
        favoriteNumbers: [12, 14, 85, 99, 1001]
        }
    }


    // access theresa's party 
    console.log(users.theresa.party);

    // access Lord Buckethead's party
    console.log(users.Lord_Buckethead.party);

    // change mr fishfinger's party to "birds eye"
    console.log(users.mr_fishfinger.party = 'birds eye'); 








