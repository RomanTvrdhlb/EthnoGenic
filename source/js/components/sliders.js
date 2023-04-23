import Swiper from '../vendor/swiper';

const mainSwiper = new Swiper('.main-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  freemode: true,
  spaceBetween: 50,
  direction: 'vertical',
  mousewheel: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});



