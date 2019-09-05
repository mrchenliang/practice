const longestCommonPrefix = function(strs) {
  if (strs === []) {
    return "";
  }
  let result = strs[0] || ""; 
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        result = result.slice(0, j);
        break;
      }
    }
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
