$(document).ready(function () {

    $(".slider-for").on("beforeChange", function (event, slider, slideIndex, nextSlide) {
        var curSlide = slider.$slides[nextSlide]
        // changeSliderInfo(curSlide);
        console.log(curSlide);

        setTimeout(function() {
            $('body').attr('data-theme', (nextSlide + 1));
        }, 300);
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 7000,
      pauseOnHover: true,
      asNavFor: '.slider-nav',
      // prevArrow: $('.slider-arrow-prev'),
      // nextArrow: $('.slider-arrow-next')
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: true,
      accessibility: false,
      pauseOnHover: true,
      focusOnSelect: true,
      centerPadding: '0px',
      speed: 700,
      draggable: false
      // responsive: [{
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 5,
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 2
      //     }
      //   }
      // ]
    });

    $('.text-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        responsive: [
            // {
            //     breakpoint: 1600,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 1
            //     }
            // },
            // {
            //     breakpoint: 1280,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 4
            //     }
            // },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 3
            //     }
            // },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         // arrows: false,
            //         // dots: false,
            //         // centerMode: true,
            //         // centerPadding: '20px',
            //         slidesToShow: 1
            //     }
            // }
        ]
    });


    // $('#adolescence-form').on('submit', function (e) {
    //     e.preventDefault();
    //     console.log($(e.currentTarget).serialize());
    // });

    // $('.modal-language__item').on('click',  function (e) {
    //     $('.modal-language__item').removeClass('active');
    //     $(e.currentTarget).addClass('active');
    // });

})