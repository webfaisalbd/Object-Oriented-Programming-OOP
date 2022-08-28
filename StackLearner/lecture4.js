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

// Person.prototype.hello = function(){
//     console.log("hello "+ this.name);
// }

// Person.prototype.email = "faq@gmail.com";

// Person.prototype.print = function(){
//     console.log(this.name, this.age, this.email);
// }

Person.prototype = {
    hello: function(){
        console.log("hello, "+ this.name);
    },
    print: function(){
        console.log(this.name, this.age, this.email);
    },
    email: "faq@gmail.com"
}

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);

