const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link active">home</a></li>
        <li class="link-item"><a href="#" class="link">products</a></li>
        <li class="link-item"><a href="#" class="link">about</a></li>
        <li class="link-item"><a href="#" class="link">contact</a></li>
    </ul>
    <div class="user-interactions">
        <div class="cart">
            <img src="img/cart.png" class="cart-icon" alt="">
            <span class="cart-item-count">00</span>
        </div>
        <div class="user">
            <img src="img/user.png" class="user-icon" alt="">
            <div class="user-icon-popup">
                <p>login to your account</p>
                <a>login</a>
            </div>
        </div>
    </div>
    `
}

create