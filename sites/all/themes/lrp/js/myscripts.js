jQuery(document).ready(function($) {
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
});
