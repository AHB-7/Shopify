const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");

logoColor.style.filter = "brightness(1)";
navColorControl.style.backgroundColor = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        navColorControl.classList.add("color-background-1");
        navColorControl.classList.remove("color-background-2");
        navColorControl.style.backgroundColor = "white";
        logoColor.style.filter = "brightness(0)";
    } else {
        logoColor.style.filter = "brightness(1)";
        navColorControl.classList.remove("color-background-1");
        navColorControl.classList.add("color-background-2");
        navColorControl.style.backgroundColor = "none";
    }
});
