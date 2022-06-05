const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top>=100) {
        navbar.classList.add('navbarDark');
    }
    else {
        navbar.classList.remove('navbarDark');
    }
}
