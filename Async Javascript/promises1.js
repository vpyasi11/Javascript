// using async before a function returns a promise

// normal
function anyFunc(){
    return Promise.resolve(5)
}

// anyFunc().then(a => console.log(a))

// using async
async function anyfunc(){
    return 5
}

// anyfunc().then(a => console.log(a))

// using await: waits only for resolve

async function f1(){
    const prom = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("I am resolved")
        }, 2000)
    })

    const anyVar = await prom // waits for promise to be resolved
    console.log(anyVar)
    // or console.log(await prom) // eliminate the use of .then
}
f1()