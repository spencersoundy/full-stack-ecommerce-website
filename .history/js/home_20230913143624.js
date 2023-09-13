// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 270){
        navbar.classList.add('bg')
    }
    else{
        navbar
    }
    console.log(scrollY);
})