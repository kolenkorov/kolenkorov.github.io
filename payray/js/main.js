if($('.sign__main').height() > 430) {
	$('.sign').css('height', 'auto');
}

/* Forgot password */
	let signin_form = $('.sign__main-block.signin');
	let forgot_pass = $('.forgot-pass');
	let f_pass1 = $('.forgot-pass__email');
	let f_pass2 = $('.forgot-pass__password');
	let back = $('.form__submit-button .back');
	let repass = $('.form__submit-button .reset-pass');

	$('.repass').on('click', function(e) {
		e.preventDefault();
		forgot_pass.hide();
		signin_form.hide();
		f_pass1.show();
	});

	back.on('click', function(e){
		e.preventDefault();
		forgot_pass.hide();
		signin_form.show();
	});

	repass.on('click', function(e){
		e.preventDefault();
		f_pass1.hide();
		f_pass2.show();
	});

/* Forgot password end */

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

	let disable_block = $('.popup__send-recipient, .send-amount__swap, .exchange__currency-2');

	let replenishment = $('.popup__recieve-replenishment')
	let r_options = $('.replenishment-options');
	let fiat_money = $('.fiat-money');
	let crypto_money = $('.crypto-money');
	let electronic_money = $('.electronic-money');
	let replenishment_system = $('.replenishment-system');
	let prev = $('.replenishment-system__back a');

	let replenishment_variant = $('.replenishment-variant .recieve-replenishment__item');
	let replenishment_dropdown = $('.replenishment__item-dropdown');
	let pay = $('.item-dropdown__pay a, .system__info-pay a');
	let summ = $('.recieve-replenishment__summ input');

	fiat_block.on('click', function(){
		disable_block.addClass('disable');
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
		disable_block.removeClass('disable');
	});

	replenishment_dropdown.prev().mouseup(function(){
		$('.recieve-replenishment__item').not($(this).parent()).removeClass('open');
		$('.replenishment__item-dropdown').not($(this).next()).slideUp(300);
		let test = $(this).parent();
		setTimeout(function(){
			test.toggleClass('open');
		}, 5);

		$(this).parent().find(replenishment_dropdown).slideToggle();
		$('.recieve-replenishment__summ').show(250);
	});

	prev.on('click', function(){
		$(this).parent().parent().parent().hide();
		fiat_money.show();
	});

	$('a.recieve-replenishment__item').on('click', function(e){
		e.preventDefault();
		let attr = $(this).attr('href');
		replenishment.hide();
		$(attr).show();
	});

	$('.system__info-pay input').keyup(function() {
		let foo = $(this).val().split(" ").join("");
		if (foo.length > 0) {
			foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
		}
		$(this).val(foo);
	});

	$('.recieve-replenishment__items').on('click', '.open .replenishment__item-head', function(){
		$('.recieve-replenishment__summ').hide(250);
	});

	pay.on('click', function(){
		$(this).addClass('loading');
		$(this).next().addClass('done');

		setTimeout(function(){
			pay.removeClass('loading');
		}, 2000);
	});

	$('.system__info-pay input').on('input', function(){
		let ln = $(this).val().length;
		if(ln == 19) {
			pay.addClass('active');
		} else {
			pay.removeClass('active');
		}
	});

	$('.recieve-replenishment__summ').on('click', function(){
		summ.focus();
	});

	summ.on('input', function(){
		let val = $(this).val();

		$('.summ').text(val);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImlmKCQoJy5zaWduX19tYWluJykuaGVpZ2h0KCkgPiA0MzApIHtcclxuXHQkKCcuc2lnbicpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxufVxyXG5cclxuLyogRm9yZ290IHBhc3N3b3JkICovXHJcblx0bGV0IHNpZ25pbl9mb3JtID0gJCgnLnNpZ25fX21haW4tYmxvY2suc2lnbmluJyk7XHJcblx0bGV0IGZvcmdvdF9wYXNzID0gJCgnLmZvcmdvdC1wYXNzJyk7XHJcblx0bGV0IGZfcGFzczEgPSAkKCcuZm9yZ290LXBhc3NfX2VtYWlsJyk7XHJcblx0bGV0IGZfcGFzczIgPSAkKCcuZm9yZ290LXBhc3NfX3Bhc3N3b3JkJyk7XHJcblx0bGV0IGJhY2sgPSAkKCcuZm9ybV9fc3VibWl0LWJ1dHRvbiAuYmFjaycpO1xyXG5cdGxldCByZXBhc3MgPSAkKCcuZm9ybV9fc3VibWl0LWJ1dHRvbiAucmVzZXQtcGFzcycpO1xyXG5cclxuXHQkKCcucmVwYXNzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Zm9yZ290X3Bhc3MuaGlkZSgpO1xyXG5cdFx0c2lnbmluX2Zvcm0uaGlkZSgpO1xyXG5cdFx0Zl9wYXNzMS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cdGJhY2sub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRmb3Jnb3RfcGFzcy5oaWRlKCk7XHJcblx0XHRzaWduaW5fZm9ybS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cdHJlcGFzcy5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGZfcGFzczEuaGlkZSgpO1xyXG5cdFx0Zl9wYXNzMi5zaG93KCk7XHJcblx0fSk7XHJcblxyXG4vKiBGb3Jnb3QgcGFzc3dvcmQgZW5kICovXHJcblxyXG4vKiBUb29sYmFycyAqL1xyXG5cdGxldCB1c2VyID0gJCgnLmhlYWRlcl9fdXNlci10aXRsZScpO1xyXG5cdGxldCBvcHRpb25zID0gJCgnLmJpbGxpbmctd2FsbGV0X19vcHRpb25zJyk7XHJcblx0bGV0IGN1cnJlbmN5ID0gJCgnLmFtb3VudC1jdXJyZW5jeScpO1xyXG5cdGxldCByZWNpcGllbnQgPSAkKCcuc2VuZC1yZWNpcGllbnRfX2lucHV0IGlucHV0Jyk7XHJcblxyXG5cdGxldCB0b29sYmFyX3VzZXIgPSAkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKTtcclxuXHRsZXQgdG9vbGJhcl9vcHRpb25zID0gJCgnLndhbGxldF9fb3B0aW9ucy10b29sYmFyJyk7XHJcblx0bGV0IHRvb2xiYXJfY3VycmVuY3kgPSAkKCcuYW1vdW50LWN1cnJlbmN5X190b29sYmFyJyk7XHJcblx0bGV0IHRvb2xiYXJfcmVjaXBpZW50ID0gJCgnLnNlbmQtcmVjaXBpZW50X19kcm9wZG93bicpO1xyXG5cclxuXHR1c2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dG9vbGJhcl91c2VyLnNsaWRlVG9nZ2xlKDApO1xyXG5cdH0pO1xyXG5cclxuXHRvcHRpb25zLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKHRvb2xiYXJfb3B0aW9ucykuc2xpZGVUb2dnbGUoMCk7XHJcblx0fSk7XHJcblxyXG5cdGN1cnJlbmN5Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKHRvb2xiYXJfY3VycmVuY3kpLnNob3coKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdCQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKHRvb2xiYXJfb3B0aW9ucy5pcyhcIjp2aXNpYmxlXCIpKXtcclxuXHRcdFx0aWYgKCF0b29sYmFyX29wdGlvbnMuaXMoZS50YXJnZXQpICYmIHRvb2xiYXJfb3B0aW9ucy5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvb2xiYXJfb3B0aW9ucy5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodG9vbGJhcl91c2VyLmlzKFwiOnZpc2libGVcIikpe1xyXG5cdFx0XHRpZiAoIXRvb2xiYXJfdXNlci5pcyhlLnRhcmdldCkgJiYgdG9vbGJhcl91c2VyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dG9vbGJhcl91c2VyLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0b29sYmFyX2N1cnJlbmN5LmlzKFwiOnZpc2libGVcIikpe1xyXG5cdFx0XHRpZiAoIXRvb2xiYXJfY3VycmVuY3kuaXMoZS50YXJnZXQpICYmIHRvb2xiYXJfY3VycmVuY3kuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b29sYmFyX2N1cnJlbmN5LmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZWNpcGllbnQub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKHRvb2xiYXJfcmVjaXBpZW50KS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cdHJlY2lwaWVudC5vbignZm9jdXNvdXQnLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKHRvb2xiYXJfcmVjaXBpZW50KS5oaWRlKCk7XHJcblx0fSk7XHJcbi8qIFRvb2xiYXJzIGVuZCAqL1xyXG5cclxuLyogUmVwbGVuaXNobWVudCBvcHRpb25zICovXHJcblx0bGV0IGZpYXRfYmxvY2sgPSAkKCcuZmlhdC1ibG9jaycpO1xyXG5cdGxldCBjcnlwdG9fYmxvY2sgPSAkKCcuY3J5cHRvLWJsb2NrJyk7XHJcblx0bGV0IGVsZWN0cm9uaWNfYmxvY2sgPSAkKCcuZWxlY3Ryb25pYy1ibG9jaycpO1xyXG5cdGxldCByZXBsZW5pc2htZW50X2Jsb2NrID0gJCgnLmJhY2tfb3B0aW9ucycpO1xyXG5cclxuXHRsZXQgZGlzYWJsZV9ibG9jayA9ICQoJy5wb3B1cF9fc2VuZC1yZWNpcGllbnQsIC5zZW5kLWFtb3VudF9fc3dhcCwgLmV4Y2hhbmdlX19jdXJyZW5jeS0yJyk7XHJcblxyXG5cdGxldCByZXBsZW5pc2htZW50ID0gJCgnLnBvcHVwX19yZWNpZXZlLXJlcGxlbmlzaG1lbnQnKVxyXG5cdGxldCByX29wdGlvbnMgPSAkKCcucmVwbGVuaXNobWVudC1vcHRpb25zJyk7XHJcblx0bGV0IGZpYXRfbW9uZXkgPSAkKCcuZmlhdC1tb25leScpO1xyXG5cdGxldCBjcnlwdG9fbW9uZXkgPSAkKCcuY3J5cHRvLW1vbmV5Jyk7XHJcblx0bGV0IGVsZWN0cm9uaWNfbW9uZXkgPSAkKCcuZWxlY3Ryb25pYy1tb25leScpO1xyXG5cdGxldCByZXBsZW5pc2htZW50X3N5c3RlbSA9ICQoJy5yZXBsZW5pc2htZW50LXN5c3RlbScpO1xyXG5cdGxldCBwcmV2ID0gJCgnLnJlcGxlbmlzaG1lbnQtc3lzdGVtX19iYWNrIGEnKTtcclxuXHJcblx0bGV0IHJlcGxlbmlzaG1lbnRfdmFyaWFudCA9ICQoJy5yZXBsZW5pc2htZW50LXZhcmlhbnQgLnJlY2lldmUtcmVwbGVuaXNobWVudF9faXRlbScpO1xyXG5cdGxldCByZXBsZW5pc2htZW50X2Ryb3Bkb3duID0gJCgnLnJlcGxlbmlzaG1lbnRfX2l0ZW0tZHJvcGRvd24nKTtcclxuXHRsZXQgcGF5ID0gJCgnLml0ZW0tZHJvcGRvd25fX3BheSBhLCAuc3lzdGVtX19pbmZvLXBheSBhJyk7XHJcblx0bGV0IHN1bW0gPSAkKCcucmVjaWV2ZS1yZXBsZW5pc2htZW50X19zdW1tIGlucHV0Jyk7XHJcblxyXG5cdGZpYXRfYmxvY2sub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdGRpc2FibGVfYmxvY2suYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuXHRcdHJlcGxlbmlzaG1lbnQuaGlkZSgpO1xyXG5cdFx0ZmlhdF9tb25leS5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cdGNyeXB0b19ibG9jay5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0cmVwbGVuaXNobWVudC5oaWRlKCk7XHJcblx0XHRjcnlwdG9fbW9uZXkuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRlbGVjdHJvbmljX2Jsb2NrLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRyZXBsZW5pc2htZW50LmhpZGUoKTtcclxuXHRcdGVsZWN0cm9uaWNfbW9uZXkuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXBsZW5pc2htZW50X2Jsb2NrLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRyZXBsZW5pc2htZW50LmhpZGUoKTtcclxuXHRcdHJfb3B0aW9ucy5zaG93KCk7XHJcblx0XHRkaXNhYmxlX2Jsb2NrLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcblx0fSk7XHJcblxyXG5cdHJlcGxlbmlzaG1lbnRfZHJvcGRvd24ucHJldigpLm1vdXNldXAoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5yZWNpZXZlLXJlcGxlbmlzaG1lbnRfX2l0ZW0nKS5ub3QoJCh0aGlzKS5wYXJlbnQoKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCQoJy5yZXBsZW5pc2htZW50X19pdGVtLWRyb3Bkb3duJykubm90KCQodGhpcykubmV4dCgpKS5zbGlkZVVwKDMwMCk7XHJcblx0XHRsZXQgdGVzdCA9ICQodGhpcykucGFyZW50KCk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRlc3QudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdH0sIDUpO1xyXG5cclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZChyZXBsZW5pc2htZW50X2Ryb3Bkb3duKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdFx0JCgnLnJlY2lldmUtcmVwbGVuaXNobWVudF9fc3VtbScpLnNob3coMjUwKTtcclxuXHR9KTtcclxuXHJcblx0cHJldi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcblx0XHRmaWF0X21vbmV5LnNob3coKTtcclxuXHR9KTtcclxuXHJcblx0JCgnYS5yZWNpZXZlLXJlcGxlbmlzaG1lbnRfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBhdHRyID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRyZXBsZW5pc2htZW50LmhpZGUoKTtcclxuXHRcdCQoYXR0cikuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuc3lzdGVtX19pbmZvLXBheSBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGZvbyA9ICQodGhpcykudmFsKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XHJcblx0XHRpZiAoZm9vLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9vID0gZm9vLm1hdGNoKG5ldyBSZWdFeHAoJy57MSw0fScsICdnJykpLmpvaW4oXCIgXCIpO1xyXG5cdFx0fVxyXG5cdFx0JCh0aGlzKS52YWwoZm9vKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnJlY2lldmUtcmVwbGVuaXNobWVudF9faXRlbXMnKS5vbignY2xpY2snLCAnLm9wZW4gLnJlcGxlbmlzaG1lbnRfX2l0ZW0taGVhZCcsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcucmVjaWV2ZS1yZXBsZW5pc2htZW50X19zdW1tJykuaGlkZSgyNTApO1xyXG5cdH0pO1xyXG5cclxuXHRwYXkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLmFkZENsYXNzKCdkb25lJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRwYXkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHRcdH0sIDIwMDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuc3lzdGVtX19pbmZvLXBheSBpbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbG4gPSAkKHRoaXMpLnZhbCgpLmxlbmd0aDtcclxuXHRcdGlmKGxuID09IDE5KSB7XHJcblx0XHRcdHBheS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCcucmVjaWV2ZS1yZXBsZW5pc2htZW50X19zdW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdHN1bW0uZm9jdXMoKTtcclxuXHR9KTtcclxuXHJcblx0c3VtbS5vbignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG5cdFx0JCgnLnN1bW0nKS50ZXh0KHZhbCk7XHJcblx0fSk7XHJcbi8qIFJlcGxlbmlzaG1lbnQgb3B0aW9ucyBlbmQgKi9cclxuXHJcbi8qIFNldHRpbmdzICovXHJcblx0JCgnLm1haW5fX3NldHRpbmdzLWl0ZW0gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJ3NlbGVjdCwgaW5wdXRbdHlwZT1maWxlXScpLnN0eWxlcignZGVzdHJveScpO1xyXG5cdFx0bGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdCQoJy5tYWluX19zZXR0aW5ncy1pdGVtJykucmVtb3ZlQ2xhc3MoJ21haW5fX3NldHRpbmdzLWl0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbWFpbl9fc2V0dGluZ3MtaXRlbS0tYWN0aXZlJyk7XHJcblx0XHQkKCcubWFpbl9fc2V0dGluZ3MtaW5mbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdJykuc3R5bGVyKCk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5pbmZvX19mb3JtLWJ1dHRvbiAubmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdJykuc3R5bGVyKCdkZXN0cm95Jyk7XHJcblx0XHQkKCcuaW5mb19fdmVyaWZpY2F0aW9uLWJsb2NrLTEnKS5oaWRlKCk7XHJcblx0XHQkKCcuaW5mb19fdmVyaWZpY2F0aW9uLWJsb2NrLTInKS5zaG93KCk7XHJcblx0XHQkKCdzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0nKS5zdHlsZXIoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNldHRpbmdzLW5hdl9fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLm1haW5fX3NldHRpbmdzLWxpc3QnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5tYWluX19zZXR0aW5ncy1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5zZXR0aW5ncy1uYXZfX2J1dHRvbiwgLm1haW5fX3NldHRpbmdzLWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIFNldHRpbmdzICBlbmQgKi9cclxuXHJcbi8qIEZvcm0gU3R5bGVyKi9cclxuXHQkKCdzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0nKS5zdHlsZXIoe1xyXG5cdFx0ZmlsZUJyb3dzZTogJ1JlcGxhY2UgZmlsZScsXHJcblx0XHRmaWxlUGxhY2Vob2xkZXI6ICcnXHJcblx0fSk7XHJcbi8qIEZvcm0gU3R5bGVyIGVuZCAqL1xyXG5cclxuLyogTWFnbmlmaWMgcG9wdXAgKi9cclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdFx0JCgnYS5zZW5kJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnLnBvcHVwX19zZW5kJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0fSk7XHJcblx0XHQkKCdhLnJlY2lldmUnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3JlY2lldmUnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuLypNYWduaWZpYyBwb3B1cCovXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
