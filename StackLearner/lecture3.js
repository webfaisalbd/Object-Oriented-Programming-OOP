// javascript e, dui doroner paradigm 
// 1. fucntional paradigm 
// 2. object oriented paradigm 

//  r this hosse object oriented concept, object er sathe this keyword er relation
// so javascript e, this niye ektu problem hoy.

// var obj = {
//     name: "faisal",

//     print: function(){
//         console.log(this);
//     }
// }

// obj.print();


// function myFunc(){
//     function innerFunc(){
//         console.log(this);
//     }
//     innerFunc();
// }
// myFunc(); 


// function myFunc(){
//     function innerFunc(){
//         console.log(this);
//     }
//     new innerFunc();
// }
// myFunc(); // innerFunc {}
// new keyword use kore, ekta object create kora hoise, r eikhane this ei object kei refer kore, jehetu new diye object create kora hoise and ei object ta empty, tai {} show kortese.

let person = {
    name: "faisal",
    print: function () {
        console.log("Hello, " + this.name);
    }
}
person.print(); // Hello, faisal

let myName = person.name;
console.log(myName);

let myPrint = person.print;
let myPrint = person.print.bind(person); 
myPrint();
