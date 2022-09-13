// // Set is a collection of unique values 
// const demoSet = new Set();

// demoSet.add(1);
// demoSet.add(2);
// demoSet.add(1);

// console.log(demoSet); // Set(2) {1, 2}
// console.log(demoSet.size); // 2
// console.log(demoSet.has(2)); // true


// const duplicate = [1,2,3,4,1,5,2,3];

// const set = new Set([...duplicate]);
// console.log(set); // Set(5) {1, 2, 3, 4, 5}


// const myStr = "hi I am";
// for(element of myStr){
//     console.log(element);
// }


// const myStr = "hi I am";
// for(element in myStr){
//     console.log(element);
// }


// const myObj = {
//     name: 'faisal',
//     age: 26
// }
// for(element in myObj){
//     console.log(element);
// } 
// // name
// // age


// const myObj = {
//     name: 'faisal',
//     age: 26
// }
// for(element of myObj){
//     console.log(element);
// }  // not iterable


// const myArr = [2,4,5,7,8];

// for(element of myArr){
//     console.log(element);
// }


// const myArr = [2,4,5,7,8];

// for(element in myArr){
//     console.log(element);
// }


// Object.is 
const a = 10;
const b = 20;
const c = 10;

console.log("a compare with b: ",Object.is(a,b)); // false
console.log("a compare with c: ",Object.is(a,c)); // true


// reference type
const d = [];
const e = [];
console.log("d compare with e: ",Object.is(d,e)); // false

// reference type
const f = [];
const g = [];
console.log("f compare with g: ",Object.is(f,g)); // false