import Swiper from 'swiper';
import 'swiper/swiper.scss';

export default () => {
  new Swiper('.video-slider__container', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
      nextEl: '.video-slider__button-next',
      prevEl: '.video-slider__button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1300: {
        spaceBetween: 67,
        slidesPerView: 2,
      }
    }
  })
}