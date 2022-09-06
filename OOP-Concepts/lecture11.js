// // normal object problem 
// var samir = {
//     name: "Samir",
//     age: 28,
// }

// var jamir = {
//     name: "Jamir",
//     age: 35
// }

// console.log(samir.name); // samir
// console.log(jamir.name); // jamir

// // here, dui ta object er e property same, but bar bar property likha lagtese





// // object er same repeated property, problem solved below:
// // making constructor function as a blue print 
// var Person = function(name, age){
//     this.name= name;
//     this.age = age;
// }

// var faisal = new Person("Faisal Ahmed",26);
// var rifat = new Person("Rifat", 25);

// console.log(faisal.name); // Faisal Ahmed
// console.log(rifat.name); // Rifat





// this and new keyword 
// new likha mane, create object and ei this keyword refer to that object 
// var MyName = function(n){
//     this.name = n;
// }
// const farhad = new MyName("Forid Ahmed");
// console.log(farhad.name); // Forid Ahmed






// // function constructor e method add kora, 
// // normal system, e function constructor e method add
// const PersonWithMethod = function (name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.dateOfBirth = function(){
//         console.log(this.name + " is born in " + (2022 - this.age));
//     }
// }
// const faisal = new PersonWithMethod("Faisal", 26, "jobless");
// // faisal.dateOfBirth(); // Faisal is born in 1996

// console.log(faisal);
// // output 
// // age: 26
// // dateOfBirth: ƒ ()
// // job: "jobless"
// // name: "Faisal"
// // [[Prototype]]: Object





// // prototype system, e function constructor e method add 
// const PersonWithMethod = function (name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }


// PersonWithMethod.prototype.dateOfBirth = function(){
//     console.log(this.name + " is born in " + (2022 - this.age));
// }

// console.log(PersonWithMethod.prototype);

// // output 
// // dateOfBirth: ƒ ()
// // constructor: ƒ (name, age, job)
// // [[Prototype]]: Object

// const faisal = new PersonWithMethod("Faisal", 33, "job search");
// faisal.dateOfBirth();






// // Constructor Inheritance 
// const Person = function(name, age){
//     this.name = name;
//     this.age = age;
// }

// const Teacher  = function(name, age, subject){
//     Person.call(this, name, age);
//     this.subject = subject;
// }

// const ahmed = new Teacher("F Ahmed", 35, "CSE");
// console.log(ahmed.name);
// // F Ahmed




// let const var 
// var myName = "faisal";
// console.log(myName); // faisal
// var myName = "ahmed";
// console.log(myName); // ahmed

// let myRoll = '23';
// console.log(myRoll);
// let myRoll = '35';  // error


const myAge = '23';
console.log(myAge);
