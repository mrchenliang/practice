var singleNumber = function(nums) {
  let single;
  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
    console.log(single)
  }
  return single;
};

console.log(singleNumber([0,1,2,2,3,1]))