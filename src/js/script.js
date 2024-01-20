'use strict' ;
const weightOfPotatoes = 0.075;
const numberOfLetters = 48;
const priceOfKilogram = 13;
const priceOfPotatoes = function (weightOfPotatoes, numberOfLetters, priceOfKilogram) {
    return Math.ceil((4*weightOfPotatoes) * numberOfLetters) * priceOfKilogram;
}
console.log(priceOfPotatoes(weightOfPotatoes, numberOfLetters, priceOfKilogram));