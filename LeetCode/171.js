const titleToNumber = function(s) {
  s.toUpperCase();
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let a = s.charCodeAt(i) - 64;
    result = result * 26 + a;
  }
  return result;
};

console.log(titleToNumber("AZ"));
