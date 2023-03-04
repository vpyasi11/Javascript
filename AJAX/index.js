function load(){
    // step1: create XML object to server
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            document.getElementById("data").innerHTML=this.responseText;
        }
    } 
    xhttp.open("GET","file.txt",true);
    xhttp.send();
}