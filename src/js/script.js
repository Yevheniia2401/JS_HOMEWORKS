'use strict' ;
const arr = [1, 2, 3, -1, -2, -3];
function currentPositiveNumber (arr) {
    let exampleArr = [];
    if ((arr.length === 0)) {
        return console.log('Порожній масив');
    }
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i])
        }
    }
    console.log(exampleArr)

    if (exampleArr.length !== 0) {
        return exampleArr;
    }else
        return null;
}
currentPositiveNumber(arr);


