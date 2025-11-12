// Variables

// let name = "Taha";
// let age = 20;
// age = 19;

// console.log(name , age);

// const account = 1234;
// account = 2323;
// console.log(account);

var age = 20; // Old way to declear the variables
var age = 19;
// Does not respect the scope.
// if(age !=21){
//     let c = 18;
// }
// console.log(c); 
// That is why we use let and const keyword now days;



// Data Types:

// 1. Primitive Data Types: Primitive datatypes are immutable datatypes it means they cannot be changed 
    // It support copy by value
//    a. String
//     b. Number
//     c. Boolean
//     d. Null
//     e. Undefined
//     f. Symbol
//     g. BigInt


// 2. Non Primitive Data Types:
        //Non - Primitive are passed by Refrence like as arrays in C++
//     a. Object 
//     b. Array
//     c. Function
//     d. Date
//     e. RegExp
//     f. Error
//     g. Map




// Primitive Data Types
// Numbers
let a = 10;
a = 20; // But does not assign 20 to a. It just creates another memory location for the a for 20 but 10 is not destroyed.
let b = 2.35;
console.log(a,b)

// Strings
let c = "Taha is Learing JavaScript from the Best Teacher.";
let d = "The one an only Rohit Bhaiya.";

let name = "taha";
name[0] = "Malik";
console.log(name);
console.log(c,d);

// Bool
let login = true;
console.log(login)

// Undefine;
let user;
// const p; // Have to assign the Value with the const
console.log(user);

// Bigint
let num = 34939490490993929229n;
console.log(num)

// Null
let weather = null;
console.log(weather);
console.log(typeof weather); //Output will be Object: Ingherited Bug in JavaScript that is not fixed till now

// Symbol : Used to store the unique data like id
const id = Symbol("id");
console.log(id)
const id0 = Symbol("id0");
console.log(id == id0)




// 2. Non-Primitive Data Types : These data type are mute-ables

// Arrays:
let arr = ["Taha", true, 10, 1]; // if we put 01 in the array why did it gave an error
console.log(arr);
console.log(typeof arr)

// Objects:
let obj = {
    name: "Taha",
    phoneNo: 3356460508,
    age : 18, 
    category: 'General'
}
obj.name = "Malik";
console.log(obj);
console.log(typeof obj)



// Functions:

// Simple Function
function fun() {
    console.log("Hello")
}
fun();

// Function in a variable : We can store a function in a variable
let s = function add() {
    console.log(4 + 5);
}
s();
// console.log(typeof s);

