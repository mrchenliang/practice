const trailingZeroes = function(n) {
  var current = 5,total = 0;
  
  while (current <= n) {
      total += Math.floor(n / cur);
      current *= 5;
  }
  
  return total;
};
console.log(trailingZeroes(3));