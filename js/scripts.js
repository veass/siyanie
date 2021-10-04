// initialization owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    dots: true,
    autoWidth: true,
    autoplay: true,
    navigation: false,
    responsiveClass:true,
    mouseDrag: false,
    pullDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    items: 1,
  }
  );
});


// mobile burger && header
// $('.mobile-menu-btn').on('click', function() {
//   if($(this).hasClass('active')) {
//     $('.mobile-menu-btn').removeClass('active');
//     $('header').removeClass('active');
    
//   } else {
//     $('.mobile-menu-btn').addClass('active');
//     $('header').addClass('active');
//   }
//   });




// Fix bugs when changing resolution

// For developers. If resolution of device changing after loading, then need this code. I guess this bad practice
$(window).resize(dynamic_content);
// Core
$(window).ready(dynamic_content);

function dynamic_content(){
  let width = $(window).width();

  if (width <= 1440) {
    $('.owl-carousel').data('owl.carousel').options.autoWidth = false;
    $('.owl-carousel').trigger( 'refresh.owl.carousel' );
  }
  if (width > 1440) {
    $('.owl-carousel').data('owl.carousel').options.autoWidth = true;
    $('.owl-carousel').trigger( 'refresh.owl.carousel' );
  }
};


// Send ajax to form.php

$('.send-message').click(function(event) {
  event.preventDefault();
  let e = $("#InputEmail");
  let email = e.val();
  let p = $("#PhoneInput")
  let phone = p.val();
  let m = $("#MessageText");
  let message = m.val();
  let form = $('form');

  $.ajax({
    method: "POST",
    url: '../form.php',
    data: {
      email: email,
      message: message,
      phone: phone
    },                              
    success: function(response) { 
      console.log(response);
      if( response == 0 ) {
        e.removeClass('is-valid');
        p.removeClass('is-valid');
        e.addClass('is-invalid');
        p.addClass('is-invalid');
      }
      if( response == 2) {
        e.removeClass('is-valid');
        e.addClass('is-invalid');
      }
      if( response == 3) {
        e.removeClass('is-invalid')
        p.removeClass('is-valid');
        e.addClass('is-valid');
      }
      if( response == 1) {
        e.removeClass('is-invalid');
        p.removeClass('is-valid');
        e.addClass('is-valid');
        p.addClass('is-invalid');
      }

      if( response == 5) {
        e.removeClass('is-invalid');
        p.removeClass('is-invalid');
        e.addClass('is-valid');
        p.addClass('is-valid');
      }
    }
})


})

// initialization dynamic menu
$(document).ready(function(){
    var menu = new Mmenu( "#menu", {
        //  "slidingSubmenus": true,
        "extensions": [
            "pagedim-black"
        ],
        "navbar": {
          add: false,
          sticky: false
        },
          
      }, 
      {
        // configuration
        offCanvas: {
            clone: true
        },
        
      });
      
})



