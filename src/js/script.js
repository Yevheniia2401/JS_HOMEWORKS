'use strict' ;
function padString(str, length, symbol, positionRight = true) {
    if (!str || typeof length !== 'number' || typeof symbol !== 'string' || typeof positionRight !== 'boolean') {
        return 'помилка';
    }

    if (str.length > length) {
        str = str.substr(0, length)
    }

    if (positionRight) {
        while (str.length < length) {
            str += symbol;
        }
    } else {
        while (str.length < length) {
            str = symbol + str;
        }
    }
    return str;
}
const result = padString('привіт', 8, '*',  false)
console.log(result)