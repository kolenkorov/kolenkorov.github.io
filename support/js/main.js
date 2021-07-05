$('.support__button').on('click', function() {
	$('.support__cover').show();
});

$('.support__cover a').on('click', function(){
	let attr = $(this).attr('href');

	$('.support__block').removeClass('active');
	$(attr).addClass('active');
});

$('.support__bottom a').on('click', function(){
	$('.support__bottom-item.active').removeClass('active');
	$(this).addClass('active');
});

$('.question__item').on('click', function() {
	$('.question__chat').addClass('active');
});

$('.chat-head__back a').on('click', function(e) {
	e.preventDefault();
	$(this).parent().parent().parent().removeClass('active');
});

$('.support__ask-item').on('click', function(){
	$(this).toggleClass('active');
	$(this).find('.support__ask-text').slideToggle(250);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5zdXBwb3J0X19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuc3VwcG9ydF9fY292ZXInKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuJCgnLnN1cHBvcnRfX2NvdmVyIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdGxldCBhdHRyID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG5cdCQoJy5zdXBwb3J0X19ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKGF0dHIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuc3VwcG9ydF9fYm90dG9tIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQoJy5zdXBwb3J0X19ib3R0b20taXRlbS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnF1ZXN0aW9uX19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCgnLnF1ZXN0aW9uX19jaGF0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJy5jaGF0LWhlYWRfX2JhY2sgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnN1cHBvcnRfX2Fzay1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLmZpbmQoJy5zdXBwb3J0X19hc2stdGV4dCcpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
