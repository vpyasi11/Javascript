const learner = {
    active: true,
    details : function (){
        console.log(`Hello ${this.name}`)

    }
}

const obj1 = Object.create(learner)
console.log(obj1.active)

obj1.active = false;
console.log(obj1.active)
obj1.name = "Chandramani"
obj1.details()