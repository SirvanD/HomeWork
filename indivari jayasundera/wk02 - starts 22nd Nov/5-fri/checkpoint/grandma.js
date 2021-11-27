var userInput = prompt("Say something to Grandma! ");

function isUpperCase(text) {
  if (text === text.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

while (userInput != "BYE") {
  if (isUpperCase(userInput)) {
    alert("No, NOT SINCE 1938!");
  } else {
    alert("HUH?! SPEAK UP, SONNY");
  }
  userInput = prompt("Say something to Grandma! ");
}
