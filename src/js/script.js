'use strict' ;

const student = {
    name: 'Alex',
    age: 26,
    grade: 'A',
};
student.grade = 'B';
student.course = 'Math';
console.log(student);

const book = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: 1997,
    publisher: {
        name: 'Bloomsbury Publishing Plc',
        location: 'London',
    }
};

const movie = {
    title: 'Home Alone',
    director: 'J. Hughes',
    year: 1990,
    genre:'Christmas comedy'
};

for (const cycle in movie) {
    console.log (cycle + movie [cycle]);
}

const person1 = {
    name: 'Bob',
    age: 30,
    gender: 'male',
};

const person2 = {
    name: 'Bob',
    age: 30,
    gender: 'male'
};

console.log(JSON.stringify(person1) === JSON.stringify(person2))


const animals = [
    {type: 'cat', name: 'Simba'},
    {type: 'dog', name: 'Jack'},
];

const newObj = {breed: 'scottish-ford', age: 4};
animals.push(newObj);
console.log(animals);
