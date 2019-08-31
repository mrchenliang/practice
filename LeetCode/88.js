const merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums1.push(...nums2);
  nums1.sort((a,b)=>a-b);
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

console.log(merge(nums1, m, nums2, n));
