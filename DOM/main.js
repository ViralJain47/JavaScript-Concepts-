//DOM - document object module 
    // object{} that represents the page you see in the web browser and provides you with an api to interact with it.
    // web browser constructs the DOM when it loads an html document,and structuring all the elements in a tree like representation.

// const welcome = document.getElementById("welcome");
// const username = "Viral jain";
// welcome.textContent += username === "" ? ` Guest`:  username;


// Element selector  
 
// methods that are used to target and manipulate html elements ,they allow you to select one or multiple  html elements from the dom

// 1.document.getElementById()  ELEMENT OR NULL 
// 2.document.getElementsByClassName()  HTML COLLECTION 
// 3.document.getElementsByTagName()  HTML COLLECTION 
// 4.document.querySelector() FIRST ELEMENT OR NULL 
// 5.document.querySelectorAll() NODELIST 

// const myheading = document.getElementById("my-heading");
// myheading.style.backgroundColor = "yellow";
// myheading.style.textAlign = "center";


// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);
// fruits[0].style.backgroundColor = "green";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "green";
// }

// Array.from(fruits).forEach( fruit => {
//     fruit.style.backgroundColor = "green";
// })



// const h4headings = document.getElementsByTagName("h4");
// const litags = document.getElementsByTagName("li");
// console.log(h4headings);
// console.log(litags);
// h4headings[0].style.backgroundColor = "red";

// for(let h4heading of h4headings){
//     h4heading.style.backgroundColor = "grey"
// }

// for(let litag of litags){
//     litag.style.backgroundColor = "blue";
// }


// const element1 = document.querySelector(".fruits");
// element1.style.backgroundColor = "yellow";

// const element2 = document.querySelector("#my-heading");
// element2.style.backgroundColor = "green";

// const element3 = document.querySelector("li");
// element3.style.backgroundColor = "grey"; 


// const fruits = document.querySelectorAll(".fruits");
// // console.log(fruits);
// // fruits[0].style.backgroundColor = "blue";
// fruits.forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// })



// DOM navigation 
// the process of navigating through the structure of a html document using js.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })


// .lastElementChild

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "blue";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "red";
// })



// .nextElementSibling

// const element = document.getElementById("A");
// const element = document.getElementById("fruits");
// const nextElement = element.nextElementSibling;
// nextElement.style.backgroundColor = "blue"


// .previousElementSibling

// const element = document.getElementById("desserts");
// const element = document.getElementById("P");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";


// .parentElement

// const element = document.getElementById("B");
// const parent = element.parentElement;
// parent.style.backgroundColor = "red";


// .children

// const element = document.getElementById("fruits");
// const childrens = element.children;
// // console.log(childrens);

// Array.from(childrens).forEach(children =>{
//     children.style.backgroundColor = "yellow";
// })


// Add and Change HTML 

// 1.create an element 
const newh1 = document.createElement("h1");

// 2.ADD ATTRIBUTES OR PROPERTIES 
newh1.textContent = "Viral Jain";
newh1.style.color = "red";
newh1.id = "myh1";
newh1.style.textAlign = "center"; 


// 3.APPEND ELEMENT ON DOM 
// document.body.append(newh1);//it will be the last child of the body
// document.body.prepend(newh1);  //first child

// document.getElementById("box1").prepend(newh1);
// document.getElementById("box1").append(newh1);
// document.getElementById("box2").append(newh1);


const box2 = document.getElementById("box2");
// document.body.insertBefore(newElement,currentElement)
document.body.insertBefore(newh1,box2) 




// REMOVE AN HTML ELEMENT 
document.body.removeChild(newh1);

