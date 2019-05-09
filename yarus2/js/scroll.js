let up = $('.up');
$(document).on('scroll', scrollTop);

up.on('click', function(){
	$('html, body').animate({
		scrollTop: 0
	}, 900);
});

$('nav a').on('click', function(e){
	e.preventDefault();

	let selector = $(this).attr('href');
	let h = $(selector);

	$('html, body').animate({
		scrollTop: h.offset().top - 40
	}, 800);
});

function scrollTop(){
	let top = $(this).scrollTop();

	if(top > 500){
		up.fadeIn(400);
	}
	else{
		up.fadeOut(400);
	}
}
