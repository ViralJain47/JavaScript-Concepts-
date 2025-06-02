//alert(`this is an alert...`)
//console.log(`hey hello ......`)

// document.getElementById("myh1").textContent = "hello";
// document.getElementById("myp").textContent = "i like dal chawal";

//variables

// let age = 21;
// let grad = 8.0;
// let salary = 250000;

// console.log(`you are ${age} old`);//template literals
// //or 
// console.log("you are "+age+" years old...");


// let fullName = "Viral jain";
// let student = true;

// document.getElementById("p1").textContent = `my name is ${fullName}`;
// document.getElementById("p2").textContent = `my age is ${age}`;
// document.getElementById("p3").textContent = `i am a student : ${student}`;

//USER INPUT:-

// 1.easy way
// let username;

// // username = window.prompt("what is your name :");
// // console.log(username);

// // 2.professional way

// document.getElementById("mySubmit").onclick = function()
// {
//     username = document.getElementById("myText").value;
//     document.getElementById("myh1").textContent = `hello ${username}`;
// }


//TYPE CONVERSION :-

// if i take anything in input it comes in string form

// let x = 57;
// let y = 7;
// let z = Number("dal");//not a number
// console.log(x+y+z,typeof x);


// COUNTER PROGRAM

// const dec = document.getElementById("decbtn");
// const reset = document.getElementById("resetbtm");
// const inc = document.getElementById("inbtn");
// const counterLable = document.getElementById("counterLable");

// let count = 0;
// inc.onclick = function(){
//     count++;
//     counterLable.textContent = count;
// }

// dec.onclick = function(){
//     count--;
//     counterLable.textContent = count;
// }

// reset.onclick = function(){
//     count = 0;
//     counterLable.textContent = count;
// }


//Math = built - in object that provides a collection of properties and methods 
// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.29;

// let y = Math.round(x);
// let p = Math.floor(x);
// let q = Math.ceil(x);

// console.log(y,p,q);

// let a = Math.trunc(x);
// let max = Math.max(x,y,p,q,a);
// let min = Math.min(x,y,p,q,a);

// console.log(a);


//RANDOM NUMBER

// let random_num = Math.random();//it generates from 0 to 1
// // if i want a No. from 1 to 6
// // then
// random_num = Math.floor(Math.random()*6+1);

// //from this if we want to generate random no. in between the values 
// let min = 50;
// let max = 100;

// random_num = Math.floor((Math.random()*(max-min)+min));
// console.log(random_num);

// roll a dice for getting random no. in between 1 to 6

// let myButton = document.getElementById("mybtn");
// let myLabel = document.getElementById("myLabel");
// let min = 1;
// let max = 6;
// let random_num;

// myButton.onclick = function(){
//     random_num = Math.floor((Math.random()*max)+min);
//     myLabel.textContent = random_num;
// }


// CHECKED PROPERTY 
// const myCheckbox = document.getElementById("myCheckbox");
// const myVisa = document.getElementById("myVisa");
// const myMastercard = document.getElementById("myMastercard");
// const myupi = document.getElementById("myupi");
// const mySubmit = document.getElementById("mySubmit");
// const isSub = document.getElementById("isSub");
// const isPayment = document.getElementById("isPayment");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         isSub.textContent = `you are Subscribed`;    

//         if(myVisa.checked){
//             isPayment.textContent = `you are paying by using visa`;
//         }
//         else if(myMastercard.checked){
//             isPayment.textContent = `you are paying by using Mastercard`;
//         }
//         else if(myupi.checked){
//             isPayment.textContent = `you are paying by using UPI`;
//         }
//         else{
//             isPayment.textContent = `you have to choose a payment option`;
//         }
//     }
//     else{
//         isSub.textContent = `you are not Subscribed`;
//     }
// }

// switch 
// let testScore = 92;
// let grade;

// switch(true)
// {
//     case testScore >= 90:
//         grade = "A";
//         console.log(grade);
//         break;

//     case testScore <90 && testScore>=80:
//         grade = "B+";
//         console.log(grade);
//         break;

//     case testScore <80:
//         grade = "Fail";
//         console.log(grade);
//         break;
    
// }


// string 
// let username = "viral";

// console.log(username.charAt(0));//we have to pass index in it in order to get the char at that partcular index
// console.log(username.indexOf("r"));//it shows the index where first time r is occuring
// console.log(username.length);

// username = "      viral            ";
// username = username.trim();
// console.log(username.length);
// console.log(username);

// console.log(username.toUpperCase());
// console.log(username.repeat(4));

// username  = " viral";
// let result = username.startsWith(" ");//this method returns a boolean value
// console.log(result);
// result = username.endsWith("l");
// console.log(result);

// result = username.includes("a");
// console.log(result);

// let phoneNumber = "0123-456-789";

// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(13,"+91");
// console.log(phoneNumber);

// phoneNumber.padEnd

// string slicing 

// stringname.slice(start,end)

// let fullName = "Viral Jain";

// noob way 
// let firstname = fullName.slice(0,5);
// let lastname = fullName.slice(6,10);
// console.log(firstname);
// console.log(lastname);

// let firstchar = fullName.slice(0,1);
// let lastchar = fullName.slice(-1);

// console.log(firstchar);
// console.log(lastchar);


// pro way 
// let firstname = fullName.slice(0,fullName.indexOf(" "));
// let lastname = fullName.slice(fullName.indexOf(" ")+1);

// console.log(firstname);
// console.log(lastname);

// method chaining

// without method chaining
// let username = window.prompt("Enter your Username :");
// username = username.trim();
// let firstchar = username.charAt(0);
// firstchar = firstchar.toUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();

// username = firstchar + extrachar;
// console.log(username);

// with method chaining
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// = assignment operator
// == comparision operator (compare if values are equal)
// === strict equality operator (compare if values and datatype is equal)
// != inequality operator
// !== strict inequality operator



// while loop

// example1
// let username = "";
// while(username === "" || username === null )
// {
//     username = window.prompt("Enter your Username:");
// }
// console.log(`hello ${username}`);

// example2
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your Username :");
//     password = window.prompt("Enter your Password :");

//     if(username ==="myUser" && password === "12345"){
//         console.log("login Successfull");
//         loggedIn = true;
//     }
// }


// Number Guessing Game 

// const min = 1;
// const max = 100;
// let count = 1;
// const result = Math.floor(((Math.random()*(max-min))+min));
// let tryin = false;

// while(!tryin){
//     let num = Number(window.prompt(`Enter any no. from ${min} - ${max} :`));

//     if(isNaN == num){
//         window.alert(`enter a valid number.`);
//     }
//     else if(max<num || min>num){
//         window.alert(`enter a valid number.`);
//     }
//     else if(num>result){
//         window.alert(`${num} is Too High! Try Again......`);
//         count++;
//     }
//     else if(num<result){
//         window.alert(`${num} is Too Low! Try Again......`);
//         count++;
//     }
//     else{
//         tryin = true;
//         window.alert(`hurray the correct no. is ${num} ! you guessed it right this in ${count} attempts.`);
//     }
// }


// function 

// function isEmailVaild(email){

//     if(email.includes("@gmail.com")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEmailVaild("viraljain@afake.com"));




// Temperature Converter

// const textbox = document.getElementById("textbox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textbox.value);
//         temp = temp*(9/5)+32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textbox.value);
//         temp = (temp-32)*(5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit";
//     }

// }




// array 
// let fruits = ["apple","banana"];
// fruits.push("mango");
// fruits.unshift("coconut");
// fruits.pop();
// fruits.shift();
// console.log(fruits[0]);
// console.log(fruits[1]);
// //console.log(fruits[2]);
// //console.log(fruits[3]);
// fruits.push("mango");
// fruits.unshift("coconut");

// fruits.sort();
// for(let fruit of fruits){
//     console.log(fruit);
// }


//spread operator (...) - it allows an iterable such as arrays and strings to be expanded into seperate elements
// (it unpacks the elements)

// let arr = [1,2,3,4,5];
// // let max = Math.max(arr); we cant directly pass arr in functions so we have to use spread  operator who unpacks the array and give permission to us to accesss them seperately 

// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(max);
// console.log(min);

// let username = "viral jain";
// let letter = [...username].join("-");
// console.log(letter);

// let fruits = ["apple","mango","banana"];
// let vegetables = ["potato","tomato"];
// let food = [...fruits,...vegetables,"milk"];
// console.log(food);


//rest parameter
// it allows a function to work with a variable No. of arguments by bundling them into an array 

// function fridge(...foods){

//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }
// const food1 = "daal";
// const food2 = "roti";
// const food3 = "chawal";
// const food4 = "pizza";
// const food5 = "pasta";

// fridge(food1,food2,food3,food4,food5);

// const foods = getFood(food1,food2,food3,food4,food5);
// console.log(foods);

// function calculatebill(...items){
//     let sum = 0;
//     for(let item of items){
//         sum = sum+item;
//     }
//     return sum;
// }

// let bill = calculatebill(1,2,3,45,67);

// console.log(`your bill is ₹${bill}`);


//dice roller


// function rollDice(){

//     const numOfDice = document.getElementById("numbox").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i = 0;i<numOfDice;i++)
//     {
//         let random_num = Math.floor((Math.random()*6)+1);
//         //console.log(random_num);
//         values.push(random_num);
//         images.push(`<img src="dice/${random_num}.svg" alt="Dice ${random_num}">`);
//     }
//     diceResult.textContent = `Dice : ${values.join(' , ')}`;
//     diceImages.innerHTML = images.join('');
// }


// Password Generator
// function generatePassword(length,lc,upc,num,sym){
//     const lowercase = "abcdefghijklmopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
//     const number = "0123456789";
//     const symbol = "!@#$%^&*()_+";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += lc?lowercase:"";
//     allowedChars += upc?uppercase:"";
//     allowedChars += num?number:"";
//     allowedChars += sym?symbol:"";

//     if(length<=0){
//         return `(password length must be atleast 1.)`;
//     }

//     if(allowedChars.length === 0){
//         return `(Atleast one set of character should be selected.)`
//     }
    
//     for(let i=0;i<length;i++){
//         let random_num = Math.floor(Math.random()*allowedChars.length);

//         password += allowedChars[random_num];
//     }
//     return password;
// }

// const passwordLength = 8;
// const isLowercase = true;
// const isUppercase = true;
// const isNumber = true;
// const isSymbol = true;

// const password = generatePassword(passwordLength,isLowercase,isUppercase,isNumber,isSymbol);

// console.log(`Generated Password : ${password}`);



// Callback 

// a function passed as an argument to another function

// hello(howAreYou);
// goodbye();

// function hello(callback){
//     console.log("hello.");
//     callback();
// }

// function howAreYou(){
//     console.log("how are you doin..")
// }

// function goodbye(){
//     console.log("Goodbye.");
// }

// add(displayResult,5,10);
// function add(callback,x,y){
//     let result = x+y;
//     callback(result);
// }

// function displayResult(result){
//     console.log(result);
// }


//for each
// it is a method used to iterate over the elements of an array and apply a specified function (callback) to each element 

// array.forEach(callback)
// element, index ,array are provided

// let array = [1,2,3,4,5];

// array.forEach(double);
// array.forEach(display);

// array.forEach(square);
// array.forEach(display);
// function double(element,index,array){
//     array[index] = element*2;
// }

// function square(element,index,array){
//     array[index] = element*element;
// }
// function display(element){
//     console.log(element);
// }



// let fruits = ["apple","banana","mango","coconut"];

// fruits.forEach(uppercase);
// fruits.forEach(display);

// function uppercase(element,index ,array){
//     array[index] = element.toUpperCase();
// }

// function display(element){
//     console.log(element);
// }


// Map - method that accepts a callback and applies that function on each element of an array and returns a new array 
// const number = [1,2,3,4,5];
// const sq = number.map(square);
// const cu = number.map(cube);

// console.log(number)
// console.log(sq);
// console.log(cu);
// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// const student = ["yug","vansh","sanyam","samar"];
// const studentuc = student.map(uppercase);

// console.log(studentuc);

// function uppercase(element){
//     return element.toUpperCase();
// }

//y-m-d to d/m/y

// const date = ["2024-11-10","2025-7-3"];

// const formattedDates = date.map(dateConversion);
// console.log(formattedDates);

// function dateConversion(element){
//     const parts = element.split("-");

//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }



//Filter method:
// creates a new array by filtering out elements 

// const number = [1,2,3,4,5,6,7,8,9,10];

// const evenNum = number.filter(isEven);
// console.log(evenNum);

// function isEven(element){
//     return element%2 ===0;
// }


// const words = ["mango","coconut","pumpkin","apple","watermelon"];
// const greater = words.filter(isgreater);

// console.log(greater);

// function isgreater(element){
//     return element.length >=6;
// }



// reduce method 
// it reduce the elements of an array to a single value 

// const price = [5,30,45,60,100];
// const total = price.reduce(sum);

// console.log(total);
// function sum(previousValueOfElement,nextValueOfElement){
//     return previousValueOfElement + nextValueOfElement;
// }


// const num = [2,1,45,67,34,89,202,99,47];
// const max = num.reduce(toFindMax);

// console.log(max);

// function toFindMax(accumulator,element){
//     return Math.max(accumulator,element);
// }





// function expression - a way to define a function in a variable or values

// const hello = function(){
//     console.log("Hello");
// }

// hello();
// setTimeout(function(){
//     console.log("hello");
// },3000);


// const num = [1,2,3,4,5,6];
// const squares = num.map(function(element){
//     return Math.pow(element,2);
// });

// console.log(squares);





// Arrow functions - a concise way to write function expressions good for simple functions that you only use once.

// const hello = () => console.log("hello");
// hello();

// const hello = (name,age) => {console.log(`hello ${name}`)
//                          console.log(`i am ${age} years old`) };
// hello("viral",21);

// setTimeout(()=>console.log("hello"),3000);

// const num = [1,2,3,4,5,6];

// const squares = num.map((element)=>Math.pow(element,2));
// console.log(squares);

// const even = num.filter((element)=>element%2===0);
// console.log(even);

// const max = num.reduce((accumulator,element)=>Math.max(accumulator,element));
// console.log(max);





// Objects - A collection of related properties and/or methods can represent real world objects 
//  object = {key:CSSMathValue,function()}

// const person = {
//     firstname : "Viral",
//     lastname : "Jain",
//     age : 21,
//     isEmployed : true,
//     sayHello: ()=>console.log("hey ! hello")
// };
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayHello();




// this  - reference to the object where this is used (the object depends upon the current context)
// person.name = this.name

// const person = {
//     name:"Viral Jain",
//     age: 21,
//     sayMyName: function(){
//         console.log(`My Name is ${this.name}`)
//     }
// }

// person.sayMyName();



// constuctor - special method for defining the properties and methods of objects

// function Car(company, model, year, color){
//     this.company = company,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`you are driving a ${this.model}`)} 
// }


// const car1 = new Car("BMW","B21","2024","red");
// const car2 = new Car("Ford","Mustang","2021","yellow");

// console.log(car1.company);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.company);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// car1.drive();
// car2.drive();


//class - it is an es6 feature used to provide more cleaner way to deal with objects

// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`${this.name}`);
//         console.log(`₨ ${this.price}`);
//     }

//     calcSalesTax(sales_tax){
//         return this.price + (this.price * sales_tax);
//     }
// }

// const sales_tax = 0.18;
// const product1 = new Product("t-shirt",499);
// const product2 = new Product("pants",599);
// const product3 = new Product("underwear",1599);
// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product1.calcSalesTax(sales_tax);
// console.log(`Total (including tax) : ₨ ${total.toFixed(2)}`);



// static - keyword that defines properties or methods that belongs to the class itself rather than objects created from that class (class owns anything static,not the objects)

// class MathUtil{
//     static PI = 3.14;

//     static circumference(radius){
//         console.log((2*this.PI*radius).toFixed(2));
//     }

//     static area(radius){
//         console.log(this.PI*radius*radius);
//     }
// }

// console.log(MathUtil.PI);

// MathUtil.circumference(10);
// MathUtil.area(10);


// inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }
// }


// class Lion extends Animal{
//     name = "lion";
//     run(){
//         console.log(`${this.name} can Run.`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//         console.log(`${this.name} can Run.`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`${this.name} can Swim.`);
//     }
// }

// const lion = new Lion();
// console.log(lion.alive);
// lion.eat();
// const rabbit = new Rabbit();
// rabbit.sleep();
// const fish = new Fish();
// fish.swim();
// lion.run();




//super - if there are some common properties in the child classes then we use super keyword


// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`this ${this.name} have speed of ${speed} km/h`);
//     }
// }

// class Lion extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         // this.name = name;
//         // this.age = age;
//         this.runspeed = runspeed;
//     }

//     run(){
//         console.log(`${this.name} can Run.`);
//         super.move(this.runspeed);
//     }
// }

// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//         // this.name = name;
//         // this.age = age;
//         super(name,age);
//         this.swimspeed = swimspeed;
//     }
//     swim(){
//         console.log(`${this.name} can Swim.`)
//     }
// }

// class Hawk extends Animal{
//     constructor(name,age,flyspeed){
//         // this.name = name;
//         // this.age = age;
//         super(name,age);
//         this.flyspeed = flyspeed;
//     }

//     fly(){
//         console.log(`${this.name} can Fly.`)
//     }
// }


// const lion = new Lion("lion",10,25);
// const fish = new Fish("fish1",12,20);
// const hawk = new Hawk("hawk1",40,60);


// lion.run();
// to access parent method i have to use super keyword 



// setter and getter methods 

// class Reactangle{
//     constructor(width,height)
//     {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth)
//     {
//         if(newWidth>0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("please enter a positive number.");
//         }
        
//     }

//     set height(newHeight)
//     {
//         if(newHeight>0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("please enter a positive number.");
//         }
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return (this._height*this._width).toFixed(1);
//     }
// }

// // const rectangle = new Reactangle(-100000,"kuch bhi");
// const rectangle = new Reactangle(10,20);
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);




// class Person
// {
//     constructor(firstName,lastName)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     set firstName(newfn)
//     {
//         if(typeof newfn === "string"  && newfn.length>0){
//             this._firstName = newfn;
//         }
//         else{
//             console.error("first name must be a non-empty string.");
//         }
//     }
//     set lastName(newln)
//     {
//         if(typeof newln === "string"  && newln.length>0){
//             this._lastName = newln;
//         }
//         else{
//             console.error("last name must be a non empty string.");
//         }
//     }
//     get firstName()
//     {
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }

//     get fullName(){
//         return this._firstName+" "+this._lastName;
//     }
// }

// // const person = new Person(420,"pizza");
// const person = new Person("viral","jain");
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);




//destructuring - extract values from arrays and objects ,then assign them to variables in a convinient way 
// [] - to perform array destructuring
// {} - to perform object destructuring


// swap two Number 
// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// swap two elements of an array 
// const color = ["red","green","white","blue"];
// [color[0],color[3]] = [color[3],color[0]];
// console.log(color);


// assign array elements in variables

// const color = ["red","green","yellow","blue","black"];

// const [firstcolor, secondcolor, thirdcolor, ...extracolor] = color;
// console.log(firstcolor);
// console.log(secondcolor);
// console.log(thirdcolor);
// console.log(extracolor);//created a new array 



// extract values from object 

// const person1 = {
//     firstName : "vansh",
//     lastName : "dubey",
//     age : 20,
//     job : "crying over a girl"
// }

// const person2 = {
//     firstName : "yug",
//     lastName : "shrivastava",
//     age : 25
// }

// // const {firstName,lastName,age,job = "unemployed"} = person1;
// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);

// const {firstName,lastName,age,job = "unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);



// destructuring in function parameters
// function display({firstName,lastName,age,job = "unemplyed"}){
//     console.log(`Name : ${firstName} ${lastName}`);
//     console.log(`age : ${age}`);
//     console.log(`job : ${job}`);
// }

// const person1 = {
//     firstName : "vansh",
//     lastName : "dubey",
//     age : 20,
//     job : "always saying aayeheinnn..........."
// }

// const person2 = {
//     firstName : "yug",
//     lastName : "shrivastava",
//     age : 25
// }

// display(person1);
// display(person2);



// nested objects
// const person = {
//     name : "viral jain",
//     age : 21,
//     hobbies : ["cricket","chess","random searching"],
//     address : {
//         city : "indore",
//         pincode : 452009
//     }
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[2]);
// console.log(person.address);
// console.log(person.address.city);




// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(city,pincode){
//         this.city = city;
//         this.pincode = pincode;
//     }
// }

// const person1 = new Person("viral jain",21,"indore",452009);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address);
// console.log(person1.address.city);
// console.log(person1.address.pincode);




// array of object 

// const fruits = [{name : "apple" ,color : "red",cal : 95},
//                 {name : "banana" ,color : "yellow",cal : 105},
//                 {name : "orange" ,color : "orange",cal : 45},
//                 {name : "coconut" ,color : "white",cal : 30},
//                 {name : "mango" ,color : "yellow",cal : 60}
//     ];

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[0].cal);
// fruits.push({name : "pineapple" , color : "greenish yellow", cal : 69});
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.splice(1,2);
// console.log(fruits)


// fruits.forEach(variable => console.log(variable));
// fruits.forEach(variable => console.log(variable.name));
// fruits.forEach(variable => console.log(variable.color));
// fruits.forEach(variable => console.log(variable.cal));

// variable = fruits.map(fruit => fruit.name);
// console.log(variable);

// yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
// console.log(yellowFruits);

// maxCalories = fruits.reduce(    (max,fruit) => 
//                                 fruit.cal>max.cal?
//                                 fruit:max              );

// console.log(maxCalories);
// console.log(maxCalories.name);




//sort method - used to sort the elements of an array in place
                // sort elments as strings in lexicographic order 
                // in lexicographic first comes alphabet,then numbers ,and last symbols

// const fruits = ["banana","apple","coconut","mango","grapes"];
// console.log(fruits.sort());

// const number = [1,10,2,4,5,3,6,9,8,7];
// number.sort((a,b) => a-b);//ascending
// console.log(number);
// number.sort((a,b) => b-a);//descending
// console.log(number);


// we can also sort object by sort method 
// const people = [{name : "viral jain" ,age:21,gpa : 7.5},
//                 {name : "vansh dubey" ,age:20,gpa : 7.3},
//                 {name : "yug shrivastava" ,age:19,gpa : 6.9}
// ]

// people.sort((a,b) => a.age -b.age);
// console.log(people);
// people.sort((a,b) => b.gpa - a.gpa);
// console.log(people);
// people.sort((a,b) => a.name.localeCompare(b.name));
// console.log(people);








// shuffle
// you should use fisher-yates method 
// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];
// shuffle(cards);
// console.log(cards);

// function shuffle(array){
//     for(let i = array.length-1 ; i>0 ; i--){

//         const random = Math.floor(Math.random()*(i+1));
//         [array[i],array[random]] = [array[random],array[i]];
//     }
// }






//date objects - objects that contains values in the form of dates and times these can be changed and formatted
//Date(year,month,day,hour,minutes,second,ms)
// const date = new Date(2025,0,1,2,3,4,5);
// const date = new Date;
// console.log(date);

// const year = date.getFullYear();
// const month = date.getMonth();
// console.log(year);
// console.log(month+1);

// date.setFullYear(2025);
// console.log(date);

// const date1 = new Date("2024-12-31");
// const date2 = new Date("2024-01-01");

// if(date1>date2){
//     console.log("happy new year!!!!");
// }





// closure - a function defined inside a function ,the inner function has access to the variables and the scope of the outer function .
// allow for private variables and state maintenance 

// function outer(){
//     let message = "hello Viral";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();
// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`count is increased by ${count}`);
//     }
//     return {increment};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// function gameScore(){

//         let score = 0;

//         function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//         }

//         function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//         }

//         function getScore(){
//         return score;
//         }

//         return {increaseScore,decreaseScore,getScore}
// }

// // increaseScore(5);
// // decreaseScore(3);
// // increaseScore(7);
// // console.log(`The Final Score is ${getScore()}pts`);

// const sc = gameScore();
// sc.increaseScore(5);
// sc.increaseScore(5);
// sc.increaseScore(5);
// sc.increaseScore(5);
// sc.increaseScore(5);
// sc.decreaseScore(3);
// sc.decreaseScore(3);
// sc.decreaseScore(3);
// console.log(`The Final Score is ${sc.getScore()}pts`);





// setTimeout - function in javascript that allows you to schedule the execution of a function after an amount of time in ms 
    // setTimeout(callback,delay)

// const timeoutId = setTimeout(()=>{window.alert("hello user..")},2000)

// clearTimeout(timeoutId);

// let timeoutId ;
// function startTimer(){
//    timeoutId = setTimeout(() => {window.alert("hell yeah.....")},3000);
//    console.log("started");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("cleared");
// }





//DIGITAL CLOCK
// 24 format 
// function updateClock(){
//     const current = new Date();
//     const hour = current.getHours().toString().padStart(2,0);
//     const min = current.getMinutes().toString().padStart(2,0);
//     const sec = current.getSeconds().toString().padStart(2,0);

//     const timeString = `${hour}:${min}:${sec}`;
//     document.getElementById("clock").textContent = timeString;
// }

// // setInterval(() => updateClock(),1000);
// setInterval(updateClock,1000);

// 12 format 
// function updateClock(){
//     const current = new Date();
//     let hour = current.getHours();
//     let meridiem = hour<12 ? "AM" : "PM";
//     hour = hour%12 || 12;
//     hour = hour.toString().padStart(2,0);
//     const min = current.getMinutes().toString().padStart(2,0);
//     const sec = current.getSeconds().toString().padStart(2,0);

//     const timeString = `${hour}:${min}:${sec} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
// }

// setInterval(updateClock,1000);





//Stopwatch
// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;
// function start(){
//     if(!isRunning){
//         startTime = Date.now()-elapsedTime;
//         timer = setInterval(update,10);
//         isRunning = true;
//     }
// }

// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }

// }
// function reset(){
//     clearInterval(timer);
//      startTime = 0;
//      elapsedTime = 0;
//      isRunning = false;
//      display.textContent = `00:00:00:00`;
// }
// function update(){
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let secs = Math.floor(elapsedTime / 1000 % 60); 
//     let ms = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2,0);
//     mins = String(mins).padStart(2,0);
//     secs = String(secs).padStart(2,0);
//     ms = String(ms).padStart(2,0);

//     display.textContent = `${hours}:${mins}:${secs}:${ms} `;
// }









// Synchronus = execute line by line consecutively in a sequential manner code that waits for an operation to complete 

//Asychronus = Allow multiple operations to be performed concurrently without waiting doesnt block the execution flow and allows the program to continue (io opereation ,network request ,fetching data) handled with : callbaks .promises, async/await


// synchronus Code 
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// Asynchronus code 
// setTimeout(() => {
//     console.log("task 1")
// }, 4000);
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");









// Error - an object that is created to represent a problem that occurs often with user input or establishing a connection 

// try {}- enclose the code that might cause an error 
// catch {} - catch and handle any thrown errors from try{}
// finally{} - that part of the code you always want to execute 

// try{
//     console.log(a);
// }
// catch(e){
//     console.error(e);
// }
// finally{
//     console.log("always run");
// }
// console.log("end.....");




// const dividend = window.prompt("enter dividend - ");
// const divisor = window.prompt("enter divisor - ");

// try{
//     if(divisor==0){
//         throw new Error("divisor cant be zero");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("enter a number.");
//     }

//     const result = dividend/divisor;
//     console.log(result);
// }

// catch(e){
//     console.error(e);
// }

// console.log("end...");