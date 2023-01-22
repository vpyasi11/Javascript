function add_item(){
    let item = document.getElementById("box")
    let listItem = document.getElementById("list_item")

    if(item.value != ""){
        let make_li = document.createElement("li")
        make_li.appendChild(document.createTextNode(item.value))
        listItem.appendChild(make_li)
        item.value = ""
    }
    else{
        alert("Please enter a list Item")
    }
}