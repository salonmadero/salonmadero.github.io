$(document).ready(function() {

$(window).scroll(function() {
 if ($(document).scrollTop() > 80) {
   $('nav').addClass('shrink');
} else if ( ($('nav').height() < 150) && ($(document).scrollTop() < 80)) {
   $('nav').removeClass('shrink');
 }
});

$(".navbar-toggler").click(function(){
    if ($('nav').height() < 150) {
        $('nav').addClass('shrink');
    } else if(
    ($('nav').height() > 150) && ($(document).scrollTop() < 80)) {
        $('nav').removeClass('shrink');
    }
});


var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function() {
  $(".anim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("scale-up-center");
    }
  });
});

});
