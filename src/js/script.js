'use strict' ;
//task 1//
const x = 10;
const y = 7;
x > y ? console.log('х більше за у') : console.log('х не більше, ніж у');

//task 3//
const userInput = prompt('Введіть ціле число');
if (userInput !== null && userInput !== '') {
    alert(`В цьому числі ${userInput.length} цифр`);
}else alert('Ви не ввели число');

const userNumber = +userInput;
if (!isNaN(userNumber)) {
        if (userNumber > 0) {
            alert(`Число ${userNumber} однозначно позитивне`);
        } else if (userNumber < 0) {
            alert(`Число ${userNumber} однозначно негативне`);
        }
}else {
    alert('Ви ввели неправильне значення')
}

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


