const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperHero = new Swiper('.swiper-hero', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const detailsSwiper = new Swiper('.details-swiper', {
  loop: true,
  slidesPerView: 'auto',
  loopedSlidesLimit: false,
  loopedSlides: 6,
  loopPreventsSlide: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 34,
    },
    1280: {
      spaceBetween: 87,
    },
  },
});
