// task 1 //
const getFactorial = (num) => {
  if (num === 0) {
    return 1;
  } if (num > 0) return num * getFactorial(num - 1);
};
console.log(getFactorial(3));

// task 2 //
const numPow = (num, degree) => {
  if (num === 0 || degree === 0) {
    return 1;
  } if (num > 0 || degree > 0) return num * numPow(num, degree - 1);
};
console.log(numPow(3, 2));

// task 3 //
const sumNum = (a, b) => {
  if (b === 0) {
    return a;
  } if (b !== 0) {
    return a + sumNum(a, b - 1);
  }
};
console.log(sumNum(2, 5));
