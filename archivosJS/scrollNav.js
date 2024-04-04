window.addEventListener('scroll', function() {
    let navbar = document.getElementById('nav');
    let scrolled = window.scrollY > 0;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});