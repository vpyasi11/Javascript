var str = "1234321"

function palindrome(str){
    var l = str.length;
    var stack = []
    var midValue = parseInt(l/2)
    var i;

    for(var i = 0; i<midValue; i++){
        stack.push(str[i])
    }

    if(l%2!==0){
        i++
    }

    while(i !== l){
        var item = stack[stack.length-1]
        stack.pop()
        if(item !== str[i]){
            return false;
        } 
        i++
    }
    return true;
}

console.log(palindrome(str))