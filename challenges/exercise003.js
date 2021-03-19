function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squareNum = new Array();

  nums.map((n) => {
    squareNum.push(n * n)
  });

  // nums.forEach((n) => {
  //   squareNum.push(n * n);
  // });

  // I really like the algorithm using MAP from.
  //https://storage.googleapis.com/tech-returners-course/JavaScript_Challenges/JS_challenges_week3_squarenums_3ways.mp4
  /**
   * const squareNum = nums.map(function (num)) {
   *     return num * num;
   * }
   */

  return squareNum;

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelStr = ""; // temp string

  words.map((w) => camelStr += words.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) : w);

  // words.forEach((w) => {  // loop all words
  //   camelStr +=
  //       words.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) // Capitalises word
  //           : w; // return word NOT capitalised
  // });

  return camelStr.charAt(0).toLowerCase() + camelStr.slice(1);
}

/**
 * Solution derived from url below:
 * https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
 * @param people
 * @returns {number}
 */
function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectsArr = Array();

  people.forEach((person) => { // Outter loop
    person.subjects.forEach((subject) => {
      subjectsArr.push(subject);  // add all subjects to Array List
    });
  });

  /**
   * Routine below will show number of unique subjects
   * not every subject added to the list
   */
  // const unique = (value, index, self) => {
  //   return self.indexOf(value) === index
  // }

  // return subjectsArr.filter(unique).length;
  return subjectsArr.length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let hasIngredient = false;

  menu.map((dish) => hasIngredient = dish.ingredients.includes(ingredient) ? true
      // eslint-disable-next-line no-self-assign
      : hasIngredient = hasIngredient);

  // menu.forEach((dish) => {
  //   // self assignment = [DO NOTHING]
  //   // ingredients array needs to be sorted to satisfy test case
  //   // eslint-disable-next-line no-self-assign
  //   hasIngredient = dish.ingredients.includes(ingredient) ? true : hasIngredient = hasIngredient;
  // });

  return hasIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let tmpArr = Array();

  // if num in arr1 and NOT in tmpArr
  arr2.forEach((num) => {
    arr1.includes(num) && !tmpArr.includes(num) ? tmpArr.push(num) : null;
  });

  // Need to sort the output to satisfy test case
  return tmpArr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
