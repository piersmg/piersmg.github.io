$(".transition").click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { 
    window.location = url;
  }, 300, linkUrl);
  $('.stripe').addClass('transition-active');
  setTimeout(function () { 
      $('.stripe').removeClass('transition-active');
  }, 400);
});

var home = 'https://piersmg.github.io/';

$(function() {
  var referrer = document.referrer;
  if (referrer != home) {
    $('.pink-cover').css( "display", "none" );
  }
  if (referrer == home) {
    $('.pink-cover').toggleClass('pink-transition-active');
  }
});