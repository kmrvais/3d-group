import Swiper from 'swiper';
import 'swiper/swiper.scss';

export default () => {

  const buttonNext = document.querySelector('.video-slider').querySelector('.video-slider__button-next');
  const buttonPrev = document.querySelector('.video-slider').querySelector('.video-slider__button-prev');

  let mySwiper = new Swiper('.video-slider__container', {
    slidesPerView: 2,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1300: {
        spaceBetween: 67,
      }
    }
  })
}