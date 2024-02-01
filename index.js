// require the sum function from math.js

const math = require("./math");

//console.log(math.sum(2, 3), math.subtract(10, 3), math.perCent);

// Pattern 4 to include destructing with the rest pattern

// after requiring the object we can destructure the functions from the object

const { sum, subtract } = math;
// so when we invoke it, all we need to do is call the sum, subtract

console.log(sum(10, 5), subtract(20, 10));
console.log(math.perCent);
