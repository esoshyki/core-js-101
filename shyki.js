const partialUsingArguments = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)

const fn = (x1, x2, x3, x4) => x1 + x2 + x3 + x4;
console.log(partialUsingArguments(fn, 'a')('b','c','d'))