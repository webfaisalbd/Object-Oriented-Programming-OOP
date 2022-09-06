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
var MyName = function(n){
    this.name = n;
}
const farhad = new MyName("Forid Ahmed");
console.log(farhad.name); // Forid Ahmed