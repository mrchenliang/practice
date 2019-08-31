const rotate = function(nums, k) {
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i + k]) {
      result[i + k] = nums[i];
    } else {
      result[i - (nums.length - k)] = nums[i];
    }
  }
  return result;
};

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log(rotate(nums, k));
