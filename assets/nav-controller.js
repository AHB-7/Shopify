const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");
if (screen.height > 0) {
    navColorControl.classList.remove("color-background-1");
    navColorControl.classList.add("color-background-2");
    logoColor.style.filter = "brightness(1)";
} else {
}
