window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

        var elements = document.getElementsByClassName("main-header");
        var siteLogoImage = document.getElementsByClassName("site-logo-image");
        elements[0].style.height = "50px";
        siteLogoImage[0].style.width = "70px";
        siteLogoImage[0].style.height = "auto";

    } else {

        var elements = document.getElementsByClassName("main-header");
        var siteLogoImage = document.getElementsByClassName("site-logo-image");
        elements[0].style.height = "80px";
        siteLogoImage[0].style.width = "175px";
        siteLogoImage[0].style.height = "auto";

    }
}