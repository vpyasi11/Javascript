// using XHR (XMLHttpRequest)

// function load(){
//     var xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             var arr = JSON.parse(this.responseText)
//             // arr.forEach(element => {
//             //     console.log(element.login)
//             // });
//             var title = document.getElementById("table").createCaption()
//             title.innerHTML = "Git Hub Data"
//             for(i=0;i<arr.length;i++){
//                 var username = document.getElementById('table').insertRow();
//                 username.innerHTML = arr[i].login
//                 var url = username.insertCell()
//                 url.innerHTML = arr[i].url
//             }
//         }
//         else{
//             console.log("readystate: " + this.readyState)
//             console.log("Status: " + this.status)
//         }
//     }
//     xhttp.open("GET","https://api.github.com/users",true)
//     xhttp.send()
// }

// using fetch




function load(){
    var username = document.getElementById("search").value
    document.getElementById('main').style.display = 'flex'

    fetch("https://api.github.com/users")
    .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                if(user.login == username){
                    // console.log(user)

                    fetch(user.repos_url)
                    .then(res => res.json())
                        .then(data => {
                            
                            for(i=0;i<5;i++){
                                console.log(data[i].name)
                                var repo = document.createElement('button')
                                repo.innerHTML = data[i].name
                                // repo.style.backgroundColor = 'seagreen'
                                document.getElementById('details').appendChild(repo)
                            }
                        })

                    document.getElementById("pic").src = user.avatar_url    
                    fetch(user.url)
                    .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            document.getElementById("name").innerHTML = "<h1>"+ data.name + "</h1>"
                            // document.getElementById("location").innerHTML += data.location
                            document.getElementById("followers").innerHTML = data.followers + " Followers"
                            document.getElementById("following").innerHTML = data.following + " Following"
                            document.getElementById("repos").innerHTML = data.public_repos + " Repos"

                            
                        })
                    
                }
            })
            
        })
    
        // document.getElementById("main").innerHTML = "Enter a valid name"
                
    .catch(err => (document.getElementById("main").innerHTML = err))
}

