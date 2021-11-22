const readingList = [
    { title: 'Harry Potter', author: 'J K Rowling', alreadyRead: 'false'},
      { title: 'Donnie Darko', author: 'Richard Kelly', alreadyRead: 'true'},
    {title: 'This will be funny someday', author: 'Katie Henry', alreadyRead: 'false'}
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
        if (book.alreadyRead === 'true'){
          console.log(`You already read "${book.title}"  by ${book.author}`);
        } else {
          console.log(`You still need to ready "${book.title}" by ${book.author}`);
        }
      }


      //////IMBD

      const favMovie = {
        title: 'Prisoners',
        duration: 70,
        stars: ['Jake Gyllenhall', 'His sister']
      };
      
        function  movie1 (movie) {
        console.log(`${favMovie.title} last for ${favMovie.duration} minutes. Stars: ${favMovie.stars.join(', ')}`);
      
      };
      console.log(movie1);
      


      ///////////////

      var word = '';
      var word2 = '';

      function join (word, word2) {
       return word + word2   
    }
     join('dog', 'house')

      ///////


      ////////THE PLURALIZER

      var enterNumber = '';
      var enterAnimal = '';

      function plural (enterNumber, enterAnimal){
      return enterNumber + enterAnimal;
    }

    if (enterNumber > 1){ 
    console.log(`${enterNumber} ${enterAnimal}s`)
    } else {
        console.log(`${enterNumber} ${enterAnimal}`)
    }
      

      if (enterNumber > 1){ 
      console.log(`${enterNumber} ${enterAnimal}s`)
      } else {
          console.log(`${enterNumber} ${enterAnimal}`)
      }
    
      
    ////////Word Order Reverse
 
    //   var 

    // function wordReverse () {
    //     var doIt = 
    // }




