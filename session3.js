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

// CHALENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array.
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [4, 4, 'hello']

// Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

// Solution 2: rest, filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
