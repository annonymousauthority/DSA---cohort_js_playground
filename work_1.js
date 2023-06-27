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
  //if number is less than 2 it cant be prime
  if (number < 2) {
    return false;
  }

  //prime number if it is equal to 2 or 3
  if (number == 2 || number == 3) {
    return true;
  }

  //if number is even it can't be prime
  if (number % 2 == 0) {
      return false
  } 

  //the formula for getting prime number is: primeNumber = 6(n) -1 or 6(n) + 1, since we know the supposed prime number all we need to get is the n, if the n is a whole number then it is most likely a prime number
  let coPrime1 = (number - 1)/6
  let coPrime2 = (number + 1)/6

  //Not all coPrime numbers that are whole are prime numbers, still need some checks to confirm

  if (coPrime1 % 1 == 0) {
      return isCoprimePrime(coPrime1, number)
  }

  if (coPrime2 % 1 == 0) {
      return isCoprimePrime(coPrime2, number)
  }

  return false
}

function isCoprimePrime(coprime, number) {
  //formula correct for numbers up to 24
  if (number < 25) {
    return true
}

  //from the formula we can extrapolate that the closest number to a divisible prime is 6(n)
  let divisibleNumber = Math.floor(coprime/6)
  
  //if it does't have a remainder, it is a prime
  let isPrime_ = number/divisibleNumber % 1 != 0

  //still some multiples of prime pass through which we now is not a prime, dividing the prime by lower primes only will let us know if it's a prime or a multiple of a prime
  if (isPrime_) {
      return isMutipleOfPrime(number)
  }

  divisibleNumber = Math.floor(coprime/6) -1

  isPrime_ = number/divisibleNumber % 1 != 0

  if (isPrime_) {
      return isMutipleOfPrime(number)
  }
  return isPrime_
}

function isMutipleOfPrime(number) {
  let primeMutiple = 0

  //for each prime number till the number we will check if it is divisible by a prime
  for (let index = 1; primeMutiple <= number; index++) {
      let prime = (6 * index) - 1

      if (number/prime % 1 == 0) {
          
          return false
      }
      
      prime = (6 * index) + 1
      
      if (number/prime % 1 == 0) {
          return false
      }
      
      primeMutiple = prime*prime
  }
  return true

}

let checkNonPositive = (arr) => {
  for (p of arr) {
    if (p < 0 || p == undefined || p == null) {
      console.log(p, "Naah not going to continue");
      return;
    } else {
      console.log(p, isPrime(p));
    }
  }
}

checkNonPositive(test3);
// checkNonPositive_(test3);
// let checkNonPositive_ = function (arr) {
//   for (p of arr) {
//     if (p < 0 || p == undefined || p == null) {
//       console.log(p, "Naah not going to continue");
//       return;
//     } else {
//       console.log(p, isPrime(p));
//     }
//   }
// };
