'use strict';
// SWEPER
(function () {
  var swiperBikes = new Swiper('#slider-bikes', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 47,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 47,
        slidesPerGroup: 2,
      }
    }
  });

  var swiperAccessories = new Swiper('#slider-accessories', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 104,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 39,
        slidesPerGroup: 1,
      }
    }
  });
}());
