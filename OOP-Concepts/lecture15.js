// // indexOf 
// var myArray = ['faisal', 'sakib', 'forid', 'azhar'];

// console.log(myArray.indexOf('forid')); // 2

// console.log(myArray.indexOf('forida')); // -1

// splice 
// just remove 
// var myArray = ['faisal', 'sakib', 'forid', 'azhar'];
// var result = myArray.splice(1,2);
// console.log(result); // ['sakib', 'forid']
// console.log(myArray); // ['faisal', 'azhar']


// // just add 
// var myArray2 = ['faisal', 'sakib', 'forid', 'azhar'];
// var result2 = myArray2.splice(1,0,'nahid','sobuj');
// console.log(myArray2); // ['faisal', 'nahid', 'sobuj', 'sakib', 'forid', 'azhar']


// remove and add together 
var myArray3 = [1, 2, 3, 4];
var result = myArray3.splice(1, 2, 50, 60, 70);
console.log(result); // [2,3]
console.log(myArray3); // [1,50,60,70,4]