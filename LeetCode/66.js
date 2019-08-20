var plusOne = function(digits) {
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    if (i === digits.length - 1) {
      if (digits[i] < 9) {
        let last = digits[i] + 1;
        result.push(last);
      } else {
        result.push(1, 0);
      }
    } else {
      result.push(digits[i]);
    }
  }
  return result;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9]));
