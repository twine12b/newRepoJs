function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // This is a perfect JS if statement - ** USE THIS FROM NOW ON **
  return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // if num people less than bus capacity, bus = 1
  return people < 40 ? 1 : ((people % 40) + 1);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count = 0;
  arr.forEach((animal) => {
    animal === "sheep" ? count++ : count + 0;
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
