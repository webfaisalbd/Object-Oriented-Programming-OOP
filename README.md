Practice:Object Oriented Programming Concept


```javascript
object: jar ekadik property thakbe.
example:  user ekta object.
user object er property, like:
userName, userReview
ekhon ei  userReview property er o ekta object hote pare, 
Jemon, reviewWriter, reviewTime etc. 
```

- object creation 
```javascript
var obj = {};
var obj1 = new Object;
console.log(obj); // {}
console.log(obj1); // {}
// dui tar output e same, {}
```


- key:value pair
- method
```javascript
var book = {
    // javascript e object mane=> key:value pair
    // key: value , 
    name: "functional javascript",
    author: "faisal",
    publisher: 'o\'Adarsha',
    page: 250,

    // object er vitore function declare korle, seta k bole: method
    print: function () {
        console.log(this.name, this.author);
    }
}
```


- method call
```javascript
book.print(); // method call
```

- property access 
```javascript
// property access 
console.log("Book Name: " + book.name); // dot notation
console.log("Author Name: " + book['author']); // bracket notation
```

- object property create outside of the object
```javascript
book.publishYear = 2010;
console.log("Publish Year: " + book.publishYear);

book['price'] = 30;
console.log("Price : " + book.price);
```


- object property and object property value
```javascript
for (var props in book) {
    // object property and object property value
    console.log(props + " = " +book[props]);
}
```

---
---






- create class in contructor pattern
```javascript
// contructor pattern in class 
function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log("Name: " + this.name);
    }
}
```



- object create from class
```javascript
var p1 = new Person("faisal", 'faisal@gmail.com');
var p2 = new Person("rasel", 'rasel@gmail.com');
var p3 = new Person("jony", 'jony@gmail.com');

console.log(p1);
// output:
Person {
  name: 'faisal',
  email: 'faisal@gmail.com',
  print: [Function (anonymous)]
}

console.log(p1.name);
// output:
faisal
```



```javascript
let people = [p1, p2, p3];

people.forEach(person => {
    person.print();
    console.log("Email: " + person.email);
});
// output:
Name: faisal
Email: faisal@gmail.com
Name: rasel
Email: rasel@gmail.com
Name: jony
Email: jony@gmail.com
```


- property of p1
```javascript
for( var props in p1){
    console.log("properties of p1: "+ props);
}
// output:
properties of p1: name
properties of p1: email
properties of p1: print
```

---
---


`Javascript Paradigm`

- javascript e, dui doroner paradigm 
1. fucntional paradigm 
2. object oriented paradigm 

- r this hosse object oriented concept, object er sathe this keyword er relation.
- so javascript e, this niye ektu problem hoy.
```javascript
var obj = {
    name: "faisal",

    print: function(){
        console.log(this); // {name: 'faisal', print: ƒ}
        // object er khetre this dile, tar parent context er property passe.
    }
}

obj.print();
```


- pure function er khetre this, window k refer kore
```javascript
function myFunc(){
    function innerFunc(){
        console.log(this);
    }
    innerFunc();
}
myFunc(); 
// output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```


- new Keyword use
- ager code r ei code same, but ei code e just new keyword use kora hoise, innerFunc() er age.
```javascript
function myFunc(){
    function innerFunc(){
        console.log(this);
    }
    new innerFunc();
}
myFunc(); // innerFunc {}
// new keyword use kore, ekta object create kora hoise, r eikhane this ei object kei refer kore, jehetu new diye object create kora hoise and ei object ta empty, tai {} show kortese.
```


---
---

`this problem`

```javascript
let person = {
    name: "faisal",
    print: function () {
        console.log("Hello, " + this.name);
    }
}
let myName = person.name;
console.log(myName); // faisal

// ei khane person.print() er vitore this.name call hoya mane, print method er vitore this.name call hoya, tai seta object k refer kore,
person.print(); // Hello, faisal
```



- this problem and solution
- problem
```javascript
let person = {
    name: "faisal",
    print: function () {
        console.log("Hello, " + this.name);
    }
}
let myPrint = person.print; 
myPrint(); // hello undefined
output: hello undefined
// eikhane undefined astese, karon, eikhane person.print method ta baire theke ekta alada variable e rakha hoise, tai eita te this mane, window object k refer kore. tai eitar solution hosse, eita k bind method diye bind korte hobe.
```
- solution
```javascript
let person = {
    name: "faisal",
    print: function () {
        console.log("Hello, " + this.name);
    }
}
let myPrint = person.print.bind(person); 
myPrint(); // Hello, faisal
```



`bind`
- bind 
- baire theke, kivabe explicit vabe ekta function er sathe ekta object k bind korte hoy. 
```javascript
function add(num) {
    return this.value + num;
}

var obj = {
    value: 10
}

let binded = add.bind(obj);
let result = binded(5); // num=5 
console.log(result); // 15
```




`setTimeout Problem`
- eikhane setTimeout er vitore callback function ta kono object k refer kortese na, eita individual ekta function. tai this keyword ta  window k refer kore. tai this.name = undefined
```javascript
var people = {
    name: "Faisal",
    print: function () {
        setTimeout(function () {
            console.log("Hello " + this.name);
        }, 2000)
    }
}
people.print(); // hello undefined
```

`setTimeout Solution`
```javascript
// solution 

var people2 = {
    name: "Farhan",
    print: function () {
        setTimeout(function () {
            console.log("Hello " + this.name);
        }.bind(this), 2000) // eikhane this diye bind kora hoise
    }
}
people2.print();
```



---
## What We learn:
- method er vitore this thakle, seta object k refer kore,
- function er vitore this thakle, seta window/global k refer kore.
object er khetrei this kaj korbe. 
---


---
---
---


### Prototype
- code duplication, without prototype
```javascript
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
```

- using prototype
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.hello = function(){
    console.log("hello "+ this.name);
}
// console.log(Person.prototype);
// prototype ekta object, tar vitore function ase.

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);

// Jokhon object create kora hobe, tokhon object er sathe __proto__ name er extra ekta property add hoye jabe.
```

- set another prototype named email
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log("hello "+ this.name);
}

Person.prototype.email = "faq@gmail.com";

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);

// p1, p2 dui object ei same email peye jabe.
// abar p1.__proto__.email = "abcd@gmail.com"; set kore dileyo, p2 te o email change hoye jabe.
```

-  set another prototype named print
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log("hello "+ this.name);
}

Person.prototype.email = "faq@gmail.com";

Person.prototype.print = function(){
    console.log(this.name, this.age, this.email);
}

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

p1.print(); // Faisal 27 faq@gmail.com
p2.print(); // Farhan 37 faq@gmail.com
```



- set all prototype in object
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    hello: function(){
        console.log("hello, "+ this.name);
    },
    print: function(){
        console.log(this.name, this.age, this.email);
    },
    email: "faq@gmail.com"
}

let p1 = new Person("Faisal", 27);
let p2 = new Person("Farhan", 37);

console.log(p1);
console.log(p2);
```


---
---



#### `bind` `call` `apply`

`bind`
```javascript
function printMe(){
    console.log('Hello ' + this.name);
}
printMe(); // Hello undefined
```
- kono ekta logic ba function k amra baire theke use korte cassi, onno kono context/object e.
- bind amader ekta function return kore.
- tai bind k abar call korte hoy.
- tai jodi amader install call korte hoy, tokhn amra call/apply use korbo.

```javascript
function printMe(){
    console.log('Hello ' + this.name);
}

let obj1 = {
    name: 'Faisal',
    age: 27
}

let obj2 ={
    name: 'Tasnim',
    age: 26
}

const binded = printMe.bind(obj1);
binded(); // Hello Faisal
```

- in the below, we can't get any difference between call and apply,
- but go ahead, you will definitely understand
`call`
```javascript
function printMe(){
    console.log('Hello ' + this.name);
}

let obj1 = {
    name: 'Faisal',
    age: 27
}

let obj2 ={
    name: 'Tasnim',
    age: 26
}

printMe.call(obj1); // Hello Faisal
```

`apply`
```javascript
function printMe(){
    console.log('Hello ' + this.name);
}

let obj1 = {
    name: 'Faisal',
    age: 27
}

let obj2 ={
    name: 'Tasnim',
    age: 26
}

printMe.apply(obj1); // Hello Faisal
```


- Differece between bind call and apply

- for bind method, again call the result()
```javascript
function add(a, b) {
    return (a + b) * this.c;
}

let obj1 = {
    c: 3
}

let obj2 = {
    c: 5
}

let result = add.bind(obj1, 2, 5);
console.log(result());
```


- for call method, provide arguments as separated by comma
```javascript
function add(a, b) {
    return (a + b) * this.c;
}

let obj1 = {
    c: 3
}

let obj2 = {
    c: 5
}

console.log(add.call(obj1, 2, 5)); // 21
```


- for apply method, provide arguments as array
```javascript
function add(a, b) {
    return (a + b) * this.c;
}

let obj1 = {
    c: 3
}

let obj2 = {
    c: 5
}

console.log(add.apply(obj1, [2, 5]));
```

---
---



- inheritance with prototype 
#### Inheritance with prototype
```javascript
function Person(){
    this.name = "Twinkle";
}

function Teacher(){
    Person.call(this);
    this.subject = "javascript"

}

let teacher = new Teacher();

let name = teacher.name;
console.log(name);
```

#### object inheritance
- eikhane std object theke shudu Person object er name tai pawa jabe,
- Karon amra shudu Person er object gulai inherit koresi.
- Person object er prototype pawa jabe na. Prototype inherit kori nai.
```javascript
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
```


- prototype inheritance
```javascript
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

// prototype inheritance
Student.prototype = Object.create(Person.prototype)

let std = new Student("Faisal Ahmed", 1614);
```


- Person object/function er property gula Student object/function e copy hosse na,
- eita reference hisebe jasse
```javascript
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
```

---
---


#### __proto__ and prototype

- some discussion
```javascript
// constructor pattern er maddhome object create
function Obj(a, b) {
    this.a = a;
    this.b = b;
}
 let obj1 = new Obj(1,2);

- browser er console e.
- obj1 likhe search dile, 
- [[Prototype]]: Object pawa jay
- ei prototype ekta object k refer kore ,
- set object er nam hosse, Obj

 Obj.prototype // ekta constructor function dey

 Obj.prototype = {}; // eikhane constructor ta overwrite kore {} diye dise.
```


- more prototype
```javascript
function Obj(a, b) {
    this.a = a;
    this.b = b;
}

function Obj2(a,b,c){
Obj.call(this, a,b);
this.c = c;
}

Obj2.prototype = Object.create(Obj.prototype);

function Obj3(){
Obj2.call(this, 10,15,20);
}

Obj3.prototype = Object.create(Obj2.prototype);

// let obj1 = new Obj(1,2);
// let obj2 = new Obj2(4,5,6);
let obj3 = new Obj3();
```


`constructor`
```javascript
const tasnim = {
    firstName: "Tasnim",
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
console.log(faisal.fullName());
```



```javascript
// object dot(.) something = possible, mane, object er sathe new property add kora jabe
faisal.country ="Bangladesh"; // faisal is an object
// console.log(faisal);

// constructor function dot(.) something = possible na, mane, constructor function er sathe new property add kora jabe na. 
// constructor function ekta template, oita fixed e thakbe.
Person.country = "Bangladesh"; // // Person is a constructor function
console.log(Person);
```


`constructor function`
- constructor function er moddhe amra jodi kono property add korte chai, tahole normally possible na.
- But prototype er maddhome constructor function e amra caile property add korte pari.
```javascript
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
```

---
---



#### CLASS
```javascript
class Car {
    constructor(name, year, distance){
        this.name = name;
        this.year = year;
        this.distance = distance;
    } // jodi nije theke constructor na likha hoy, tahole, javascript will add an empty constructor method

    run() {
        console.log(this.name + " is running");
    }

    go(distance) {
        console.log(distance + " km have to go.");
    }
}

const bmw = new Car("BMW", 1999);

bmw.run();

// pass argument to the class method 
bmw.go(20);

```


`INHERITANCE`
```javascript
class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a '+ this.carname;
    }
}  

class Model extends Car {
    constructor(brand, mod){ // object er vitore j sequence e arguments pass korbo, constructor e sei sequence ei parameter dibo. like, age brand dibo, then mod dibo.
        super(brand)
        this.model = mod;
    }
    show(){
        return this.present() + " , and the model is " + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); 
```



```javascript

```



```javascript

```



```javascript

```



```javascript

```



```javascript

```



```javascript

```



```javascript

```



```javascript

```