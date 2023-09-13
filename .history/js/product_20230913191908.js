let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () =>{
        for(let i = 0; i < 5; i++){
            ratingStarInput[]
        }
    })
})