console.log("converter");

var fahInput = document.querySelector(".fah-input");
var celSpan = document.querySelector(".cel-span");
var convertBtn = document.querySelector(".convert-btn");
var resetBtn = document.querySelector(".reset-btn");

// this function has nothing to do with the dom
// function fahToCel(fah) {
//   return ((fah - 32) * 5) / 9;
// }

// event handler
function handleConvert() {
  var celcius = ((Number(fahInput.value) - 32) * 5) / 9;
  console.log(celcius);
  celSpan.textContent = celcius;
}

// function resetToFah32() {
//   fahInput.value = 32;
//   celSpan.textContent = celcius;

// function handleConvert() {
//   var cel = ((Number(fahInput.value) - 32) * 5) / 9;
//   celSpan.textContent = Celsius
// }
// event - string

//input and change can be used instead of click and works on every keys.
convertBtn.addEventListener("click", handleConvert);
fahInput.addEventListener("input", handleConvert);
fahInput.addEventListener("change", handleConvert);

// either up or below works
// convertBtn.addEventListener("click", function() {
//   var fah = Number(fahInput.value);
//   var celcius = fahToCel(fah);
//   celSpan.textContent = celcius;
// });

// fahInput.addEventListener("change", handleConvert);

// reset to fah 32
