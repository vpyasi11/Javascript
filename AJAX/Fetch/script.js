// Fetch : used to handle Promises

var btn1 = document.getElementById("b1")
btn1.addEventListener("click",getText)
var btn2 = document.getElementById("b2")
btn2.addEventListener("click",getJSON)
var btn3 = document.getElementById("b3")
btn3.addEventListener("click",getAPI)

// for text file

function getText(){
    fetch("file.txt")
    .then(res => res.text())
        .then(data => {
            document.getElementById("empty").innerHTML = data
    })
    .catch(err => console.log(err))
}

// for JSON file

function getJSON(){
    fetch("file.JSON")
    .then(res => res.json())
        .then(data => {
            // data = JSON.parse(data)
            for(let i=0; i<data.length; i++){
                document.getElementById("empty").innerHTML += `${data[i].title}: ${data[i].body} <br>`
            }
        })
    .catch(err => (document.getElementById("empty").innerHTML = err))
}

// fetch("link", { method: "GET", cache: "default", mode: no-cors}) merit of fetch over XHR

// for API data

function getAPI(){
    fetch("https://api.github.com/users")
    .then(res => res.json())
        .then(data => {
            let x = ""
            data.forEach(user => {
                x += `<li> ${user.login} </li>`
            })
            document.getElementById("empty").innerHTML = x
        })
    .catch(err => (document.getElementById("empty").innerHTML = err))
} 