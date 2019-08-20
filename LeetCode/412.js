const fizzBuzz = function(n) {
  let result = [];
  for (let nums = 1; nums < n + 1; nums++) {
    if (nums % 3 === 0 && nums % 5 === 0) {
      result.push("FizzBuzz");
    } else if (nums % 3 === 0) {
      result.push("Fizz");
    } else if (nums % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(nums.toString());
    }
  }
  return result;
};

console.log(fizzBuzz(15))
