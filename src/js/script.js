window.addEventListener('DOMContentLoaded', () => {

    const trigger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');

    trigger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
            menu.classList.remove('active');
    });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__overlay')) {
            menu.classList.remove('active');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('active');
        }
    });

    const counter = document.querySelectorAll('.skills__ratings-counter');
    const lines = document.querySelectorAll('.skills__ratings-line span');

    counter.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;    
    });


    // Smooth scroll 

    const pageup = document.querySelector('.pageup');

    window.scroll(function() {

        if (window.scrollTop() > 1200) {
            pageup.classList.add('active');
        } else {
            pageup.classList.remove('active');
        }
    });

});