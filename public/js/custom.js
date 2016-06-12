/******************************
      Scroll Navigation
******************************/
$(function() {
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
    Fixing margins of col-md-6 boxes to match
************************************************/
var picArr = [ '.pic', '.pic1', '.pic2' ],
    wordArr = [ '.words', 'words1', '.words2' ],
    wordMarginArr = [];

for(var x = 0; x < picArr.length; x++){
  var result = ( $(picArr[x]).height() - $(wordArr[x]).height() ) / 2.1;
  wordMarginArr.push( result );
}

console.log(wordMarginArr);

function fixMargins(){
  var wordMarginArrLength = wordMarginArr.length;

  for(var x = 0; x < wordMarginArrLength; x++){
    if( wordMarginArr[x] > 0 ){
      $(wordArr[x]).css({
        'margin-top': wordMarginArr[x],
        'margin-bottom': wordMarginArr[x]
      });
    }
  }
}

$(document).ready(function(){
  fixMargins();
});

$(window).on('resize', function() {
  fixMargins();
});
