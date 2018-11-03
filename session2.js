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
