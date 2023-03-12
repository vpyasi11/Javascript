class Vehicle{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails(){
        return(`Name of Bike is ${this.name}`) 
    }
}

// Creating "bike1" object
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1200cc')
console.log(bike1.name, bike1.maker, bike1.engine);
console.log(bike1.getDetails());