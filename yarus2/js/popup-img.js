$(document).ready(function(){
	let gallery = $('.gallery .gallery__photos a');

	gallery.magnificPopup({
		type : 'image',

		 gallery: {
			enabled: true
		},
	});
});