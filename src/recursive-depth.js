const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let x =  1 + Math.max(...arr.map(a => this.calculateDepth(a)), 0);
        return x
    }else {
      return 0;
    }
  };
};
