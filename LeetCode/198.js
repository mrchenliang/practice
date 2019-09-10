const rob = function(nums) {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];
  let totals = [nums[0], Math.max(nums[0], nums[1])];
  console.log(totals)
  for(let i = 2; i < nums.length; i ++){
      totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
      console.log(totals[i])
  }
  return totals[totals.length - 1];
};

let nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
