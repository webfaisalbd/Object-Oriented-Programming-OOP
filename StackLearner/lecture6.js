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

function Student(name, id){
    Person.call(this, name);
    this.id = id;
}

let std = new Student("Faisal Ahmed", 1614);
// console.log(std);

