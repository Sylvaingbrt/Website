/*!
    * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
	
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    var boxIsSticky = false;
    var stickyBox = function () {
        var $socialBox = $("#socialBox");
        var scrollTop = $("html, body").scrollTop();

        var targetBottomPos = $(window).height() - $socialBox.height() - 50;
        var targetTopPos = $('.masthead').outerHeight() - $socialBox.outerHeight() - 20;

        if (boxIsSticky === false && scrollTop > 100) {
            boxIsSticky = true;
            $socialBox.stop().animate(
                {
                    top: targetBottomPos,
                },
                1000,
                "easeOutExpo"
            );
        } else if (boxIsSticky === true && scrollTop < 100) {
            boxIsSticky = false;
            $socialBox.stop().animate(
                {
                    top: targetTopPos
                },
                1000,
                "easeOutExpo"
            );
        }
    }

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    stickyBox();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    $(window).scroll(stickyBox);
    window.onresize = function() {
        var scrollTop = $("html, body").scrollTop();
        if (scrollTop < 100) {
            var $socialBox = $("#socialBox");
            var targetTopPos = $('.masthead').outerHeight() - $socialBox.outerHeight() - 20;
            $socialBox.stop().animate(
                {
                    top: targetTopPos
                },
                1000,
                "easeOutExpo"
            );
        }
    }
	
	//this is the bit of code that makes the whole opening and closing text thing work.
	  $('t[data-o]').click(function(e) {

		//this line just stops it visiting the href which is always #
		e.preventDefault();

		var openedby = $(this).attr('data-o');
		$('[data-ob="' + openedby +'"]').removeClass('off').addClass('on');

		var closedby = $(this).attr('data-c');
		$('[data-cb="' + closedby +'"]').remove();

		$(this).contents().unwrap();

	  });
	
	
})(jQuery); // End of use strict




