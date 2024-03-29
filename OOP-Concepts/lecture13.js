// // Arrow Function 
// // one parameter
// const func1 = x => console.log(x+15);
// func1(5);

// // multile parameter
// const func2 = (x,y) => console.log(x+y);
// func2(5,10);

// // multile parameter
// const func3 = (x,y) => {
//     console.log(x+y)
// };
// func3(5,7);


// // Desturcturing 
// // for array 
// // old system 
// var data = ['faisal',26, 'CSE'];

// var name = data[0];
// var age = data[1];
// var subject = data[2];

// console.log(name, age, subject);

// // es6 
// const [myName, myAge, mySubject] = data;
// console.log(myName, myAge, mySubject);



// // object Destructuring 
// const user = {
//     name: "shajib",
//     age: 25,
//     degree: "cse"
// }

// // es5 
// const name1 = user.name;
// const age1 = user.age;
// const degree1 = user.degree;

// console.log(name1, age1, degree1);

// // es6 
// const {name, age, degree} = user;
// console.log(name, age, degree);

// // alias 
// const {name : newName, age: newAge, degree: newDegree} = user;
// console.log(newName, newAge, newDegree);

// // null vs undefined 
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(typeof null); // object
// console.log(typeof undefined); // undefined


// // concatenation 
// // String only 
// var text = 'how' + 'are you?';
// console.log(text);

// var welcomeMsg = "Hello," + text;
// console.log(welcomeMsg);

// // string and number 
// var isString = 'hello'+ 20;
// console.log(isString); // hello20
// console.log(typeof isString); // string

// var complex = 10 + 10+ 'some text'+ 30;
// console.log(complex); // 20some text30


// // Type conversion 
// console.log(Number("3.1416")); // 3.1416

// console.log(Number()); // 0

// console.log(Number('')); // 0

// console.log(Number(' ')); // 0

// console.log("64 98"); // 64 98

// console.log(typeof "64 98"); // string

// console.log(Number("abcd")); // NaN


// let y = '5';
// let x = +y;
// console.log("X=", x);

// let y1 = "hello";
// let x1 = +y1;
// console.log("y1=", x1); // NaN

// // Nested Object 
// const myUser = {
//     name: 'ahmed',
//     age: 26,
//     education: {
//         degree: "BSC"
//     }
// }
// const {education : {degree}} = myUser;
// console.log(degree); // BSC

// var variable1 = undefined;
// var variable2 = '';
// var variable3 = null;
// // undefined and empty string 
// console.log(variable1 == variable2); // false
// // empty string and null 
// console.log(variable2 == variable3); // false
// // undefined and null 
// console.log(variable1 == variable3); // true









