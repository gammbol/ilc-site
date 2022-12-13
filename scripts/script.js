const burger = document.querySelector('.burger__wrapper');
const menu_list = document.querySelector('.header__nav');
const burger_bg = document.querySelector('.header__nav__wrapper');
let state = 'closed';

burger.addEventListener('click', (e) => {
    e.preventDefault();
    if (state == 'closed') {
        menu_list.style.opacity = '1';
        menu_list.style.visibility = 'visible';
        burger_bg.style.opacity = '1';
        state = 'opened'
    } else if (state == 'opened') {
        menu_list.style.opacity = '0';
        menu_list.style.visibility = 'hidden';
        burger_bg.style.opacity = '0';
        state = 'closed';
    }
});