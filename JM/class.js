// class rules:
// 1. class er vitore, parameter likhar por semicolon dite hoy, r parameter er value (=) diye likhte hoy.
// 2. class er vitore, function likhar somoy- function keyword ta likhte hoy na.
// 3. dynamically kono value pass korar jonno constructor use kora hoy. constructor ek doroner function.
class Support{
    name;
    age;
    role='support instructor';
    address="Bangladesh";
    constructor(myName,myAge){
        this.name=myName;
        this.age=myAge;
    }
    startSession(){
        console.log(this.name,"start the session");
    }
}

const sakib = new Support('Sakib',25);
console.log(sakib);
sakib.startSession();