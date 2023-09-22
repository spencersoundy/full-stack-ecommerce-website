//form
let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');
    let tac = document.querySelector('#tc');

    // form validation
    if(fullname.value.length < 3){
        showFromError('name must be 3 letters long');
    }
    else if(!email.value.length){
        showFromError('enter your email');
    }
    else if(password.value.length < 8){
        showFromError('password must contain 8 letters');
    }
    else if(N){
        showFromError('enter your email');
    }
})