const countPrimes = function(n) {
  let count = 0;
  let prime = [];
  n = n - 1;
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      let increment = 1;
      for (let k = 0; k < prime.length; k++) {
        if (i % prime[k] == 0) {
          increment = 0;
          break;
        }
      }
      if (increment == 1) {
        prime.push(i);
      }
      count = count + increment;
    }
    //console.log((count))
    return count;
  } else if (n < 2) {
    return 0;
  }
};
