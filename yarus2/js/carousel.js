$(document).ready(function() {
	$("#carousel_1").owlCarousel({
		loop: true,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 10000,
		slideBy: 4,
		dots: true,
		nav: true,
		navText: ["",""],
		items: 1,

		/*responsive:{
			851:{
				margin: 15,
			},

			721:{
				items: 2,
				margin: 10
			},

			0:{
				items: 1,
				nav: false,
				dots: false,
				margin: 8,
			}
		}*/
	});

	$("#carousel_2").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		nav: true,
		navText: ["",""],
		slideBy: 4,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			450: {
				items: 2,
				nav: false
			},
			576: {
				items: 3

			},
			800: {
				items: 4
			},
			1000: {
				items: 4
			}
		}
	});
});