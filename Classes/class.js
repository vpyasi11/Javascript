// class demo{
//     x
//     demofun(){
//         console.log("Hello world!")
//         console.log(this.x)
//     }
// }

// let a1 = new demo
// a1.x = "Me"
// a1.demofun()

class pen{
    constructor(name, color, price){
        this.name = name 
        this.color = color
        this.price = price                                 
    }
    showPrice(){
        console.log("Price of" + this.name + "is " + this.price)
    }
}

let p1 = new pen("ball", "red", 10)
p1.showPrice()