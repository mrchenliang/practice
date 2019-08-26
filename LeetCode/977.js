const sortedSquares = function(A) {
  let answer = A.map(x => x * x);
  answer.sort((a, b) => a - b);
  return answer;
};

console.log(sortedSquares([-4,-1,0,3,10]))