$('select').styler();
$('.jq-selectbox__trigger').addClass('btn blue_btn');

$('.cases__item-fav').on('click', function(){
	$(this).toggleClass('active')
});

/* Menu */
	$('.header__burger').on('click', function(){
		$(this).toggleClass('active')
		$('.aside').toggleClass('active')
	});
/* Menu end*/

/* Cards */
	$('.card .cards__item').on('click', function(){
		$(this).toggleClass('rotate active');
	});
/* Cards end */

/* Info */
	$('.bonus__info-button').on('click', function() {
		$(this).toggleClass('active').next().toggleClass('active').find('.hidden').slideToggle(300);
	});

	$('.bonus__cards-title').on('click', function() {
		$(this).addClass('active').next().slideToggle(300);
	});
/* Info */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG4kKCcuanEtc2VsZWN0Ym94X190cmlnZ2VyJykuYWRkQ2xhc3MoJ2J0biBibHVlX2J0bicpO1xyXG5cclxuJCgnLmNhc2VzX19pdGVtLWZhdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxufSk7XHJcblxyXG4vKiBNZW51ICovXHJcblx0JCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHQkKCcuYXNpZGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHR9KTtcclxuLyogTWVudSBlbmQqL1xyXG5cclxuLyogQ2FyZHMgKi9cclxuXHQkKCcuY2FyZCAuY2FyZHNfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlIGFjdGl2ZScpO1xyXG5cdH0pO1xyXG4vKiBDYXJkcyBlbmQgKi9cclxuXHJcbi8qIEluZm8gKi9cclxuXHQkKCcuYm9udXNfX2luZm8tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5oaWRkZW4nKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuYm9udXNfX2NhcmRzLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5uZXh0KCkuc2xpZGVUb2dnbGUoMzAwKTtcclxuXHR9KTtcclxuLyogSW5mbyAqLyJdLCJmaWxlIjoibWFpbi5qcyJ9
