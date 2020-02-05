$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.carousel').carousel({
        duration: 200,
        fullWidth: true,
        padding: 20,
        numVisible: 5,
        autoplay: true
    });
    setInterval(function() {
        $('.carousel').carousel('next');
    }, 2000);

    $('.collapsible').collapsible();
});


var countDownDate = new Date("Mar 23, 2020 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);

    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);



AOS.init();