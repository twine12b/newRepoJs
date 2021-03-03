function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var lessThanOneArr = Array();

  // Standard for loop solution
  // for(let i=0; i <= nums.length-1; i++) {
  //   if(nums[i] < 1){
  //     lessThanOneArr.push(nums[i]);
  //   }
  // }

  // Advanced for loop solution
  nums.forEach((num) => {
    if (num < 1) {
      lessThanOneArr.push(num);
    }
  });

  // Can not use Map for this challenge

  return lessThanOneArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var tmpArr = Array();

  // ** Standard for loop
  // for(let i=0; i<names; i++) {
  //   if(names[i].charAt(0) === char) {
  //     tmpArr.push(names[i]);
  //     }
  //   }

  // ** For Each loop
  names.forEach((name) => {
    name.charAt(0) === char ? tmpArr.push(name) : "";
  });

  //Map function wont work for this challenge


  return tmpArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
