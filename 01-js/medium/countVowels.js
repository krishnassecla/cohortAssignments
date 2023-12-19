/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let lowerStrArr = lowerStr.split("");
  let vowelCount = 0;
  for (let i = 0; i < lowerStrArr.length; i++){
    if (lowerStrArr[i] == 'a' || lowerStrArr[i] == 'e' || lowerStrArr[i] == 'i' || lowerStrArr[i] == 'o' || lowerStrArr[i] == 'u'){
      vowelCount++;
    }
  }
  return vowelCount;
}
module.exports = countVowels;