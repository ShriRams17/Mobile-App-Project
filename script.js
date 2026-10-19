// ===== Mobile menu (hamburger button) =====

// find the elements we need in the html
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");
const icon = menuButton.querySelector("i");

// open / close the menu when the hamburger button is clicked
menuButton.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("open");

    // change the icon between bars and X
    icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    menuButton.setAttribute("aria-expanded", isOpen);
});

// on phones, tapping "More Demos" opens and closes its list
dropdownLink.addEventListener("click", function (event) {
    if (window.innerWidth <= 1000) {
        event.preventDefault();
        dropdown.classList.toggle("open");
    }
});

// close the menu after choosing a normal link
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (link === dropdownLink) return;   // keep the menu open for More Demos

        menu.classList.remove("open");
        icon.className = "fa-solid fa-bars";
        menuButton.setAttribute("aria-expanded", false);
    });
});
