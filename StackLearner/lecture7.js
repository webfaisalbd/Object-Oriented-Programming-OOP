function Animal(name) {
    this.name = name;
}

Animal.prototype.printName = function () {
    console.log(this.name);
}

function myNew(constructor){
    var obj = {};
    Object.setPrototypeOf(obj,constructor.prototype);
}

let cat = new Animal("Cat");
let dog = new Animal("Dog");

cat.printName();