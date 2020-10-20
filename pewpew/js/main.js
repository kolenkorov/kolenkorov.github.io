//Reg

$('.form__item input').on('keypress', function(){
	$(this).parent().parent().removeClass('invalid');
	$(this).parent().parent().addClass('valid');

	$('.form__submit-button').removeClass('disable');
});

$('.step_1 .next a').on('click', function(e){
	e.preventDefault();

	$('.step_1').hide();
	$('.step_2').show();
});

// Profile 

$('.profile__button .share, .main__top-share a').on('click', function() {
	$(this).next('.tooltip').addClass('active');

	setTimeout(function(){
		$('.tooltip.active').removeClass('active');
	}, 2000);
});



// Friends

$('.friends .block-item__button a').on('click', function(e){
	e.preventDefault();
	$(this).addClass('gray_btn');
	$(this).find('.status').removeClass('active');
	$(this).find('.copied').addClass('active');
});

$('.profile__button .add').on('click', function(e){
	e.preventDefault();
	$(this).addClass('gray_btn');
	$(this).find('.status').removeClass('active');
	$(this).find('.sent').addClass('active');
});

$('.search input').on('keypress', function(e){
	$(this).parent().parent().parent().hide().next().show();
});

$('.main__block-search input').on('keypress', function(e){
	$('.block__list-container').hide();
	$('.found').show();
});

$('.main__block-search input').on('focus', function(e){
	$('.block__list-container').hide();
	$('.notfound').show();
});

$('.main__block-search .filter').on('click', function(e){
	$('.popup__filter').show();
	$('.bg_popup').show();
});


// Commands
$('.first .block-item__button.create a').on('click', function(e){
	e.preventDefault();
	$('.first').hide();
	$('.create-command').show();
});



// Popup

$('.choose-games').on('click', function(){

	$('html').addClass('hidden');
	$('.bg_popup').show();
	$('.popup__games').show();
});

$('.open-friends').on('click', function(){

	$('html').addClass('hidden');
	$('.bg_popup').show();
	$('.popup__friends').show();
});

$('.open-edit').on('click', function(){

	$('html').addClass('hidden');
	$('.bg_popup').show();
	$('.popup__edit').show();
});

$('.header__connect a').on('click', function(e){
	e.preventDefault();

	$('html').addClass('hidden');
	$('.bg_popup').show();
	$('.popup__account').show();
});



// edit

$('.popup__edit-item label').on('click', function(){
	//$('.edit-item__block').removeClass(active);
	let id = $(this).parent().parent().attr('data-popup');
	$('#'+id).addClass('active');
});

$('.edit-item__block .popup__back, .edit-item__block .popup__done, .edit-item__button').on('click', function(){
	$('.edit-item__block').removeClass('active');
});

$('.popup__content>.popup__top>.popup__back').on('click', function(){
	$(this).parent().parent().parent().parent().hide();
	$('.bg_popup').hide();
	$('html').removeClass('hidden');
});

$('.popup__games .popup__back').on('click', function(){
	$('.popup__games').hide();
	$('.bg_popup').hide();
	$('html').removeClass('hidden');
});


$('.popup__close button').on('click', function() {
	$(this).parent().parent().parent().parent().hide();
	$('.bg_popup').hide();
	$('html').removeClass('hidden');
});

$(document).mouseup(function (e){
    let dropdown = $('.popup__content');
    if (!dropdown.is(e.target)
        && dropdown.has(e.target).length === 0) {
        if (!$(e.target).hasClass('popup__content')) {
            $('.popup').hide();
         	$('.bg_popup').hide();
         	$('html').removeClass('hidden');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUmVnXHJcblxyXG4kKCcuZm9ybV9faXRlbSBpbnB1dCcpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xyXG5cdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3ZhbGlkJyk7XHJcblxyXG5cdCQoJy5mb3JtX19zdWJtaXQtYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxufSk7XHJcblxyXG4kKCcuc3RlcF8xIC5uZXh0IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdCQoJy5zdGVwXzEnKS5oaWRlKCk7XHJcblx0JCgnLnN0ZXBfMicpLnNob3coKTtcclxufSk7XHJcblxyXG4vLyBQcm9maWxlIFxyXG5cclxuJCgnLnByb2ZpbGVfX2J1dHRvbiAuc2hhcmUsIC5tYWluX190b3Atc2hhcmUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykubmV4dCgnLnRvb2x0aXAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy50b29sdGlwLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCAyMDAwKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIEZyaWVuZHNcclxuXHJcbiQoJy5mcmllbmRzIC5ibG9jay1pdGVtX19idXR0b24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdncmF5X2J0bicpO1xyXG5cdCQodGhpcykuZmluZCgnLnN0YXR1cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLmZpbmQoJy5jb3BpZWQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnByb2ZpbGVfX2J1dHRvbiAuYWRkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2dyYXlfYnRuJyk7XHJcblx0JCh0aGlzKS5maW5kKCcuc3RhdHVzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykuZmluZCgnLnNlbnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnNlYXJjaCBpbnB1dCcpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xyXG5cdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGlkZSgpLm5leHQoKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuJCgnLm1haW5fX2Jsb2NrLXNlYXJjaCBpbnB1dCcpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xyXG5cdCQoJy5ibG9ja19fbGlzdC1jb250YWluZXInKS5oaWRlKCk7XHJcblx0JCgnLmZvdW5kJykuc2hvdygpO1xyXG59KTtcclxuXHJcbiQoJy5tYWluX19ibG9jay1zZWFyY2ggaW5wdXQnKS5vbignZm9jdXMnLCBmdW5jdGlvbihlKXtcclxuXHQkKCcuYmxvY2tfX2xpc3QtY29udGFpbmVyJykuaGlkZSgpO1xyXG5cdCQoJy5ub3Rmb3VuZCcpLnNob3coKTtcclxufSk7XHJcblxyXG4kKCcubWFpbl9fYmxvY2stc2VhcmNoIC5maWx0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHQkKCcucG9wdXBfX2ZpbHRlcicpLnNob3coKTtcclxuXHQkKCcuYmdfcG9wdXAnKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIENvbW1hbmRzXHJcbiQoJy5maXJzdCAuYmxvY2staXRlbV9fYnV0dG9uLmNyZWF0ZSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCQoJy5maXJzdCcpLmhpZGUoKTtcclxuXHQkKCcuY3JlYXRlLWNvbW1hbmQnKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyBQb3B1cFxyXG5cclxuJCgnLmNob29zZS1nYW1lcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdCQoJ2h0bWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcblx0JCgnLmJnX3BvcHVwJykuc2hvdygpO1xyXG5cdCQoJy5wb3B1cF9fZ2FtZXMnKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuJCgnLm9wZW4tZnJpZW5kcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdCQoJ2h0bWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcblx0JCgnLmJnX3BvcHVwJykuc2hvdygpO1xyXG5cdCQoJy5wb3B1cF9fZnJpZW5kcycpLnNob3coKTtcclxufSk7XHJcblxyXG4kKCcub3Blbi1lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcblx0JCgnaHRtbCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuXHQkKCcuYmdfcG9wdXAnKS5zaG93KCk7XHJcblx0JCgnLnBvcHVwX19lZGl0Jykuc2hvdygpO1xyXG59KTtcclxuXHJcbiQoJy5oZWFkZXJfX2Nvbm5lY3QgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0JCgnaHRtbCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuXHQkKCcuYmdfcG9wdXAnKS5zaG93KCk7XHJcblx0JCgnLnBvcHVwX19hY2NvdW50Jykuc2hvdygpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy8gZWRpdFxyXG5cclxuJCgnLnBvcHVwX19lZGl0LWl0ZW0gbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdC8vJCgnLmVkaXQtaXRlbV9fYmxvY2snKS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xyXG5cdGxldCBpZCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cignZGF0YS1wb3B1cCcpO1xyXG5cdCQoJyMnK2lkKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmVkaXQtaXRlbV9fYmxvY2sgLnBvcHVwX19iYWNrLCAuZWRpdC1pdGVtX19ibG9jayAucG9wdXBfX2RvbmUsIC5lZGl0LWl0ZW1fX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLmVkaXQtaXRlbV9fYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnBvcHVwX19jb250ZW50Pi5wb3B1cF9fdG9wPi5wb3B1cF9fYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcblx0JCgnLmJnX3BvcHVwJykuaGlkZSgpO1xyXG5cdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuJCgnLnBvcHVwX19nYW1lcyAucG9wdXBfX2JhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQoJy5wb3B1cF9fZ2FtZXMnKS5oaWRlKCk7XHJcblx0JCgnLmJnX3BvcHVwJykuaGlkZSgpO1xyXG5cdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5wb3B1cF9fY2xvc2UgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcblx0JCgnLmJnX3BvcHVwJykuaGlkZSgpO1xyXG5cdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcbiAgICBsZXQgZHJvcGRvd24gPSAkKCcucG9wdXBfX2NvbnRlbnQnKTtcclxuICAgIGlmICghZHJvcGRvd24uaXMoZS50YXJnZXQpXHJcbiAgICAgICAgJiYgZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdwb3B1cF9fY29udGVudCcpKSB7XHJcbiAgICAgICAgICAgICQoJy5wb3B1cCcpLmhpZGUoKTtcclxuICAgICAgICAgXHQkKCcuYmdfcG9wdXAnKS5oaWRlKCk7XHJcbiAgICAgICAgIFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
