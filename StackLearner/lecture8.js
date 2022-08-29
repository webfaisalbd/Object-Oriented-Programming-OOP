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

const sumit = {
    firstName: "sumit",
    age: 35,
    print: function(){
        return this.firstName + " and my age is: " +this.age;
    }
}

function Person(first, last, age){ // constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const faisal = new Person("faisal","ahmed", 26);
const farhad = new Person("forid", "hossain", 27);
// console.log(faisal.fullName());

// object dot(.) something = possible, mane, object er sathe new property add kora jabe
faisal.country ="Bangladesh";
// console.log(faisal);

// constructor function dot(.) something = possible na, mane, constructor function er sathe new property add kora jabe na. 
// constructor function ekta template, oita fixed e thakbe.
Person.country = "Bangladesh";
console.log(Person);




