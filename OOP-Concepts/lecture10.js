// var arr = [10, 20, 30, 40];
// console.dir(arr);
// // output
// // 0: 10
// // 1: 20
// // 2: 30
// // 3: 40
// // length: 4
// // [[Prototype]]: Array(0)

// var arr = [10,30,20,60];
// console.log(arr.length); // 4
// console.log(arr.push(60));
// //  we can get, length property in object property
// //  we can get, push function in object method


// const myObject = {
//     city: 'Madrid',
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     }
//   }
  
//   console.dir(myObject); // expand browser console

// var str = "faisal";
// console.dir(str);

// var str = new String("faisal");
// console.dir(str);

// var num = new Number(100);
// console.dir(num);

// var bool = new Boolean(true);
// console.dir(bool);

// var myArr = new Array([10,20,50,60]);
// console.dir(myArr);


// // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// const d = new Date(2022, 09, 05);
// console.dir(d);


const birthday = new Date('January 09, 1975 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);