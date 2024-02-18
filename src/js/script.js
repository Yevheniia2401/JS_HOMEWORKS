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
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i] + 1);
  } return newArr;
};
const someArr = [3, 4, 5, 6, 7];
console.log(arrFunc(someArr));
