
const tasnim = {
    firstName: "Tasnim",
    age: 16,
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