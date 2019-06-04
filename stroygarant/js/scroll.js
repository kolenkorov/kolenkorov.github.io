$('nav a').on('click', function(e){
	e.preventDefault();

	let selector = $(this).attr('href');
	let h = $(selector);

	$('html, body').animate({
		scrollTop: h.offset().top
	}, 800);
});
