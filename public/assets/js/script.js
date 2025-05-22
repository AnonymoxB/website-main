window.addEventListener('scroll', function () {
    // get element id navbar
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        // add class shawdow to navbar
        navbar.classList.add('shadow');
    } else {
        // remove class shawdow to navbar
        navbar.classList.remove('shadow');
    }
});

