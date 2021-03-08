/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (n != parseInt(n, 10)) throw new Error("number has illegal characters");

  const strOfn = n.toString().split(''); // create a character array
  var sum = 0;

  for (let i = 0; i < strOfn.length; i++) {
    if (strOfn[i] === '-') {
      sum += parseFloat(strOfn[i + 1] * -1); //add the inverse of the next digit
      i++;  // change index to the next digit
    } else {
      sum += parseFloat(strOfn[i]);
    }
  }

  return sum;

  /**
   * How about this simple approach using modulo 9 arithmetic?
   * -- fails on non linear numbers and numbers with more than 4 digits--
   * return (n - 1) % 9 + 1;
   */

  // check if valid number

  // convert numbers to string
  // iterate and sum values
  // return result

};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
//  ** Resolves eslint error - [npm run eslint **]
// eslint-disable-next-line no-unused-vars
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    step = 1;
  } // set default step size

  var arr = [];  // create a new array placeholder
  let tmpStep = start;

  while (start <= end) {
    arr.push(tmpStep);
    start += step;    // increase step
    tmpStep += step;  // increase step count value
  }

  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined && date === undefined) throw new Error("no data, users and date is required");
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  var arr = Array();
  var totMins = 0;

  users.forEach((user) => {
    user.screenTime.forEach((u) => {  // loop entire list

      if (u.date === date) { // check if dates match
        // loop through arrays nested objects object
        for (let key in u.usage) {
          totMins += u.usage[key];
        }

        // Add user to array if usage exceeds 100
        if (totMins > 100) {
          arr.push(user.username);
        }
      }
      // reset total minutes
      totMins = 0;
    });
  });

  return arr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined || hexStr === "") throw new Error("hexStr is required");
  if (hexStr.length != 7) throw new Error("hexStr is not valid");
  if (hexStr.substring(0, 1) !== "#") throw new Error("hexStr should start with the '#' character");
  var rgb = "rgb(";  // specify the first part of the result string

  if (hexStr.length === 7) { //long hex conversion string
    rgb += parseInt(hexStr.substring(1, 3), 16) + ",";
    rgb += parseInt(hexStr.substring(3, 5), 16) + ",";
    rgb += parseInt(hexStr.substring(5, 7), 16) + ")";
  }

  return rgb;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  var winner = "";
  // const winPos = [ [ 0, 0, 1, 0, 2, 0] ];
  var winPos = getWinValues();// .slice();

  // console.log(winPos);

  // loop through winning combos
  // winPos.forEach((combo) => {
  //   if (checkWinner(board, combo) === "X") {
  //     console.log("checkWinner returned X");
  //     winner = "X";
  //     // combo.stop = true;
  //   } else if (checkWinner(board, combo) === "0") {
  //     winner ="0";
  //   } else {
  //     winner = null;
  //   }
  // });

  outter_loop:
      for (let i = 0; i < winPos.length; i++) {
        if (checkWinner(board, winPos[i]) === "X") {
          console.log("checkWinner returned X");
          winner = "X";
          break outter_loop;
        } else if (checkWinner(board, winPos[i]) === "0") {
          i = winPos + 1;  // break loop
          winner = "0";
          break outter_loop;
        } else {
          winner = null;
          // break outter_loop; //**** DO NOT BREAK HERE
        }
      }

  return winner;
};

/**
 * Simply stores x, y positions in an array of arrays
 * @param x
 * @param y
 * @param array
 */
function setWinPositions(x, y, array) {
  array.push(x);
  array.push(y);
}

function getWinValues() {
  const winPos = [];

  const winCol1 = [];
  setWinPositions(0, 0, winCol1);
  setWinPositions(1, 0, winCol1);
  setWinPositions(2, 0, winCol1);

  var winCol2 = [];
  setWinPositions(0, 1, winCol2);
  setWinPositions(1, 1, winCol2);
  setWinPositions(2, 1, winCol2);

  var winCol3 = [];
  setWinPositions(0, 2, winCol3);
  setWinPositions(1, 2, winCol3);
  setWinPositions(2, 2, winCol3);

  var winRow1 = [];
  setWinPositions(0, 0, winRow1);
  setWinPositions(0, 1, winRow1);
  setWinPositions(0, 2, winRow1);

  var winRow2 = [];
  setWinPositions(1, 0, winRow2);
  setWinPositions(1, 1, winRow2);
  setWinPositions(1, 2, winRow2);

  var winRow3 = [];
  setWinPositions(2, 0, winRow3);
  setWinPositions(2, 1, winRow3);
  setWinPositions(2, 2, winRow3);

  var winDiag1 = [];
  setWinPositions(0, 0, winDiag1);
  setWinPositions(1, 1, winDiag1);
  setWinPositions(2, 2, winDiag1);

  var winDiag2 = [];
  setWinPositions(0, 2, winDiag2);
  setWinPositions(1, 1, winDiag2);
  setWinPositions(2, 0, winDiag2);

  winCol1[0] == 3   // x value (even indexes)
  winCol1[1] == 5   // y value (odd indexes)

// to loop through coordinate values
  for (var i = 0; i < winCol1.length; i += 2) {
    var x = winCol1[i];
    var y = winCol1[i + 1];
  }

// Add winning row combos
  winPos.push(winRow1);
  winPos.push(winRow2);
  winPos.push(winRow3);

//Add winning col combos
  winPos.push(winCol1);
  winPos.push(winCol2);
  winPos.push(winCol3);

// //Add winning diag combos
  winPos.push(winDiag1);
  winPos.push(winDiag2);


  // return completes list
  return winPos;
}

/**
 * Checks the winning combination to see if Player 'X' or Player '0' has won.
 * if no player has won return non.
 *
 * @param board
 * @param winPos
 */
function checkWinner(board, winPos) {
  var player = "non";
  var p1 = 0;  // counts combo streak
  var p2 = 0;  // counts combo streak
  var yVal = 1; // represents 'y''values
  var x = 0;
  var y = 0;

  console.log(winPos);

  for (let i = 0; i < winPos.length; i += 2) { // skips even indexes
    // console.log("val of i: " +i + "  val of yVal:  "+ yVal);
    x = winPos[i];
    y = winPos[yVal];

    // console.log("["+x+"]["+y+"]");
    // console.log("["+i+"]["+yVal+"]");
    if (board[x][y] === "X") {
      p1++;
      // console.log("***************  " +p1);
    } else if (board[x][y] === "0") {
      p2++;
    }

    yVal += 2;
  }

  if (p1 === 3) {
    console.log("returning X");
    return "X";  // if 3 X's in a row
  } else if (p2 === 3) {
    console.log("returning 0");
    return "0";  // if 3 0's in a row
  }

  return player;
}

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
