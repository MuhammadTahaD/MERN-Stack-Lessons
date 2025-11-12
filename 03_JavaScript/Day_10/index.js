// Hoisting in JavaScript

// Execution Context
// Memory Allocation

// console.log(a) // Undefined
// var a = 10;
// var b = 20;
// var sumResult1 = addNumber(a, b);
// console.log(sumResult1)

// function addNumber(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }
// var sumResult2 = addNumber(4, 6);
// console.log(sumResult1, sumResult2);

// Code Run ---> Execution Context;
// Step 01. Memory Allocation
// Step 02. Execution Phase
// console.dir(addNumber);

// Total Spaces in Memory : Stack Space ---> Heap Stack ---> Code Space

// console.log(a) // Error 
// let, const:
// a = <uninitialized> (Temporal Dead Zone)
// b = <uninitialized> (Temporal Dead Zone)
// But for var:
// a = undefined (not in Temporal Dead Zone)
// so for var a = unintialized in the output

const result = addNumber(a, b);
console.log(result); // Error due to temporal dead zone.
let a = 10;
const b = 30;
const addNumber = function (num1, num2)
{
    const sum = num1 + num2;
    return sum;
}
// const result = addNumber(a, b);
// console.log(result);
