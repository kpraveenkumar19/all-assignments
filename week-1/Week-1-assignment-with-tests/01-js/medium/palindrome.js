/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var first=0;
  var last=str.length-1;
  str=str.toLowerCase();
  while(first<last){
    if(str[first]!=str[last]){
      return false;
    }
  first++;
  last--;
  }
  return true;
}

module.exports = isPalindrome;
