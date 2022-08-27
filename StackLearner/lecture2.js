// var books = [
//     {
//         name: 'Functional Javascript'
//     },
//     {
//         name: 'Functional Javascript'
//     }
// ]

// contructor pattern in class 
function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log("Name:" + this.name);
    }
}

// var p1 = Person();
var p1 = new Person("faisal", 'faisal@gmail.com');
// console.log(p1.name);
console.log(p1);