class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a '+ this.carname;
    }
}  

class Model extends Car {
    constructor(brand, mod){ // object er vitore j sequence e arguments pass korbo, constructor e sei sequence ei parameter dibo. like, age brand dibo, then mod dibo.
        super(brand)
        this.model = mod;
    }
    show(){
        return this.present() + " , and the model is " + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); 