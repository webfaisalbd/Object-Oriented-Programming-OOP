// const num = [20,45,12,20,56];
// num.forEach((ele)=> {
//     if(ele == 45){
//         break;
//         console.log("done");
//     }
// })



const nums = [1, 2, 3, 4];
const output = nums.reduce((previousValue, currentValue, currentIndex, array) => {
    previousValue += currentValue;
    return previousValue;
}, 0); // here, zero is initial of previousValue
console.log(output); // 10




// sum
console.time("Avg")
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, cur, index, arr) => {
    acc = acc + cur;
    return acc;
})
console.log("sum of ", sum);
console.timeEnd("Avg")
// output: 
// sum of  15
// Avg: 4.772ms


// avg 
console.time('Reduce');
var numbers = [1, 2, 3, 4, 5];
const avg = numbers.reduce((acc, cur, index, arr) => {
    acc = acc + cur;
    if (index == arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
})
console.log(avg);
console.timeEnd('Reduce');