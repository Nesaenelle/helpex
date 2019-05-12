(function($) {

    $(".slider").on("beforeChange", function (event, slider, slideIndex, nextSlide) {
        setTimeout(function() {
            $('header')[0].className = 'product-' + (nextSlide + 1);
        }, 300);
    });

    $('.slider').slick({
        // centerMode: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        // dots: true,
        arrows: true,
        // infinite: true,
        cssEase: 'linear',
        draggable: false
        // variableWidth: true,
        // variableHeight: true
    });

})(jQuery);