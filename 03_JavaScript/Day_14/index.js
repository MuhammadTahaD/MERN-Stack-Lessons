// const newElement = document.createElement("h2")
// console.log(newElement)
// newElement.textContent = "Strike is Comming";
// newElement.id = "second";
// console.log(newElement)

// Select Element
// const element = document.getElementById("first");
// element.after(newElement);
// element.before(newElement)


// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Ramadan is Comming";
// newElement2.id = "third";
// newElement2.className = "ramadan";
// newElement2.className = "eid"; // Not a good practice

// newElement2.classList.add("eid");
// newElement2.style.backgroundColor = "pink";
// newElement2.style.fontSize = "20px";
// element.before(newElement2);
// console.log(newElement2.getAttribute("class"));

// const list = document.createElement("li");
// list.textContent = "Milk";
// const unorderElement = document.getElementById("listing");
// const list1 = document.createElement("li");
// list1.textContent = "Cake";
// const list2 = document.createElement("li");
// list2.textContent = "Sohan-Halwa";
// const list3 = document.createElement("li");
// list3.textContent = "Whey-Protien";
// const unorderElement = document.getElementById("listing");
// unorderElement.append(list, list1);
// unorderElement.append();
// unorderElement.prepend(list2);
// console.log(unorderElement.children)
// unorderElement.children[1].after(list3);



const arr = ["Malik", "Halwa", "Paneer", "tofu", "Tea"];
const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment()
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
    // unorderElement.append(list);
}
unorderElement.append(fragment); 

// What if we dont have anything like fragment

const s1 = document.getElementById("first");
s1.remove();

// Older methods
const month = document.getElementById("ten");
// console.log(month.children)
const lister = document.createElement("li");
lister.textContent = "help";
// month.insertAdjacentElement("beforeend", lister)

// Kam ki bat
// Why we should use textContent Instead of innerHTML ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.








