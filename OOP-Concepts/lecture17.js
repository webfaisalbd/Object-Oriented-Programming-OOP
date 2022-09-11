// const num = [20,45,12,20,56];
// num.forEach((ele)=> {
//     if(ele == 45){
//         break;
//         console.log("done");
//     }
// })



// const nums = [1, 2, 3, 4];
// const output = nums.reduce((previousValue, currentValue, currentIndex, array) => {
//     previousValue += currentValue;
//     return previousValue;
// }, 0); // here, zero is initial of previousValue
// console.log(output); // 10




// // sum
// console.time("Avg")
// const numbers1 = [1, 2, 3, 4, 5];
// const sum = numbers1.reduce((acc, cur, index, arr) => {
//     acc = acc + cur;
//     return acc;
// })
// console.log("sum of ", sum);
// console.timeEnd("Avg")
// // output: 
// // sum of  15
// // Avg: 4.772ms


// // avg 
// console.time('Reduce');
// var numbers = [1, 2, 3, 4, 5];
// const avg = numbers.reduce((acc, cur, index, arr) => {
//     acc = acc + cur;
//     if (index == arr.length - 1) {
//         return acc / arr.length;
//     }
//     return acc;
// })
// console.log(avg);
// console.timeEnd('Reduce');



// const myNumbers = [1,2,3,4,5];

// reduce method diye, map er kaj korano
// const mapped = myNumbers.reduce((pre, cur, index, arr)=> {
//     pre.push(cur);
//     return pre;
// },[]);
// console.log(mapped);

// const myNumbers = [1,2,3,4,5];

// reduce method diye, filter er kaj korano
// const filtedOdd = myNumbers.reduce((pre, cur, index, arr)=>{
    //     if(cur%2 ==1){
//         pre.push(cur);
//     }
//     return pre;
// },[]);
// console.log(filtedOdd);



// - When filter and map both needed in on program 
const myNumbers = [1,2,3,4,5];

let bigArray = [];
for(let i=1;i<5000;i++){
    bigArray.push(i);
}

console.time('Both');
// odd number find kore, 2 diye multiply koro 
const filted = bigArray.filter((b)=>{
    return b%2 == 1;
})
// console.log(filted);
const mapped = filted.map((m)=> {
    return m*2;
})
console.log(mapped);

console.timeEnd('Both')


// - using reduce
// odd number find kore, 2 diye multiply koro 
console.time('reduce');
const oddMultiple = bigArray.reduce((pre,cur, index, arr)=> {
    if(cur%2 ==1){
        pre.push(cur*2);
    }
    return pre;
},[]);
console.log(oddMultiple);
console.timeEnd('reduce');


