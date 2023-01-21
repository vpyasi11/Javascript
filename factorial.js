var f = 5;
function factorial(f){
    let ans=1;
    for(i=1;i<=f;i++){
        ans = ans*i
    }
    return ans;
}

console.log(factorial(5))