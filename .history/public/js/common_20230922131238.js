const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        
    })
}

const showFromError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML = err;
    errorEle.classList.add('show')
}