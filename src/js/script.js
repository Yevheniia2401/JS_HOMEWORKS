'use strict' ;
const userFirstNumber = Number(prompt('Your first number'));
const userSecondNumber = Number(prompt('Your second number'));
const add = userSecondNumber + userSecondNumber;
const sub = userFirstNumber - userSecondNumber;
const multi = userFirstNumber * userSecondNumber;
const div = userFirstNumber / userSecondNumber;

console.log(`${userFirstNumber}+${userSecondNumber}=${add}`);
console.log(`${userFirstNumber}-${userSecondNumber}=${sub}`);
console.log(`${userFirstNumber}*${userSecondNumber}=${multi}`);
console.log(`${userFirstNumber}/${userSecondNumber}=${div}`);