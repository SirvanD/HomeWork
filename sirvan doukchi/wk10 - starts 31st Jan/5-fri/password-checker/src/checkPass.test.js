let checkPass = require("./checkPass.js");

test("1 point for lowercase", () => {
  expect(checkPass("pudding")).toEqual({
    score: 1,
    hasLowerCase: true,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  });
});

test("1 point for uppercase", () => {
  expect(checkPass("CAKE")).toEqual({
    score: 1,
    hasLowerCase: false,
    hasUpperCase: true,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  });
});

test("6 points for lowercase,uppercase,number,nonalphanumeric,over8char,over12char", () => {
  expect(checkPass("Forking$Legends2022")).toEqual({
    score: 6,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: true,
  });
});
