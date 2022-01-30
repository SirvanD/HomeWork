
// 1. transmogrifier

    function transmogrifier(num1, num2, num3) {
        
        return Math.pow((num1 * num2), num3);
        // (num1 * num2) * num2;
    }

// 2. sum

    function sum(numArr) {
        var num = 0;

        for (let i = 0; i < numArr.length; i++) {
            
             num = num + numArr[i];
             
        }

        return num;
    }


// 3. lengths

    function lengths(strArr) {
        var itemLengths = [];

        for (let i = 0; i < strArr.length; i++) {

            itemLengths.push(strArr[i].length);
        }

        return itemLengths;
    }

// 4. sum of lengths

var fruits = ['kiwi', 'apple', 'mango'];
var fruitLen = lengths(fruits);
var sumOfFruitLen = sum(fruitLen);

console.log(sumOfFruitLen);

// 5. Make Them Green




