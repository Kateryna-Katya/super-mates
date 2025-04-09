import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        breakpoints: {
            375: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
        slidesPerView: 'auto',

        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',
    });
});