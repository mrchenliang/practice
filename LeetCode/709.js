// 709. To Lower Case
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

var toLowerCase = function(str) {
  var result = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      result += String.fromCharCode(str.charCodeAt(i) + 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
};