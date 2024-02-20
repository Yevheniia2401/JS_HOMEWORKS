// task 1 //
const strArr = ['Mike', 'Bob', 'Annie', 'Leonora', 'Angelika'];
const result = strArr.filter((str) => str.length > 5);
console.log(result);

// task 2 //
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumFunc = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Value must be an array');
  } else {
    const resultArr = arr.filter((num) => num % 2 === 0);
    return resultArr.reduce((acc, value) => acc + value, 0);
  }
};
console.log(sumFunc(numArr));

// task 3 //
const arithMean = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Value must be an array');
  } else {
    const sumArr = arr.reduce((acc, value) => {
      if (typeof value !== 'number') {
        return acc;
      }
      return (acc + value);
    }, 0);
    return sumArr / arr.length;
  }
};
console.log(arithMean(numArr));
