// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 270){
        navbar.classList.add('bg')
    }
    else
    console.log(scrollY);
})