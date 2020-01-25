/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
 */
/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
function updateViewportDimensions() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
  return {
    width: x,
    height: y
  }
}
// setting the viewport width
var viewport = updateViewportDimensions();
/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
 */
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;
var servicesvisible = 0;
//services panel
function servicesPanel(servicearea) {
  var serviceareas = jQuery('.area-services').length;
  if (servicesvisible == 0) {
    jQuery("#service-areas-container:hidden").slideDown();
    servicesvisible += 1;
  }
  jQuery(".area-services").fadeOut("fast", function () {
    serviceareas -= 1;
    if (serviceareas < 1) {
      jQuery("#" + servicearea + "-services").fadeIn();
    }
  });
}



$(document).ready(function () {


  /*
  TRENCHLESS ANIMATION
  */

  function trenchlessSteps() {
    /* STEP ONE */
    if (document.getElementById("fullVer")) {
      window.setTimeout(function () {
        $(".repipeCamera").addClass("CameraStepOne");
        $(".RepipeStepOne").addClass("StepHighlight");
        $(".StepOneDescription").addClass("StepDescriptionShow");

      }, 1000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera");
        $(".repipeCameraInside").addClass("repipeCameraMove");
      }, 2000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera-back");
      }, 4500);
      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera");
        $(".repipeCameraInside").removeClass("repipeCameraMove");

      }, 5500);

      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera-back");
        $(".repipeCamera").removeClass("CameraStepOne");
        $(".RepipeStepOne").removeClass("StepHighlight");
        $(".StepOneDescription").removeClass("StepDescriptionShow");
      }, 6000);
      /* STEP TWO */
      window.setTimeout(function () {
        $(".RepipeStepTwo").addClass("StepHighlight");
        $(".StepTwoDescription").addClass("StepDescriptionShow");
      }, 7000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-in");
      }, 8000);

      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move");
      }, 9000);
      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move-back");
      }, 11000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-out");
      }, 12000);
      window.setTimeout(function () {
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move-back");
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move");
        $(".hydro-insert").removeClass("hydro-insert-in");
        $(".hydro-insert").removeClass("hydro-insert-out");
        $(".RepipeStepTwo").removeClass("StepHighlight");
        $(".StepTwoDescription").removeClass("StepDescriptionShow");
      }, 12500);
      window.setTimeout(function () {
        $(".RepipeStepThree").addClass("StepHighlight");
        $(".StepThreeDescription").addClass("StepDescriptionShow");
      }, 13400);
      window.setTimeout(function () {
        $(".permaliner-insert").addClass("permaliner-insert-in");
      }, 14000);
      window.setTimeout(function () {
        $(".hideCIPP").addClass("flowCIPP");
      }, 14800);
      window.setTimeout(function () {
        $(".hideCIPPinside").addClass("hideCIPPinside-move");
      }, 15200);
      window.setTimeout(function () {
        $(".underPipe").addClass("underPipe-move");
      }, 15600);
      window.setTimeout(function () {
        $(".RepipeStepThree").removeClass("StepHighlight");
        $(".StepThreeDescription").removeClass("StepDescriptionShow");
      }, 17000);
      window.setTimeout(function () {
        $(".RepipeStepFour").addClass("StepHighlight");
        $(".StepFourDescription").addClass("StepDescriptionShow");
      }, 18000);
      window.setTimeout(function () {
        $(".hideCIPP").removeClass("flowCIPP");
      }, 19000);
      window.setTimeout(function () {
        $(".permaliner-insert").addClass("permaliner-insert-out");
      }, 22000);

      window.setTimeout(function () {

        $(".permaliner-insert").removeClass("permaliner-insert-in");
      }, 20700);
      window.setTimeout(function () {
        $(".permaliner-insert").removeClass("permaliner-insert-out");
      }, 26500);
      window.setTimeout(function () {
        $(".RepipeStepFour").removeClass("StepHighlight");
        $(".StepFourDescription").removeClass("StepDescriptionShow");
        $(".underPipe").removeClass("underPipe-move");
        $(".hideCIPPinside").removeClass("hideCIPPinside-move");
      }, 20700);
    } else if (document.getElementsByClassName("trenchlessBanner")[0]) {
      window.setTimeout(function () {
        $(".repipeCamera").addClass("CameraStepOne");
        $(".RepipeStepOne").addClass("StepHighlight");
        $(".StepOneDescription").addClass("StepDescriptionShow");

      }, 1000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera");
        $(".repipeCameraInside").addClass("repipeCameraMove");
      }, 2000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera-back");
      }, 4500);
      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera");
        $(".repipeCameraInside").removeClass("repipeCameraMove");

      }, 5500);

      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera-back");
        $(".repipeCamera").removeClass("CameraStepOne");
        $(".RepipeStepOne").removeClass("StepHighlight");
        $(".StepOneDescription").removeClass("StepDescriptionShow");
      }, 6000);
      /* STEP TWO */
      window.setTimeout(function () {
        $(".RepipeStepTwo").addClass("StepHighlight");
        $(".StepTwoDescription").addClass("StepDescriptionShow");
      }, 7000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-in");
      }, 8000);

      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move");
      }, 9000);

      // window.setTimeout(function(){
      //$(".hydro-insert").addClass("hydro-insert-out");
      //},12000);
      window.setTimeout(function () {
        $(".RepipeStepTwo").removeClass("StepHighlight");
        $(".StepTwoDescription").removeClass("StepDescriptionShow");
      }, 12500);
      window.setTimeout(function () {
        $(".RepipeStepFour").addClass("StepHighlight");
        $(".StepThreeDescription").addClass("StepDescriptionShow");
      }, 13400);
      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move-back");
      }, 14000);
      window.setTimeout(function () {
        $('.RepipeStepFour').removeClass('StepHighlight');
        $('.StepFourDescription').removeClass('StepDescriptionShow');
      }, 16200);

      window.setTimeout(function () {
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move-back");
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move");
        $(".hydro-insert").addClass("hydro-insert-out");
        $('.hydro-insert').removeClass('hydro-insert-in');
      }, 15600);

      window.setTimeout(function () {
        $('.hydro-insert').removeClass("hydro-insert-out");
      }, 16660);
    }
  }
  trenchlessSteps();
  setInterval(trenchlessSteps, 20000);

  function runHomeReviews() {
    $('.homeSlideReviews').not('.slick-initialized').slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000,
      infinite: true,
      swipe: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      mobileFirst: true
    });
  }

  runHomeReviews();

  function runHomeJobs() {
    $('.homeCityJobs').not('.slick-initialized').slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      rows: 2,
      dots: true,
      arrows: true,
      autoplay: true,
      dots: false,
      pauseOnHover: false,
      autoplaySpeed: 5000,
      infinite: true,
      swipe: false,
      speed: 500,
      mobileFirst: true,
      responsive: [{
        breakpoint: 630,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        }

      }]
    });
  }
  runHomeJobs();
  /* Put all your regular jQuery in here. */
  function testimonialize() {
    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length).fadeIn(800).delay(5300).fadeOut(800, showNextQuote);
    }
    showNextQuote();
  }
  testimonialize();
  // Slideshow -- Slider buttons and current slide indicators would be nice
  if (document.getElementsByClassName("left-half-of-slider").length > 0) {
    $("#slideshow > div:gt(0)").hide();
    setInterval(function () {
      var pipeclearingvideo = $('.pipe-clearing-demo video').get(0);
      pipeclearingvideo.pause();
      pipeclearingvideo.currentTime = 0;
      pipeclearingvideo.play();
      $('#slideshow > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
    }, 14000);
    // Smooth scroll to id
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 600, 'swing');
    });
  }
  // MOBILE FOOTER NAV

  /*function mobileMenu() {
    $("#mobileNav ul li.menu-item-has-children").click(function() {
      //slide up all the link lists
      $("#mobileNav ul ul").slideUp();
      //slide down the link list below the h3 clicked - only if its closed
      if (!$(this).find("ul.sub-menu").is(":visible")) {
        $(this).find("ul.sub-menu").slideDown();
      }
    });
  }
  mobileMenu();
  */

  //Detect if video is
  //MODAL BOX
  /*    if ($("body").hasClass("home")) {
        //modal script
        // Get the modal
        var modal = document.getElementById('sliderVideo');

        // Get the button that opens the modal
        var btn = document.getElementById("sliderTrigger");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];



        // When the user clicks the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
          $("body").addClass("modal-open");
          $("#modal-iframe").attr("src", $("#modal-iframe").data("autoplay-src") );
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
          $("body").removeClass("modal-open");
          $("#modal-iframe").attr("src", $("#modal-iframe").data("close-src") );
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            $("body").removeClass("modal-open");
            $("#modal-iframe").attr("src", $("#modal-iframe").data("close-src") );
          }
        }
      }*/
  //--------------------------------------------------//
  // doubleTapToGo

  //youtube swapper script
  $(".youtube-swapper ").each(function () {
    if (!$(this).hasClass("override-thumbnail")) {
      // Based on the YouTube ID, we can easily find the thumbnail image
      $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/0.jpg)');
      // Overlay the Play icon to make it look like a video player
      $(this).append($('<div/>', {
        'class': 'play'
      }));
    };
    $(document).delegate('#' + this.id + ':not([data-youtubeid])', 'click', function () {
      // Create an iFrame with autoplay set to true
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&amp;rel=0&controls=0&showinfo=0";
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
      // The height and width of the iFrame should be the same as parent
      var iframe = $('<iframe/>', {
        'frameborder': '0',
        'src': iframe_url
      })
      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).replaceWith(iframe);
    });
  });



  $.fn.doubleTapToGo = function (params) {
    if (!('ontouchstart' in window) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
    this.each(function () {
      var curItem = false;
      $(this).on('click', function (e) {
        var item = $(this);
        if (item[0] != curItem[0]) {
          e.preventDefault();
          curItem = item;
        }
      });
      $(document).on('click touchstart MSPointerDown', function (e) {
        var resetItem = true,
          parents = $(e.target).parents();
        for (var i = 0; i < parents.length; i++)
          if (parents[i] == curItem[10]) resetItem = false;
        if (resetItem) curItem = false;
      });
    });
    return this;
  };
  $('li:has(ul)').doubleTapToGo();
  //--------------------------------------------------//
  //youtube swapper script





  $(".menuToggle").unbind('click').click(function () {
    $("#mobilenav").slideToggle();
  });
  $(".mobile-nav > li").unbind('click').click(function () {
    //$(this).children("ul").slideToggle();
    // $(this).children("ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if (!$(this).children("ul").is(":visible")) {
      $(this).children("ul").slideDown();
    } else {
      $(this).children("ul").slideUp();
    }
  });


  /*
      function mobileMenu() {
          $("#mobileNav ul li.menu-item-has-children").click(function(){
              //slide up all the link lists
              $("#mobileNav ul ul").slideUp();
              //slide down the link list below the h3 clicked - only if its closed
              if(!$(this).find("ul.sub-menu").is(":visible")) {
                  $(this).find("ul.sub-menu").slideDown();
              }
          });
      }


      mobileMenu();
  */
}); /* end of as page load scripts */