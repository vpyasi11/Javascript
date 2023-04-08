// Rest opertaor (...) : When number of argumnets can be any

function sum(...arg){
    let total
    arg.forEach(ele => total += ele)
    return total
}

// console.log(sum(1,21,3))


// spread operator : passing array as argument

const arr = [21,52,12,14]

function sumSpread(a,b){
    return a+b
}
// console.log(sumSpread.apply(null, arr)) // in ES5
// console.log(sumSpread(...arr)) // in ES6

let a = [4,5,4,2]
let b = [7,5,2,8]
let c = [100, ...a, ...b]

// console.log(c)


// Array destructuring
var d = a[0]
var e = a[a.length-1]
var [x,...y] = a

// console.log(x)
// console.log(y)

// object destructuring

let obj = {
    first:10,
    second:20,
    third:30,
    fourth:40,
    fun : function(){
        return this.first
    }
}
console.log(obj.fun())
let {first,second} = obj

console.log(first)
console.log(second)

//hoisting
// call()
// bind()
// apply()

