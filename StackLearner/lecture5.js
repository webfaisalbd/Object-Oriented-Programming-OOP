function printMe(){
    console.log('Hello ' + this.name);
}

let obj1 = {
    name: 'Faisal',
    age: 27
}

let obj2 ={
    name: 'Tasnim',
    age: 26
}

const binded = printMe.bind(obj1);
binded();

