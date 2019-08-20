// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const addingNumbers = function(arr, num) {
  let array = arr.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (array[i] + array[j] > num) {
        j--;
      } else if (array[i] + array[j] < num) {
        i++;
      } else if (array[i] + array[j] === num) {
        console.log(true)
        return true;
      }
    }
  }
  console.log(false)
  return false;
};

addingNumbers([10, 15, 3, 7], 19);
