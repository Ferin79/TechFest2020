$(document).ready(function() {
    $('.sidenav').sidenav();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        dh = $(document).height();
        wh = $(window).height();
        var scrollpercent = (scroll / (dh - wh)) * 100;
        $("#progress-bar").css('height', scrollpercent + '%');
        $('.scroll_down').css('visibility', 'hidden');
    });
    let darkmode = parseInt(localStorage.getItem('darkmode'));
    console.log(darkmode);
    if (darkmode) {
        if (Boolean(darkmode)) {
            $('body').addClass('dark_mode');
        } else {
            $('body').removeClass('dark_mode');
        }
    } else {
        localStorage.setItem('darkmode', '0');
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