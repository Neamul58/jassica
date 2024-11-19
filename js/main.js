(function ($){
    "use strict";


    $(".offcanvas-menu-trigger").on("click", function(){
        $(".offcanvas-menu-visible").addClass("show");
        $(".offcanvas-menu-shade").addClass("active");
    });

    $(".offcanvas-menu-close, .offcanvas-menu-shade, .nav-item").on("click", function() {
        $(".offcanvas-menu-visible").removeClass("show");
        $(".offcanvas-menu-shade").removeClass("active");
    });



    // mixitup   portfolio
    var mixer = mixitup('.portfolio-content');

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });



})(jQuery);