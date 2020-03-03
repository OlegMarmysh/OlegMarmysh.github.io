const burgerMenu = document.querySelector('.menu__burger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuFirst = document.querySelector('.menu__first>div');
const menuSecond = document.querySelector('.menu__second>div');
const menuThird = document.querySelector('.menu__third>div');
const menuForth = document.querySelector('.menu__forth>div');
const menuFirstSpoiler = document.querySelector('.menu__first>ul');
const menuSecondSpoiler = document.querySelector('.menu__second>ul');
const menuThirdSpoiler = document.querySelector('.menu__third>ul');
const menuForthSpoiler = document.querySelector('.menu__forth>ul');


const createBurgerMenu = function () {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('lock');
};

const createFirstSpoilerMenu =  () => {
    menuFirstSpoiler.classList.toggle('active')
    menuFirst.classList.toggle('flipped')
};
const createSecondSpoilerMenu =  () => {
    menuSecondSpoiler.classList.toggle('active')
    menuSecond.classList.toggle('flipped')
};
const createThirdSpoilerMenu =  () => {
    menuThirdSpoiler.classList.toggle('active')
    menuThird.classList.toggle('flipped')
};
const createForthSpoilerMenu =  () => {
    menuForthSpoiler.classList.toggle('active')
    menuForth.classList.toggle('flipped')
};


burgerMenu.addEventListener('click', createBurgerMenu);
menuFirst.addEventListener('click', createFirstSpoilerMenu);
menuSecond.addEventListener('click', createSecondSpoilerMenu);
menuThird.addEventListener('click', createThirdSpoilerMenu);
menuForth.addEventListener('click', createForthSpoilerMenu);




