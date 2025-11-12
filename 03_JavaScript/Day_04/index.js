// Operators, Loops and Condtionals in JavaScript


// Operator in JavaScript

// 1. Arithematic Operator
// console.log("Arithematic Operators:")
// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);



// 2. Assignment Operator
// let x = 20;
// let y = 10;
// x = x - y;
// shortcut
// x -= y;
// console.log(x, y)



// Comparison Operator
// let x = 20;
// let y = 30;
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x === y);

// let z = "20";
// let a = Number(z);
// console.log(typeof a, a);


// String ----> Number
// let x = 20;
// let y = "20";
// console.log(x == y);// Javascript automatically convert strings in to numbers when string is being compared with the number
// console.log(x === y); // But here first the type is checked

// let a = "121ac";
// let b = Number(a);
// console.log(b); // Output will be NaN means Not a Number.
// console.log(0/0); // Output will be NaN means Not a Number.


// Number -----> String

// let a = 18;
// let b = String(a);
// console.log(typeof b, b)

// These rules are made by ECMA Script
// let a = Number(true);
// let b = Number(false);
// console.log(typeof a, a, typeof b, b)



// Null ---> 0;
// undefined ---> NaN;

// let a = String("0.1");
// let b = String("0.2");
// let c = Number(a + b);
// console.log(c) // This will be the output : 0.30000000000000004. Since the numbers in javascript store the approximate valuse in the binary so these irragularity happens 


// ECMA Script Rules
// 1. null is loosely equal to undefined
// 2. null is converted to 0 when it is converted to number
// 3. undefined is converted to NaN

// console.log(NaN == NaN) // Answer is false.




// Loops in JavaScript:-


// 1. for loop:

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }


// 2. while loop:
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }



// 3. do while loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);






//3. Conditional Operators:


//1. if-else condition:
// let age = 20;
// if(age >= 18){
//     console.log("Adult");
// }
// else{
//     console.log("Not Adult");
// }

// 2. if else-if ... else


// let age = 20;
// if(age < 18){
//     console.log("Kid");
// }
// else if(age > 60){
//     console.log("Old")
// }
// else{
//     console.log("Young")
// }


// Logical Operator: &&, || 
// How AND , OR , & , | Operator works
