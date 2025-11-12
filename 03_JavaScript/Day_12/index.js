// Lecture 27: forEach, filter, reducer, map, set

//1. forEach
// const arr = [10, 20, 30, "Taha", 90];
// arr.forEach((number, index) => {
//     console.log(number, index);
// })

// const arr = [10,20,30,40,50, "Taha", 50]; // Output: 150Taha50
// const arr = [10,20,30,40,50, 10, 50]; 
// let sum = 0;
// arr.forEach((number) => {
//     sum += number;
// })
// console.log(sum);

// 2. Filter
// const arr = [10,20,30,40,50, 10, 50];
// const newArr = arr.filter((number) => number > 25);
// console.log(newArr); // Output will return a new array

// Behind the seen
// const arr = [10,20,30,40,50, 10, 50];
// arr.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr = arr.filtering((num) =>num>25);
// console.log(newArr);

// const arr = [10,20,30,40,50, 10, 50];
// Array.prototype.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr = arr.filtering((num) =>num>25);
// // console.log(newArr);
// const a = [10,30,100,40,20,40]
// const n = a.filtering((num) => num>30);
// console.log(n)





// 3. Map
// const arr = [10,20,30,40,50, 10, 50];
// const newArr = arr.map((num) => num*num);
// console.log(newArr);



// Real Life Usecases of Map and Filters: 
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProducts = products.filter((product) => product.price>500).sort((a ,b)=>a.price-b.price).map((product) => ({name:product.name, price: product.price}));
// console.log(newProducts);
// const ans = products.map((product) => ({name:product.name, price: product.price}))
// console.log(ans);


// 4. Reducer
// const totalPrice = products.reduce((accumulator, currentValue) =>{
//     if(currentValue.inStock){
//         return accumulator+currentValue.price;
//     }
//     else {
//         return accumulator;
//     }
// }, 0)
// console.log(totalPrice)


// 5. Set : Set is a Data Structure
// const arr = [10,20,30,40,50, 10, 50];
// console.log(arr);
// Set Removes the duplicate values form the arr. Or we can create an independent set 
// const s1 = new Set(arr);
// console.log(s1);
// s1.add(11);
// console.log(s1);
// s1.delete(10);
// // console.log(s1)
// console.log(s1.has(40));
// console.log(s1.has(23));
// console.log(s1.has(23));
// console.log(s1.size);
// s1.clear();
// console.log(s1.size);

// Real World Use Case of the Set
// const email = ["ro@gmail", "ta@gmail", "mo@gmail", "ta@gmail", "ro@gmail"];
// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail)

// const s1 = new Set(email);
// for(let num of s1){
//     console.log(num)
// }



// 6. Map : Data Structure

const m1 = new Map([
    ["Taha", 20],
    [2, "Rohit Sir"],
    [true, 11],
    [[10, 20, 30], "Daud"]
]);
m1.set({name: "taha", age: 20}, true)
// console.log(m1.has("Taha"))
// console.log(m1.size)

// Restructuring :
for(let [keys, value] of m1){
    console.log(keys, value)
}



