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
    if(fullname.value.leng < 3){
        alert('name must be 3 letters long');
    }
})