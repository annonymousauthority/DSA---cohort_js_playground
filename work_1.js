/*

Question: 
Write a function that checks a lists of numbers if a value is a prime number but stops checking if a non-positive value is discovered.
Write this function in both function declaration and function expression style.

*/
// ------------------------------------------------
/*
what is a prime number?

- A number greater than 1 that cannot be divided by any other whole number other than 
itself. 
- All prime numbers greater than 2 are odd numbers (odd prime),
therefore any number greater than 2 is that is dvisible by 2 is not a prime number
 */

const test1 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, -22, null, 55, 1001, 19, null];

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  if (number == 2) {
    return true;
  }

  return number % 2 != 0;
}

checkNonPositive(test3);
function checkNonPositive(arr) {
  for (p of test3) {
    if (p < 0 || p == undefined || p == null) {
      console.log(p, "Naah not going to continue");
      return;
    } else {
      console.log(p, isPrime(p));
    }
  }
}

checkNonPositive_(test3);
let checkNonPositive_ = function (arr) {
  for (p of test3) {
    if (p < 0 || p == undefined || p == null) {
      console.log(p, "Naah not going to continue");
      return;
    } else {
      console.log(p, isPrime(p));
    }
  }
};
