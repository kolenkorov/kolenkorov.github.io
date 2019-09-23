$('.program__item-title').on('click', function(){
	$('.program__item-description').not($(this).next()).slideUp(400);
	$('.program__item-title').not($(this)).removeClass('active');
	$(this).next('.program__item-description').slideToggle(400);
	$(this).toggleClass('active');
});

$('.answer__item-title').on('click', function(){
	$('.answer__item-description').not($(this).next()).slideUp(400);
	$('.answer__item-title').not($(this)).removeClass('active');
	$(this).next('.answer__item-description').slideToggle(400);
	$(this).toggleClass('active');
});

$('.down, .up, .main a').on('click', function(e){
	e.preventDefault();
	let selector = $(this).attr('href');
	let h = $(selector);

	$('html, body').animate({
		scrollTop: h.offset().top
	}, 800);
});

//Payment
let summ = $('.payment__price-variants input:checked').data('value');
$('.number__value span').text(summ);

$('.payment__price-variants input').on('change', function(){
	summ = $(this).data('value');
	$('.number__value span').text(summ);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5wcm9ncmFtX19pdGVtLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKCcucHJvZ3JhbV9faXRlbS1kZXNjcmlwdGlvbicpLm5vdCgkKHRoaXMpLm5leHQoKSkuc2xpZGVVcCg0MDApO1xyXG5cdCQoJy5wcm9ncmFtX19pdGVtLXRpdGxlJykubm90KCQodGhpcykpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5wcm9ncmFtX19pdGVtLWRlc2NyaXB0aW9uJykuc2xpZGVUb2dnbGUoNDAwKTtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuYW5zd2VyX19pdGVtLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKCcuYW5zd2VyX19pdGVtLWRlc2NyaXB0aW9uJykubm90KCQodGhpcykubmV4dCgpKS5zbGlkZVVwKDQwMCk7XHJcblx0JCgnLmFuc3dlcl9faXRlbS10aXRsZScpLm5vdCgkKHRoaXMpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYW5zd2VyX19pdGVtLWRlc2NyaXB0aW9uJykuc2xpZGVUb2dnbGUoNDAwKTtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuZG93biwgLnVwLCAubWFpbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGxldCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdHNjcm9sbFRvcDogaC5vZmZzZXQoKS50b3BcclxuXHR9LCA4MDApO1xyXG59KTtcclxuXHJcbi8vUGF5bWVudFxyXG5sZXQgc3VtbSA9ICQoJy5wYXltZW50X19wcmljZS12YXJpYW50cyBpbnB1dDpjaGVja2VkJykuZGF0YSgndmFsdWUnKTtcclxuJCgnLm51bWJlcl9fdmFsdWUgc3BhbicpLnRleHQoc3VtbSk7XHJcblxyXG4kKCcucGF5bWVudF9fcHJpY2UtdmFyaWFudHMgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHRzdW1tID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xyXG5cdCQoJy5udW1iZXJfX3ZhbHVlIHNwYW4nKS50ZXh0KHN1bW0pO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
