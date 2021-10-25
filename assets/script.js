$(document).ready(function() {

//white navbar after scroll:
$(window).scroll(function() {
 if ($(document).scrollTop() > 80) {
   $('nav').addClass('shrink');
} else if ( ($('nav').height() < 150) && ($(document).scrollTop() < 80)) {
   $('nav').removeClass('shrink');
 }
});

//white navbar after toggler:
$(".navbar-toggler").click(function(){
    if ($('nav').height() < 150) {
        $('nav').addClass('shrink');
    } else if(
    ($('nav').height() > 150) && ($(document).scrollTop() < 80)) {
        $('nav').removeClass('shrink');
    }
});

//collapsed navbar when click outside:
$("main").click(function(){
    if ($('.navbar-toggler').hasClass('collapsed')) {
        return
    } else {
        $('.navbar-toggler').click();
    }
});

//smoth scroll js:
var scroll = new SmoothScroll('a[href*="#"]');

//animation:
$(window).scroll(function() {
  $(".anim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("scale-up-center");
    }
  });
});


//scroll above anchor:
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 70);
  }
}
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});
// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

});
