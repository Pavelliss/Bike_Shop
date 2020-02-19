'use strict';
// main script
(function () {
  var headerContainer = document.querySelector('.header__container-nav');
  var headerButton = headerContainer.querySelector('.header__button');
  var filter = document.querySelector('.filter');
  var promoItems = document.querySelectorAll('.prod-info__item');
  var nojsHeader = document.querySelector('.nojs-header');

  nojsHeader.classList.remove('nojs-header');

  var removeClass = function (element) {
    if (element.classList.contains('prod-info__item--active')) {
      element.classList.remove('prod-info__item--active');
    }
  };

  if (headerButton) {
    headerButton.addEventListener('click', function () {
      headerContainer.classList.toggle('header__container-nav--active');
      if (filter.classList.contains('filter--active')) {
        filter.classList.remove('filter--active');
      }
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (headerContainer.classList.contains('header__container-nav--active')) {
        evt.preventDefault();
        headerContainer.classList.remove('header__container-nav--active');
      }
    }
  });

  if (filter) {
    var nojsFilter = document.querySelector('.nojs-filter');
    var filterContainers = filter.querySelectorAll('.filter__container-form');

    nojsFilter.classList.remove('nojs-filter');

    filterContainers.forEach(function (container) {
      var button = container.querySelector('.filter__button');
      button.addEventListener('click', function () {
        container.classList.toggle('filter__container-form--active');
      });
    });
  }

  if (promoItems) {
    promoItems.forEach(function (element) {
      var buttonTab = element.querySelector('.prod-info__tab');
      buttonTab.addEventListener('click', function () {
        promoItems.forEach(removeClass);
        element.classList.add('prod-info__item--active');
      });
    });
  }

  if (filter) {
    var buttonFilterShow = filter.querySelector('.filter__button-show');
    buttonFilterShow.addEventListener('click', function () {
      filter.classList.add('filter--active');
    });
  }

  if (filter) {
    var buttonFilterClose = filter.querySelector('.filter__button-close');
    buttonFilterClose.addEventListener('click', function () {
      filter.classList.remove('filter--active');
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (filter.classList.contains('filter--active')) {
        evt.preventDefault();
        filter.classList.remove('filter--active');
      }
    }
  });
}());

// sweper.js
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  var swiperBikes = new Swiper('#slider-bikes', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 3,
        initialSlide: 1,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
    }
  });

  var offset = -0.101; // %10
  var swiperAccessories = new Swiper('#slider-accessories', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 4,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        initialSlide: 0,
        slidesPerView: 5,
        slidesPerGroup: 4,
        slidesOffsetBefore: window.innerWidth * offset,
      },
      900: {
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        initialSlide: 1,
      },
    }
  });
}());
