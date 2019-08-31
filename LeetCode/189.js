const rotate = function(nums, k) {
  let number = nums.length - k
  result = [];
  for (let i = number; i < nums.length; i++) {
    result.push(nums[i]);
  }
  for (let j = 0; j < number; j++) {
    result.push(nums[j]);
  }
  return result;
};

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log(rotate(nums,k))
