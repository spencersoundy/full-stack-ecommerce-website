const sendData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showFromError(data.alert);
    }
    else if(data.name){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

const showFromError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML = err;
    errorEle.classList.add('show')
}