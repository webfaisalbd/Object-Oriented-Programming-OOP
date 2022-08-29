class Car {
    constructor(name, year, distance){
        this.name = name;
        this.year = year;
        this.distance = distance;
    } // jodi nije theke constructor na likha hoy, tahole, javascript will add an empty constructor method

    run() {
        console.log(this.name + " is running");
    }

    go(distance) {
        console.log(distance + " km have to go.");
    }
}

const bmw = new Car("BMW", 1999);

bmw.run();

// pass argument to the class method 
bmw.go(20);






