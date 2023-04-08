class school{
    constructor(name, age, gender, subject = null){
        this.name = name;
        this.age = age;
        this.gender = gender
        this.subject = subject
    }

    getDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.gender)
    }
}

class Professor extends school{
    #contact
    constructor(name, age, gender, contact){
        super(name, age, gender)
        this.subject = subject
        this.#contact = contact
    }   

    profDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.gender)
        // console.log(this.subject)
        console.log(this.#contact)
    }

}

class student extends school{
    constructor(name, age, gender, standard, marks){
        super(name, age, gender)
        this.standard = standard
        this.marks = marks
    }

    studentDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.gender)
        console.log(this.standard)
        console.log(this.marks)
    }

    getMarks(){
        return this.marks
    }
}

const p1 = new Professor("abc", 41, "M", "Maths", 4564654)
p1.profDetails()
// p1.getDetails()
console.log(p1.contact)

const s1 = new student("bcd", 12, "F", "10th", 88)
s1.getDetails()
s1.studentDetails()