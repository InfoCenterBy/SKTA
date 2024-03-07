const swiper = new Swiper('.main-slider .swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.main-slider .swiper-button-next',
		prevEl: '.main-slider .swiper-button-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 6,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 6,
		},

		960: {
			slidesPerView: 4,
			spaceBetween: 12,
		},

		1400: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
	},
});
