$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.carousel').carousel({
        duration: 200,
        fullWidth: true,
        padding: 20,
        indicators: true,
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
var options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();