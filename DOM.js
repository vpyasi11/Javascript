// console.log("This is script from JS file")
// let el = document.getElementById("firstp")
// console.log(el.innerText)

// function myFun(){
//     let el = document.getElementById("firstp")
//     el.innerText="Hi"//changes value
//     console.log(el.innerText)
// }

function random(){
    str = ["chandramani", "sanpreet", "anuj", "prashant"]
    var a = Math.floor(Math.random()*str.length)

    let name = document.getElementById("firstp")
    name.innerText=str[a]
    
}

function myFun(){
        let el = document.getElementById("inp")
        console.log(el.value)
    }

    function calc(){
        let el1 = document.getElementById("inp1")
        let el2 = document.getElementById("inp2")
        let product = parseInt(el1.value)*parseInt(el2.value)
        // let sum = el1.value+el2.value

        let out=document.getElementById("product")
        out.innerText = product
        
    }