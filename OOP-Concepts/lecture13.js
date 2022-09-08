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



// object Destructuring 
const user = {
    name: "shajib",
    age: 25,
    degree: "cse"
}

// es5 
const name = user.name;
const age = user.age;
const degree = user.degree;

console.log(name, age, degree);