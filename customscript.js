function scrollValue() {
    var navbar = document.getElementById('mycareerbg');
    var scroll = window.scrollY;
    if (scroll < 750) {
        navbar.classList.remove('scrollbg');
    } else {
        navbar.classList.add('scrollbg');
    }
}

window.addEventListener('scroll', scrollValue);