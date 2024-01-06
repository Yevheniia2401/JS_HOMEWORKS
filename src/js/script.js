'use strict' ;
let a = +prompt('Your first number');
let b = +prompt('Your second number')
a === 0 ? alert('Вірно') : alert('Неправильно');
a > 0 ? alert('Вірно') : alert('Невірно');
a < 0 ? alert('Вірно') : alert('Невірно');
a >= 0 ? alert('Вірно') : alert('Неправильно');
a <= 0 ? alert('Вірно') : alert('Неправильно');
a !== 0 ? alert('Вірно') : alert('Невірно');
a = 'test' ? alert('Вірно') : alert('Неправильно');
a === '1' ? alert('Вірно') : alert('Невірно');
a > 0 && a < 5 ? alert('Вірно') : alert('Невірно');
a === 0 || a === 2 ? alert(a + 7) : alert(a / 10);
a <= 1 && b >= 3 ? alert(a + b) : alert(a - b);
(a > 2 && a < 11 )|| (b >= 6 && b < 14) ? alert('Вірно') : alert('Невірно');


let num = +prompt('Enter your number');
let result;

switch (num) {
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Літо';
        break;
    case 4:
        result = 'Осінь';
        break;
}
alert(result)