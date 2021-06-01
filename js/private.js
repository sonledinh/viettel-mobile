

$(document).ready(function(){

    $('.slide-banner').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrow: true,
        dots: true,
        slidesToShow: 1,
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    }); 

    $('.list-pack').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        arrow: true,
        dots: false,
        slidesToShow: 4,
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1023, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
    
    $('.top-tab a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.top-tab a').removeClass('active');
        $('.contne-tab').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })
    
    $('.tab-pack a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-pack a').removeClass('active');
        $('.content-pack').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

})


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});

