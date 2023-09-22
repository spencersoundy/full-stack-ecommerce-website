const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        hearders: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    console.log(data);
    loader.getElementsByCl
    if(data.alert){
        showFromError(data.alert);
    }
}

const showFromError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML = err;
    errorEle.classList.add('show')
}