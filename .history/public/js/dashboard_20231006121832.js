let user = JSON.parse(sessionStorage.user || null)

if(user == null){
    location
}

let greeting = document.querySelector('#seller-greeting');
greeting.innerHTML += user.name;