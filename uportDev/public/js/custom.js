/****************************
    nReady / 3D Rotation
****************************/
$(document).ready(function(){
  fixMargins();
  $("#3d").interactive_3d({
    frames: 61,
    cursor: 'move',
    entrance: true,
    touchSupport: true,
    loading: '<img src="img/white/black_1.png"/>',
    autoPlay: false,
    preloadImages: true
    });
});

/******************************
      Scroll Navigation
******************************/
$(function(){
    "use strict";
    $('.scroll').bind('click', function(event) {
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

/************************************************
    Fixing margins of col-md boxes to match
************************************************/
var picArr = [ '.pic', '.pic1', '.pic2', '.pic3', '.pic4' ],
    wordArr = [ '.words', '.words1', '.words2', '.words3', '.words4' ],
    wordMarginArr = [],
    picArrLength = picArr.length,
    wordMarginArrLength = picArrLength;

// if the margin is positive then change the margins to the size
// from the wordMarginArr value
function fixMargins(){
  // pushing the margin height to array after getting even margins
  for(var x = 0; x < picArrLength; x++){
    var result = ( $(picArr[x]).height() - $(wordArr[x]).height() ) / 2.1;
    wordMarginArr.push( result );
  }

  for(var x = 0; x < wordMarginArrLength; x++){
    if( wordMarginArr[x] > 0 ){
      $(wordArr[x]).css({
        'margin-top': wordMarginArr[x],
        'margin-bottom': wordMarginArr[x]
      });
    }
  }
}

$(window).on('resize', function(){
  fixMargins();
});

/* ------------------------------------- */
/*  Newsletter ........................ */
/* ------------------------------------- */

$("#notifyMe").notifyMe();
