function isPalindrome(string) {
      let revString = '';
      for( let i = string.length - 1; i>= 0; i--) {
          revString += string[i];
      }
      return string === revString;
  }
 
  exports.isPalindrome = isPalindrome;
  