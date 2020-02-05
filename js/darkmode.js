$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        dh = $(document).height();
        wh = $(window).height();
        var scrollpercent = (scroll / (dh - wh)) * 100;
        $("#progress-bar").css('height', scrollpercent + '%');
    });
    if (parseInt(localStorage.getItem('darkmode')) == 0) {
        $('body').removeClass('dark_mode');
        localStorage.setItem('darkmode', '0');
    } else {
        $('body').addClass('dark_mode');
    }

    $(".toggle_dark_mode").click(() => {
        if ($('body').hasClass('dark_mode')) {
            $('body').removeClass('dark_mode');
            localStorage.setItem('darkmode', '0');
        } else {
            $('body').addClass('dark_mode');
            localStorage.setItem('darkmode', '1')
        }
    });
});