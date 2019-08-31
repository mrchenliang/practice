const merge = function(nums1, m, nums2, n) {
  let x = 0, y = 0;

  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);

  while (y < n) {
    if (nums2[y] < nums1[x]) {
      nums1.splice(x, 0, nums2[y]);
      x++;
      y++;
    } else {
      x++;
    }
  }
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

console.log(merge(nums1, m, nums2, n));
