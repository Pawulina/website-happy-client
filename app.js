AOS.init();

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiperOne = new Swiper(".swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 59.5,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 1000,
});

const swiperTwo = new Swiper(".swiper-two", {
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 100,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	speed: 4000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
