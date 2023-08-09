document.addEventListener("DOMContentLoaded", function () {
    // Change header's bgColor
    const heroSection = document.querySelector(".hero");
    const heightHero = heroSection.clientHeight;

    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("load", checkScrollPosition);

    // Toggle menu
    const menuToggle = document.querySelector(".header__menu-toggle");
    const menu = document.querySelector(".header__menu");

    menuToggle.addEventListener("click", () => menu.classList.toggle("active"));

    const menuLinks = document.querySelectorAll(".header__menu a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
            }
        });
    });

    window.addEventListener("resize", () => {
        if (
            window.matchMedia("(max-width: 768px)").matches &&
            menu.classList.contains("active")
        ) {
            menu.classList.remove("active");
        }
    });

    // Check scroll position (header's bgColor)
    function checkScrollPosition() {
        const currentPosition = window.scrollY;
        const halfHeightHero = heightHero / 2;

        if (currentPosition < halfHeightHero) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    }
});

// Menu toggle function
function hideHeaderElements() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is-shown");
}

function showHeaderElements() {
    const header = document.querySelector(".header");
    header.classList.add("header--is-shown");
}
