// constructor pattern er maddhome object create
// function Obj(a, b) {
//     this.a = a;
//     this.b = b;
// }
// let obj1 = new Obj(1,2);

// browser console e.
// obj1 likhe search dile, 
// [[Prototype]]: Object pawa jay
// ei prototype ekta object k refer kore ,
// set object er nam hosse, Obj

// Obj.prototype // ekta constructor function

// Obj.prototype = {}; // eikhane constructor ta overwrite kore {} diye dise.


// function Obj2(a,b,c){
// Obj.call(this, a,b);
// this.c = c;
// }

// Obj2.prototype = Object.create(Obj.prototype);

// function Obj3(){
// Obj2.call(this, 10,15,20);
// }

// Obj3.prototype = Object.create(Obj2.prototype);

// let obj1 = new Obj(1,2);
// let obj2 = new Obj2(4,5,6);
// let obj3 = new Obj3();



// ------------------------------------------
// ------------------------------------------


// constructor function er moddhe amra jodi kono property add korte chai, tahole normally possible na.
// But prototype er maddhome constructor function e amra caile property add korte pari.

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

console.dir(Person); // see in browser

const faisal = new Person("Faisal", "Ahmed", 26);

Person.prototype.country = "Bangladesh";

console.log(faisal); // see in browser