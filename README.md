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