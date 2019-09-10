const rob = function(nums) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even += nums[i];
    } else {
      odd += nums[i];
    }
  }
  if (odd > even) {
    return odd;
  } else {
    return even;
  }
};

let nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
