const swiperHero = new Swiper('.swiper-hero', {
  navigation: {
    nextEl: '.swiper-hero-button-next',
    prevEl: '.swiper-hero-button-prev',
  },
});

const swiperLux = new Swiper('.swiper-hotel-lux', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-hotel-lux-button-next',
    prevEl: '.swiper-hotel-lux-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperTriple = new Swiper('.swiper-hotel-triple', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-hotel-triple-button-next',
    prevEl: '.swiper-hotel-triple-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperDouble = new Swiper('.swiper-hotel-double', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-hotel-double-button-next',
    prevEl: '.swiper-hotel-double-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperKitchen = new Swiper('.swiper-kitchen', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-kitchen-button-next',
    prevEl: '.swiper-kitchen-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperRestAbout = new Swiper('.swiper-rest-about', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-rest-about-button-next',
    prevEl: '.swiper-rest-about-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperHotelAbout = new Swiper('.swiper-hotel-about', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-hotel-about-button-next',
    prevEl: '.swiper-hotel-about-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperRestDetails = new Swiper('.swiper-rest-details', {
  loop: true,
  slidesPerView: 'auto',
  loopedSlidesLimit: false,
  loopedSlides: 6,
  loopPreventsSlide: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-rest-details-button-next',
    prevEl: '.swiper-rest-details-button-prev',
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

const swiperHotelDetails = new Swiper('.swiper-hotel-details', {
  loop: true,
  slidesPerView: 'auto',
  loopedSlidesLimit: false,
  loopedSlides: 6,
  loopPreventsSlide: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-hotel-details-button-next',
    prevEl: '.swiper-hotel-details-button-prev',
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
