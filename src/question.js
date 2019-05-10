(function($) {
    
  var allPanels = $('.accordion__header');//.hide();
    
  // $('.accordion > dt > a').click(function() {
  //   allPanels.slideUp();
  //   $(this).parent().next().slideDown();
  //   return false;
  // });
  allPanels.first().addClass('active').next().slideToggle();
  // allPanels.first()
  allPanels.on('click', function() {
  	allPanels.removeClass('active');
  	$(this).next().stop().slideToggle();
  	$(this).toggleClass('active');
  });

})(jQuery);