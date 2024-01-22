const User = function (name, age) {
  this.name = name
  this.age = age
}
User.prototype.greet = function () {
  console.log('Hello ' + this.name + ' Your age is ' + this.age)
}
const user1 = new User('Anna', 16)
const user2 = new User('Bob', 27)
const user3 = new User('Mike', 45)
user1.greet()
user2.greet()
user3.greet()
