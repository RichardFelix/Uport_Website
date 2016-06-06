/******************************
      Scroll Navigation
******************************/
$(function() {
    "use strict";
    $('.scroll' || '#scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('#navigation-menu').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 45 + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

/************************************************
    Collapse menu on click (only for mobile)
************************************************/
  $(function(){
    $(".navbar-collapse a").click(function(){
      $(".navbar-collapse").removeClass("in");
      $(".navbar-collapse").css({'height': '0px'});
    });
  }());
