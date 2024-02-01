const navColorControl = document.querySelector("sticky-header");
const logoColor = document.querySelector(".header__heading-logo-wrapper");
const backgroundColorControl = document.querySelector(".header-wrapper");

logoColor.style.filter = "brightness(1)";
backgroundColorControl.style.backgroundColor = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        navColorControl.classList.add("color-background-1");
        navColorControl.classList.remove("color-background-2");
        backgroundColorControl.style.backgroundColor = "white";
        logoColor.style.filter = "brightness(0)";
    } else {
        logoColor.style.filter = "brightness(1)";
        navColorControl.classList.remove("color-background-1");
        navColorControl.classList.add("color-background-2");
        backgroundColorControl.style.backgroundColor = "transparent";
    }
});
const currentUrl = window.location.pathname;
// if (currentUrl === velissi.com) {
//     navColorControl.classList.add("color-background-1");
//     navColorControl.classList.remove("color-background-2");
// }
console.log(currentUrl);
