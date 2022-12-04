const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: '1.3',
    spaceBetween: 20,
    autoHeight: true,
    watchowerflow: true,
    centeredSlider: true,
    initialSlider: 0,

    //   autoplay: {
    //     delay: 1000,
    //     stopOnlastSlide: true,
    //     disableOnInteraction: false
    //   },
      speed: 2400,  

      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // effect:"flip",
    // flipEffect:{
    //     slideShadows: true,
    //     limitRotation: true
    // },


    breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 34,
        },
      },
    });