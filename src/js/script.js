// example 1//
console.log(a);
var a = 10;
// в консолі undefined, тому що працює хойстинг і змінна a переноситься наверх,
// а її значення залишається на тому ж місці //
// var a;
// console.log (a) undefined
// a = 10 //

// example 2//
myFunction();

function myFunction() {
  console.log('Hello, world!');
}
// оскільки тут використовується function declaration, можна викликати функцію до її оголошення
// і в консолі буде: "Hello, world"//

// example 3//
console.log(b);
let b = 5;
// Використовуючи let чи const, ми не можемо викликати змінну перед її ініціалізацією
// Тому в консолі буде відповідна помилка //

// example 4//
const myArrowFunction = () => {
  console.log('Hello from arrow function');
};
myArrowFunction();
// тут використовується function expression, тому викликати функцію перед її ініціалізацією
// ми не можемо. Але після все працює

// my_example//
console.log(name); // let і const не можуть бути викликані перед ініціалізацією//
const name = 'Bob';

const userName = 'Mike';
console.log(userName);

newFunction(); // function declaration - функцію можна викликати перед ініціалізацією, але так робити не потрібно//
function newFunction() {
  console.log(`Your name ${userName}`);
}
secondFunc(); // Помилка, бо не можна викликати перед ініціалізацією//
const secondFunc = () => {
  console.log(`Your name ${userName}`);
};
secondFunc();
