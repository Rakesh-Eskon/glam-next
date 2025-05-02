import $ from 'jquery';
// If you use Fancybox or any other plugins, import them here

(function () {

    $(window).scroll(function () {
        const $this = $(this),
              st = $this.scrollTop(),
              navbar = $('.glamblush-header');

        if (st > 150) {
            navbar.addClass('scrolled awake');
        } else {
            navbar.removeClass('scrolled awake');
        }
    });

    // Mobile menu toggle
    $('.ann-js-glamblush-nav-toggle').on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        if ($('body').hasClass('menu-open')) {
            $this.removeClass('active');
            $('.glamblush-menu .glamblush-menu-inner > ul > li').each(function (i) {
                const that = $(this);
                setTimeout(() => that.removeClass('is-show'), i * 100);
            });
            setTimeout(() => $('.glamblush-menu').removeClass('glamblush-menu-show'), 800);
            $('body').removeClass('menu-open');
        } else {
            $('.glamblush-menu').addClass('glamblush-menu-show');
            $this.addClass('active');
            $('body').addClass('menu-open');
            setTimeout(() => {
                $('.glamblush-menu .glamblush-menu-inner > ul > li').each(function (i) {
                    const that = $(this);
                    setTimeout(() => that.addClass('is-show'), i * 100);
                });
            }, 500);
        }
    });

    // Accordion Box
    if ($(".faqs-box").length) {
        $(".faqs-box").on("click", ".acc-btn", function () {
            const outerBox = $(this).parents(".faqs-box"),
                  target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                outerBox.children(".accordion").removeClass("active-block");
            } else {
                outerBox.find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                outerBox.children(".accordion").removeClass("active-block");
                outerBox.find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }

    // Contact Form Submission
    const form = $('.contact__form'),
          message = $('.contact__msg');

    form.submit(function (e) {
        e.preventDefault();
        const formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(response => {
            message.fadeIn().removeClass('alert-danger').addClass('alert-success').text(response);
            setTimeout(() => message.fadeOut(), 2000);
            form.find('input:not([type="submit"]), textarea').val('');
        }).fail(data => {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger').text(data.responseText);
            setTimeout(() => message.fadeOut(), 2000);
        });
    });

    // Smooth Scroll for Bullets
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach(bullet => {
        bullet.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Swiper adjustments
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.removeAttribute('role'); // Removes the role attribute
    });
})();
