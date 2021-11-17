//city.js
let city = process.argv[2];

let responses = [
    `Oh i love ${city}!`,
    `Man I've never been to ${city}`,
    `Jeez  ${city} is a bit of a dump!`,
    `I have family from ${city} !`,
    `far out - i thought ${city} burnt down!`,
    `They love cake alot in ${city}!`
];
console.log(responses[Math.floor(Math.random()*responses.length)]);
