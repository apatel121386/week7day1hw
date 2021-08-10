// EXERCISE 1

//Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// Input: num1 = "11", num2 = "123"
// Output: "134"
// Input: num1 = "456", num2 = "77"
// Output: "533"
// Input: num1 = "0", num2 = "0"
// Output: "0"
// 

function Addstring(num1, num2) {
    let num3 = num1 + num2 + ''
    console.log(num3);
    console.log(typeof(num3));
  }
  Addstring(11,123)
  Addstring(456,77)
  Addstring(0,0)




// EXERCISE 2

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
// Input: x = 121
// Output: true
// Explanation: From left to right, it reads 121. From right to left, it becomes 121. Therefore it is a palindrome.
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// var Palindrome = function(x) {
// function Palindrome(x) {
  //   if (x < 0) {
  //     return false;
  //   }
  
  //   if (x < 10) {
  //     return true;
  //   }
  
  //   if (x % 10 === 0 && x !== 0) {
  //     return false;
  //   }
  
  //   const str = String(x);
  //   let i = 0, j = str.length - 1;
  
  //   while (i < j) {
  //     if (str[i] !== str[j]) {
  //       return false;
  //     }
  
  //     i++;
  //     j--;
  //   }
  
  //   return true;
    
  // };
  // Palindrome(121)
  // Palindrome(10)
  // Palindrome(-121)

//Brians solution
function Palindrome(x) {
  strX = x.toString()
  reversedString = ''
  for (let i = strX.length - 1; i >= 0; i--) {
      reversedString += strX[i]
  }
  return strX == reversedString 
}
console.log(Palindrome(121))
console.log(Palindrome(10))
console.log(Palindrome(-121))