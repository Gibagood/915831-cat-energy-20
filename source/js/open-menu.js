const menuBtn = document.querySelector('.page-header__button');
const nav = document.querySelector('.main-nav');

let openState = false;

menuBtn.addEventListener('click', event => {
    if (openState) {
        menuBtn.classList.remove('page-header__button--open');
        menuBtn.classList.add('page-header__button--close');
        menuBtn.setAttribute('aria-label', 'Закрыть меню');

        nav.classList.remove('main-nav--open');
        nav.classList.add('main-nav--close');
    } else {
        menuBtn.classList.remove('page-header__button--close');
        menuBtn.classList.add('page-header__button--open');
        menuBtn.setAttribute('aria-label', 'Открыть меню');

        nav.classList.add('main-nav--open');
        nav.classList.remove('main-nav--close');
    }

    openState = !openState;

});

menuBtn.classList.add('page-header__button--close');

menuBtn.setAttribute('aria-label', 'Открыть меню');
