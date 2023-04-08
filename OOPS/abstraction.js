class Shape{
    constructor(){
    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
        // console.log(this.constructor)
    }
    }
    draw() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}

const x = new Shape()