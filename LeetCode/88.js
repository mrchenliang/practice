var merge = function(nums1, m, nums2, n) {
  nums1 = nums1.slice(0,(m));
  nums2 = nums2.slice(0,(n));
  return nums1.concat(nums2).sort();
};


nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;

merge(nums1, m, nums2, n);