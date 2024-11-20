const arr = [10, 8, 6, 9, 3, 7];

function isPrime(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrime(arr) {
  return arr.reduce((acc, curr) => (isPrime(curr) ? acc + curr : acc), 0);
}

console.log(sumPrime(arr));
