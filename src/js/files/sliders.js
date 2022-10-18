import Swiper, { Autoplay, Pagination } from "swiper";

import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".home__slider")) {
        new Swiper(".home__slider", {
            modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 6000,
                stopOnLastSlide: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".home__pagination",
                type: "bullets",
                clickable: true,
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
