$(window).scroll(function() {
	if($(this).scrollTop() >= 1) {
		$('.header').addClass('header--sticky');
	}
	else{
		$('.header').removeClass('header--sticky');
	}
});

/* Show more */

$('.more .show').on('click', function() {
	$('.info__convectors-hide').slideDown(400);
	$(this).hide();
	$('.more .hide').show();
});

$('.more .hide').on('click', function() {
	$('.info__convectors-hide').slideUp(400);
	$(this).hide();
	$('.more .show').show();
});

/* Show more end */

/* Form */

$('#check, #check1').change(function(){
	if(!this.checked) {
		$('.input-submit').addClass('disable');
	} else {
		$('.input-submit').removeClass('disable');
	}
});

$('.request__form').on('click', '.disable button', function(){
	return false;
});

/* Form */

/* Dist */

$('#city').change(function(){
	if(($('#city option:selected').val() == 'udm')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .udm').addClass('active');
		$('.distributors__items.block-udm').addClass('active');
	}
	else if(($('#city option:selected').val() == 'komi')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .komi').addClass('active');
		$('.distributors__items.block-komi').addClass('active');
	}
	else if(($('#city option:selected').val() == 'svd')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .svd').addClass('active');
		$('.distributors__items.block-svd').addClass('active');
	}
	else if(($('#city option:selected').val() == 'orb')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .orb').addClass('active');
		$('.distributors__items.block-orb').addClass('active');
	}
	else if(($('#city option:selected').val() == 'kir')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .kir').addClass('active');
		$('.distributors__items.block-kir').addClass('active');
	}
	else if(($('#city option:selected').val() == 'vdm')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .vdm').addClass('active');
		$('.distributors__items.block-vdm').addClass('active');
	}
	else if(($('#city option:selected').val() == 'spb')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .spb').addClass('active');
		$('.distributors__items.block-spb').addClass('active');
	}
	else if(($('#city option:selected').val() == 'krd')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .krd').addClass('active');
		$('.distributors__items.block-krd').addClass('active');
	}
	else if(($('#city option:selected').val() == 'vld')) {
		$('.city').removeClass('active');
		$('.distributors__items').removeClass('active');
		$('.distributors__city-title .vld').addClass('active');
		$('.distributors__items.block-vld').addClass('active');
	}
});

$(document).ready(function(){
	$('.call-open').magnificPopup({
		items: [
			{
				src: '.call-popup',
				type: 'inline'
			}
		],
	});
	$('.type-open_1').magnificPopup({
		items: [
			{
				src: '.type-popup_1',
				type: 'inline'
			}
		],
	});
	$('.type-open_2').magnificPopup({
		items: [
			{
				src: '.type-popup_2',
				type: 'inline'
			}
		],
	});
	$('.type-open_3').magnificPopup({
		items: [
			{
				src: '.type-popup_3',
				type: 'inline'
			}
		],
	});
	$('.type-open_4').magnificPopup({
		items: [
			{
				src: '.type-popup_4',
				type: 'inline'
			}
		],
	});

	$('.object-open_1').magnificPopup({
		items: [
			{
				src: '.object-popup_1',
				type: 'inline'
			}
		],
	});

	$('.object-open_2').magnificPopup({
		items: [
			{
				src: '.object-popup_2',
				type: 'inline'
			}
		],
	});

	$('.object-open_3').magnificPopup({
		items: [
			{
				src: '.object-popup_3',
				type: 'inline'
			}
		],
	});

	$('.object-open_4').magnificPopup({
		items: [
			{
				src: '.object-popup_4',
				type: 'inline'
			}
		],
	});
});

/* Ajax form */

$(document).ready(function() {	
	$("#form-1").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			yaCounter51512975.reachGoal('request');
			$("#form-1").trigger("reset");
		});
		return false;
	});
	
	$("#form-2").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			yaCounter51512975.reachGoal('call');
			$("#form-2").trigger("reset");
		});
		return false;
	});
});

/* Ajax form end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0aWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSAxKSB7XHJcblx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci0tc3RpY2t5Jyk7XHJcblx0fVxyXG5cdGVsc2V7XHJcblx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci0tc3RpY2t5Jyk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8qIFNob3cgbW9yZSAqL1xyXG5cclxuJCgnLm1vcmUgLnNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaW5mb19fY29udmVjdG9ycy1oaWRlJykuc2xpZGVEb3duKDQwMCk7XHJcblx0JCh0aGlzKS5oaWRlKCk7XHJcblx0JCgnLm1vcmUgLmhpZGUnKS5zaG93KCk7XHJcbn0pO1xyXG5cclxuJCgnLm1vcmUgLmhpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaW5mb19fY29udmVjdG9ycy1oaWRlJykuc2xpZGVVcCg0MDApO1xyXG5cdCQodGhpcykuaGlkZSgpO1xyXG5cdCQoJy5tb3JlIC5zaG93Jykuc2hvdygpO1xyXG59KTtcclxuXHJcbi8qIFNob3cgbW9yZSBlbmQgKi9cclxuXHJcbi8qIEZvcm0gKi9cclxuXHJcbiQoJyNjaGVjaywgI2NoZWNrMScpLmNoYW5nZShmdW5jdGlvbigpe1xyXG5cdGlmKCF0aGlzLmNoZWNrZWQpIHtcclxuXHRcdCQoJy5pbnB1dC1zdWJtaXQnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaW5wdXQtc3VibWl0JykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJCgnLnJlcXVlc3RfX2Zvcm0nKS5vbignY2xpY2snLCAnLmRpc2FibGUgYnV0dG9uJywgZnVuY3Rpb24oKXtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0pO1xyXG5cclxuLyogRm9ybSAqL1xyXG5cclxuLyogRGlzdCAqL1xyXG5cclxuJCgnI2NpdHknKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuXHRpZigoJCgnI2NpdHkgb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgPT0gJ3VkbScpKSB7XHJcblx0XHQkKCcuY2l0eScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19fY2l0eS10aXRsZSAudWRtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19faXRlbXMuYmxvY2stdWRtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCgkKCcjY2l0eSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSA9PSAna29taScpKSB7XHJcblx0XHQkKCcuY2l0eScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19fY2l0eS10aXRsZSAua29taScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zLmJsb2NrLWtvbWknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG5cdGVsc2UgaWYoKCQoJyNjaXR5IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpID09ICdzdmQnKSkge1xyXG5cdFx0JCgnLmNpdHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2NpdHktdGl0bGUgLnN2ZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zLmJsb2NrLXN2ZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcblx0ZWxzZSBpZigoJCgnI2NpdHkgb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgPT0gJ29yYicpKSB7XHJcblx0XHQkKCcuY2l0eScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19fY2l0eS10aXRsZSAub3JiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19faXRlbXMuYmxvY2stb3JiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCgkKCcjY2l0eSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSA9PSAna2lyJykpIHtcclxuXHRcdCQoJy5jaXR5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19faXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19jaXR5LXRpdGxlIC5raXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19pdGVtcy5ibG9jay1raXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG5cdGVsc2UgaWYoKCQoJyNjaXR5IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpID09ICd2ZG0nKSkge1xyXG5cdFx0JCgnLmNpdHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2NpdHktdGl0bGUgLnZkbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zLmJsb2NrLXZkbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcblx0ZWxzZSBpZigoJCgnI2NpdHkgb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgPT0gJ3NwYicpKSB7XHJcblx0XHQkKCcuY2l0eScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19fY2l0eS10aXRsZSAuc3BiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19faXRlbXMuYmxvY2stc3BiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCgkKCcjY2l0eSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSA9PSAna3JkJykpIHtcclxuXHRcdCQoJy5jaXR5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmRpc3RyaWJ1dG9yc19faXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19jaXR5LXRpdGxlIC5rcmQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19pdGVtcy5ibG9jay1rcmQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG5cdGVsc2UgaWYoKCQoJyNjaXR5IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpID09ICd2bGQnKSkge1xyXG5cdFx0JCgnLmNpdHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuZGlzdHJpYnV0b3JzX19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2NpdHktdGl0bGUgLnZsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5kaXN0cmlidXRvcnNfX2l0ZW1zLmJsb2NrLXZsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCcuY2FsbC1vcGVuJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLmNhbGwtcG9wdXAnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnLnR5cGUtb3Blbl8xJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnR5cGUtcG9wdXBfMScsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCcudHlwZS1vcGVuXzInKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcudHlwZS1wb3B1cF8yJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJy50eXBlLW9wZW5fMycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy50eXBlLXBvcHVwXzMnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnLnR5cGUtb3Blbl80JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnR5cGUtcG9wdXBfNCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHJcblx0JCgnLm9iamVjdC1vcGVuXzEnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcub2JqZWN0LXBvcHVwXzEnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdCQoJy5vYmplY3Qtb3Blbl8yJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLm9iamVjdC1wb3B1cF8yJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcub2JqZWN0LW9wZW5fMycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5vYmplY3QtcG9wdXBfMycsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHJcblx0JCgnLm9iamVjdC1vcGVuXzQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcub2JqZWN0LXBvcHVwXzQnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLyogQWpheCBmb3JtICovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcdFxyXG5cdCQoXCIjZm9ybS0xXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwiZm9ybS9mb3JtLTEucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG5cdFx0XHR5YUNvdW50ZXI1MTUxMjk3NS5yZWFjaEdvYWwoJ3JlcXVlc3QnKTtcclxuXHRcdFx0JChcIiNmb3JtLTFcIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JChcIiNmb3JtLTJcIikuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdHVybDogXCJmb3JtL2Zvcm0tMi5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5maW5kKFwiaW5wdXRcIikudmFsKFwiXCIpO1xyXG5cdFx0XHRhbGVydChcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDISDQodC60L7RgNC+INC80Ysg0YEg0LLQsNC80Lgg0YHQstGP0LbQtdC80YHRjy5cIik7XHJcblx0XHRcdHlhQ291bnRlcjUxNTEyOTc1LnJlYWNoR29hbCgnY2FsbCcpO1xyXG5cdFx0XHQkKFwiI2Zvcm0tMlwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vKiBBamF4IGZvcm0gZW5kICovIl0sImZpbGUiOiJtYWluLmpzIn0=
