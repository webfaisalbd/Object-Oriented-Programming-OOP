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


`more learn about this`
- code 1 
```javascript
function myName(){
    let name = "faisal";
    console.log(this.name); // undefined
    console.log(this); // window
}
myName();
```


- code 2 
```javascript
function myName(){
    let name = "ahmed";
    function yourName(){
         console.log(name); // ahmed
         console.log(this.name); // nothing
         console.log(this); // window
    }
    yourName();
}
myName();
```



- code 3 
```javascript
function myName(){
    let name = "ahmed";
    return function (){
        console.log(name); // ahmed
        console.log(this.name); // nothing
        console.log(this); // window
    }

}
myName()();
```



- code 4
```javascript
function myName() {
    let name = "ahmed";
    console.log(name); // ahmed
    console.log(this.name); // undefined
    console.log(this); // window
    const yourName = () => {
        let name = "shajib";
        console.log(name); // shajib
        console.log(this.name); // undefined
        console.log(this); // window
    }
    yourName();
}
myName();
```



#### this , object rules:

- rules:
- object er vitore this access kora jabe,
- object er vitore method normal function hole, parent context pabe. r jodi arrow function hoy, tobe immediate function pabe.

- code 1
```javascript
var myObj = {
    name: "faisal",
    getDetails: function(){
        name: "ahmed",
        console.log(this.name); // faisal
    }
}
myObj.getDetails();
```

- code 2
```javascript
var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
         console.log(this.name); // faisal
    },
    getDetails2 : () => {
        let name= "shajib";
        console.log(this.name); // shajib
    }
}
myObj.getDetails2();


```

- code 3
```javascript
var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
         console.log(this.name); // faisal
    },
    anotherObj : {
        name : "shajib",
        value : function() {
            console.log(this.name);
        }
    } 
}
myObj.anotherObj.value();


```

- code 4
```javascript
var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
    },
    anotherObj : {
        name : "shajib",
        value : function() {
            return moreObj = {
                name: "fas",
                moreFunc: () => {
                    name: "hard work"
                    console.log(this.name);
                }
            }
        }
    } 
}
myObj.anotherObj.value().moreFunc(); // shajib

```

#### explicit rules:
- normally call
```javascript
var myObj = {
    name: "faisal",
    anotherObj : {
        name : "shajib",
        value : function() {
            console.log(this.name);
        }
    } 
}
myObj.anotherObj.value(); // shajib
```

- amra caile, onno object o call er sathe add kore dite pari
```javascript
var myObj = {
    name: "faisal",
    anotherObj : {
        name : "shajib",
        value : function() {
            console.log(this.name);
        }
    } 
}
myObj.anotherObj.value.call(myObj) // faisal
```


---
---

#### Object Characteristic

```javascript
var arr = [10, 20, 30, 40];
console.dir(arr);
// output
// 0: 10
// 1: 20
// 2: 30
// 3: 40
// length: 4
// [[Prototype]]: Array(0)
```

```javascript

var arr = [10,30,20,60];
console.log(arr.length); // 4
console.log(arr.push(60));
//  we can get, length property in object property
//  we can get, push function in object method
```

```javascript
const myObject = {
    city: 'Madrid',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }
  
  console.dir(myObject); // expand browser console
```

- in console, no object show, so, str means, string is primitive type data
```javascript
var str = "faisal";
console.dir(str);
```

```javascript
var str = new String("faisal");
console.dir(str);
```

```javascript
var num = new Number(100);
console.dir(num);
```

```javascript
var bool = new Boolean(true);
console.dir(bool);
```

```javascript
var myArr = new Array([10,20,50,60]);
console.dir(myArr);
```

```javascript
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const d = new Date(2022, 09, 05);
console.dir(d);
```

---
---


## Function Constructor
### create object using function constructor:

- normal object problem
```javascript
var samir = {
    name: "Samir",
    age: 28,
}

var jamir = {
    name: "Jamir",
    age: 35
}

console.log(samir.name); // samir
console.log(jamir.name); // jamir

// here, dui ta object er e property same, but bar bar property likha lagtese
```

- object er same repeated property, problem solved below:
- making constructor function as a blue print
```javascript
var Person = function(name, age){
    this.name= name;
    this.age = age;
}

var faisal = new Person("Faisal Ahmed",26);
var rifat = new Person("Rifat", 25);

console.log(faisal.name); // Faisal Ahmed
console.log(rifat.name); // Rifat
```


### this and new keyword
- new likha mane, create object and ei this keyword refer to that object 
```javascript
var MyName = function(n){
    this.name = n;
}
const farhad = new MyName("Forid Ahmed");
console.log(farhad.name); // Forid Ahmed
```




### function constructor e method add kora, 
- normal system, e function constructor e method add
```javascript
const PersonWithMethod = function (name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function(){
        console.log(this.name + " is born in " + (2022 - this.age));
    }
}
const faisal = new PersonWithMethod("Faisal", 26, "jobless");
faisal.dateOfBirth(); // Faisal is born in 1996
```
- and also see, console.log output
```javascript
console.log(faisal);
// output 
// age: 26
// dateOfBirth: ƒ ()
// job: "jobless"
// name: "Faisal"
// [[Prototype]]: Object
```



- prototype system, e function constructor e method add
```javascript
const PersonWithMethod = function (name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}


PersonWithMethod.prototype.dateOfBirth = function(){
    console.log(this.name + " is born in " + (2022 - this.age));
}

console.log(PersonWithMethod.prototype);

// output 
// dateOfBirth: ƒ ()
// constructor: ƒ (name, age, job)
// [[Prototype]]: Object
```



```javascript
const faisal = new PersonWithMethod("Faisal", 33, "job search");
faisal.dateOfBirth();
// Faisal is born in 1989
```



---
---

---
---



### Constructor Inheritance

```javascript

const Person = function(name, age){
    this.name = name;
    this.age = age;
}

const Teacher  = function(name, age, subject){
    Person.call(this, name, age);
    this.subject = subject;
}

const ahmed = new Teacher("F Ahmed", 35, "CSE");
console.log(ahmed.name);
// F Ahmed
```


---
---


### let const var
- var, same variable again declare possible
```javascript
var myName = "faisal";
console.log(myName); // faisal
var myName = "ahmed";
console.log(myName); // ahmed
```

- let, same variable again declare not possible
```javascript
// error this code
let myRoll = '23';
console.log(myRoll);
let myRoll = '35';  // error
```

- const, redeclare and reassign not possible 
```javascript
const myAge = '23';
console.log(myAge);
```

- let var const scope
- global variable can access for all(var,let,const)
```javascript
var a = 5;
function myFunc1(){
    if(true){
        console.log(a+10);
    }
}
myFunc1(); // 15

let b= 5;
function myFunc2(){
    if(true){
        console.log(b+10);
    }
}
myFunc2(); // 15

const c = 5;
function myFunc3(){
    if(true){
        console.log(c+10);
    }
}
myFunc3(); // 15
```


- block scope, 
- this code gives error
```javascript
// c not defined
function myFunc4() {
    const a = 20;
    if (true) {
        let c = 220;
        console.log(a + 20);
    }
    console.log(a + c);
}
myFunc4();

// b not defined
function myFunc5() {
    const a = 20;
    if (true) {
        const b = 120;
        console.log(a + 20);
    }
    console.log(a + b);
}
myFunc5();
```

---
---


### IIFE (Immediate invokeed function )
```javascript
(
    function getFunc() {
        let a = 5;
        console.log(a + 45);
    }
)();
// output: 50
(
    function getName() {
        let b = "Faisal";
        const c = "Ahmed";
        console.log("My Name is " + b + " " + c);
    }
)();
// output: My Name is Faisal Ahmed
```

- IIFE Using es6
```javascript
// using es6
{
    let a = 50;
    const b = 40;
    console.log(a+b);
}
```


---
---



- IIFE for function using es6 ways
```javascript
// IIFE for function using es6 ways 
{
    var myFunc = function(){
        const a = "Faisal Ahmed";
        console.log(a);
    }
}
myFunc();


{
    let myFunc2 = function(){
        const a = "Shajib";
        console.log(a);
    }
}
myFunc2(); // error
```

---
---


### Template Literal
```javascript
// Template Literal 
var firstName = "Faisal";
let middleName = "Ahmed";
const lastName = "Shajib";

//Before Template Literal
console.log("My name is " + firstName + " " + middleName + " " + lastName);

//After Template Literal
console.log(`My name is 
${firstName} ${middleName} ${lastName}`);
```

---
---



### String Method: startsWith, 
- startsWith
```javascript
// startsWith 
var myString = "My name is Khan";
console.log(myString.startsWith("My"));
```

- endsWith
```javascript
// endsWith 
var myString2 = "My name is Khan";
console.log(myString2.endsWith("Khan"));
```


```javascript
// includes 
var myString3 = "My name is Khan";
console.log(myString3.includes("is"));
```


```javascript

// repeat 
var myString3 = "is ";
console.log(myString3.repeat(5));
```

---
---




### Arrow Function
```javascript
// one parameter
const func1 = x => console.log(x+15);
func1(5); // 20

// multile parameter
const func2 = (x,y) => console.log(x+y);
func2(5,10); // 15

// multile parameter
const func3 = (x,y) => {
    console.log(x+y);
};
func3(5,7); // 12
```

---
---



### Desturcturing
- for array 
```javascript 
// es5 (old system)
var data = ['faisal',26, 'CSE'];

var name = data[0];
var age = data[1];
var subject = data[2];

console.log(name, age, subject);
```
```javascript
// es6 Desturcturing 
const [myName, myAge, mySubject] = data;
console.log(myName, myAge, mySubject);
```

- object Destructuring
```javascript 
const user = {
    name: "shajib",
    age: 25,
    degree: "cse"
}

// es5 
const name1 = user.name;
const age1 = user.age;
const degree1 = user.degree;

console.log(name1, age1, degree1);
```

```javascript
// es6 
const {name, age, degree} = user;
console.log(name, age, degree);
```

- alias 
```javascript
const {name : newName, age: newAge, degree: newDegree} = user;
console.log(newName, newAge, newDegree);
```
- Nested Object 
```javascript
const myUser = {
    name: 'ahmed',
    age: 26,
    education: {
        degree: "BSC"
    }
}
const {education : {degree}} = myUser;
console.log(degree); // BSC
```



---
---


### null vs undefined 
```javascript
// equal in value, not equal in data type
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

- null vs undefined vs empty string
```javascript
var variable1 = undefined;
var variable2 = '';
var variable3 = null;
// undefined and empty string 
console.log(variable1 == variable2); // false
// empty string and null 
console.log(variable2 == variable3); // false
// undefined and null 
console.log(variable1 == variable3); // true
```


---
---



### Concatenation 
```javascript
// String only 
var text = 'how' + 'are you?';
console.log(text);

var welcomeMsg = "Hello," + text;
console.log(welcomeMsg);
```

```javascript
// string and number 
var isString = 'hello'+ 20;
console.log(isString); // hello20
console.log(typeof isString); // string


var complex = 10 + 10+ 'some text'+ 30;
console.log(complex); // 20some text30
```

---
---


### Type conversion
```javascript 
console.log(Number("3.1416")); // 3.1416

console.log(Number()); // 0

console.log(Number('')); // 0

console.log(Number(' ')); // 0

console.log("64 98"); // 64 98

console.log(typeof "64 98"); // string

console.log(Number("abcd")); // NaN
```


```javascript

let y = '5';
let x = +y;
console.log("X=", x);

let y1 = "hello";
let x1 = +y1;
console.log("y1=", x1); // NaN
```


---
---



### Array
- new item add in the last
```javascript
// Array 
const myArray = ['faisal','sakib','forid','matin'];

// new item add in the last 
const last = myArray.push('azhar');

// get array length 
console.log(last); // 5


// get array length using object property: length 
console.log(myArray.length); // 5
```

- new item add in the first
```javascript
const myArray2 = ['faisal','sakib','forid','matin'];
myArray2.unshift("Jamal");
console.log(myArray2);
```
- new item add  More example
```javascript
const myNums = [2,5,7,2,9,8,6];
myNums.push([10,20,40]);
console.log(myNums); // [2, 5, 7, 2, 9, 8, 6, [10, 20, 40]]
```

- remove item in an array
```javascript
// remove item in the last in an array
const myArray = ['faisal','sakib','forid','matin'];
const result =myArray.pop();
console.log(myArray); // ['faisal', 'sakib', 'forid']
console.log(result); // matin

// remove item in the first in an array
const myArray2 = ['faisal','sakib','forid','matin'];
const result2 =myArray2.shift();
console.log(result2); // faisal
console.log(myArray2); // ['sakib', 'forid', 'matin']
```

---
---


#### indexOf
```javascript
// indexOf 
var myArray = ['faisal', 'sakib', 'forid', 'azhar'];

console.log(myArray.indexOf('forid')); // 2

console.log(myArray.indexOf('forida')); // -1
```

---
---

#### splice
- just remove
```javascript  
var myArray = ['faisal', 'sakib', 'forid', 'azhar'];
var result = myArray.splice(1,2);
console.log(result); // ['sakib', 'forid']
console.log(myArray); // ['faisal', 'azhar']
```

- just add 
```javascript
var myArray2 = ['faisal', 'sakib', 'forid', 'azhar'];
var result2 = myArray2.splice(1,0,'nahid','sobuj');
console.log(myArray2); // ['faisal', 'nahid', 'sobuj', 'sakib', 'forid', 'azhar']
console.log(result2); // []
```


- remove and add together 
```javascript
var myArray3 = [1, 2, 3, 4];
var result = myArray3.splice(1, 2, 50, 60, 70);
console.log(result); // [2,3]
console.log(myArray3); // [1,50,60,70,4]
```


---
---


### forEach()
- normal for loop
```javascript
let elements = [10,20,30,40];
for(let i=0; i<elements.length;i++){
    console.log(i,elements[i]);
}
```
- forEach loop
```javascript
let elements = [10,20,30,40];

elements.forEach((ele, index, fullArray) => {
  console.log(index ,ele, fullArray) 
})
```

---

- making forEach using for loop 
`find sum of an array`
```javascript
let numbers = [10, 20, 30, 40];
let sum = 0;

function makeForEach(elements, callBack) {
    for (let i = 0; i < elements.length; i++) {
        callBack(elements[i], i, elements);
    }
}

function sumFunc(ele) {
    sum += ele;
}

makeForEach(numbers, sumFunc);
console.log(sum);
```

`find sum of an array using forEach`
```javascript
let numbers = [10, 20, 30, 40];
let sum = 0;


numbers.forEach(ele => {
    sum += ele;
});
console.log(sum);
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


---
---


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