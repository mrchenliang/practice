const strStr = function(haystack, needle) {
  const needleLength = needle.length, haystackLength = haystack.length;
  if (needleLength === 0) return 0;
  for (let i = 0; i < haystackLength; i++) {
    if (haystack.substr(i, needleLength) === needle) {
      return i;
    }
  }
  return -1;
};
