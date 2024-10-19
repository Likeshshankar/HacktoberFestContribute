 let n = 2;
let m = 3;

function ackermann(n, m) {
  if (n === 0) return m + 1;
  if (n > 0 && m === 0) return ackermann(n - 1, 1);
  return ackermann(n - 1, ackermann(n, m - 1));
}

console.log(`ackermann(${n}, ${m}) = `, ackermann(n, m));
