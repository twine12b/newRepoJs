function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const val = (originalPrice + (originalPrice * (vatRate / 100))).toFixed(2)

  return parseFloat(val);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const val = originalPrice - (originalPrice * (reduction / 100)).toFixed(2);

  return parseFloat(val);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let strLen = str.length;
  let midddle = Math.floor(strLen / 2);

  //
  if (strLen % 2 === 0) {
    // if str even
    return str[midddle - 1] + str[midddle];
  } else {
    //if str odd
    return str[midddle];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("").split("/n").reverse().join(" ");
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const revWords = new Array();

  //  Probably a better way to do this using arrow function !..
  if (words.length === 1) {
    revWords.push(reverseWord(words[0]));
    return revWords
  } else {
    // eslint-disable-next-line no-undef
    for (i = 0; i <= words.length - 1; i++) {
      // eslint-disable-next-line no-undef
      revWords.push(reverseWord(words[i]));
    }
  }
  return revWords;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count = 0;

  // Suggested by James - users[0].type
  // Simply access the property using its name
  users.forEach((user) => {
    if (user.type.includes("Linux")) {
      count++;
    }

  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
