const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n && i + 1 < nums.length) { // return next elem if NOt end of list
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {0: 0, 1: 0};  // create empty object - initialise key values to zero

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    /**
     * Harriet Ryders - video example
     *
     if(frequencies[char] === undefined){
          frequencies[char] = 1; // add value pairs to object
        } else {
          frequencies[char] += 1;
        }
     */

    frequencies[char] === undefined ? frequencies[char] = 1 : frequencies[char] += 1;
  }
  return frequencies;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  // return (
  //     parseFloat(
  //         n
  //             .toString()
  //             .split('')
  //             .reverse()
  //             .join('')
  //     )
  // )

  /**
   * ref: https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
   * create a string from the number
   * split the string into an array of chars
   * reverse the string order
   * re-join the chars
   * convert the reversed string into a float
   * return results
   */
  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = 0;

  arrs.forEach((subArr) => {
    for (let i = 0; i < subArr.length; i++) {
      sum += subArr[i];
    }
  });

  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length >= 1) {  //fix for empty array
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  var isFound = false; // always false unless toggled true by the if condition

  for (let key in haystack) {
    // convert strings to same case to satisfy test scenario
    haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase()) ? isFound = true : "";
  }

  return isFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var wordArr = str.split(' '); //split str into an array or words
  const wordFrequency = {};  // empty object}

  /** fix format of wordArr by
   * - removing special characters
   * - converting to lowerCase
   *
   * [Transformation]   *
   */
  wordArr = wordArr.map((word) => {
    return word.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  });

  /**
   * - Add word to list with value of [1] if it does not already exist
   * - if it exists add 1 to words value
   */
  wordArr.forEach((word) => {
    // console.log("word:  " +wordArr[word]);
    wordFrequency[word] === undefined ? wordFrequency[word] = 1 : wordFrequency[word] += 1;

  });

  return wordFrequency;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
