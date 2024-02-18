// task 1 //
const sum = (a, b) => a + b;
console.log(sum(3, 10));

// task 2 //
const arrStr = (str = 'string') => {
  if (typeof str !== 'string') {
    throw new Error('argument must be a string');
  } else return (`String length is ${str.length}`);
};
console.log(arrStr('Mary'));

// task 3 //
const arrFunc = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('argument must be an array');
  } else return arr.map((item) => item + 1);
};
const someArr = [2, 3, 4, 5, 6];
console.log(arrFunc(someArr));
