function longestWordLength(input){
    
    var inputArr = input.split(' ');

    var index = 0
    var length = 0

    while(index <inputArr.length){
        if(inputArr[index].length >length){
            length = inputArr[index].length
        }
        index++;
    }
  
   console.log(length)
}



