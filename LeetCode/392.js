const isSubsequence = function(s, t) {
  let p = 0, q = 0;
  while(p < s.length && q < t.length) {
      if(s.charAt(p) === t.charAt(q++)) {
          p++;
      }  
  }
  
  return p === s.length;
};

s = "acb";
t = "ahbgdc";
s = "abc";
t = "ahbgdc"

console.log(isSubsequence(s, t));
