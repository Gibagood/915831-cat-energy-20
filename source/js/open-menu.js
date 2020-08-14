const menuBtn = document.querySelector('.page-header__button');
let openState = false;



menuBtn.addEventListener('click', event => {

    if (openState) {

        menuBtn.classList.remove('page-header__button--open');

        menuBtn.classList.add('page-header__button--close');

        menuBtn.setAttribute('aria-label', 'Закрыть меню');

    } else {

        menuBtn.classList.remove('page-header__button--close');

        menuBtn.classList.add('page-header__button--open');

        menuBtn.setAttribute('aria-label', 'Открыть меню');

    }



    openState = !openState;

});



menuBtn.classList.add('page-header__button--open');

menuBtn.setAttribute('aria-label', 'Открыть меню');
