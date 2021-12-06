

function vowelCount(word){
    return new RegExp(/a|e|i|o|u/g).test(word.toLowerCase()) ? word.toLowerCase().match(/a|e|i|o|u/g).length : 0;
}

console.log(vowelCount('Spaghettification'));
console.log(vowelCount('HELLo'));
console.log(vowelCount('cake pudding'));


let conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
let isAllUpper = false;
let counter = 1;
while(counter<3){
        if(conversation !== conversation.toUpperCase()){
            alert('THE YEAR WAS ' + (Math.floor(Math.random()*21)+1930));
            counter = 1;
        } else if (conversation === 'BYE'){
            counter++;
            alert('U CANT LEAVE NOW SONNY!');
        }
        conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
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