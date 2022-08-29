// inheritance with prototype 
// function Person(){
//     this.name = "Twinkle";
// }

// function Teacher(){
//     Person.call(this);
//     this.subject = "javascript"

// }

// let teacher = new Teacher();

// let name = teacher.name;
// console.log(name);

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log("Name: " + this.name);
}

Person.prototype.another = function(){
    console.log("This is an another function.");
}

function Student(name, id){
    Person.call(this, name);
    this.id = id;
}

// prototype inheritance
Student.prototype = Object.create(Person.prototype);

// make constructor name Student instead of Person 
Student.prototype.constructor = Student;

let std = new Student("Faisal Ahmed", 1614);
// console.log(std);


// Person object/class/function er property gula Student object/class/function e copy hosse na,
// eita reference hisebe jasse.
// Jar karone amra code er niche jodi Person class/object e,
// notun ekta prototype add kori, setao Student class/object theke, amra access korte parbo.
Person.prototype.skill = "Javascript";

console.log(std.skill); // Javascript


