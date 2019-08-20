var containsDuplicate = function(nums) {
  if (nums.length < 1) {
    return false;
  } else {
    let array = nums.sort();
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      if (array[i] === array[i + 1]) {
        return true;
      }
    }
    return false;
  }
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));
