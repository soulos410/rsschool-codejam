module.exports = function make(...args) {
  let argsArray = args;
  function add(...arg) {
    if (typeof arg[0] !== 'function') {
      argsArray = argsArray.concat(arg);
      return add;
    }
    else {
      return argsArray.reduce(sum);
    }
  }
  return add;
} 
function sum(a, b) {
  return a + b;
}