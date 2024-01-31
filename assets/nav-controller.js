const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        navColorControl.classList.add("color-background-1");
        navColorControl.classList.remove("color-background-2");
        logoColor.style.filter = "brightness(0)";
    } else {
        logoColor.style.filter = "brightness(1)";
    }
});
