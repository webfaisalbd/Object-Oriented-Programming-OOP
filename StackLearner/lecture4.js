// code duplication, without prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.hello = function(){
        console.log("hello"+ this.name);
    }
}

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);