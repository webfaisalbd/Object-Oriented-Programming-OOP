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
        console.log("Name: " + this.name);
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
    person.print();
    console.log("Email: " + person.email);
});


for( var props in p1){
    console.log("properties of p1: "+ props);
}

function Book(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book("Functional Javascript", "Faisal the vai", 30);

console.log(book.constructor);