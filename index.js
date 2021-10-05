// Import stylesheets
import './style.css';

const sum = (a, b, c) => a + b + c;

const multi = (a, b, c) => a * b * c;

const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    // 1
    return curried.bind(this, ...args);

    // 2
    return function (...newArgs) {
      return curried.apply(this, args.concat(newArgs));
    };
  };
};

const currySum = curry(sum);
const curryMul = curry(multi);

console.log({
  sum: currySum(1)(1)(44),
  multi: curryMul(1)(2)(44),
});
