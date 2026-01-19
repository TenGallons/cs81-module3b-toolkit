// math.js

function double(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

// Quick tests (prints results when you run: node math.js)
console.log("double(5) =", double(5));
console.log("square(6) =", square(6));
console.log("isEven(10) =", isEven(10));
console.log("isEven(7) =", isEven(7));
console.log("isOdd(9) =", isOdd(9));
console.log("isOdd(12) =", isOdd(12));
