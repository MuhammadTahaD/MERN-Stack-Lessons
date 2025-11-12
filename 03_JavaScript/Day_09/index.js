// Functions in JavaScript


// function greeting(){
//     console.log("Hello Taha. Welcome back.");
//     return "Hello Taha";
// }
// // greeting();
// console.log(greeting());

// function addNumber(...num){ // ... is rest operator not spread operator;
//     let sum = 0;
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
// }
// addNumber(3,5);
// addNumber(6,7,8);
// addNumber(6,4,8,9);
// addNumber(3,6,4,7,9,5,7)



// const arr = [10, 30, 50, 90];
// const [first, second, ...num] = arr;
// console.log(first, second, num);

// Second Method of representing a function
// const addNumber = function(num1, num2)
// {
//     return num1+num2;
// }
// console.log(addNumber(5, 7));

// Twist
// console.log(addNumber(5, 7))

// function addNumber(num1, num2)
// {
//     return num1+num2;
// }



// Third Method : arrow method
// const addNumber = (num1, num2) => {
//     console.log("Hello Jee", num1+num2);
// }
// console.log(addNumber(5, 9))
// const addNumber = (num1, num2) => {
//     return num1+num2;
// };

// console.log(addNumber(6,9));

// let arr = [10, 200, 40, 30, 50];
// arr.sort((a, b) => b-a);
// console.log(arr);

// const squareNumber = num => num*num;
// console.log(squareNumber(6));

// const greeting = () => {
//     return {
//         name: "Taha",
//         age : 20
//     }
// }
// console.log(greeting())


// const greeting = () => ({name: "Taha", age: 20})
// console.log(greeting())

// Third Method : IIFE (Imediately Invode Function)
// ( ()=> {
//     console.log("Hello Taha")
// })();




// Function Callback:  A callback function in Javascript is a function passed as an argument to another function.

// function greet() {
//     console.log("Hello Taha.");
// }
// function dance() {
//     console.log("Im dancing")
// }
// function meet(callback) {
//     console.log("Im going to meet someone.");
//     callback();
//     console.log("I have finished meeting.");
// }
// meet(greet);
// meet(dance);


// Real Life Application for Callback function;
function blinkitOrderPlaced(){
    console.log("We have started packing your order.");
}
function zomatoOrderPlaced(){
    console.log("Your Order have been Placed");
}
function payment(amount, callback){
    console.log(`${amount} payment has initilized.`);
    console.log("Payment is recieved.");
    callback();
    // GST
    // Rider Payment
    // Company Benifit
}
payment(500,zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);



