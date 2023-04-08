// Scoping of variables

let close = 45

function fun1(){
    let close2 = 100

    console.log(close2)
    function fun2(){
        let close3 = 200
        console.log(close2)
    }
    fun2()
    
}
// console.log(close2)
// fun1()

function fun2(){
    let close3 = 200
    console.log(close2)
}

// fun2()

// differnence b/w var & let
for (var id = 0; id < 3; id++) {
    setTimeout(function () {
        console.log('seconds: ' + id);
    },id * 1000);
}// id is global scoped

for (let id = 0; id < 3; id++) {
    setTimeout(function () {
        console.log('seconds: ' + id);
    },id * 1000);
}// id is locally scoped

for (var id = 1; id <= 3; id ++) {
    (function (id) {
        setTimeout(function () {
            console.log('seconds: ' + id);
        }, id* 1000);
    })(id);
}

x = 10
console.log(x)