const _ = require('lodash');
  
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, (number) => number * 2);
console.log(doubledNumbers);