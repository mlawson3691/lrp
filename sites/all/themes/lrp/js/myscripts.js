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
});
