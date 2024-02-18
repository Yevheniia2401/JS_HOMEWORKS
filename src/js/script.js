const myFlat = function newFunc(arr) {
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  const isArrayMult = function (array) {
    for (let i = 0; i < array.length; i += 1) {
      if (Array.isArray(array[i])) {
        return true;
      }
    }
    return false;
  };
  if (!isArrayMult(arr)) {
    return arr.slice();
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(myFlat(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const complexArray = [1, 2, 3];
console.log(myFlat(complexArray));
