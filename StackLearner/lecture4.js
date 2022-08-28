// code duplication, without prototype
// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.hello = function(){
//         console.log("hello"+ this.name);
//     }
// }

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log("hello "+ this.name);
}

Person.prototype.email = "faq@gmail.com";

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);

// p1, p2 dui object ei same email peye jabe.
// abar p1.__proto__.email = "abcd@gmail.com"; set kore dileyo, p2 te o email change hoye jabe.
