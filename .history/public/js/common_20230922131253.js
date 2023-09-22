const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        hearders: new Hearders
    })
}

const showFromError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML = err;
    errorEle.classList.add('show')
}