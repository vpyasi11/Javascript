// Using constructor

function employee(fName, lName){
    this.fName = fName
    this.lName = lName
}

// Creating "data" object

let data = new employee("Ram", "Kumar");
console.log(data.fName);
console.log(`First Name : ${data.fName}`);

// Creating "data1" object

let data1 = new employee("Rahul", "Singh");
console.log(data1.fName);

console.log(data.fName, data1.lName);