jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Modal video
  new ModalVideo('.js-modal-btn', {channel: 'youtube'});

  // Init Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {

      320: { items: 1},
      480: { items: 2},
      600: { items: 2},
      767: { items: 3},
      768: { items: 3},
      992: { items: 4}
    }
  });

  // counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

	// flexslider main
	$('#main-flexslider').flexslider({						
		animation: "swing",
		direction: "vertical", 
		slideshow: true,
		slideshowSpeed: 3000,
		animationDuration: 800,
		directionNav: true,
		prevText: '<i class="fa fa-chevron-up myArrow"style="font-size:22px; color:#fff"></i>',       
		nextText: '<i class="fa fa-chevron-down active myArrow" style="font-size:22px; color:#fff"></i>', 
		controlNav: false,
		smootheHeight:true,						
		useCSS: false
  });

  // Nice Scroll
  $("body").niceScroll({
    cursorcolor:"aquamarine",
    cursorwidth:"10px"
  });
  
});

// Typed Texts
var typed = new Typed('#typed',{
  stringsElement: "#typed-strings",
  backSpeed: 60,
  typeSpeed: 60,
 // smartBackspace: true, // this is a default
  loop: true
});
// Typed Texts
var typed = new Typed('#typed1',{
  stringsElement: "#typed-strings1",
  backSpeed: 60,
  typeSpeed: 60,
  //smartBackspace: true, // this is a default
  loop: true
});

var typed = new Typed('#typed2',{
  stringsElement: "#typed-strings2",
  backSpeed: 60,
  typeSpeed: 60,
  //smartBackspace: true, // this is a default
  loop: true
});
var typed = new Typed('#typed3',{
  stringsElement: "#typed-strings3",
  backSpeed: 60,
  typeSpeed: 60,
  //smartBackspace: true, // this is a default
  loop: true
});
var typed = new Typed('#typed4',{
  stringsElement: "#typed-strings4",
  backSpeed: 60,
  typeSpeed: 60,
  //smartBackspace: true, // this is a default
  loop: true
});
var typed = new Typed('#typed5',{
  stringsElement: "#typed-strings5",
  backSpeed: 60,
  typeSpeed: 60,
  //smartBackspace: true, // this is a default
  loop: true
});