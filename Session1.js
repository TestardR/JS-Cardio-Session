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

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 123

function reverseInt(int) {
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

//////////////////////////////
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

//////////////////////////////
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

///////////////////////////
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}
