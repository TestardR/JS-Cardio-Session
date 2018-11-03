//CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Romain') === 'Romain'
// ex. longestWord('Hello there, my name is Mat') === ['hello', 'there']

function longestWord(sen) {
  // creat filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //   console.log(wordArr);

  // sort by length
  const sorted = wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  //   console.log(sorted);
  //   return sorted[0];

  // If multiple words, put into array
  const longestWordArr = sorted.filter(function(word) {
    return word.length === sorted[0].length;
  });
  //   console.log(longestWordArr);

  // Check if more than one array value
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

/////////////////// ES6 clean up

function longestWord(sen) {
  // creat filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //   console.log(wordArr);

  // sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  //   console.log(sorted);
  //   return sorted[0];

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  //   console.log(longestWordArr);

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

///////////////////// Solution 1

function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;

  // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length (len) and push on to the chunked array
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }
  return chunkedArr;
}

///////////////////// Solution 2
function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(function(val) {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if lasth length is equal to the chunk lengh (len)
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
    // console.log(chunkedArr);
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrayw and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

////////////// Solution 1

function flattenArray(arrays) {
  // The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
  return arrays.reduce(function(a, b) {
    return a.concat(b);
  });
}

////////////// Solution 2

function flattenArray(arrays) {
  return [].concat.apply([], arrays);
  //   return [].concat(arrays);
}

////////////// Solution 3
// Spread operator ...
// function add(a, b, c){
//     return a + b + c;
// }
// const arr = [1, 2, 3];
// console.log(add(...arr));

function flattenArray(arrays) {
  return arrays.concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return ture if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'ditry room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '') // replace anything that is not a word character.
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChangers(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u|y/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  return newStr;
}
