const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");
const backgroundColorControl = document.querySelector(".header-wrapper");

logoColor.style.filter = "brightness(1)";

window.addEventListener("scroll", function () {
    if (window.scrollY <= 100) {
    } else (window.scrollY >= 100){
        navColorControl.classList.add("color-background-1");
        navColorControl.classList.remove("color-background-2");
        backgroundColorControl.style.backgroundColor = "white";
        logoColor.style.filter = "brightness(0)";
    }
});
