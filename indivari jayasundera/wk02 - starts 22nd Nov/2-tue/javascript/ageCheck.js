var hasId = "yes";
var age = 43;

if (hasId == "yes") {
  if (age >= 75) {
    console.log("Are you sure , you want to be here?");
  } else if (age >= 21) {
    console.log("common in");
  } else if (age >= 18) {
    console.log("Common in but no drinking!");
  } else {
    console.log("You are too young to be in here!");
  }
} else {
  console.log("No ID , NO Entry !!!");
}
