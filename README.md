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