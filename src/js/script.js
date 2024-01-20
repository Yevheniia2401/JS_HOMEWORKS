'use strict' ;
const arr = [1, 2, 3, -1, -2, -3];


function currentPositiveNumber(arr) {
    if (Array.isArray(arr)) {
        const exampleArr = [];
        if ((arr.length === 0)) return console.log('Порожній масив');

        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > 0) exampleArr.push(arr[i])
        }
        if (exampleArr.length !== 0) return exampleArr
            return null;
    } else console.log('Error')
}
const result = currentPositiveNumber(arr);
console.log(result)






