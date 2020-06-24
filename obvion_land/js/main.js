let userAgent = navigator.userAgent.toLowerCase();
let pr = window.devicePixelRatio; 
let ff = /firefox/.test(userAgent);

$(window).on('load', function(){
	//if(ff && (pr > 1) && $(window).width() > 1100) {
	if(ff) {
		/*$('header').css({transform: 'scale(0.8)', width: '125%'});
		$('header').css('transform-origin', '0 0');
		$('.container').css({transform: 'scale(0.8)',width: '125%',});
		$('.container').css('transform-origin', '0 100%');*/

		let mt = -($('html').outerHeight() / 100 * 20);
		$('.container').css('margin-top', mt);

		/*$('html').css('scroll-behavior', 'smooth');
		$('html').css('scroll-padding-top', '85px');*/

		
		/*let	hh = $('.header').outerHeight();
		if($(window).width() <= 780) {
			hh = $('.header').outerHeight() +  40;
		}

		if($(window).width() <= 450) {
			hh = $('.header').outerHeight() +  30;
		}
		$('.header__menu-link').on('click', function(e){
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.offset().top - (hh - 20 + 31)
			}, 800);
		});*/
	}
	else {
		/*let	hh = $('.header').outerHeight();
		if($(window).width() <= 780) {
			hh = $('.header').outerHeight() +  20;
		}
		$('.header__menu-link').on('click', function(e){
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.offset().top - hh
			}, 800);
		});*/
	}

	/*if(ff) {
		$('body').css('overflow-x', 'hidden');
	}*/

	$('.header__logo, .up').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});

	$('.main__anim').addClass('animate');
	$('.main__item-img').on('click', function(){
		$('.main__anim').addClass('reverse');
		$('.main__anim').removeClass('animate');
		setTimeout(function(){
			$('.main__anim').removeClass('reverse');
		},2000);

		setTimeout(function(){
			$('.main__anim').addClass('animate');
		},3000);
	});
});

$(window).scroll(function(){
	if($(window).scrollTop() > 150) {
		$('.up').addClass('active');
	} else {
		$('.up').removeClass('active');
	}
});



/* Select */
	$('select').styler();
/* Select */

/* More */
	/*let more_h = $('.token__more-block').height() - 272;
	setTimeout(function(){
		$('.token__more-block').css('height', '0');
	}, 100);*/

	$('.token__more-button').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$('.token__more-block').slideToggle(800);
		// $('.token__more-block').toggleClass('open');
		//$('.token__more-block.open').css('height', more_h);


		/*if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
			$('.token__more-block.open').css('height', 0);
			$('.token__more-block').removeClass('open');
		} else {
			$(this).parent().addClass('active');
			$('.token__more-block').addClass('open');
			$('.token__more-block.open').css('height', more_h);
		}*/


		/*setTimeout(function(){
			$('.token__more-button').on('click', function(){
				if($(this).parent().hasClass('active')) {
					$('.token__more-block.open').css('height', 0);
					$('.token__more-block').removeClass('open');
				}
			});
		}, 100);*/
	});


		/*$('body').on('click', '.token__more.active', function(){
			console.log('ok');
			$('.token__more-block').removeClass('open');
			$('.token__more-block.open').css('height', '0');
		});*/


	$(document).mouseup(function (e){
	    let dropdown = $('.token__more-block');
	    if (!dropdown.is(e.target) 
	        && dropdown.has(e.target).length === 0) {
	        if (!$(e.target).hasClass('token__more-button')) {
	            dropdown.slideUp();
	            // dropdown.removeClass('open');
	            $('.token__more').removeClass('active');
	        }
	    }
	});
/* More end */

/* Menu */
	$('.header__burger').on('click', function(){
		$(this).toggleClass('active')
		$('.header__menu').toggleClass('active');
	});
/* Menu end */
$('a.video').on('click', function(e){
	e.preventDefault();
	let current = $(this)
	current.addClass('hide');
	current.next().addClass('active');

	setTimeout(function(){
		current.next().removeClass('active');
		current.removeClass('hide');
	}, 5500);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmxldCBwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcclxubGV0IGZmID0gL2ZpcmVmb3gvLnRlc3QodXNlckFnZW50KTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0Ly9pZihmZiAmJiAocHIgPiAxKSAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDExMDApIHtcclxuXHRpZihmZikge1xyXG5cdFx0LyokKCdoZWFkZXInKS5jc3Moe3RyYW5zZm9ybTogJ3NjYWxlKDAuOCknLCB3aWR0aDogJzEyNSUnfSk7XHJcblx0XHQkKCdoZWFkZXInKS5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCAwJyk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyx3aWR0aDogJzEyNSUnLH0pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDEwMCUnKTsqL1xyXG5cclxuXHRcdGxldCBtdCA9IC0oJCgnaHRtbCcpLm91dGVySGVpZ2h0KCkgLyAxMDAgKiAyMCk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgbXQpO1xyXG5cclxuXHRcdC8qJCgnaHRtbCcpLmNzcygnc2Nyb2xsLWJlaGF2aW9yJywgJ3Ntb290aCcpO1xyXG5cdFx0JCgnaHRtbCcpLmNzcygnc2Nyb2xsLXBhZGRpbmctdG9wJywgJzg1cHgnKTsqL1xyXG5cclxuXHRcdFxyXG5cdFx0LypsZXRcdGhoID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA3ODApIHtcclxuXHRcdFx0aGggPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKSArICA0MDtcclxuXHRcdH1cclxuXHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA0NTApIHtcclxuXHRcdFx0aGggPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKSArICAzMDtcclxuXHRcdH1cclxuXHRcdCQoJy5oZWFkZXJfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IGgub2Zmc2V0KCkudG9wIC0gKGhoIC0gMjAgKyAzMSlcclxuXHRcdFx0fSwgODAwKTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0LypsZXRcdGhoID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA3ODApIHtcclxuXHRcdFx0aGggPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKSArICAyMDtcclxuXHRcdH1cclxuXHRcdCQoJy5oZWFkZXJfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IGgub2Zmc2V0KCkudG9wIC0gaGhcclxuXHRcdFx0fSwgODAwKTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG5cclxuXHQvKmlmKGZmKSB7XHJcblx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy14JywgJ2hpZGRlbicpO1xyXG5cdH0qL1xyXG5cclxuXHQkKCcuaGVhZGVyX19sb2dvLCAudXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAwXHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcubWFpbl9fYW5pbScpLmFkZENsYXNzKCdhbmltYXRlJyk7XHJcblx0JCgnLm1haW5fX2l0ZW0taW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5tYWluX19hbmltJykuYWRkQ2xhc3MoJ3JldmVyc2UnKTtcclxuXHRcdCQoJy5tYWluX19hbmltJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLm1haW5fX2FuaW0nKS5yZW1vdmVDbGFzcygncmV2ZXJzZScpO1xyXG5cdFx0fSwyMDAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5tYWluX19hbmltJykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcclxuXHRcdH0sMzAwMCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDE1MCkge1xyXG5cdFx0JCgnLnVwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcudXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG5cclxuLyogU2VsZWN0ICovXHJcblx0JCgnc2VsZWN0Jykuc3R5bGVyKCk7XHJcbi8qIFNlbGVjdCAqL1xyXG5cclxuLyogTW9yZSAqL1xyXG5cdC8qbGV0IG1vcmVfaCA9ICQoJy50b2tlbl9fbW9yZS1ibG9jaycpLmhlaWdodCgpIC0gMjcyO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy50b2tlbl9fbW9yZS1ibG9jaycpLmNzcygnaGVpZ2h0JywgJzAnKTtcclxuXHR9LCAxMDApOyovXHJcblxyXG5cdCQoJy50b2tlbl9fbW9yZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnRva2VuX19tb3JlLWJsb2NrJykuc2xpZGVUb2dnbGUoODAwKTtcclxuXHRcdC8vICQoJy50b2tlbl9fbW9yZS1ibG9jaycpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQvLyQoJy50b2tlbl9fbW9yZS1ibG9jay5vcGVuJykuY3NzKCdoZWlnaHQnLCBtb3JlX2gpO1xyXG5cclxuXHJcblx0XHQvKmlmKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKCcudG9rZW5fX21vcmUtYmxvY2sub3BlbicpLmNzcygnaGVpZ2h0JywgMCk7XHJcblx0XHRcdCQoJy50b2tlbl9fbW9yZS1ibG9jaycpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCgnLnRva2VuX19tb3JlLWJsb2NrJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0JCgnLnRva2VuX19tb3JlLWJsb2NrLm9wZW4nKS5jc3MoJ2hlaWdodCcsIG1vcmVfaCk7XHJcblx0XHR9Ki9cclxuXHJcblxyXG5cdFx0LypzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy50b2tlbl9fbW9yZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKCcudG9rZW5fX21vcmUtYmxvY2sub3BlbicpLmNzcygnaGVpZ2h0JywgMCk7XHJcblx0XHRcdFx0XHQkKCcudG9rZW5fX21vcmUtYmxvY2snKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LCAxMDApOyovXHJcblx0fSk7XHJcblxyXG5cclxuXHRcdC8qJCgnYm9keScpLm9uKCdjbGljaycsICcudG9rZW5fX21vcmUuYWN0aXZlJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ29rJyk7XHJcblx0XHRcdCQoJy50b2tlbl9fbW9yZS1ibG9jaycpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdCQoJy50b2tlbl9fbW9yZS1ibG9jay5vcGVuJykuY3NzKCdoZWlnaHQnLCAnMCcpO1xyXG5cdFx0fSk7Ki9cclxuXHJcblxyXG5cdCQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG5cdCAgICBsZXQgZHJvcGRvd24gPSAkKCcudG9rZW5fX21vcmUtYmxvY2snKTtcclxuXHQgICAgaWYgKCFkcm9wZG93bi5pcyhlLnRhcmdldCkgXHJcblx0ICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygndG9rZW5fX21vcmUtYnV0dG9uJykpIHtcclxuXHQgICAgICAgICAgICBkcm9wZG93bi5zbGlkZVVwKCk7XHJcblx0ICAgICAgICAgICAgLy8gZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHQgICAgICAgICAgICAkKCcudG9rZW5fX21vcmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHR9KTtcclxuLyogTW9yZSBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcbiQoJ2EudmlkZW8nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGN1cnJlbnQgPSAkKHRoaXMpXHJcblx0Y3VycmVudC5hZGRDbGFzcygnaGlkZScpO1xyXG5cdGN1cnJlbnQubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0Y3VycmVudC5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0Y3VycmVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdH0sIDU1MDApO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
