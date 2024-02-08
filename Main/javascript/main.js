// timeer down
var countDownDate = new Date("november 6, 2024 0:0:0").getTime();
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

// https://shots.so/

// tabs
let icoLink = document.getElementById("icoLink")
let profileLink = document.getElementById("profileLink")
let tokenLink = document.getElementById("tokenLink")
let bountyLink = document.getElementById("bountyLink")

let icoContent = document.getElementById("Ico")
let profileContent = document.getElementById("Profit")
let tokenContent = document.getElementById("Token")
let bountyContent = document.getElementById("bounty")

icoLink.onclick = function () {
    icoLink.style.color = "#02F197"
    profileLink.style.color = "white"
    tokenLink.style.color = "white"
    bountyLink.style.color = "white"

    icoContent.style.display = "block"
    profileContent.style.display = "none"
    tokenContent.style.display = "none"
    bountyContent.style.display = "none"
}
profileLink.onclick = function () {
    icoLink.style.color = "white"
    profileLink.style.color = "#02F197"
    tokenLink.style.color = "white"
    bountyLink.style.color = "white"

    icoContent.style.display = "none"
    profileContent.style.display = "block"
    tokenContent.style.display = "none"
    bountyContent.style.display = "none"
}
tokenLink.onclick = function () {
    icoLink.style.color = "white"
    profileLink.style.color = "white"
    tokenLink.style.color = "#02F197"
    bountyLink.style.color = "white"

    icoContent.style.display = "none"
    profileContent.style.display = "none"
    tokenContent.style.display = "block"
    bountyContent.style.display = "none"
}
bountyLink.onclick = function () {
    icoLink.style.color = "white"
    profileLink.style.color = "white"
    tokenLink.style.color = "white"
    bountyLink.style.color = "#02F197"

    icoContent.style.display = "none"
    profileContent.style.display = "none"
    tokenContent.style.display = "none"
    bountyContent.style.display = "block"
}

// slider navbar

window.onscroll = function () {
    if (window.scrollY >= 80) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
}
