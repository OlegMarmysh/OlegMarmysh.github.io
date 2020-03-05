const burgerMenu = document.querySelector(".menu__burger");
const navMenu = document.querySelector(".menu");
const navMenuItems = navMenu.querySelectorAll(".menu__container > .menu__item");


const createBurgerMenu = function () {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
};

handleToggleSubmenu = item => {
    item.querySelector(".submenu-item").classList.toggle("active");
    navMenuItems.forEach(menuItem => {
        if (menuItem !== item) {
            menuItem.querySelector(".submenu-item").classList.remove("active")
        }
    })
};


burgerMenu.addEventListener("click", createBurgerMenu);

navMenuItems.forEach(li => {
    const toggleSubmenu = () => handleToggleSubmenu(li);
    li.addEventListener("click", toggleSubmenu)
});





