var blogs = document.getElementById("data")

// blogs.addEventListener("scroll",load)

blogs.onscroll = function(){
    console.log("yes")
    // step1: create XML object to server
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            console.log("yes")
            blogs.innerHTML += this.responseText;
        }
    } 
    xhttp.open("GET","tweets.txt",true);
    xhttp.send();
}
console.log("open")