/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1Arr = str1.split("");
  str2Arr = str2.split("");
  str1Arr.sort();
  str2Arr.sort();
  console.log(str1Arr, str2Arr);
  if (str1Arr.join() == str2Arr.join()){
    return true;
  }else{
  return false;
  }
}

module.exports = isAnagram;
