// Promises : to tackle nested callbacks (callback hell) (async)



// let substraction = (a,b) => {
//     return new Promise((resolve,reject) =>{
//         if(a < b){
//             reject("First number should be greater than second")
//         }
//         else{
//             sub = a-b
//             resolve(sub)
//         }
//     })
// }

// substraction(20,30)
// .then((sub) => console.log("Sub = " + sub))
// .catch(error => console.log(error))

// const newPromise = Promise.resolve(100)
// const newPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved")
//     },2000)
// })
// const newPromise3 = Promise.reject("rejected")
// Promise.any([newPromise,newPromise2]).then(result => {
//     console.log(result)
// })
// Promise.allSettled([newPromise,newPromise2,newPromise3])
// .then(result => {
//     console.log(result)
// })
// .catch(error => console.log(error)) 

//Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

const data = (num) => {
    return new Promise((resolve,reject) => {
        if(typeof(num)!=="number"){
            reject("error")
        }
        else{
            if(num%2 == 0){
                setTimeout(reject("even"),2000)
            }
            else{
                setTimeout(resolve("odd"),1000)
            }
        }
    })
}

data("hello")
.then(result => console.log(result))
.catch(error => console.log(error))
