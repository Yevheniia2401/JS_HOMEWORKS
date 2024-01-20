'use strict' ;
const weightOfPotatoes = 0.075;
const numberOfLetters = 48;
const priceOfKilogram = 13;
const priceOfPotatoes = function () {
    return Math.ceil((4*weightOfPotatoes) * numberOfLetters) * priceOfKilogram;
}
console.log(priceOfPotatoes(weightOfPotatoes, numberOfLetters, priceOfKilogram));