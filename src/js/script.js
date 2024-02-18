const user = {
  name: 'Mike',
  age: 30,
  hobby: 'box',
};
const printName = function (prefix) {
  console.log(this, prefix);
  console.log(`${prefix} ${this.name}`);
};
function callWithCtx(func, ctx, args) {
  ctx.func = func;
  ctx.func(args, ...args);
  delete ctx.func;
}
function myApply(func, ctx, args) {
  callWithCtx(func, ctx, args);
}
myApply(printName, user, ['Mr.']);
