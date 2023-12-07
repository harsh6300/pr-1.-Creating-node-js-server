const name = require('./local')

let sum = name.add(10, 7);
let min = name.min(20, 4);
let mul = name.mul(10, 7);
let div = name.div(20, 2);


console.log(`sum = ${sum}`);
console.log(`min = ${min}`);
console.log(`mul = ${mul}`);
console.log(`div = ${div}`);