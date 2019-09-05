var romanToInt = function(str) {
  if (str == null) return -1;
  let number = char_to_int(str.charAt(0));

  for (let i = 1; i < str.length; i++) {
    let current = char_to_int(str.charAt(i));
    let previous = char_to_int(str.charAt(i - 1));
    if (current <= previous) {
      number += current;
    } else {
      number = number - previous * 2 + current;
    }
  }

  return number;
};

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

console.log(romanToInt("III"))