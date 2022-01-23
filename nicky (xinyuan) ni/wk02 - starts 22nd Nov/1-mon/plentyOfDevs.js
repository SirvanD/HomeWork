var user = ['dt', 'aden', 'allison', 'bern', 'callum', 'cath', 'felipe', 'jian', 'jimmy', 'linda', 'matt', 'naveen', 'ned', 'peter', 'sam', 'sannan', 'sara', 'stephen', 'stuart', 'tom'];

// var index = 0

// while(index < user.length){
//    if(user[index] == 'dt'){
//       user[index] ='misty rose';
//    }
//    index++;
// }

// var indexCounter = 0

// while(indexCounter < user.length){
//    var name = user[indexCounter];
//    if(name[0] !== 'n'){
//      console.log(`${user[indexCounter]}`)
//    }
//    indexCounter++;
// }

var newUser = user.push('ryan', 'maya');
var finalUser = user.shift();
var index = 0

while(index < user.length){
   if(user[index].length == 3 || user[index].length == 5){
    console.log(user[index]);
   } 
   index++;
} 
