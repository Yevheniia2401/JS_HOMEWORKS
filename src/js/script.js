'use strict' ;
const arr = [1, 2, 3, -1, -2, -3];

if (Array.isArray (arr)) {
    function currentPositiveNumber(arr) {
        const exampleArr = [];
        if ((arr.length === 0)) return console.log('Порожній масив');

        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > 0) exampleArr.push(arr[i])
        }
        console.log(exampleArr)

        if (exampleArr.length !== 0) return exampleArr;
        return null;
    }
    currentPositiveNumber(arr)
}else console.log('Error')



