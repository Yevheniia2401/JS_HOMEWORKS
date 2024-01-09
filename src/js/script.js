'use strict' ;
let result = 0;
const number = +prompt('Enter your number');
if (number < 1) {
    console.log(NaN)
}else {
     for (let i = 2; i < number - 1; i++) {
         if (number % i === 0) {
            result = i; break
            }
        }
    }
    if (result === 0) {
        console.log('Просте число')
    }else {
        console.log(result)
    }





