const reverse = function(x) {
  const string = x.toString();
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.unshift(string[i]);
  }

  if (x < 0) array.unshift("-");
  const result = parseInt(array.join(""));
  if (result > 2147483647 || result < -2147483647) {
    return 0;
  } else {
    return result;
  }
};
console.log(reverse(-123));
