

function vowelCount(word){
    return new RegExp(/a|e|i|o|u/g).test(word.toLowerCase()) ? word.toLowerCase().match(/a|e|i|o|u/g).length : 0;
}

console.log(vowelCount('Spaghettification'));
console.log(vowelCount('HELLo'));
console.log(vowelCount('cake pudding'));


let conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
let isAllUpper = false;
let counter = 0;
while(counter<3){
    //unclear whether
        if(conversation != 'BYE'){
            alert('HUH?! SPEAK UP, SONNY! ' + (Math.floor(Math.random()*21)+1930));
            counter = 0;
        }  else {
            counter++;
            alert('U CANT LEAVE NOW SONNY!');
        }
        //removed as the question says 'what ever you say' therefore it doesn't care about upper/lower
        // } else if (conversation.toUpperCase() === conversation){
        //     alert('NO, NOT SINCE 1938!');
        // }

        if(counter<3){
            conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
        } 
}
alert('FINE! BUGGER OFF THEN');


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

  console.log(users.theresa.party);
  console.log(users.Lord_Buckethead.party);

  users.mr_fishfinger.party = "birds eye";
  console.log(users.mr_fishfinger.party);