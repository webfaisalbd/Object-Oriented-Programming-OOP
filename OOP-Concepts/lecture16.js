// splice problem 
// var myArray111 = [1,4,2,6,8,4,6];

// const sliced111 = myArray111.splice();

// console.log(sliced111);

// console.log(myArray111);


// var numbers = [123,423,651];

// var a = numbers;
// numbers.push(4,2);
// a.push(234,121);
// console.log(a);
// console.log(numbers);

// const num1 = [1,2,3];
// const num2 = [4,5,6];

// const num3 = [...num1, ...num2];
// console.log(num3);




// var numbers = [1,2,3,4];
// var number1 = [1,2,3,4];
// var number2 = [5,6,7,8];

// function calculate(a,b,c,d){
//     return a+b+c+d;
// }
// // console.log(calculate(...numbers));
// console.log(...numbers);
// console.log([...numbers]);

// var number3 = [];
// var numberVariable = [];
// numberVariable.push(...number1,...number2);
// console.log(numberVariable);



// let elements = [10,20,30,40];
// for(let i=0; i<elements.length;i++){
//     console.log(i,elements[i]);
// }

// elements.forEach((ele, index, fullArray) => console.log(index ,ele, fullArray) )


let numbers = [10, 20, 30, 40];
// let sum = 0;

// function makeForEach(elements, callBack) {
//     for (let i = 0; i < elements.length; i++) {
//         callBack(elements[i], i, elements);
//     }
// }

// function sumFunc(ele) {
//     sum += ele;
// }

// makeForEach(numbers, sumFunc);
// console.log(sum);

// let sum = 0;
// numbers.forEach(ele => {
//     sum += ele;
// });
// console.log(sum);




// let values = [10, 40, 20, 30, 5];
// let max = values[0];
// values.forEach(value => {
//     if (value > max) {
//         max = value;
//     }
// })
// console.log(max);



// let nums1 = [1,2,3,4];
// nums1.forEach(singleNum => {
//      console.log(singleNum*2);
// })




// find method
// in number array, not change main array
// let myNums = [20,40,50,60,12,79];
// let myValue = myNums.find((value)=> value>50);
// console.log(myValue);

// myValue = 70;
// console.log(myNums);


// in array of object, change main array 
let nums = [
    {name: "faisal", salary: 15000},
    {name: "sakib", salary: 25000},
    {name: "alom", salary: 35000},
    {name: "farid", salary: 50000},
];
const returned = nums.find((value)=> {
    return value.salary>35000;
})

returned.name = 'forid';
console.log(nums);