/* Reg */
	$('.form-create__button').on('click', function(e){
		e.preventDefault();
		$(this).hide()
		.next().show();
		$('.reg__form-desc').show();
	});
/* Reg end */

/* Menu */
	$('.header__burger').on('click', function(){
		$(this).toggleClass('active');
		$('.aside').toggleClass('active');
	});
/* Menu end */

/* Mining */
	$('.main__tab a').on('click', function(e) {
		e.preventDefault();
		$('.main__tab a').removeClass('active');
		$(this).addClass('active');

		let item = $(this).attr('href');
		
		$('.mining__block').removeClass('active');
		$(item).addClass('active');
	});
/* Mining end */

/* Magnific popup */
	$(document).ready(function(){
		$('.main__wallet-button').magnificPopup({
			items: [
				{
					src: '.popup__dispatch',
					type: 'inline'
				}
			],
		});

		$('.main__wallet-address .qr').magnificPopup({
			items: [
				{
					src: '.popup__qr',
					type: 'inline'
				}
			],
		});
	});
/*Magnific popup*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFJlZyAqL1xyXG5cdCQoJy5mb3JtLWNyZWF0ZV9fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLmhpZGUoKVxyXG5cdFx0Lm5leHQoKS5zaG93KCk7XHJcblx0XHQkKCcucmVnX19mb3JtLWRlc2MnKS5zaG93KCk7XHJcblx0fSk7XHJcbi8qIFJlZyBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuYXNpZGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcblxyXG4vKiBNaW5pbmcgKi9cclxuXHQkKCcubWFpbl9fdGFiIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcubWFpbl9fdGFiIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHRsZXQgaXRlbSA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0XHJcblx0XHQkKCcubWluaW5nX19ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoaXRlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG4vKiBNaW5pbmcgZW5kICovXHJcblxyXG4vKiBNYWduaWZpYyBwb3B1cCAqL1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWFpbl9fd2FsbGV0LWJ1dHRvbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fZGlzcGF0Y2gnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcubWFpbl9fd2FsbGV0LWFkZHJlc3MgLnFyJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnLnBvcHVwX19xcicsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG4vKk1hZ25pZmljIHBvcHVwKi8iXSwiZmlsZSI6Im1haW4uanMifQ==
