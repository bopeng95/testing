$(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#arrow").fadeIn();
    } else {
        $("#arrow").fadeOut();
    }
    });

    $("#arrow").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    }); 
});