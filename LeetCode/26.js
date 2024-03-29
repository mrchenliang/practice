const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length == 1) return 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      count++;
      nums[count] = nums[i + 1];
    }
  }
  return count;
};
