// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg')
    }
    else{
        navbar.classList.remove('bg')
    }
})

// image collage 

const collageImage = [...document.querySelectorAll('.collage-img')];

collageImages.map((item,i) => {
    item.addEventListener('mouseover', () => {
        collageImages
    })
})