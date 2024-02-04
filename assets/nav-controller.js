const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");
const backgroundColorControl = document.querySelector(".header-wrapper");
const paddingForTheMainPage = document.querySelector(
    "#Slider-template--16859575419011__slideshow_E3PJYq"
);
const currentUrl = window.location.pathname;

// Size first section
//Nav color control

backgroundColorControl.style.backgroundColor = "none";
if (currentUrl !== "/") {
    logoColor.style.filter = "brightness(0)";
    navColorControl.classList.add("color-background-1");
    navColorControl.classList.remove("color-background-4");
} else {
    logoColor.style.filter = "brightness(1)";
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        navColorControl.classList.add("color-background-1");
        navColorControl.classList.remove("color-background-2");
        backgroundColorControl.style.backgroundColor = "white";
        logoColor.style.filter = "brightness(0)";
    } else {
        if (currentUrl !== "/") {
            logoColor.style.filter = "brightness(0)";
            navColorControl.classList.add("color-background-1");
            navColorControl.classList.remove("color-background-2");
        } else {
            logoColor.style.filter = "brightness(1)";
            navColorControl.classList.remove("color-background-1");
            navColorControl.classList.add("color-background-2");
            backgroundColorControl.style.backgroundColor = "transparent";
        }
    }
});
