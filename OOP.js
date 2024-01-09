/* 
//Custom Constructor Function
function Person(firstName, lastName, dob) {
  this.Name = firstName;
  this.lastName = lastName;
  this.date = new Date(dob);
}
Person.prototype.getBirthYear = () => {
  return this.date.getFullYear();
};
Person.prototype.fullName = () => {
  return `${this.Name} ${this.lastName}`;
};
// Instantiate The Object

const person2 = new Person("Abdulhakeem", "Ganiyu", "14-01-2005");
const person3 = new Person("Nabila", "AbdulSalami", "23-01-2006");
const person4 = new Person("Hamida", "Adefisayo", "22-06-2007");

 */


// CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getFullName = () => {
    return `${this.firstName} ${this.lastName}`
  }
  getBirthYear = () => {
   return this.dob.getFullYear()
  }
}

const person1 = new Person("Aliyu", "Abdullahi", "23-06-2004");
console.log(person1);