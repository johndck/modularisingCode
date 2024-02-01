// create a simple function that sums 2 numbers

// Pattern 1:

//const sum = (a, b) => {
//return a + b;
//};

// export the function

//module.exports = sum;

// Pattern 2:

// Instead of having module.exports on a 2nd line we can attach it to the arrow function

// replace const sum with module.exports

// module.exports = (a,b) => {return a+b};
// the require in the index file will not change.

// Pattern 3:

// export more than one function and a variable

//const sum = (a, b) => {
//return a + b;
//};

//const subtract = (a, b) => {
//return a - b;
//};

//const perCent = 25;

// We can export these in an object

//module.exports = { sum: sum, subtract: subtract, perCent: perCent };

// note if the key and value are the same we don't need to specify both the key and value
// so the object would look like:

// {sum, divide, percent};

// we then need to go back to the main index.js to change require declaration to an object

/// another pattern we could use is to chain onto module.export...

module.exports.sum = (a, b) => {
  return a + b;
};
module.exports.subtract = (a, b) => {
  return a - b;
};
module.exports.perCent = 25;

//module.exports = { sum: sum, subtract: subtract, perCent: perCent };
