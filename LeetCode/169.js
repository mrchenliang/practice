const majorityElement = function(nums) {
  let numbers = nums.sort();
  let midPoint = Math.floor(nums.length/2)
  return numbers[midPoint]
};

nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums))