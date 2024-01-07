'use strict' ;

const year = Number(prompt('Твій рік народження'))
const city = prompt('В якому місті живеш')
const sport = prompt('Твій улюблений вид спорту')
let yearAns = null;
let cityAns = null;
let sportAns = null;

switch (year) {
    case 0:
        yearAns = 'Шкода, що ви не захотіли ввести свій вік'; break;
    default:
        yearAns = ('Твій вік ' + (2023 - year))
}

switch (city) {
    case 'Київ':
        cityAns ='Ти живеш у столиці України';
        break;
    case 'Вашингтон':
        cityAns = 'Ти живеш у столиці США?';
        break;
    case 'Лондон':
        cityAns = 'Ти живеш у столиці Англії';
        break;
    case '':
        cityAns = 'Шкода, що ви не захотіли ввести своє місто'; break;
    case null:
        cityAns = 'Шкода, що ви не захотіли ввести своє місто'; break;
    default:
        cityAns = 'Ти живеш у місті ' + city
}


switch (sport) {
    case 'Плавання':
        sportAns = 'Круто! Хочеш стати як Емі Сміт?'; break;
    case 'Бокс':
        sportAns = 'Круто! Хочеш стати як Олександр Усик?'; break;
    case 'Фігурне катання':
        sportAns = 'Круто! Хочеш стати як Анастасія Архіпова?'; break;
    case '':
        sportAns = 'Шкода, що ви не захотіли ввести свій улюблений вид спорту'; break;
    case null:
        sportAns = 'Шкода, що ви не захотіли ввести свій улюблений вид спорту'; break;
    default:
        sportAns = 'Цікавий вид спорту! ' + sport
}
alert(yearAns + '\n' + cityAns + '\n' + sportAns)