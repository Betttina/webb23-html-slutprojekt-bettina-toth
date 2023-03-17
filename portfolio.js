const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });
});

// Loopa igenom länkarna och lägg till en aktiv klass på den aktuella sidan
const links = document.querySelectorAll('.navbar-nav .nav-link');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.href === window.location.href) {
        link.classList.add('active');
        break;
    }
}

$(document).ready(function(){
    // smooth scroll-funktion för sidolänkar
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
