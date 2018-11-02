// Challenge 1 : Reverse a String
// Return a string in reverse
// ex. reverseString('hello') === "olleh"

function reverseString(str) {
  const strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
}

// Cleaner way

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

//////////////////

function reverseString(str) {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

/////////////////

function reverseString(str) {
  let revString = '';
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

///////////////////
function reverseString(str) {
  let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}

///////////////////
function reverseString(str) {
  let revString = '';
  str.split('').forEach(function(char) {
    revString = char + revString;
  });
  return revString;
}

// Cleaner way ES6

function reverseString(str) {
  let revString = '';
  str.split('').forEach(char => {
    revString = char + revString;
  });
  return revString;
}

////////////////////

function reverseString(str) {
  return str.split('').reduce(function(revString, char) {
    return char + revString;
  }, '');
}

// Cleaner way ES6

function reverseString(str) {
  return str.split('').reduce((revString, char) => char + revString, '');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str
    .split('')
    .reverse('')
    .join('');

  return revString === str;
}
