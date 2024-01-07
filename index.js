// Console Methods
/*
console.log('Hello world')
console.warn('this is a warning')
console.error('This is an error')
*/

//  Types of variables
/* 
const name = "Aliyu";
const value = 21;
const isCool = true;
const rating = 4.3;
const x = null;
const y = undefined;
let z;
console.log(typeof z);
*/

/* 
const company = "Dell";
const age = 23;
//!Concatenation
console.log(
  "My company name is " + company + " and it is " + age + " years old"
);

//! Template Strings or Template literals
console.log(`My company name is ${company} and it is ${age} years old`);
*/

/* 

//! String properties & Methods
const S = 'Some Text'

console.log(S.length);
console.log(S.toUpperCase());
console.log(S.toLocaleLowerCase());
console.log(S.substring(0,4 ));
console.log(S.substring(0, 4).toLocaleUpperCase());
console.log(S.split(''))

var products = 'technology, computers, tablets, cellphones'
console.log(products.split(', '))
*/

/* 
//! Arrays 
// Array Constructor
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);

// Array ES6
const fruits = ["Apple", "Mango", "Banana", "Avocado", 32, false];
console.log(fruits);
// Remember that Arrays are zero based
console.log(fruits[1]);

// To add to an array
fruits[6] = "Grape";
//adding to the begining
fruits.unshift("Raspberries");
//adding to the end
fruits.push("Strewberries");
//popping of the last array value
fruits.pop();
//To validate if Some thing is an array
console.log(Array.isArray(fruits));
//Get index of certain Value in an Array
console.log(fruits.indexOf("Avocado"));

console.log(fruits);
*/

/* 
//! Objects 
const person = {
  firstName: "Aliyu",
  lastName: "Abdullahi",
  age: 18,
  hobbies: ["musics", "movies", "sports"],
  address: {
    street: "Kpakungu main st",
    city: "Minna",
    state: "Niger state",
  },
};
console.log(person);

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.street);

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(lastName, city);
// Adding to an object 
person.email = 'aleryhuabdullahi@gmail.com';

console.log(person);
*/

/* 
//! Array of Objects 

const todos = [
  {
    id: 1,
    task: "Take out the trash",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Go to the therapist",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Meeting with boss",
    isCompleted: true,
  },
];

//console.log(todos[1].task);
const todoJSON = JSON.stringify(todos)
//console.log(todoJSON);
// loops => For loop
for (let i = 0; i < 10; i++){
 // console.log(`for loop number:${i}`);
}
// loops => While loop

let i = 0
while (i < 10) {
  //console.log(`while loop number:${i}`);
  i++
}
// Arrays Looping

for (let h = 0; h < todos.length; h++){
  console.log(todos[h]);
};
// Arrays Looping with for of

for (let todo of todos) {
  console.log(todo.id);
}
// High oder Array methods #forEach, #map, #filter

todos.forEach((todo) => {
  console.log(todo.isCompleted)
})

const todoTask = todos.map((todo) => {
  return todo.task
})

console.log(todoTask);

const todoCompleted = todos.filter((todo) => {
  return todo.isCompleted === true
}).map((todo) => {
  return todo.task
})
console.log(todoCompleted)
*/

/* 
// Conditional statements
const x = 7;
const y = 10
if (x > 5 || y < 11) {
console.log('x is greater than 5 or y is less than 11');
}

if (x > 5 && y > 8) {
  console.log('X is greater than 5 and y is greater than 8');
}

*/

