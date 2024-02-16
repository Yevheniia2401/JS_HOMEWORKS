const inLog = function (a, b) {
  return console.log(this, a, b);
};

const someObj = {
  name: 'Olha',
  age: 36,
};
const someArr = [40, 50];
const myApply = function (thisArg, arrArg = []) {
  return inLog(someObj, someArr[0], someArr[1]);
};
myApply(someObj, someArr);
