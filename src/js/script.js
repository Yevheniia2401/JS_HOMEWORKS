'use strict' ;
const userNumber = +prompt('Введіть число');
const powOfNumber = +prompt('Введіть ступінь числа');
function resultNumber (userNumber, powOfNumber = 1) {
    if (isNaN(userNumber) || isNaN(powOfNumber)) {
        return 'Помилка'
    }else
        return  Math.pow(userNumber, powOfNumber)
}
const result = resultNumber(userNumber, powOfNumber);
alert(result)


