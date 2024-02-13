(function ($) {
    "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    $(document).ready(function () {

        /* Hero Case study images */

        // Function to switch to a specific slide by index
        function switchToSlide(index) {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-name:nth-child(' + index + ')').addClass('active');
            $('.case-study-images li:nth-child(' + index + ')').addClass('show');
        }

        // Function to switch to the next slide
        function switchToNextSlide() {
            var $activeSlide = $('.case-study-name.active');
            var $nextSlide = $activeSlide.next();

            if ($nextSlide.length === 0) {
                $nextSlide = $('.case-study-name:first');
            }

            switchToSlide($nextSlide.index() + 1);
        }

        // Trigger mouseenter on slide hover
        $('.case-study-name').on('mouseenter', function () {
            clearInterval(intervalId);
            switchToSlide($(this).index() + 1);
        });

        // Trigger mouseleave to resume auto-rotation
        $('.case-study-name').on('mouseleave', function () {
            intervalId = setInterval(switchToNextSlide, 5000);
        });

        // Click event handlers for manual selection
        $('.case-study-name').on('click', function () {
            clearInterval(intervalId);
            switchToSlide($(this).index() + 1);
        });

        // Auto-rotate the slider every 5 seconds
        switchToSlide(1); // Display the first slide immediately
        var intervalId = setInterval(switchToNextSlide, 5000);

    });

})(jQuery);


/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}