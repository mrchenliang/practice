const reverseString = function(s) {
  let [i, j] = [0, s.length-1];
  while(i < j){
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
  }
  return s;
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["h","ei"]));