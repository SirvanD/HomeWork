const relationship = true;
const serious = true;

//only two outcomes so test for romantic + serious first, otherwise the rest go to the pub!
if (relationship && serious ){
    console.log('Romantic dinner for two! --<<--@');
} else {
    console.log('Head to the closest bar!');
}