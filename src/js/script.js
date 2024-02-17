const inLog = function (a, b) {
  return console.log(this.name, a, b);
};

const someObj = {
  name: 'Olha',
  age: 36,

};
const someArr = [40, 50];
const myApply = function (thisArg, arrArg = []) {
  return inLog(thisArg, arrArg);
};
myApply(someObj, someArr);
