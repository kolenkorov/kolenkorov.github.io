$(document).ready(function() {
	$('.container').on('click', function(){
		$(this).next('.drop').slideToggle(400);
		$('i', this).toggleClass('active');
	});

	$('.ask .cover a').on('click', function(){
		$(this).parent().next('.answer').slideToggle(400);
	});

	$('.show_more').on('click', function(){
		$(this).parent().children('.more').slideToggle(400);
	});
});