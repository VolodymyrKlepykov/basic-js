const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrFlat = matrix.flat();
  let count = 0;
  for (let i = 0; i < arrFlat.length; i++) {
    if (arrFlat[i] === "^^") {
      count++;
    }
  }
  return count;
};
