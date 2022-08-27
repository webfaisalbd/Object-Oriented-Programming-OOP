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
var p2 = new Person("rasel", 'rasel@gmail.com');
var p3 = new Person("jony", 'jony@gmail.com');
// console.log(p1.name);
// console.log(p1);

let people = [p1, p2, p3];

people.forEach(person => {
   console.log(person.email); 
});


