function aload(t) {
  "use strict";
  t = t || window.document.querySelectorAll("[data-aload]"), void 0 === t.length && (t = [t]);
  var a, e = 0,
      r = t.length;
  for (e; r > e; e += 1) a = t[e], a["LINK" !== a.tagName ? "src" : "href"] = a.getAttribute("data-aload"), a.removeAttribute("data-aload");
  return t
}

window.onload = function () {
  aload();
};

$("#banner").superslides({
  animation: "fade",
  play: false
});

jQuery(function($) {
  $(document).ready(function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $(".navbar-wrapper").stickUp({
        parts: {
            0: "banner",
            1: "theCouple",
            2: "photoAlbum",
            3: "eventsSchedule",
            4: "rsvp"
        },
        itemClass: "menuItem",
        itemHover: "active",
        topMargin: "auto"
    });
  });
});

(function($) {
  "use strict";

  $('.slide').prepend('<div class="patternOverlay"></div>');

  // for mobile nav js
  $('button.navbar-toggle').on("click", function() {
      $(this).toggleClass('active');
      $('.navbar-collapse').slideToggle();
  });


  $('.navbar-collapse li a').on("click", function() {
      $('.navbar-collapse.collapse').removeClass('active');
      $('button.navbar-toggle').removeClass('active');
  });

  $(".menuItem").on({
      mouseenter: function() {
          $(this).addClass('active');
      },
      mouseleave: function() {
          $(this).removeClass('active');
      }
  });

  if ($(window).width() < 1000) {
      $('.navbar-nav li a').on("click", function() {
          $('.navbar-collapse.collapse').removeClass('in');
      });
  }

  // for portfoli filter jquary
  $(window).load(function() {

      $("#status").fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.

      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

      var $container2 = $('.portfolioBlog');
      $container2.isotope({});

      $('.portfolioFilter a').on("click", function() {
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });
  });

  // Somth page scroll
  $('#navigation a, .smooth, a[href^="#theCouple"]').on("click", function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top - 80
              }, 1000);
              return false;
          }
      }
  });
}(jQuery));

/*
$(".item-buttom").click(function() {
  $("#code").val($(this).attr("data-item-code"));
  $("#itemForm").submit();
});
*/

$(".item-buttom").click(function() {
  window.location.href = "https://go.gerencianet.com.br/#/cobranca/pagar/" + $(this).attr("data-item-code");
});
