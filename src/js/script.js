'use strict' ;
//task 1//
for (let i = 20; i <= 30; i+= 0.5) {
    console.log(i)
}
//task 2//
const dollar = 27;
let result;
for (let i = 10; i <= 100; i+= 10) {
    result = dollar*i
    console.log(result)
}

//task 3//
const number = +prompt();
for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) < number) {
        console.log(i)
    }
}

//task 4//
const userNumber = +prompt();
let isPrime = true;
for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
        isPrime = false;
        break;
    }
}
if (userNumber && isPrime > 1) {
    console.log('Просте число')
}else
    console.log('Непросте число')

//task 5//
const anyNumber = +prompt();
for (let i = 0; i <= 10; i++) {
    if (anyNumber === 3 ** i) {
        console.log('Можна')
    }else
        console.log('Не можна')
}


