window.onload

let loader = document.querySelector('.loader');
let applyBtn = document.querySelector('.apply-btn');

applyBtn.addEventListener('click', () => {
    let businessName = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let about = document.querySelector('#about').value;
    let number = document.querySelector('#number').value;

    if(!businessName.length || !address.length || !about.length || number.length < 10 || !Number(number)){
        showFormError('some information(s) is/are incorrect');
    }
    else{
        //send data
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName,
            address: address,
            about: about,
            number: number,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})