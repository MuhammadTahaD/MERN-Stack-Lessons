// JavaScript Lecture 07

// Arrays in Detail:
// let marks = [1, 20, 40];
// console.log(marks);
// console.log(marks.length)

// let arr = ["Taha", 30, 20];
// console.log(arr[0]);
// arr[1] = 90;
// console.log(arr)

// Operation on Arrays:

// 1. Push:
// arr.push("Malik");
// arr.push(3432)
// // arr.pop(arr[2]);
// // console.log(arr)

// // 2. Pop:
// arr.pop();
// console.log(arr);

// // 3. unshift: Add the element to the 0 index but inefficient
// arr.unshift(10);
// arr.unshift(154);
// console.log(arr);

// // 4. shift : Delets the 0 indexed element
// arr.shift();
// console.log(arr) 
// let arr = [10, 20 ,30, 40];
// for(let i = 0; i < 4; i++){
//     console.log(arr[i])
// }

// let arr = [10, 20 ,30, 40];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let num of arr){
//     console.log(num)
// }

// let arr1 = [10, 20, 30, 54];
// let arr2 = arr1;
// arr2.push(100);
// console.log(arr2);

// const arr = [20, 43, 23, 21];
// arr = [30, 533 , 343]; // Not allowed
// console.log(arr);


// 6. Slicing in arrays:
// const arr1 = [10, 20, 50, 54, 59];
// const arr2 = arr1.slice(1,4)
// console.log(arr2);
// // 7. Splice Operator
// console.log(arr1.splice(1,4, "Taha", 32));
// console.log(arr1);

// 8. Spread Operator:
// const arr1 = [10, 20, 50, 54, 59];
// const arr2 = ["Taha", 11, true];
// const arr3 = [true, "Malik", "3rd Array"];
// const arr3 = arr1.concat(arr2);
// const arr4 = [arr1, arr2, arr3];
// const arr4 = [...arr1,...arr2,...arr3]
// console.log(arr4);


// 9. Join Operation:
// const name = ["Malik", "Muhammad" , "Taha", "Dandhla", "Khan"];
// console.log(name.join("-"))

// 10. Simple Search:
// console.log(name.indexOf("Taha"));
// console.log(name.lastIndexOf("Muhammad"));
// console.log(name.includes("Taha"));

// 11. Sorting in Arrays:
// const name = ["Malik", "Muhammad" , "Taha", "Dandhla", "Khan"];
// sort
// console.log(name.sort());
// reverse
// console.log(name.reverse());

// Arrays treat every character and number as a String, thus:
// const a = [493, 34, 202, 4323232, 45];
// console.log(a.sort()); //Output is: [ 202, 34, 4323232, 45, 493 ]

// Sorting like C++
// const a = [493, 34, 202, 4323232, 45];
// We use special values or say function for this, given below:

// Ascending
// a.sort((a,b) => a-b);
// console.log(a)
// a.sort((a,b) => b-a);
// console.log(a);


// Array in an Array:
// const arr = [10, 30, 43, [34, 20, 30, [32, 43, 20], 11], 45, 43]
// console.log(arr[3][3][1])
// Flatting the array:
// const a = arr.flat(Infinity);
// console.log(a);




// Why array is not an array in the javascript

// const a = [493, 34, 202, 4323232, 45];
// console.log(a["0"]) // Explained the logic why arrays are not arrays they are objects.