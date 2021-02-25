if($(window).innerWidth() > 767){}

$(document).ready(function(){
   $(window).bind('scroll', function() {
   // var navHeight = $( window ).height() - 70;  
         if ($(window).scrollTop() > 200) {
             $('.btn-scroll').addClass('scroll');
         }
         else {
             $('.btn-scroll').removeClass('scroll');
         }
    });
});

$('.slide-banner').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
}); 

$('.slide-doc-hot').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-doc-view').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slider-for').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ],
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
});

$('.favorite a').click(function() {
  $(this).toggleClass('active');
});

var numberSpinner = (function() {
  $('.number-spinner>.ns-btn>a').click(function() {
    var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;

    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
    console.log(newVal);
  });
  $('.number-spinner>input').keypress(function(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });
})();

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});

