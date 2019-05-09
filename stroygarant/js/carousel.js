$(document).ready(function() {
	$("#carousel_1, #carousel_3, #carousel_5, #carousel_6").owlCarousel({
		loop: true,
		margin: 5,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayTimeout: 10000,
		slideBy: 4,
		nav: true,
		navText: ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
		items: 1,
	});

	$("#carousel_2").owlCarousel({
		loop: true,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 10000,
		slideBy: 4,
		nav: true,
		navText: ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
		items: 3,

		responsive:{
			851:{
				margin: 30,
			},

			721: {
				margin: 15,
			},

			491: {
				items: 2,
				margin: 15,	
			},

			0:{
				items: 1,
				margin: 10
			}
		}
	});

	$("#carousel_4").owlCarousel({
		loop: true,
		margin: 5,
		autoplay: false,
		slideBy: 4,
		nav: true,
		navText: ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
		items: 1,
	});

	$("#carousel_7").owlCarousel({
		loop: true,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 10000,
		slideBy: 4,
		nav: true,
		navText: ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
		items: 4,

		responsive:{
			851:{
				margin: 30,
			},

			721: {
				items: 3,
				margin: 15,
			},

			577: {
				items: 3,
				margin: 15,	
			},

			450: {
				items: 2,
				margin: 10
			},

			0:{
				items: 1,
				margin: 10
			}
		}
	});
});