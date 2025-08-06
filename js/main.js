(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    // Enhanced image interactions
    $('.about-img img, #about img').hover(
        function() {
            $(this).addClass('floating');
        },
        function() {
            $(this).removeClass('floating');
        }
    );

    // Parallax effect for hero section
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        var parallax = $('.about-img');
        var speed = 0.5;
        parallax.css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });

    // Animate elements on scroll
    $('.service-box, .skill, .portfolio-item').waypoint(function() {
        $(this.element).addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });

    // Enhanced button interactions
    $('.btn').hover(
        function() {
            $(this).addClass('neon-glow');
        },
        function() {
            $(this).removeClass('neon-glow');
        }
    );

    // Smooth reveal for sections
    $('section').waypoint(function() {
        $(this.element).addClass('revealed');
    }, {
        offset: '85%'
    });

    // Interactive progress bars
    $('.progress').waypoint(function() {
        $(this.element).find('.progress-bar').each(function() {
            var width = $(this).attr('aria-valuenow') + '%';
            $(this).css('width', '0%').animate({
                width: width
            }, 2000, 'easeOutQuart');
        });
    }, {
        offset: '80%'
    });

    // Enhanced navigation highlighting
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav .active').removeClass('active');
                $('.navbar-nav li').eq(i).find('a').addClass('active');
            }
        });
    });

    // Add loading animation
    $(window).on('load', function() {
        $('.loading').fadeOut('slow');
        $('body').addClass('loaded');
    });

    // Enhanced form interactions
    $('.form-control').focus(function() {
        $(this).parent().addClass('focused');
    }).blur(function() {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focused');
        }
    });

    // Smooth reveal for images
    $('img').waypoint(function() {
        $(this.element).addClass('fade-in');
    }, {
        offset: '90%'
    });

    // Interactive service boxes
    $('.service-box').hover(
        function() {
            $(this).find('.service-icon').addClass('pulse');
        },
        function() {
            $(this).find('.service-icon').removeClass('pulse');
        }
    );

    // Add CSS animations
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .animated { animation-duration: 1s; animation-fill-mode: both; }
            .fadeInUp { animation-name: fadeInUp; }
            .fade-in { animation: fadeIn 1s ease-in; }
            .pulse { animation: pulse 0.6s ease-in-out; }
            .revealed { animation: slideInUp 0.8s ease-out; }
            .focused { transform: scale(1.02); }
            .loaded { opacity: 1; }
            
            @keyframes fadeInUp {
                from { opacity: 0; transform: translate3d(0, 40px, 0); }
                to { opacity: 1; transform: translate3d(0, 0, 0); }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `)
        .appendTo('head');

})(jQuery);

