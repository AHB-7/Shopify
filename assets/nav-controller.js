const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");

if ((window.scrollY = 0)) {
    logoColor.style.filter = "brightness(1)";
    if (navColorControl.contains("color-background-1")) {
        navColorControl.classList.remove("color-background-1");
        navColorControl.classList.add("color-background-2");
    }
} else if (window.scrollY <= 0) {
    // navColorControl.classList.add("color-background-1");
    // navColorControl.classList.remove("color-background-2");
    logoColor.style.filter = "brightness(0)";
}
