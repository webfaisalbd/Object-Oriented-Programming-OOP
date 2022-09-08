// // indexOf 
// var myArray = ['faisal', 'sakib', 'forid', 'azhar'];

// console.log(myArray.indexOf('forid')); // 2

// console.log(myArray.indexOf('forida')); // -1

// splice 
// just remove 
var myArray = ['faisal', 'sakib', 'forid', 'azhar'];
var result = myArray.splice(1,2);
console.log(result); // ['sakib', 'forid']
console.log(myArray); // ['faisal', 'azhar']