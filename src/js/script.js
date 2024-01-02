'use strict' ;

const action = prompt('What action do you want to perform? (add, sub, mult or div)');
const number1 = Number(prompt('Your first number'));
const number2 = Number(prompt('Your second number'));

if (action === 'add') {
    alert(number1 + '+' + number2 + '=' + (number1+number2))
}
if (action === 'sub') {
    alert(number1 + '-' + number2 + '=' + (number1-number2))
}
if (action === 'mult') {
    alert(number1 + '*' + number2 + '=' + (number1*number2))
}
if (action === 'div') {
    alert(number1 + '/' + number2 + '=' + (number1/number2))
}