$(document).ready(function(){

    $('[data-modal=connect]').on('click', () => {
        $('.overlay, #connect').fadeIn('slow');
    });

    $('.modal__close').on('click', () => {
            $('.overlay, #connect').fadeOut('slow');
    });

    $(window).on('click', (e) => {

        if (e.target.classList.contains('overlay')) {
            $('.overlay, #connect').fadeOut('slow');
        }
    });

    $(document).keyup((e) => {
        if (e.keyCode === 27) {
            $('.overlay, #connect').fadeOut('slow');
        }
    });

    // slick-slider

    $('.carousel__inner').slick({
        spend: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.png" alt="left"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
      });


    //   hamburger

    $('.hamburger').on('click', () => {
        $('.hamburger').toggleClass('hamburger_active');
        $('.menu').toggleClass('menu_active');
    });

    $('.menu__list-item').each(function(){
        $(this).on('click', () => {
            $('.hamburger').toggleClass('hamburger_active');
            $('.menu').toggleClass('menu_active');
        });
    });


});