const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        hearders: new Headers({'Content-Type': 'application/json'}),
        body: J
    })
}

const showFromError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML = err;
    errorEle.classList.add('show')
}