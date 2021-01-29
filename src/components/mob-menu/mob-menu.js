export default () => {

  let mobMenu = document.querySelector('.mob-menu');
  let mobMenuContainer = document.querySelector('.mob-menu__wrapper');
  let button = document.querySelector('.header__hamburger');
  let header = document.querySelector('.header');

  button.addEventListener('click', function (event) {
    event.preventDefault();
    if (mobMenu.classList.contains('mob-menu_open')) {
      menuClose();
    } else {
      menuOpen();
    }
  })

  function menuClose() {
    mobMenu.classList.remove('mob-menu_open')
    header.classList.remove('header_open-menu');
    mobMenu.closest('.page').classList.remove('page_no-scroll');
  }

  function menuOpen() {
    mobMenu.classList.add('mob-menu_open');
    header.classList.add('header_open-menu');
    mobMenu.closest('.page').classList.add('page_no-scroll');
    $(mobMenuContainer).nanoScroller()
  }

}