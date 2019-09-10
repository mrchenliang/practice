const maxProfit = function(prices) {
  let min = prices[0];
  let max
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      if (prices[i] > max) {
        let max = prices[i];
      }
    }
  }
  return max - min;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
