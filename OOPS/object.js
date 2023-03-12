// Creating an object

let student = {
    fName : "Chandramani",
    lName : "Pyasi",
    age : 27,

    getData : function(){
        return(`My Name is ${student.fName} ${student.lName}, age is ${student.age}`)
    },

    marks : {
        physics : 85,
        maths : 90
    }

}

console.log(student.getData());
console.log(student.marks)
