'use strict' ;
//task 1//
const x = 10;
const y = 7;
x > y ? console.log('х більше за у') : console.log('х не більше, ніж у');

//task 3//
let num = prompt("Введіть ціле число:");
let length = num.length;
let result = "";

switch (length) {
    case 1:
        result = "однозначне";
        break;
    case 2:
        result = "двоцифрове";
        break;
    default:
        result = "трицифрове або більше";
}

if (parseInt(num) > 0) {
    result += " позитивне";
} else if (parseInt(num) < 0) {
    result += " негативне";
} else {
    result += " нуль";
}
console.log("Число " + num + " " + result);
//task 4//
const userFirstNumber = +prompt('Введіть перше число');
const userSecondNumber = +prompt('Введіть друге число');
const userThirdNumber = +prompt('Введіть третє число');
if (userFirstNumber > userSecondNumber && userFirstNumber > userThirdNumber) {
    alert(userFirstNumber);
}else if (userSecondNumber > userFirstNumber && userSecondNumber > userThirdNumber) {
    alert(userSecondNumber);
}else
    alert(userThirdNumber);

//task 5//
const userFirstLength = +prompt('Введіть першу довжину трикутника');
const userSecondLength = +prompt('Введіть другу довжину трикутника');
const userThirdLength = +prompt('Введіть третю довжину трикутника');

if ((userFirstLength + userSecondLength) > userThirdLength &&
    (userSecondLength + userThirdLength) > userFirstLength &&
    (userThirdLength + userFirstLength) > userSecondLength) {
    alert('Ваш трикутник існує');
}else
    alert('Такого трикутника немає');


