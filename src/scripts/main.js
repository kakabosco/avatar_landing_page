document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    const heightHero = heroSection.clientHeight;

    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("load", checkScrollPosition);

    const menuToggle = document.querySelector(".header__menu-toggle");
    const menu = document.querySelector(".header__menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    })

    function checkScrollPosition() {
        const currentPosition = window.scrollY;

        if (currentPosition < heightHero) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    }
});

function hideHeaderElements() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is-shown");
}

function showHeaderElements() {
    const header = document.querySelector(".header");
    header.classList.add("header--is-shown");
}
