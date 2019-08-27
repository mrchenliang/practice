var intersect = function(nums1, nums2) {
  var map = {};
  var result = [];
  for(let i = 0; i < nums1.length; i++) {
      map[nums1[i]] = (map[nums1[i]]||0) + 1; 
  }
  for(let i = 0; i < nums2.length; i++) {
      if(map[nums2[i]] > 0) {
          map[nums2[i]]--;
          result.push(nums2[i]);
      }
  }
  return result;
};

console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));