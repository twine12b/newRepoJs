function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var squareNum = new Array();

  nums.forEach((n) => {
    squareNum.push(n * n);
  });

  return squareNum;

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var camelStr = ""; // temp string

  words.forEach((w) => {  // loop all words
    camelStr +=
        words.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) // Capitalises word
            : w; // return word NOT capitalised
  });

  return camelStr.charAt(0).toLowerCase() + camelStr.slice(1);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
