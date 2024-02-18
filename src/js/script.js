const someObj = {
  name: 'Vlad',
  age: 25,
};
const printName = function (prefix) {
  console.log(this, prefix);
  console.log(`${prefix} ${this.name}`);
};

const callWithCtx = function (func, ctx, args) {
  ctx.func = func;
  ctx.func(args, ...args);
  delete ctx.func;
};
const myBind = function (func, ctx, args) {
  return function () {
    callWithCtx(func, ctx, args);
  };
};
const result = myBind(printName, someObj, ['Mr']);
result();
