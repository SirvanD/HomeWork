let userSays = prompt("What would you like to say to Grandma?");

while (userSays !== "BYE") {
    if (userSays === userSays.toUpperCase()) {
        alert("NO, NOT SINCE 1938!");
    } else {
        alert("HUH?! SPEAK UP, SONNY!");
    }
    userSays = prompt("What else would you like to say to Grandma?");
} 