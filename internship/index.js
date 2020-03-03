const burgerMenu = document.querySelector('.menu__burger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
const burgerMenuSpan = document.querySelectorAll('.menu__title');
const burgerMenuContent = document.querySelectorAll('.menu>ul>li>ul');


const createBurgerMenu = function () {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('lock');

};

const createSpoiler =  () =>{
    burgerMenuContent.forEach( ul => ul.classList.toggle('active'))
};

burgerMenu.addEventListener('click', createBurgerMenu);

burgerMenuSpan.forEach(title => title.addEventListener('click',  createSpoiler));



