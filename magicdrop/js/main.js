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

/* Profile */
	$('.things-item__head a').on('click', function(e) {
		e.preventDefault();
		$('.popup__sell').addClass('active');
	});
/* Profile end */

/* Info */
	$('.bonus__info-button').on('click', function() {
		$(this).toggleClass('active').next().toggleClass('active').find('.hidden').slideToggle(300);
		$(this).next().find('.dots').toggleClass('active');
	});

	$('.bonus__cards-title').on('click', function() {
		$(this).addClass('active').next().slideToggle(300);
	});
/* Info */

/* Faq */
	$('.faq__item-title').on('click', function() {
		$(this).toggleClass('active').next().slideToggle(300);
	});
/* Faq end */

/* Replenishment */
	$('.replenishment__variant-items a').on('click', function(e) {
		e.preventDefault();
		let payment = $(this).attr('href');
		$('.replenishment__variant-items a').removeClass('active blue_btn');
		$(this).addClass('active blue_btn');
		$('.replenishment__payment-block').removeClass('active');
		$(payment).addClass('active');
	});


	$('.replenishment .head__top a').on('click', function(e){
		e.preventDefault();
		let tab = $(this).attr('href');
		$('.replenishment__block').removeClass('active');
		$(tab).addClass('active');
	});
/* Replenishment end */

/* Upgrade */
	$('.profile__things-item').on('click', function() {
		$(this).toggleClass('checked');
	});

	let eq = $('.upgrade__items .contract__item.visible').eq(2);
	eq.addClass('line');

	
	// Skin / Balance
	let	skinBtn = $('.skinBtn');
	let	balanceBtn = $('.balanceBtn');

	skinBtn.on('click', function(e) {
		e.preventDefault();
		$('.balanceBtn').removeClass('active');
		$(this).addClass('active');
		$('#balance').removeClass('visible');
		$('#skin').addClass('visible');
	});

	balanceBtn.on('click', function(e) {
		e.preventDefault();
		$('.skinBtn').removeClass('active');
		$(this).addClass('active');
		$('#skin').removeClass('visible');
		$('#balance').addClass('visible');
	});
	// Skin / Balance end

	//Chance
	$('.upgrade__thing.upgrade .profile__things-item').on('click', function(){
		$('.contract__item.empty').removeClass('visible');
		$('.contract__item.gun').addClass('visible');
		$('.contract__item.center').removeClass('visible');
		$('.contract__item.chance').addClass('visible');
	});



	//$('#percent').on('change', function(){
		let val = 65;
		let $circle = $('#svg #bar');
		
		if (isNaN(val)) {
		 val = 100; 
		}
		else{
		  let r = $circle.attr('r');
		  let c = Math.PI*(r*2);
		 
		  if (val < 0) { val = 0;}
		  if (val > 100) { val = 100;}
		  
		  let pct = ((100-val)/100)*c;
		  
		  $circle.css({ strokeDashoffset: pct});
		  
		  $('#cont').attr('data-pct',val);
		}
	  //});

	//Chance end

	//Start, Fail, Success
	$('.contract__item.chance .item-info__button a').on('click', function(e) {
		e.preventDefault();
		$('.contract__item.chance').removeClass('visible');
		$('.contract__item.probability').addClass('visible');

		setTimeout(function() {
			$('.contract__item.probability').removeClass('visible');
			$('.contract__item.fail').addClass('visible');
		}, 7000);

		setTimeout(function() {
			$('.contract__item.fail').removeClass('visible');
			$('.contract__item.success').addClass('visible');
		}, 8000);
	});
	//Start, Fail, Success end
/* Upgrade end */

/* Crash */
	$('.bid-auto__value input[type=text]').bind('keyup', function(){
	    var sanitized = $(this).val().replace(/[^0-9]/g,'');
	    $(this).val('X'+sanitized);
	});

	$('.crash__bid-button a:not(".get")').on('click', function(e) {
		e.preventDefault();
		$('.bid-clock__info .wait').hide();
		$('.bid-clock__info .skin').show();
		$(this).hide().next('.get').show();

		setTimeout(function(){
			$('.crash__popup').addClass('active');
		}, 1000);
	});

	$('.popup__close').on('click', function() {
		$('.popup').removeClass('active');
	});
/* Crsh end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG4kKCcuanEtc2VsZWN0Ym94X190cmlnZ2VyJykuYWRkQ2xhc3MoJ2J0biBibHVlX2J0bicpO1xyXG5cclxuJCgnLmNhc2VzX19pdGVtLWZhdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxufSk7XHJcblxyXG4vKiBNZW51ICovXHJcblx0JCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHQkKCcuYXNpZGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHR9KTtcclxuLyogTWVudSBlbmQqL1xyXG5cclxuLyogQ2FyZHMgKi9cclxuXHQkKCcuY2FyZCAuY2FyZHNfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlIGFjdGl2ZScpO1xyXG5cdH0pO1xyXG4vKiBDYXJkcyBlbmQgKi9cclxuXHJcbi8qIFByb2ZpbGUgKi9cclxuXHQkKCcudGhpbmdzLWl0ZW1fX2hlYWQgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJy5wb3B1cF9fc2VsbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuLyogUHJvZmlsZSBlbmQgKi9cclxuXHJcbi8qIEluZm8gKi9cclxuXHQkKCcuYm9udXNfX2luZm8tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5oaWRkZW4nKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkuZmluZCgnLmRvdHMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5ib251c19fY2FyZHMtdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG5cdH0pO1xyXG4vKiBJbmZvICovXHJcblxyXG4vKiBGYXEgKi9cclxuXHQkKCcuZmFxX19pdGVtLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCkuc2xpZGVUb2dnbGUoMzAwKTtcclxuXHR9KTtcclxuLyogRmFxIGVuZCAqL1xyXG5cclxuLyogUmVwbGVuaXNobWVudCAqL1xyXG5cdCQoJy5yZXBsZW5pc2htZW50X192YXJpYW50LWl0ZW1zIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgcGF5bWVudCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0JCgnLnJlcGxlbmlzaG1lbnRfX3ZhcmlhbnQtaXRlbXMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgYmx1ZV9idG4nKTtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBibHVlX2J0bicpO1xyXG5cdFx0JCgnLnJlcGxlbmlzaG1lbnRfX3BheW1lbnQtYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHBheW1lbnQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdCQoJy5yZXBsZW5pc2htZW50IC5oZWFkX190b3AgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRhYiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0JCgnLnJlcGxlbmlzaG1lbnRfX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0YWIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuLyogUmVwbGVuaXNobWVudCBlbmQgKi9cclxuXHJcbi8qIFVwZ3JhZGUgKi9cclxuXHQkKCcucHJvZmlsZV9fdGhpbmdzLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuXHR9KTtcclxuXHJcblx0bGV0IGVxID0gJCgnLnVwZ3JhZGVfX2l0ZW1zIC5jb250cmFjdF9faXRlbS52aXNpYmxlJykuZXEoMik7XHJcblx0ZXEuYWRkQ2xhc3MoJ2xpbmUnKTtcclxuXHJcblx0XHJcblx0Ly8gU2tpbiAvIEJhbGFuY2VcclxuXHRsZXRcdHNraW5CdG4gPSAkKCcuc2tpbkJ0bicpO1xyXG5cdGxldFx0YmFsYW5jZUJ0biA9ICQoJy5iYWxhbmNlQnRuJyk7XHJcblxyXG5cdHNraW5CdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmJhbGFuY2VCdG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJyNiYWxhbmNlJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCQoJyNza2luJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHR9KTtcclxuXHJcblx0YmFsYW5jZUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcuc2tpbkJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnI3NraW4nKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0JCgnI2JhbGFuY2UnKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cdH0pO1xyXG5cdC8vIFNraW4gLyBCYWxhbmNlIGVuZFxyXG5cclxuXHQvL0NoYW5jZVxyXG5cdCQoJy51cGdyYWRlX190aGluZy51cGdyYWRlIC5wcm9maWxlX190aGluZ3MtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuY29udHJhY3RfX2l0ZW0uZW1wdHknKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0JCgnLmNvbnRyYWN0X19pdGVtLmd1bicpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcblx0XHQkKCcuY29udHJhY3RfX2l0ZW0uY2VudGVyJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCQoJy5jb250cmFjdF9faXRlbS5jaGFuY2UnKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cdC8vJCgnI3BlcmNlbnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHRcdGxldCB2YWwgPSA2NTtcclxuXHRcdGxldCAkY2lyY2xlID0gJCgnI3N2ZyAjYmFyJyk7XHJcblx0XHRcclxuXHRcdGlmIChpc05hTih2YWwpKSB7XHJcblx0XHQgdmFsID0gMTAwOyBcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHQgIGxldCByID0gJGNpcmNsZS5hdHRyKCdyJyk7XHJcblx0XHQgIGxldCBjID0gTWF0aC5QSSoocioyKTtcclxuXHRcdCBcclxuXHRcdCAgaWYgKHZhbCA8IDApIHsgdmFsID0gMDt9XHJcblx0XHQgIGlmICh2YWwgPiAxMDApIHsgdmFsID0gMTAwO31cclxuXHRcdCAgXHJcblx0XHQgIGxldCBwY3QgPSAoKDEwMC12YWwpLzEwMCkqYztcclxuXHRcdCAgXHJcblx0XHQgICRjaXJjbGUuY3NzKHsgc3Ryb2tlRGFzaG9mZnNldDogcGN0fSk7XHJcblx0XHQgIFxyXG5cdFx0ICAkKCcjY29udCcpLmF0dHIoJ2RhdGEtcGN0Jyx2YWwpO1xyXG5cdFx0fVxyXG5cdCAgLy99KTtcclxuXHJcblx0Ly9DaGFuY2UgZW5kXHJcblxyXG5cdC8vU3RhcnQsIEZhaWwsIFN1Y2Nlc3NcclxuXHQkKCcuY29udHJhY3RfX2l0ZW0uY2hhbmNlIC5pdGVtLWluZm9fX2J1dHRvbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmNvbnRyYWN0X19pdGVtLmNoYW5jZScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcblx0XHQkKCcuY29udHJhY3RfX2l0ZW0ucHJvYmFiaWxpdHknKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5jb250cmFjdF9faXRlbS5wcm9iYWJpbGl0eScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcblx0XHRcdCQoJy5jb250cmFjdF9faXRlbS5mYWlsJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdH0sIDcwMDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5jb250cmFjdF9faXRlbS5mYWlsJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdFx0JCgnLmNvbnRyYWN0X19pdGVtLnN1Y2Nlc3MnKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0fSwgODAwMCk7XHJcblx0fSk7XHJcblx0Ly9TdGFydCwgRmFpbCwgU3VjY2VzcyBlbmRcclxuLyogVXBncmFkZSBlbmQgKi9cclxuXHJcbi8qIENyYXNoICovXHJcblx0JCgnLmJpZC1hdXRvX192YWx1ZSBpbnB1dFt0eXBlPXRleHRdJykuYmluZCgna2V5dXAnLCBmdW5jdGlvbigpe1xyXG5cdCAgICB2YXIgc2FuaXRpemVkID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywnJyk7XHJcblx0ICAgICQodGhpcykudmFsKCdYJytzYW5pdGl6ZWQpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuY3Jhc2hfX2JpZC1idXR0b24gYTpub3QoXCIuZ2V0XCIpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmJpZC1jbG9ja19faW5mbyAud2FpdCcpLmhpZGUoKTtcclxuXHRcdCQoJy5iaWQtY2xvY2tfX2luZm8gLnNraW4nKS5zaG93KCk7XHJcblx0XHQkKHRoaXMpLmhpZGUoKS5uZXh0KCcuZ2V0Jykuc2hvdygpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLmNyYXNoX19wb3B1cCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcucG9wdXBfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIENyc2ggZW5kICovIl0sImZpbGUiOiJtYWluLmpzIn0=
