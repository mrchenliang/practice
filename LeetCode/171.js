var titleToNumber = function(s) {
  for (let i = 0; i < s.length; i++) {
    let a = s.charAt(i) - 64;
    result = result * 26 + a;
  }
  return result;
};
