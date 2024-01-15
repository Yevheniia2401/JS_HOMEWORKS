'use strict' ;

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = function (length, characters){
    let str = '';
    for (let i = 0; i < length; i++) {
        const result = (Math.floor(Math.random() * characters.length))
        str += characters[result];
    }
    return str
}
const key = generateKey (16, characters)
console.log(key)