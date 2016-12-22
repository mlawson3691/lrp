jQuery(document).ready(function($) {

    // navigation bar animation
    var navShrunk = false;
    $(window).scroll(function() {
        if ($(document).scrollTop() > 40 && navShrunk === false) {
            $('#navbar').addClass('shrinkBar');
            $('#navbar img').addClass('shrinkImg');
            navShrunk = true;
        } else if ($(document).scrollTop() <= 40 && navShrunk === true) {
            $('#navbar').removeClass('shrinkBar');
            $('#navbar img').removeClass('shrinkImg');
            navShrunk = false;
        }
    });

    // redirect to node page when click on store item
    $('.clickable-store-item').click(function() {
        if ($(this).attr('id')) {
            window.location.href = '/node/' + $(this).attr('id');
        }
    });

    // about page image slider
    if (window.location.pathname == "/" || window.location.pathname == "/about") {
        var PICS = 3;
        var current = 1
        function changeHero() {
            current ++;
            if (current > PICS) {
                current = 1;
            }
            var height = $('#about-hero').height();
            $('#hero-img-wrapper').css('height', height + 10);
            $('#about-hero').fadeOut('slow', function(){
                $(this).attr('src','sites/images/hero-img' + current + '.png').bind('onreadystatechange load', function(){
                    if (this.complete) $(this).fadeIn('slow');
                });
            });
            if (current === 1) {
                $('#hero-img-link').attr('href', 'blog');
                $('#hero-img-link').text('Learn about my methods and materials');
            } else if (current === 2) {
                $('#hero-img-link').attr('href', 'contact');
                $('#hero-img-link').text('Tell me what you think');
            } else {
                $('#hero-img-link').attr('href', 'store');
                $('#hero-img-link').text('Browse products here');
            }
        }
        setInterval(changeHero, 5000);
    }
});
