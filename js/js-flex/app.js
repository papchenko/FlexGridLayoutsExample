'use strict'

// animation on load page
window.addEventListener('load', () => {
    document.documentElement.classList.add('on-load');
});

// mobile menu
window.addEventListener('click', menuMobile);

function menuMobile(e) {
    const targetItem = e.target;

    if (targetItem.closest('.mobile-menu')) {
        document.documentElement.classList.toggle('open-menu');
    } else {
        document.documentElement.classList.remove('open-menu');
    }
};

// swiper slider
const swiperFooter = new Swiper('.swiper__footer', {
    direction: 'horizontal',
    speed: 300,
      autoplay: {
        delay: 500,
      },
      loop: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        767: {
            slidesPerView: 8,
            spaceBetween: 15
        }
    },
     effect: 'coverflow',
  coverflowEffect: {
    rotate: 70,
    slideShadows: false,
  },
})
const swiperHero = new Swiper('.swiper__hero', {
    direction: 'horizontal',
    speed: 1500,
      autoplay: {
        delay: 1500,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})