function load(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var table = document.getElementById("t1")
            let arr = this.responseText
            
            arr = arr.split("{")
            console.l
            
            
        }
    }
    xhttp.open("GET","https://api.github.com/users",true)
    xhttp.send()
}

// display ready state when not == 4
// status display
// twitter onscroll
