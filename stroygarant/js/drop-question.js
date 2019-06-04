$(document).ready(function() {
	$('.ask-cover').on('click', function(){
		$(this).next('.answers__answer').slideToggle(400);
		$('i', this).toggleClass('fa--active');
		$(this).toggleClass('ask-cover--active');
	});

	/*$('.ask .cover a').on('click', function(){
		$(this).parent().next('.answer').slideToggle(400);
	});

	$('.show_more').on('click', function(){
		$(this).parent().children('.more').slideToggle(400);
	});*/
});