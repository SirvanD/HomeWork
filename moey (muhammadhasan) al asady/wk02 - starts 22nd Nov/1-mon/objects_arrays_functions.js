const readingList = [
    { title: 'Harry Potter', author: 'J K Rowling', alreadyRead: false},
      { title: 'Donnie Darko', author: 'Richard Kelly', alreadyRead: true},
    {title: 'This will be funny someday', author: 'Katie Henry', alreadyRead: false}
];

// if (alreadyRead == true){ 
//     console.log(`You already read ${readingList[1].title} by ${readingList[1].author}`)} 
//     else {
//         console.log(`You need to read ${readingList[0].title} by ${readingList[0].author}.`);
//         console.log(`You need to read ${readingList[2].title} by ${readingList[2].author}.`);


//     }

//     console.log(`${readingList[0].title} by ${readingList[0].author}.`);
//     console.log(`${readingList[1].title} by ${readingList[1].author}.`);
//     console.log(`${readingList[2].title} by ${readingList[2].author}.`);


    for (let i = 0; i < readingList.length; i++ ) {
        const book = readingList[i];
        const bookInfo = `"${ book.title} by ${book.author}"`;
        if (book.alreadyRead === true){
          console.log(`You already read "${book.title}"  by ${book.author}`);
        } else {
          console.log(`You still need to ready "${book.title}" by ${book.author}`);
        }
      }


//       //////IMBD

      const favMovie = {
        title: 'Prisoners',
        duration: 70,
        stars: ['Jake Gyllenhall', 'His sister']
      };
      
        function  movie1 (movie) {
        console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`);
      };
        movie1(favMovie);   


//       ///////////////


      function combineWords (word, word2) {
       return word + word2   
    }

    var result = combineWords('bread', 'maker');
    console.log(result)
    ;


//       ///////


//       ////////THE PLURALIZER

    
    function plural (enterNumber, enterAnimal){
        if (enterNumber > 1){ 
            console.log(`${enterNumber} ${enterAnimal}s`)
        } else {
            console.log(`${enterNumber} ${enterAnimal}`)
        }
    //   return enterNumber + enterAnimal;
    }
    var result1 = plural('5', 'dog')
    console.log(result1)
//     ////////Word Order Reverse
 function wordReverse (sentence){
    var final = sentence.split(' ').reverse().join(' ');
     return final
 }
 wordReverse('We are good friends')


    //////find longest work

//  findLongestWordLength(['my', 'cake', 'pudding']) // => 7
//  findLongestWordLength(['I', 'love', 'css']) // => 4

function longestWord (words) {
    var longestWordLength = words[0].length 

    var index = 0;

    while (index < words.length) {
        var currentWord = words[index];

        if (currentWord.length > longestWordLength) {
            longestWordLength = currentWord.length;
        }

        // var currentLongestLength = words[index].length
        index = index + 1;
    }
    // console.log(longestWordLength)
    return longestWordLength
}
longestWord(['my', 'cake'])




//// word reverse 

'We are good friends'.split(' ').reverse().join(' ')


