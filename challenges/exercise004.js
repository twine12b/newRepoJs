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
  var verbs = Array();

  // ** Standard Loop
  // for(let i=0; i<words.length; i++) {
  //     if(words[i].split(" ").filter(word => word.includes(word))[0] === "to") {
  //       verbs.push(words[i]);
  //     }
  // }

  // ** For Each Loop
  words.forEach((word) => {
    word.split(" ").filter(word => word.includes(word))[0] === "to"
        ? verbs.push(word) : "";
  });

  // ** Map Not suitable for this challenge
  return verbs;

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var tmpArr = Array();

  // ** Standard Loop
  // for(let i=0; i<nums.length; i++){
  //   if(Number.isInteger(nums[i])) { //check if number is an integer
  //     tmpArr.push(nums[i]);
  //   }
  // }

  // For Each Loop
  nums.forEach((num) => {
    Number.isInteger(num) ? tmpArr.push(num) : "";
  });

  // ** Map method not suitable
  return tmpArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // var tmpArr = Array();

  // ** Standard Loop
  // for(let i=0; i<users.length; i++) {
  //   tmpArr.push(users[i].data.city.displayName);
  // }

  // ** For Each Loop
  // users.forEach((user) => {
  //   tmpArr.push(user.data.city.displayName);
  // });

  // Map transformation (Same length as 'Users')
  const tmpArr = users.map((user) => {
    return user.data.city.displayName;
  });

  return tmpArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // var tmpArr = Array();

  // ** Standard Loop
  // for(let i=0; i<nums.length; i++){
  //   tmpArr.push(parseFloat(Math.sqrt(nums[i]).toFixed(2))); // fix formatting
  // }

  // ** For each Loop
  // nums.forEach((num) => {
  //   tmpArr.push(parseFloat(Math.sqrt(num).toFixed(2)));
  // });

  // Map transformation (Same length as 'nums')
  const tmpArr = nums.map((num) => {
    return parseFloat(Math.sqrt(num).toFixed(2));
  });

  return tmpArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let tmpArr = Array();

  // ** Standard Loop
  // for(let i=0; i<sentences.length; i++) {
  //   // includes function is case sensitive so set both strings to same case before comparing
  //   if(sentences[i].toLowerCase().includes(str.toLowerCase())){
  //     tmpArr.push(sentences[i])
  //   }
  // }

  // ** For Each loop
  sentences.forEach((sentence) => {
    sentence.toLowerCase().includes(str.toLowerCase())
        ? tmpArr.push(sentence) : "";
  });

  // Map not suitable for this function
  return tmpArr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var tmpArr = Array();

  // ** Standard Loop
  for (let i = 0; i < triangles.length; i++) {
    let longest = triangles[i][0];
    for (let j = 1; j < 3; j++) {
      if (triangles[i][j] > longest) {
        longest = triangles[i][j];
      }
    }
    tmpArr.push(longest);
  }

  // ** For Each Loop Not suitable [I've not found a working method for this]
  // Map Not suitable

  return tmpArr;
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
