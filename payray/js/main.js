if($('.sign__main').height() > 430) {
	$('.sign').css('height', 'auto');
}

/* Toolbars */
	let user = $('.header__user-title');
	let options = $('.billing-wallet__options');
	let currency = $('.amount-currency');
	let recipient = $('.send-recipient__input input');

	let toolbar_user = $('.header__user-toolbar');
	let toolbar_options = $('.wallet__options-toolbar');
	let toolbar_currency = $('.amount-currency__toolbar');
	let toolbar_recipient = $('.send-recipient__dropdown');

	user.on('click', function() {
		toolbar_user.slideToggle(0);
	});

	options.on('click', function() {
		$(this).parent().find(toolbar_options).slideToggle(0);
	});

	currency.on('click', function() {
		$(this).parent().find(toolbar_currency).show();
	});


	$(document).mouseup(function(e) {
		if (toolbar_options.is(":visible")){
			if (!toolbar_options.is(e.target) && toolbar_options.has(e.target).length === 0)
			{
				toolbar_options.hide();
			}
		}

		if (toolbar_user.is(":visible")){
			if (!toolbar_user.is(e.target) && toolbar_user.has(e.target).length === 0)
			{
				toolbar_user.hide();
			}
		}

		if (toolbar_currency.is(":visible")){
			if (!toolbar_currency.is(e.target) && toolbar_currency.has(e.target).length === 0)
			{
				toolbar_currency.hide();
			}
		}
	});

	recipient.on('focusin', function(){
		$(this).parent().parent().find(toolbar_recipient).show();
	});

	recipient.on('focusout', function(){
		$(this).parent().parent().find(toolbar_recipient).hide();
	});
/* Toolbars end */

/* Replenishment options */
	let fiat_block = $('.fiat-block');
	let crypto_block = $('.crypto-block');
	let electronic_block = $('.electronic-block');
	let replenishment_block = $('.back_options');

	let replenishment = $('.popup__recieve-replenishment')
	let r_options = $('.replenishment-options');
	let fiat_money = $('.fiat-money');
	let crypto_money = $('.crypto-money');
	let electronic_money = $('.electronic-money');

	fiat_block.on('click', function(){
		replenishment.hide();
		fiat_money.show();
	});

	crypto_block.on('click', function(){
		replenishment.hide();
		crypto_money.show();
	});

	electronic_block.on('click', function(){
		replenishment.hide();
		electronic_money.show();
	});

	replenishment_block.on('click', function(){
		replenishment.hide();
		r_options.show();
	});
/* Replenishment options end */

/* Settings */
	$('.main__settings-item a').on('click', function(e) {
		e.preventDefault();
		$('select, input[type=file]').styler('destroy');
		let href = $(this).attr('href');
		$('.main__settings-item').removeClass('main__settings-item--active');
		$(this).parent().addClass('main__settings-item--active');
		$('.main__settings-info').removeClass('active');
		$(href).addClass('active');
		$('select, input[type=file]').styler();
	});

	$('.info__form-button .next').on('click', function(e){
		e.preventDefault();
		$('select, input[type=file]').styler('destroy');
		$('.info__verification-block-1').hide();
		$('.info__verification-block-2').show();
		$('select, input[type=file]').styler();
	});

	$('.settings-nav__button').on('click', function(){
		$(this).toggleClass('active');
		$('.main__settings-list').toggleClass('active');
	});

	$('.main__settings-item').on('click', function(){
		$('.settings-nav__button, .main__settings-list').removeClass('active');
	});
/* Settings  end */


/* Form Styler*/
	$('select, input[type=file]').styler({
		fileBrowse: 'Replace file',
		filePlaceholder: ''
	});
/* Form Styler end */

/* Magnific popup */
	$(document).ready(function(){
		$('a.send').magnificPopup({
			items: [
				{
					src: '.popup__send',
					type: 'inline'
				}
			],
		});
		$('a.recieve').magnificPopup({
			items: [
				{
					src: '.popup__recieve',
					type: 'inline'
				}
			],
		});
	});
/*Magnific popup*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImlmKCQoJy5zaWduX19tYWluJykuaGVpZ2h0KCkgPiA0MzApIHtcclxuXHQkKCcuc2lnbicpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxufVxyXG5cclxuLyogVG9vbGJhcnMgKi9cclxuXHRsZXQgdXNlciA9ICQoJy5oZWFkZXJfX3VzZXItdGl0bGUnKTtcclxuXHRsZXQgb3B0aW9ucyA9ICQoJy5iaWxsaW5nLXdhbGxldF9fb3B0aW9ucycpO1xyXG5cdGxldCBjdXJyZW5jeSA9ICQoJy5hbW91bnQtY3VycmVuY3knKTtcclxuXHRsZXQgcmVjaXBpZW50ID0gJCgnLnNlbmQtcmVjaXBpZW50X19pbnB1dCBpbnB1dCcpO1xyXG5cclxuXHRsZXQgdG9vbGJhcl91c2VyID0gJCgnLmhlYWRlcl9fdXNlci10b29sYmFyJyk7XHJcblx0bGV0IHRvb2xiYXJfb3B0aW9ucyA9ICQoJy53YWxsZXRfX29wdGlvbnMtdG9vbGJhcicpO1xyXG5cdGxldCB0b29sYmFyX2N1cnJlbmN5ID0gJCgnLmFtb3VudC1jdXJyZW5jeV9fdG9vbGJhcicpO1xyXG5cdGxldCB0b29sYmFyX3JlY2lwaWVudCA9ICQoJy5zZW5kLXJlY2lwaWVudF9fZHJvcGRvd24nKTtcclxuXHJcblx0dXNlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHRvb2xiYXJfdXNlci5zbGlkZVRvZ2dsZSgwKTtcclxuXHR9KTtcclxuXHJcblx0b3B0aW9ucy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCh0b29sYmFyX29wdGlvbnMpLnNsaWRlVG9nZ2xlKDApO1xyXG5cdH0pO1xyXG5cclxuXHRjdXJyZW5jeS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCh0b29sYmFyX2N1cnJlbmN5KS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICh0b29sYmFyX29wdGlvbnMuaXMoXCI6dmlzaWJsZVwiKSl7XHJcblx0XHRcdGlmICghdG9vbGJhcl9vcHRpb25zLmlzKGUudGFyZ2V0KSAmJiB0b29sYmFyX29wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b29sYmFyX29wdGlvbnMuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRvb2xiYXJfdXNlci5pcyhcIjp2aXNpYmxlXCIpKXtcclxuXHRcdFx0aWYgKCF0b29sYmFyX3VzZXIuaXMoZS50YXJnZXQpICYmIHRvb2xiYXJfdXNlci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvb2xiYXJfdXNlci5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodG9vbGJhcl9jdXJyZW5jeS5pcyhcIjp2aXNpYmxlXCIpKXtcclxuXHRcdFx0aWYgKCF0b29sYmFyX2N1cnJlbmN5LmlzKGUudGFyZ2V0KSAmJiB0b29sYmFyX2N1cnJlbmN5LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dG9vbGJhcl9jdXJyZW5jeS5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0cmVjaXBpZW50Lm9uKCdmb2N1c2luJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCh0b29sYmFyX3JlY2lwaWVudCkuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRyZWNpcGllbnQub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCh0b29sYmFyX3JlY2lwaWVudCkuaGlkZSgpO1xyXG5cdH0pO1xyXG4vKiBUb29sYmFycyBlbmQgKi9cclxuXHJcbi8qIFJlcGxlbmlzaG1lbnQgb3B0aW9ucyAqL1xyXG5cdGxldCBmaWF0X2Jsb2NrID0gJCgnLmZpYXQtYmxvY2snKTtcclxuXHRsZXQgY3J5cHRvX2Jsb2NrID0gJCgnLmNyeXB0by1ibG9jaycpO1xyXG5cdGxldCBlbGVjdHJvbmljX2Jsb2NrID0gJCgnLmVsZWN0cm9uaWMtYmxvY2snKTtcclxuXHRsZXQgcmVwbGVuaXNobWVudF9ibG9jayA9ICQoJy5iYWNrX29wdGlvbnMnKTtcclxuXHJcblx0bGV0IHJlcGxlbmlzaG1lbnQgPSAkKCcucG9wdXBfX3JlY2lldmUtcmVwbGVuaXNobWVudCcpXHJcblx0bGV0IHJfb3B0aW9ucyA9ICQoJy5yZXBsZW5pc2htZW50LW9wdGlvbnMnKTtcclxuXHRsZXQgZmlhdF9tb25leSA9ICQoJy5maWF0LW1vbmV5Jyk7XHJcblx0bGV0IGNyeXB0b19tb25leSA9ICQoJy5jcnlwdG8tbW9uZXknKTtcclxuXHRsZXQgZWxlY3Ryb25pY19tb25leSA9ICQoJy5lbGVjdHJvbmljLW1vbmV5Jyk7XHJcblxyXG5cdGZpYXRfYmxvY2sub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdHJlcGxlbmlzaG1lbnQuaGlkZSgpO1xyXG5cdFx0ZmlhdF9tb25leS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cdGNyeXB0b19ibG9jay5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0cmVwbGVuaXNobWVudC5oaWRlKCk7XHJcblx0XHRjcnlwdG9fbW9uZXkuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRlbGVjdHJvbmljX2Jsb2NrLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRyZXBsZW5pc2htZW50LmhpZGUoKTtcclxuXHRcdGVsZWN0cm9uaWNfbW9uZXkuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXBsZW5pc2htZW50X2Jsb2NrLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRyZXBsZW5pc2htZW50LmhpZGUoKTtcclxuXHRcdHJfb3B0aW9ucy5zaG93KCk7XHJcblx0fSk7XHJcbi8qIFJlcGxlbmlzaG1lbnQgb3B0aW9ucyBlbmQgKi9cclxuXHJcbi8qIFNldHRpbmdzICovXHJcblx0JCgnLm1haW5fX3NldHRpbmdzLWl0ZW0gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJ3NlbGVjdCwgaW5wdXRbdHlwZT1maWxlXScpLnN0eWxlcignZGVzdHJveScpO1xyXG5cdFx0bGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdCQoJy5tYWluX19zZXR0aW5ncy1pdGVtJykucmVtb3ZlQ2xhc3MoJ21haW5fX3NldHRpbmdzLWl0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbWFpbl9fc2V0dGluZ3MtaXRlbS0tYWN0aXZlJyk7XHJcblx0XHQkKCcubWFpbl9fc2V0dGluZ3MtaW5mbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdJykuc3R5bGVyKCk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5pbmZvX19mb3JtLWJ1dHRvbiAubmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdJykuc3R5bGVyKCdkZXN0cm95Jyk7XHJcblx0XHQkKCcuaW5mb19fdmVyaWZpY2F0aW9uLWJsb2NrLTEnKS5oaWRlKCk7XHJcblx0XHQkKCcuaW5mb19fdmVyaWZpY2F0aW9uLWJsb2NrLTInKS5zaG93KCk7XHJcblx0XHQkKCdzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0nKS5zdHlsZXIoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNldHRpbmdzLW5hdl9fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLm1haW5fX3NldHRpbmdzLWxpc3QnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5tYWluX19zZXR0aW5ncy1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5zZXR0aW5ncy1uYXZfX2J1dHRvbiwgLm1haW5fX3NldHRpbmdzLWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIFNldHRpbmdzICBlbmQgKi9cclxuXHJcblxyXG4vKiBGb3JtIFN0eWxlciovXHJcblx0JCgnc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdJykuc3R5bGVyKHtcclxuXHRcdGZpbGVCcm93c2U6ICdSZXBsYWNlIGZpbGUnLFxyXG5cdFx0ZmlsZVBsYWNlaG9sZGVyOiAnJ1xyXG5cdH0pO1xyXG4vKiBGb3JtIFN0eWxlciBlbmQgKi9cclxuXHJcbi8qIE1hZ25pZmljIHBvcHVwICovXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHRcdCQoJ2Euc2VuZCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fc2VuZCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cdFx0JCgnYS5yZWNpZXZlJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnLnBvcHVwX19yZWNpZXZlJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbi8qTWFnbmlmaWMgcG9wdXAqLyJdLCJmaWxlIjoibWFpbi5qcyJ9
