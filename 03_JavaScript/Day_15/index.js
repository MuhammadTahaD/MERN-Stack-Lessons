// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Welcome back to the Amazing world of grinding";
// }
// But we dont prefer the onclick event listner

// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//     element.textContent = "The Consistancy is bigger and greater than the Temporary Motivation"
// }
// element.onclick = function handleClick() {
//     element.textContent = "This the blender also";
// }
// But We dont prefer this also becuase this overwrite the previous also.

// That is why we use the event Listner for this porpose
// element.addEventListener('dblclick', () => {
//     element.textContent = "This the blender also";
// })
// element.addEventListener('click', () => {
//     element.style.backgroundColor = "pink";
// })
// element.addEventListener('mouseenter', () => {
//     element.style.backgroundColor = "red";
// })
// element.addEventListener('mouseleave', () => {
//     element.style.backgroundColor = "green";
// })

// let a = {
//     greet: function(value){
//         console.log("Hello", value)
//     }
// }
// a.greet(10);
// a.greet(30);




// const child1 = document.getElementById("Id1");
// child1.addEventListener('click', () => {
//     child1.textContent = "I am Clicked";
// })


const parent = document.getElementById("parent");
// parent.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.textContent = "I'm Clicked";
// })
// Evet Listener Must be removed:
function handleClick(e) {
    e.target.textContent = "I'm Clicked";
};
parent.addEventListener('click', handleClick);
parent.removeEventListener('click', handleClick);



// console.log(parent.children);
// for(let child of parent.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I'm Clicked";
//     })
// }



// Bubbling : Capture Phase ---> Target Phase ---> Bubbling Phase

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e) => { // e is very powerful
//     console.log(e.target); // e Represent the event Object which contains all the information regrading the event.
//     e.stopPropagation(); // It can also be stopped.
//     console.log("GrandParent is clicked");
// },true) // True represent the Value of the Capture Phase
// const parent = document.getElementById("parent");
// parent.addEventListener('click', () => {
//     console.log("Parent is clicked");
// },true)
// const child = document.getElementById("child");
// child.addEventListener('click', () => {
//     console.log("child is clicked");
    
// },true) // False is third default argument which have reverse value when true



