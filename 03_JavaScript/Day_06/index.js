// Javascript Lecture 06


// String and Dates in Detail

// String:
// const str1 = "Taha.";
// const str2 = 'Malik Taha.';
// const taha = `Taha`: // This is know as Templete string
// const str3 = `Taha Learning JavaScript through 1st Thought Principle in a Modren Way.`; // Modren Way

// // const day = 1;
// const str4 = `Taha is learning Mern Stack Course from day ${day}\n`;
// console.log(str1, str2, str3, str4);
// console.log(str4, str4.length);



// Operation On String:

// 1. Accessing Element from the string:
// console.log(str4[0]);

// 2. String Conversion to Upper Case and Lower Case: Strings are immutables so any operation returns the new string
// Upper Case
// const str = "Hello Taha You Do Everything You just need to stand strong.";
// console.log(str.toUpperCase());
// // Lower Case
// console.log(str.toLocaleLowerCase());

// 3. Operation On Substring: Substring can be find from the main String
// const str = `Hello Taha Taha Taha`;
// console.log(str.indexOf('ta'))
// console.log(str.lastIndexOf('Ta'));
// console.log(str.includes('aha'))


// 4. Slicing in JavaScript String
// const str = `Hello Taha! How are you?`;
// console.log(str.slice(2,7)); // Only 1st index is included Last part is not included
// console.log(str.slice(2))
// console.log(str.slice(-4));

// const str = `Hello Taha! How are you?`;
// console.log(str.substring(0,5)); // Negative index cannot be marked in substrings


// Joining of Two or More than 2 strings:
// const a = "Taha";
// const b = "is becoming a good programer";
// const c = "a good programer now";
// Replacing a part of the string:
// console.log(a.replace("Ta", "Ma"));
// console.log(a.replaceAll("Ta", "Ma"));
// const d = a + " " + b + " " + c;
// console.log(d);

// Trim:
// const user = " Taha ";
// console.log(user.trim(user));

// const names = "Taha, Khan, Malik, Sudheer";
// console.log(names.split(","))


// 2. Dates: inconsistancies are present in Dates of JavaScript
// 1st Method:
// const now  = new Date();// Date Function gets date and time from the string
// console.log(now); // Shows time in UTC: Universal Time Coordinate.
// Into Readable Formate(string):
// console.log(now.toString());
// console.log(now.toLocaleDateString());
// Days are 1 based and Months are 0 based
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getSeconds());

// 2nd Method:
// const now = Date.now();
// const dates = new Date(0); // Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)
// const dates = new Date(-110302838287);// Mon Jul 04 1966 01:19:21 GMT-0700 (Pacific Daylight Time)
// console.log(now);// Gives date in milliseconds : Time Stamp : 1759608310147
// console.log(now.toString());
// console.log(dates.toString());
