const inLog = (obj, a, b) => {
  console.log(obj, a, b);
};

const someObj = {
  name: 'Olha',
  age: 36,

};
const someArr = [40, 50];
const myApply = (thisArg, arrArg = []) => {
  inLog(thisArg, ...arrArg);
};
myApply(someObj, someArr);
