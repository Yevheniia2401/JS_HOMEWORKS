// task 1//
const addOne = (x) => x + 1;
const square = (x) => x * x;
const callbacksArr = [addOne, square, addOne];

const runCallbacks = (callbacks, value) => callbacks.reduce((accumulator, currentCallback) => currentCallback(accumulator), value);

const result = runCallbacks(callbacksArr, 1);
console.log(result);
// return callbacksArr[0](square(addOne(1)));  - мій варіант//

// task 2//
const composeFunctions = (...funcs) => function (value) {
  return funcs.reduceRight((currentValue, currentFunc) => currentFunc(currentValue), value);
};

const doubleFunc = (x) => x * 2;
const squareFunc = (x) => x * x;
const negateFunc = (x) => -x;
const composedFunction = composeFunctions(negateFunc, squareFunc, doubleFunc);
const secondResult = composedFunction(2);
console.log(secondResult);
