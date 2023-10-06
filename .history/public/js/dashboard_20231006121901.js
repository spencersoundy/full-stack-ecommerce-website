let user = JSON.parse(sessionStorage.user || null)

if(user == null){
    location.replace('/login')
}else if (!user)

let greeting = document.querySelector('#seller-greeting');
greeting.innerHTML += user.name;