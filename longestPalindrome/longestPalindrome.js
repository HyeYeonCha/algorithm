let longestPalindrome = function (str) {
    if (str.length < 2) return str.length;
   
     const strLen = str.length;
     const isPalindrome = Array(strLen).fill(false).map(() => Array(strLen).fill(false));
   
     let maxLen = 1;
     for (let i = 0; i < strLen; i++) isPalindrome[i][i] = true;
   
     for (let i = 0; i < strLen - 1; i++) {
       if (str[i] === str[i + 1]) {
         isPalindrome[i][i + 1] = true;
         maxLen = 2;
       }
     }
   
     for (let len = 3; len <= strLen; len++) {
       for (let startIdx = 0; startIdx <= strLen - len; startIdx++) {
         const endIdx = startIdx + len - 1;
         if (isPalindrome[startIdx + 1][endIdx - 1] === true && str[startIdx] === str[endIdx]) {
           isPalindrome[startIdx][endIdx] = true;
           maxLen = len;
         }
       }
     }
   
     return maxLen;
   };
   