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
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
