const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) {
    return false;
  }
  let filterString = members.filter((el) => typeof el === "string");
  let arrNew = filterString.map((a) => a.trim());
  for (let i = 0; i < arrNew.length; i++) {
    arr.push(arrNew[i][0].toUpperCase());
  }
  let finArr = arr.sort().join("");
  return finArr;
};
