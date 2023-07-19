/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:


Write the code that will take a string and make this conversion given a number of rows:

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

 */

function zigzagConversion(regularString, numRows) {
  // Initialize an array holder for the set number of rows.
  // Traverse the string
  // Insert letter to the right row
  // Reverse direction when the string gets to the end position or start position

  let row = new Array(numRows).fill("");
  let rowIndex = 0;
  let direction = -1;

  for (let i = 0; i < regularString.length; i++) {
    row[rowIndex] += regularString[i];

    if (rowIndex === 0 || rowIndex === numRows - 1) {
      direction = -direction;
    }

    rowIndex += direction;
  }

  return row.join("");
}

console.log(zigzagConversion("PAYPALISHIRING", 4));

// Ouput: PINALSIGYAHRPI
