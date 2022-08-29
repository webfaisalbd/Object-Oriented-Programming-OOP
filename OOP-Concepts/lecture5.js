// function printMe(){
//     console.log('Hello ' + this.name);
// }

// let obj1 = {
//     name: 'Faisal',
//     age: 27
// }

// let obj2 ={
//     name: 'Tasnim',
//     age: 26
// }

// const binded = printMe.bind(obj1);
// // binded();

// printMe.call(obj2);

function add(a, b) {
    return (a + b) * this.c;
}

let obj1 = {
    c: 3
}

let obj2 = {
    c: 5
}

console.log(add.apply(obj1, [2, 5]));