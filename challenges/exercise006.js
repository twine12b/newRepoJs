/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required"); // if arr ia NOT Array
  let total = 0;

  arr.forEach(n => {
    n % 3 === 0 || n % 5 === 0 ? total += n : "";
  });

  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (Object.prototype.toString.call(str) === '[object String]') {
    // do nothing - refactor this
  } else {
    return false;
  }

  // Convert String to CharArray.
  const charArray = str.split('');
  var isValid = true;
  var dns = /^[A-Aa-aC-Cc-cT-Tt-tG-G-g-g]+$/;  //Regexp for CGTA-cgta - multi "OR statement" not working

  // If Char NOT C|G|T|A return false
  charArray.forEach(i => {
    !i.match(dns) ? isValid = false : "";
  });

  return isValid;


};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  // example borrowed from https://www.w3resource.com/javascript-exercises/javascript-string-exercise-1.php
  if (Object.prototype.toString.call(str) !== '[object String]') throw new Error("not a  valid string");
  if (!isValidDNA(str)) throw new Error("not a Valid DNA string");

  var charArr = str.split('');  // convert str to character array
  let compDNA = "";

  // Nested if could be refactored as a switch
  charArr.forEach((c) => {
    if (c === "C")
      compDNA += "G";
    else if (c === "G")
      compDNA += "C";
    else if (c === "A")
      compDNA += "T";
    else if (c === "T")
      compDNA += "A";
  });

  return compDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n === 1) throw new Error("1 is neither prime nor composite number");
  if (n <= 0) throw new Error("zero and negative numbers are not true primes");
  if (!Number.isInteger(n)) throw Error("n is not an integer");
  var isPrime = true;

  if (n - Math.floor(n) > 0) {
    n = parseInt("" + n);
  }

  /** looping through 2 to n-1
   * url: https://www.programiz.com/javascript/examples/prime-number
   * url: https://primes.utm.edu/notes/faq/negative_primes.html
   */
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (!Array.isArray(staff)) throw new Error("not a staff object"); // if arr ia NOT Array

  if (staff.length === 0) {
    return false;
  }

  let staffScheduledToWork = 0;

  staff.forEach((member) => {
    member.rota.includes(day) ? staffScheduledToWork += 1 : "";
  });

  return staffScheduledToWork >= 3 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
