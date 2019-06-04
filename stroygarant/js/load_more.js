$(function() {
	$('.none').slice(0, 6).show();
	$('#loadMore').on('click', function(e){
		e.preventDefault();
		$('.none:hidden').slideDown(400);
		$(this).css('display', 'none');
	});
});