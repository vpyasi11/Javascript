// let name = "HeroVired"
// let details = `The name of the person is ${name}`
// console.log(details)


// asynchronous nature

// console.log("Hello")
// setTimeout(()=> {console.log("Executing set-timeout")}, 2000)
// console.log("End")


// callbacks

const add = (a,b) => {
    let sum = a+b
    console.log(sum)
    return sum;
}

const sub = (a,b) => {
    let sub = a-b
    console.log(sub)
    return sub;
}

const mul = (a,b) => {
    let mul = a*b
    console.log(mul)
    return mul;
}

function callBackAdd(a,b,callBackFunc){
    callBackFunc(a,b)
}

function callBackSub(a,b,callBackFunc){
    callBackFunc(a,b)
}

function callBackMul(a,b,callBackFunc){
    callBackFunc(a,b)
}

// Promises

let addition = (arr) => {
    return new Promise((resolve, reject) => {
        let a = arr[0];
        let b = arr[1];
        if (a < 0 || b < 0) {
          reject("Pass only non negative numbers");
        } else {
          let sum = a + b;
          console.log("Sum is ", sum);
          resolve(arr);
        }
    });
};

addition([10, 20])
.then(result => console.log(result))
.catch(error => console.log(error))




// callBackAdd(1,3,add)
// callBackSub(1,3,sub)
// callBackMul(1,3,mul)


// callback Hell : calling a callback inside a callback (nested callbacks)
function seriesOfOp(a,b){
    callBackAdd(a,b,(a,b)=>{
        console.log(a+b)
        callBackSub(a,b,(a,b)=>{
            console.log(a-b)
            callBackMul(a,b,(a,b)=>{
                console.log(a*b)
            })
        })
    })
}

// seriesOfOp(5,3)

// Arrow functions

const sum = a => a+200
