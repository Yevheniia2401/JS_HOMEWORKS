// tack 1//
const array = ['Mary', 'Bob', 'Anna'];
const indexOf = (element, arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (element === arr[i]) return i;
  } return -1;
};
console.log(indexOf('Anna', array));

// task 2//
const lastIndexOf = (element, arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (element === arr[i]) return arr.length - 1;
  } return -1;
};
console.log(lastIndexOf('Maria', ['Maria', 'Kate', 'Lily', 'Maria']));

// task 3//
const numbers = [2, 6, 8, 10, 20, 25, 35, 40, 60, 80, 100];
const callbackElement = (element) => element > 10 && element < 100;
const findNum = (callback, arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) return arr[i];
  }
  return undefined;
};
console.log(findNum(callbackElement, numbers));

const findIndex = (callback, arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) return i;
  } return -1;
};
console.log(findIndex(callbackElement, numbers));

// task 4//
const isArrIncludes = (element, arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (element === arr[i]) {
      return true;
    }
  } return false;
};
console.log(isArrIncludes(40, numbers));
console.log(isArrIncludes(98, numbers));

// task 5//
const everyNum = [2, 5, 8, 10, 25, 40, 50];
const isBigNum = (element) => element > 10;
const every = (callback, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i])) return false;
  } return true;
};
console.log(every(isBigNum, everyNum));

// task 6//
const someNum = [2, 5, 8, 1, 4];
const someNum1 = [12, 5, 8, 1, 4];
const some = (callback, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) return true;
  } return false;
};
console.log(some(isBigNum, someNum));
console.log(some(isBigNum, someNum1));
