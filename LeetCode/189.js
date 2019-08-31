const rotate = function(nums, k) {
  let removedElement;
  for (let i = 0; i < k; i++) {
    removedElement = nums.pop();
    nums.unshift(removedElement);
  }
  return nums;
};

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log(rotate(nums, k));
