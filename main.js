document.addEventListener('DOMContentLoaded', function () {
    const menuMb = document.querySelector('.menu-mb');
    const navLinks = document.querySelector('header nav ul');
    const menuIcon = document.querySelector('.menu-mb .bx-menu');
    const closeIcon = document.querySelector('.menu-mb .bx-x');
    const menuLinks = document.querySelectorAll('header nav ul li a');

    // Toggle menu function
    function toggleMenu() {
        navLinks.classList.toggle('open');
        menuIcon.classList.toggle('hide');
        closeIcon.classList.toggle('show');
    }

    // Add event listener to menu button
    menuMb.addEventListener('click', function () {
        toggleMenu();
    });

    // Add event listener to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});

// FOR SCROLL BUTTON

const showOnPx = 400;
const backToTopButton = document.querySelector(".scroll-btn")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.add("show")
    } else {

        backToTopButton.classList.remove("show")
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

backToTopButton.addEventListener("click", () => {
    return goToTop();
})