var relativeSortArray = function(arr1, arr2) {
  let result = [];
  const others = arr1.filter(function(obj) { return arr2.indexOf(obj) == -1; });
    for (let i = 0; i < arr2.length; i ++) {
      for (let j = 0; j < arr1.length; j ++) {
          if (arr1[j]===arr2[i]) {
            result.push(arr1[j])
          }
      }
  }
  others.sort((a, b) => a - b);
  let answer = result.concat(others);
  return answer;
};

arr1 = [2,3,1,3,2,4,6,7,9,2,19];
arr2 = [2,1,4,3,9,6];

arr3 = [28,6,22,8,44,17];
arr4 = [22,28,8,6];

console.log(relativeSortArray(arr1,arr2))
console.log(relativeSortArray(arr3,arr4))