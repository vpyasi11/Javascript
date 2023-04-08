class login{
    #password
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.#password = password; // making password private using "#"
    }
    
    loginSuccess(username, password){
        if(username == this.username && password == this.#password){
            console.log("login success of parent class")
        }
        else{
            console.log("Try again !")
        }
    }

    getPassword(){
        return this.#password
    }

    setPassword(newPassword){
        this.#password = newPassword
    }
}

class admin extends login{
    constructor(name,username,password,adminId){
        super(name,username,password)
        this.adminId = adminId
    }

    removeUser(userId){
        console.log("removed")
    }

    loginSuccess(username, password, adminId){
        if(username == this.username && password == this.getPassword() && adminId == this.adminId){
            console.log("login success")
        }
        else{
            console.log("Try again ")
        }
    }
}

class user extends login{
    constructor(userId, username, password){
        super(username,password)
        this.userId = userId
    }
    activity(){
        console.log("done")
        // console.log(this.constructor)
    }
} 

const a1 = new admin("Krishna", "890", "3456")
const u1 = new user("01", "lord", "0000")
// u1.activity()

// console.log(a1.getPassword())
// p1.removeUser("01") // parent class can't access child class methods

// const p1 = new login('Shakul','SMalik',"123456")
// const p2 = new login('Karthik', "Karthiky", "345678")

// p1.loginSuccess("mailk", "23456")
// p2.loginSuccess("Karthiky","345678")

// console.log(p1.password)
// console.log(p2.password)

// console.log(p1.getPassword())
// p1.setPassword("565656")
// console.log(p1.getPassword())

// a1.loginSuccess("Krishna", "3456")

const admin1 = new admin("vishu","vpyasi11","123456","1008")
admin1.loginSuccess("vpyasi11","123456","1008")

