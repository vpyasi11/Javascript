class Person{
    constructor(name){
        this.name = name;
    }

    getData(){
        return(`Name of person : ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, id){
        super(name);
        this.id = id;
    }

    getDetails(){
        return(`${super.getData()}, ${this.id}`)
    }
}

let obj = new Student("Virat", 101)
console.log(obj.getDetails())