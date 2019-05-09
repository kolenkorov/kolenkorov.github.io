$(document).ready(function() {
	$("#carousel_1").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayTimeout: 10000,
		slideBy: 4,
		items: 1,
	});

	$("#carousel_2").owlCarousel({
		loop: true,
		nav: true,
		navText : ["",""],
		margin: 10,
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		slideBy: 1,
		dots: false,

		responsive: {
			800: {
				stagePadding: 120,
			},

			450: {
				stagePadding: 70,
			},

			400: {
				stagePadding: 40,
			},

			350: {
				stagePadding: 0,
			},

		}

	});
	
	$("#carousel_3").owlCarousel({
		loop: true,
		autoplay: true,
		slideBy: 4,
		items: 1,
	});

});

$(window).on('load resize', carousel);
	
var slider = $('.supermix .items');

function carousel(){

	if($(window).width() <= 450){
		slider.addClass('owl-carousel').attr('id', 'carousel_4');
		
		$("#carousel_4").owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			slideBy: 4,
			items: 1,
		});
			
	}
	else{
		$("#carousel_4").trigger('destroy.owl.carousel');
		slider.removeClass('owl-carousel').removeAttr('id', 'carousel_4');
	}
}