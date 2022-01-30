// Write a while loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// 1 x 9 = 9
// 2 x 9 = 18
// 3 x 9 = 27
// 4 x 9 = 36 ...(more lines omitted)

var baseNumber = 1;

while (baseNumber < 10) {
    console.log(baseNumber + " x 9 = " + (baseNumber * 9));
    baseNumber = baseNumber + 1
}