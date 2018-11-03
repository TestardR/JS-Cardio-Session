// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

// Solution - ES5 arguments & for loop
function addAll() {
  var args = Array.prototype.slice.call(arguments); // turn into an array
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(addAll(2, 5, 6, 7));

// Solution - ES6 ...rest & forEach/reduce
//...numbers : rest operator turns into an array
function addAll(...numbers) {
  let total = 0;
  numbers.forEach(num => (total += num));
  return total;
}

// Solution 2 - ES6 with reduce
function addAll(...numbers) {
  return numbers.reduce((add, curr) => acc + curr);
}

// CHALLENGE 3: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10));
