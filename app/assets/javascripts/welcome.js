var ready;
ready = function() {
  $('a i.fa-chevron-down').mouseover(function(){
      $(this).effect('bounce', {distance: 5, times:1}, 400);
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300);
          return false;
        }
      }
    });
  });
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
