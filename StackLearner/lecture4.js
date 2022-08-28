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

Person.prototype.print = function(){
    console.log(this.name, this.age, this.email);
}

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

p1.print(); // Faisal 27 faq@gmail.com
p2.print(); // Farhan 37 faq@gmail.com

