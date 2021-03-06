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

$(".item-buttom").click(function() {
  window.location.href = "https://go.gerencianet.com.br/#/cobranca/pagar/" + $(this).attr("data-item-code");
});

function postMessageToGoogle(){
  var name = $("#message-name").val();
  var message = $("#message-message").val();

  if (name !== "" && message !== "") {
    $.ajax({
      url: "https://docs.google.com/forms/d/1rA0U-6cxBi-3KIJxJcVFBwFdo5gXc6eEL0R3LL3Z9Fo/formResponse",
      data: {"entry.1067170230" : name, "entry.1137276183" : message},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function (){
          $("#modal-message-alert-error").hide();
          $("#modal-message-alert-success").show();
          $("#modal-message-form").trigger("reset");
        },
        200: function (){
          $("#modal-message-alert-error").hide();
          $("#modal-message-alert-success").show();
          $("#modal-message-form").trigger("reset");
        },
        400: function (){
          $("#modal-message-alert-error").show();
          $("#modal-message-alert-success").hide();
        },
        404: function (){
          $("#modal-message-alert-error").show();
          $("#modal-message-alert-success").hide();
        },
        500: function (){
          $("#modal-message-alert-error").show();
          $("#modal-message-alert-success").hide();
        }
      }
    });
  }
  else {
    $("#modal-message-alert-error").show();
    $("#modal-message-alert-success").hide();
  }
}

function postPresenceToGoogle(){
  var name = $("#presence-name").val();

  if (name !== "") {
    $.ajax({
      url: "https://docs.google.com/forms/d/1SH1l7rLorLI_1HnPZrVIxFJvWGX3fDBig2bkgdj2pm4/formResponse",
      data: {"entry.1263366515" : name},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function (){
          $("#modal-presence-alert-error").hide();
          $("#modal-presence-alert-success").show();
          $("#modal-presence-form").trigger("reset");
        },
        200: function (){
          $("#modal-presence-alert-error").hide();
          $("#modal-presence-alert-success").show();
          $("#modal-presence-form").trigger("reset");
        },
        400: function (){
          $("#modal-presence-alert-error").show();
          $("#modal-presence-alert-success").hide();
        },
        404: function (){
          $("#modal-presence-alert-error").show();
          $("#modal-presence-alert-success").hide();
        },
        500: function (){
          $("#modal-presence-alert-error").show();
          $("#modal-presence-alert-success").hide();
        }
      }
    });
  }
  else {
    $("#modal-presence-alert-error").show();
    $("#modal-presence-alert-success").hide();
  }
}
