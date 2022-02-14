const calculate = require("./calculate");
const { v4: uuidv4 } = require('uuid');

console.log(calculate.addition(8,9));
console.log(calculate.multiplication(8,9));
console.log(uuidv4());