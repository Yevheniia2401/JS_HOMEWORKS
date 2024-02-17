const someObj = {
  name: 'Vlad',
  age: 25,
};
const greet = function () {
  return `${this.name} ${this.age}`;
};
const myBind = function (func, context) {
  const newFunc = function () {
    return func.apply(context, arguments);
  };
  return newFunc;
};
const result = myBind(greet, someObj);
console.log(result());
