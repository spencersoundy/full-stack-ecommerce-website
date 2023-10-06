let user = JSON.parse(sessionStorage)

let greeting = document.querySelector('#seller-greeting');
greeting.innerHTML += user.name;