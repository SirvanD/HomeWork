/* eslint-disable no-unused-expressions */
function checkPass(passInput) {
  const output = {};
  var score = 0;

  const passArr = passInput.split("");
  const lowerCases = passArr.filter((pass) => pass.match(/[a-z]/));

  const upperCases = passArr.filter((pass) => pass.match(/[A-Z]/));
  const numbers = passArr.filter((pass) => pass.match(/[0-9]/));

  const nonAlphanumerics = passArr.filter((pass) =>
    pass.match(/[^A-Za-z0-9]/g)
  );
  const isOver8Char = passArr.length > 8;
  const isOver12Char = passArr.length > 12;
  console.log(isOver8Char);
  console.log(isOver12Char);

  lowerCases.length > 0 ? (score += 1) : score;
  upperCases.length > 0 ? (score += 1) : score;
  numbers.length > 0 ? (score += 1) : score;
  nonAlphanumerics.length > 0 ? (score += 1) : score;
  isOver8Char ? (score += 1) : score;
  isOver12Char ? (score += 1) : score;

  output["score"] = score;
  output["hasLowerCase"] = lowerCases.length > 0 ? true : false;
  output["hasUpperCase"] = upperCases.length > 0 ? true : false;
  output["hasNumber"] = numbers.length > 0 ? true : false;
  output["hasNonAlphaNumeric"] = nonAlphanumerics.length > 0 ? true : false;
  output["isOver8Char"] = isOver8Char;
  output["isOver12Char"] = isOver12Char;
  return output;
}

console.log(checkPass("puddingdfsdfgsdfgfsddfssdfvAFFAF12112#$!"));
console.log(checkPass("pAF112#$!"));

module.exports = checkPass;
