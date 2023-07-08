'use strict'

// on load page
window.addEventListener('load', onLoad);

function onLoad() {
    setTimeout(() => {
        document.documentElement.classList.add('on-load'); 
    }, 1800);
}


// mobile menu
document.addEventListener('click', mobileMenu);

function mobileMenu(e) {
    const mobileMenuTarget = e.target;

    if (mobileMenuTarget.closest('.mobile-menu')) {
        document.documentElement.classList.toggle('open-menu');
    } else {
        document.documentElement.classList.remove('open-menu');
    }
}

// swiper hero
const swiperHero = new Swiper('.swiper-hero', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        type: 'fraction'
    }

});
// swiper footer
const swiperFooter = new Swiper('.swiper-ads', {
    direction: 'horizontal',
    speed: 1500,
      autoplay: {
        delay: 1500,
      },
      loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});