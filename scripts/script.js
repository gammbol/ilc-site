const burger = document.querySelector('.burger__wrapper');
const menu_list = document.querySelector('.header__nav');
const burger_bg = document.querySelector('.header__nav__wrapper');

const signin_buttons = document.querySelectorAll('.signin__wrapper, .comp__signIn, .close_button');
const signin = document.querySelector('.header__signin__wrapper');
let stateMenu = 'closed';
let stateSignIn = 'closed';

burger.addEventListener('click', (e) => {
    e.preventDefault();
    if (stateMenu == 'closed') {
        menu_list.style.opacity = '1';
        menu_list.style.visibility = 'visible';
        burger_bg.style.opacity = '1';
        stateMenu = 'opened'
    } else if (stateMenu == 'opened') {
        menu_list.style.opacity = '0';
        menu_list.style.visibility = 'hidden';
        burger_bg.style.opacity = '0';
        stateMenu = 'closed';
    }
});

signin_buttons.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        if (stateSignIn == 'closed') {
            signin.style.opacity = '1';
            signin.style.visibility = 'visible';
        } else {
            signin.style.opacity = '0';
            signin.style.visibility = 'hidden';
        }
        stateSignIn = stateSignIn == 'closed' ? 'opened' : 'closed';
    });
});