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


// const myAge = '23';
// console.log(myAge);


// var a = 5;
// function myFunc1(){
//     if(true){
//         console.log(a+10);
//     }
// }
// myFunc1(); // 15

// let b= 5;
// function myFunc2(){
//     if(true){
//         console.log(b+10);
//     }
// }
// myFunc2(); // 15

// const c = 5;
// function myFunc3(){
//     if(true){
//         console.log(c+10);
//     }
// }
// myFunc3(); // 15



// function myFunc4() {
//     const a = 20;
//     if (true) {
//         let c = 220;
//         console.log(a + 20);
//     }
//     console.log(a + c);
// }
// myFunc4();


// function myFunc5() {
//     const a = 20;
//     if (true) {
//         const b = 120;
//         console.log(a + 20);
//     }
//     console.log(a + b);
// }
// myFunc5();


// // IIFE (Immediate invokeed function )
// (
//     function getFunc() {
//         let a = 5;
//         console.log(a + 45);
//     }
// )();
// // output: 50
// (
//     function getName() {
//         let b = "Faisal";
//         const c = "Ahmed";
//         console.log("My Name is " + b + " " + c);
//     }
// )();
// // output: My Name is Faisal Ahmed


// // using es6
// {
//     let a = 50;
//     const b = 40;
//     console.log(a+b);
// }


// // IIFE for function using es6 ways 
// {
//     var myFunc = function(){
//         const a = "Faisal Ahmed";
//         console.log(a);
//     }
// }
// myFunc();


// {
//     let myFunc2 = function(){
//         const a = "Shajib";
//         console.log(a);
//     }
// }
// myFunc2(); // error








