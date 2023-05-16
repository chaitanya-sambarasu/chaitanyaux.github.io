function scrollValue() {
    var navbar = document.getElementById('mycareerbg');
    var scroll = window.scrollY;
    if (scroll < 750) {
        navbar.classList.remove('scrollbg');
    } else {
        navbar.classList.add('scrollbg');
    }
}

const myModal = new bootstrap.Modal('#exampleModal');
window.addEventListener('DOMContentLoaded', () => {
    myModal.show();
});
