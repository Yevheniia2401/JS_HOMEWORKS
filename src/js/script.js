const newObj = {
  name: 'Tomatoes',
  price: 36,
};
const priceOfGoods = (obj) => obj.price * 0.9;
console.log(priceOfGoods(newObj));

const studentsArray = [
  {
    studentName: 'Alex',
    studentRating: 60,
  },
  {
    studentName: 'Mike',
    studentRating: 80,
  },
  {
    studentName: 'Bob',
    studentRating: 95,
  },
  {
    studentName: 'Lily',
    studentRating: 100,
  },
];
const resultOfRating = studentsArray.filter((result) => result.studentRating > 90);
console.log(resultOfRating);
