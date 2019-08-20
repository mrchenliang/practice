var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let temp = nums.splice(i, 1);
      nums.push(temp[0]);
    }
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,1,0]))
