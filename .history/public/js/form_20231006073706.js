window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(user.email){
            location.replace('/');
        }
    }
}

//form
let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name') || null;
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number') || null;
    let tac = document.querySelector('#tc') || null;

    if (fullname != null){//signup page
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
        else if(Number(number) || number.value.length < 10){
            showFromError('invalid number, please enter valid one');
        }
        else if(!tac.checked){
            showFromError('you must agree to our terms and conditions');
        }
        else{
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: fullname.value,
                email: email.value,
                password: password.value,
                tac: tac.checked
            })
        }
    }
    else{// login page
        if(!email.value)
    }
})