// json - (javascript object notation) data interchange format used for exchanging data between a server and a web application 
// json files can be in the form of object {key:value} , array of values [value1,value2,...]  or array of objects [{},{}...]


// JSON.stringify() - converts a js object to a JSON string
// JSON.parse() - converts a JSON string to a js object

const names = ["viral","yug","vansh","muskan"];
const namesJsonString = JSON.stringify(names);

console.log(namesJsonString);

const person = {
    "name":"viral",
    "age":"21",
    "isEmployed":true,
    "hobbies":["reading books","writing poems"]
}

const personJsonString = JSON.stringify(person);
console.log(personJsonString);

const personJsObject = JSON.parse(personJsonString);
console.log(personJsObject);


const people = `[{ "name":"viral","age":21,"isEmployed":true},
                {"name":"yug","age":20,"isEmployed":false},
                {"name":"vansh","age":20,"isEmployed":true},
                {"name":"muskan","age":22,"isEmployed":false}]`
// to convert this into a large string we will apply backticks on the whole content 

console.log(JSON.stringify(people));

// // now lets fetch the json file 

// fetch("person.json")//returns a promise
// .then(response => response.json())//here json() method consverts it into a json file and also returns a promise
// .then(value => console.log(value));

// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(JSON.stringify(value)))
//     .catch(error => console.error(error)); 