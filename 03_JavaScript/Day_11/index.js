// Scope and High Order Functions in JavaScript

// Types of Scopes
// 1. Global Scope
// 2. Functional Scope
// 3. Block Level Scope

// var does not respect the Block Level Scope

// 1. 
// let a = 30;
// const b = 20;
// 2. 
// if(true) {
//     var taha = 30;
//     let d = 30;
// }
// console.log(taha);

// // 3.
// let global = 30;
// function greet() {
//     let global = 40;
//     function meet() {
//         let global = 10;
//         console.log(global)
//     }
//     meet();
// }
// greet();



// function createCounter() {
//     let count  = 0;
//     function increment() {
//         // console.log("I am increment function.");
//         count++;
//         return count;
//     }
//     // increment();
//     return increment;
// }
// console.log(count)
// const count = createCounter();
// count();
// Clouser : The function that remember varaible at its outer scope.
// Uses the Heap memory for storing the variables
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// Use case of Clouser Function:
// let balance = 500;

// balance  = "Taha";
// balance -= 300;
// console.log(balance)



// let balance = 500;
// let user  = {
//     deposit: function (amount) {
//         if (typeof amount == "number" && amount > 0) {
//             this.balance += amount;
//             return this.balacne;
//         }
//     },
//     withdraw: function(amount) {
//         if(typeof amount = "number" && amount>0 && this.balacne >= amount){
//             this.balance -= amount;
//             return this.balance;
//         }
//     },
//     getBalance: function(){
//         return this.balance;
//     }
// }

// Here we an access the variable directly this can cause major flaws in the code:
// user.balance = "Taha";
// console.log(user.getBalacne());
// But the User should only access the method not the varaible if this is so user should access the method in other word we have to make the variable private


// function createBankAccount() {
//     let balance = 500;
//     return {
//         deposit: function (amount) {
//             if (typeof amount == "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function(amount) {
//             if(typeof amount == "number" && amount>0 && balance >= amount){
//                 this.balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function(){
//             return balance;
//         }
//     }
// }

// const customer = createBankAccount();
// // console.log(customer)
// // console.log(customer.withdraw(100));
// console.log(customer.deposit(40000))



// Higher Order Function: The function that returns another function

function double (value) {
    return function execute(num) {
        return num *= value
    }
}
// 1. Method
// const n = double(20);
// console.log(n(5));
// 2. Method
const n = double(20)(5);
console.log(n)
