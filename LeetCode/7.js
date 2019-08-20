var reverse = function(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(reversed);
};

console.log(reverse(-123));
