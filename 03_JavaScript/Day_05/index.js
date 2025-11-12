// Day 06

// Numbers and Math Object Explaination


// Numbers:
// let a = 10;
// let b = 234.4532;
// let c = b.toFixed(2);
// console.log(typeof c, c);
// console.log(b.toPrecision(5));
// console.log(b.toString());


// Now it will be treated like an object and objects are not equals to some thing
let a = new Number(20);
let b = new Number(20);
console.log(a == b); //Output will be false

// Objects:

console.log(Math.PI)
console.log(Math.random()) // Seed value is used which is the time in the cpu to generate the random numbers
// Satabazi haram hai.
console.log(Math.floor(Math.random()*10)+1);

// 1 to 6
console.log(Math.floor(Math.random()*6)+1);

// Gnerate a Number between 15-25
console.log(Math.floor(Math.random()*11)+15);
console.log(Math.floor(Math.random()*(9999-1000+1))+15);