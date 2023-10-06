let user = JSON.parse(sessionStorage.user)

let greeting = document.querySelector('#seller-greeting');
greeting.innerHTML += user.name;