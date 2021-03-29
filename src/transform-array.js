const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw 'Error';
  }
return arr.reduce((a,b,c) => {
  if(b === '--discard-next' || b === '--double-prev' || b === '--double-next' || b === '--discard-prev') {
    return a;
  }
  if (arr[c - 1] === '--discard-next') {
    return a;
  }
  if(arr[c - 1] === '--double-next') {
    a.push(b, b);
  }else {
    a.push(b);
  }
  if(arr[c + 1] === '--discard-prev') {
    a.splice(a.length - 1, 1)
  }
  if(arr[c + 1] === '--double-prev') {
    a.push(b)
  }
  return a;
}, []);
};
