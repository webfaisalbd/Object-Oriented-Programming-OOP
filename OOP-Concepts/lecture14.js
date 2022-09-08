// // Array 
// const myArray = ['faisal','sakib','forid','matin'];

// // new item add in the last 
// const last = myArray.push('azhar');

// // get array length 
// console.log(last); // 5


// // get array length using object property: length 
// console.log(myArray.length); // 5


// // new item add in the first
// const myArray2 = ['faisal','sakib','forid','matin'];
// myArray2.unshift("Jamal");
// console.log(myArray2);

const myArray = ['faisal','sakib','forid','matin'];
const result =myArray.pop();
console.log(myArray); // ['faisal', 'sakib', 'forid']
console.log(result); // matin

const myArray2 = ['faisal','sakib','forid','matin'];
const result2 =myArray2.shift();
console.log(result2); // faisal
console.log(myArray2); // ['sakib', 'forid', 'matin']

