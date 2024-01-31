const navColorControl = document.querySelector(".header--middle-left");
const logoColor = document.querySelector(".header__heading-logo-wrapper");
if (screen.height > 0) {
    navColorControl.style.filter = "brightness(1)";
    logoColor.style.filter = "brightness(1)";
} else {
}
