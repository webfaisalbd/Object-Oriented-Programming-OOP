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


