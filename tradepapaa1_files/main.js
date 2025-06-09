$(function(){
	bannerUl();
	mainBSlider();
	//featureSlider();
	newbuyingSlider();
	productsSlider();
})

function bannerUl() {
	const visualSlider = new Swiper('.visualSlider', {
			loop: true,
			autoplay: {
					delay: 3000
			},
			pagination: {
					el: '.mainBx_btn_dot',
					clickable: true,
					renderBullet: function (index, className) {
							return '<span class="' + className + '"></span>';
					},
			},
			navigation: {
					nextEl: '.mainBx_btn02 .mainBx_next_btn',
					prevEl: '.mainBx_btn02 .mainBx_prev_btn',
			},
	});
	
	// Play/Pause functionality
	const playButton = document.querySelector('.mainBx_play');
	let isPlaying = true;
	
	// Add initial play state class
	playButton.classList.add('playing');
	
	// Toggle play/pause on click
	playButton.addEventListener('click', function() {
			if (isPlaying) {
					visualSlider.autoplay.stop();
					playButton.classList.remove('playing');
					playButton.classList.add('paused');
			} else {
					visualSlider.autoplay.start();
					playButton.classList.remove('paused');
					playButton.classList.add('playing');
			}
			isPlaying = !isPlaying;
	});
}

function mainBSlider(){
	const mainB__slider = new Swiper('.mainB__slider', {
		loop: true,
		autoplay:{
			delay:3000
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>';
			},
		},
	});
}

function featureSlider(){
	const featureSlider = new Swiper('.featureSlider', {
		slidesPerView: 1,
		loop:true,

		spaceBetween: 21,
		navigation: {
			prevEl: '.featureSlider .swiper-button-prev',
			nextEl: '.featureSlider .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			}
		}
	});

	const featureSlider2 = new Swiper('.featureSlider2', {
		slidesPerView: 1,
		loop:true,

		spaceBetween: 21,
		navigation: {
			prevEl: '.featureSlider2 .swiper-button-prev',
			nextEl: '.featureSlider2 .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			}
		}
	});

	const featureSlider3 = new Swiper('.featureSlider3', {
		slidesPerView: 1,
		loop:true,

		spaceBetween: 21,
		navigation: {
			prevEl: '.featureSlider3 .swiper-button-prev',
			nextEl: '.featureSlider3 .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			}
		}
	});

	const featureSlider4 = new Swiper('.featureSlider4', {
		slidesPerView: 1,
		loop:true,

		spaceBetween: 21,
		navigation: {
			prevEl: '.featureSlider4 .swiper-button-prev',
			nextEl: '.featureSlider4 .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			}
		}
	});

}


function newbuyingSlider(){

	const newbuyingSlider = new Swiper('.newbuyingSlider', {
		slidesPerView: 2,
		loop:true,
		autoplay:{
			delay:3000
		},
		navigation: {
			prevEl: '.section__newbuying .swiper-button-prev',
			nextEl: '.section__newbuying .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			767: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 2,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			}
		}
	});

}


function productsSlider(){

	const productsSlider = new Swiper('.productsSlider', {
		slidesPerView: 1,
		loop:true,
		autoplay:{
			delay:3000
		},
		navigation: {
			prevEl: '.section__products .swiper-button-prev',
			nextEl: '.section__products .swiper-button-next'
		},
		breakpoints: {
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 1,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 2,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
			}
		}
	});

}