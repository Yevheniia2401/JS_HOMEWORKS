'use strict' ;
//task 1//
let result = '';
for (let i = 10; i <= 20; i++){
    result += i + ' ,';
}
console.log(result)

//task 2//
for (let i = 10; i <=20; i++) {
    console.log(Math.pow(i, 2))
}
//task 3//
for (let i = 1; i <=10; i++) {
    console.log(7*i)
}
//task 4//
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum)

//task 5//
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(mult)

//task 6//
let div = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
    div++
}
const average = sum/div;
console.log(average)

//task 7//
sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum)

//task 8//
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0)
        console.log(i)
}

//task 9//
sum = 0;
const anyNumber = +prompt();
for (let i = 1; i <= anyNumber; i++) {
    if (anyNumber % i === 0) {
        console.log(i)
    }
}
for (let i = 1; i <= anyNumber; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
for (let i = 1; i <= anyNumber; i++) {
    if (anyNumber % i === 0 && i % 2 === 0) {
        sum += i;
    }
}
console.log(sum)
//task 10//
result = '';
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        result += i*j + ' ';
    }
    console.log(result);
    result = '';
}
