var removeDuplicates = function(nums) {
  let result = [];
  for (let num of nums) {
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }
  return result;
};
let array = [1,1,2]
console.log(removeDuplicates(array));
