// class rules:
// 1. class er vitore, parameter likhar por semicolon dite hoy, r parameter er value (=) diye likhte hoy.
// 2. class er vitore, function likhar somoy- function keyword ta likhte hoy na.
// 3. dynamically kono value pass korar jonno constructor use kora hoy. constructor ek doroner function.

class TeamMember{
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

class Support extends TeamMember{

    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime=time;
    }
    
    startSession(){
        console.log(this.name,"start the session at ",this.groupSupportTime);
    }
}

class StudentCare extends TeamMember{
    schedule;
    constructor(name,address,schedule){
        super(name,address)
        this.schedule=schedule;
    }
    buildARoutine(){
        console.log(this.name,'build a routine');
    }
}

const alia=new StudentCare('alia','bd',8);
console.log(alia);

// const sakib = new Support('Sakib',25,5);
// console.log(sakib);
// sakib.startSession();