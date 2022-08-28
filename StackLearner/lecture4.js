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

// console.log(Person.prototype);
// prototype ekta object, tar vitore function ase.


let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);

// Jokhon object create kora hobe, tokhon object er sathe __proto__ name er extra ekta property add hoye jabe.