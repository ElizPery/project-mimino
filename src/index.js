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
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
