// timeer down
var countDownDate = new Date("july 11, 2023 0:0:0").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demoOne").innerHTML = days + " : ";
    document.getElementById("demoTow").innerHTML = hours + " : ";
    document.getElementById("demoThree").innerHTML = minutes + " : ";
    document.getElementById("demoFour").innerHTML = seconds + " ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// slider navbar

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
}
