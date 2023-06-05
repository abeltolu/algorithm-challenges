/* 
Missing Digit
Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.

Examples
Input: "4 - 2 = x"
Output: 2
Input: "1x0 * 12 = 1200"
Output: 0 
*/

const MapFinalX = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}


const MapHasX = {
  '+': (a, b) => a - b,
  '-': (a, b) => a + b,
  '*': (a, b) => a / b,
  '/': (a, b) => a * b,
}

function MissingDigit(str) {
  //check if more than one x exists
  const numberOfX = str.split(" ").filter(s => s.includes('x'));
  if (numberOfX && numberOfX.length >= 2) {
    throw new Error("Operation not supported");
  }

  const split = str.split("=");

  const answer = split[split.length - 1].trim();

  const leftSplit = split[0].split(" ");
  if (answer == 'x' && split.length > 1) {
    //get the operand from first item in split
    return MapFinalX[leftSplit[1]](leftSplit[0], leftSplit[2]);
  } else {
    // check if either of the number splits has x;
    const indexWithX = leftSplit.findIndex(n => n.includes('x'));
    if (indexWithX >= 0) {
      //remove indexWithX from leftSplit
      const leftSplitExclIndexWithX = leftSplit.filter((_, i) => i !== indexWithX).sort((a, b) => {
        if (isNaN(a)) return -1;
        return 0;
      });
      console.log(leftSplitExclIndexWithX);
      return MapHasX[leftSplitExclIndexWithX[0]](answer, leftSplitExclIndexWithX[1]);
    }
  }

  return null;

}

const result = MissingDigit("1x0 * 12 = 1200");
console.log("Result = ", result);
