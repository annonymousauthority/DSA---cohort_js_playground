/*
Given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 2450 = [2,4,5,0]

The digits are ordered from most significant to least significant in left-to-right order. 2450 -> Two Thousand four hundred and fifty

The large integer does not contain any leading 0's. 2450

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3] = 123 + 1
Output: [1,2,4]

Input: digits = [4,9,9] = 499 + 1
Output: [5,0,0]

Input: digits = [2,5,4] = 254 + 1
Output: [2,5,5]

*/

function largeIntegerSum(digits) {
  //   --> Figure out a way to turn the entire array back to numbers.
  // --> Increment that integer by one,
  // --> Turn back to an array and return that array.

  let arr = [];
  let largeNumber = +digits.join("");
  largeNumber++; // largeNumber = largeNumber + 1
  for (const num of String(largeNumber)) {
    arr.push(Number(num));
  }
  return arr;
}

console.log(largeIntegerSum([1, 2, 3]));
