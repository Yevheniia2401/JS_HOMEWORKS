'use strict' ;

const userNumber = prompt('Enter your number');
    const number = +userNumber;
    if (number % 10 === 1 && (number / 10 ) % 10 !== 1) {
          console.log(number + ' рік')
    }
    if ((number % 10 === 2 || number % 10 === 3 || number % 10 === 4) && ((number / 10 ) % 10 !== 1)) {
         console.log(number + ' роки')
    }else {
        console.log(number + ' років')
    }
