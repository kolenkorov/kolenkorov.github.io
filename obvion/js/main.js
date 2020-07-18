let userAgent = navigator.userAgent.toLowerCase();
let pr = window.devicePixelRatio; 
let ff = /firefox/.test(userAgent);

$(window).on('load', function(){
	if(ff && (pr > 1) && $(window).width() > 1100) {
		$('.container').css({transform: 'scale(0.8)', width: '125%'});
		$('.container').css('transform-origin', '0 0');

		/*setTimeout(function(){
			let mt = -($('html').outerHeight() / 100 * 20);
			$('.container').css('margin-top', mt);
		}, 10);*/

		setTimeout(function(){
			let cH = $('.container').height() - ($('.container').height() / 100 * 20);
			console.log(cH);
			$('.wrap').css({
				height: cH,
				overflow: 'hidden'
			});
		}, 10);

		$('.footer').css('padding-bottom', '26px');
	}
});


/* Dropdown */
	$('.main__dropdown-top').on('click', function(){
		$(this).next('.main__dropdown-block').slideToggle(400);
		$(this).toggleClass('active');

		// $(this).next().mCustomScrollbar("disable");
		//$('.main__dropdown-block').mCustomScrollbar("update");
			/*setTimeout(function(){
				let mt = -($('.container').outerHeight() / 100 * 20);
				$('.container').css('margin-top', mt);
			}, 400);*/
			/*$('.container').animate({
				MarginTop: mt
			}, 400);*/
			
		if(ff && (pr > 1) && $(window).width() > 1100) {
			setTimeout(function(){
				let cH = $('.container').height() - ($('.container').height() / 100 * 20);
				console.log(cH);
				$('.wrap').css({
					height: cH,
					overflow: 'hidden'
				});
			}, 400);
		}
	});

	$('.dropdown-top__search input').on('click', function() {
		return false;
	});
/* Dropdown end */

/* Menu */
	$('.header__burger').on('click', function(){
		$(this).toggleClass('active');
		$('.aside').toggleClass('active');
	});
/* Menu end */

$('.acquainted').on('click', function(){
	$(this).addClass('active');
	$('.popup__wallet-cover').removeClass('hide');
	$('.popup__wallet label span').removeClass('active');
	$('.popup__wallet label .after').addClass('active');
});

$('select').styler();

/*$('.header-item__button a').on('click', function(){
	$(this).parent().hide();
		if(ff && (pr > 1) && $(window).width() > 1100) {
			let cH = $('.container').height() - ($('.container').height() / 100 * 20);
			console.log(cH);
			$('.wrap').css({
				height: cH,
				overflow: 'hidden'
			});
		}
});*/

/* Magnific popup */
	$(document).ready(function(){
		$('.replenish').magnificPopup({
			items: [
				{
					src: '.popup__warning',
					type: 'inline'
				}
			],

			callbacks: {
				open: function() {
					if((pr > 1) && ($(window).width() > 1100) && $(window).height() > 700) {
						$('.mfp-wrap').css({
							height: '100%',
							position: 'fixed',
							top: '0'
						});
					}

					if(ff && (pr > 1)) {
						$('.mfp-wrap').css({
							transform: 'scale(0.8)',
						});
					}
				},
			}
		});
		$('.partner').magnificPopup({
			items: [
				{
					src: '.popup__partner',
					type: 'inline'
				}
			],

			callbacks: {
				change: function() {
					console.log('asdad');
				},
			}
		});
	});
/*Magnific popup*/

$('body').on('click', '#popupWallet', function(){
	var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(this).text()).select();
    document.execCommand("copy");

    $('.popup__wallet label span').removeClass('active');
    $('.popup__wallet label .copied').addClass('active');					    
    // $tmp.remove();
});

$('.block__item-cover + .dropdown-block__level').prev().on('click', function(){
	$(this).toggleClass('active');
	$(this).next().toggleClass('open').slideToggle(200);
	
	// $('.dropdown-block__level.open + .block__item-cover').addClass('first').prev().prev().addClass('last');
	// $(this).next().hasClass('open').next().addClass('first').prev().prev().addClass('last');
	if($(this).next().hasClass('open')) {
		$(this).next().next().addClass('first').prev().prev().addClass('last')
	} else {
		$(this).next().next().removeClass('first').prev().prev().removeClass('last')
	}
});

function CopyToClipboard(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");

    $('.copy').addClass('active');
    setTimeout(function() {
    	$('.copy').removeClass('active');
    }, 3000);
    
    $tmp.remove();
}

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

jQuery.fn.extend({ 
  disableSelection : function() { 
    this.each(function() { 
      this.onselectstart = function() { return false; }; 
      this.unselectable = "on"; 
 
      jQuery(this).css({ 
        '-moz-user-select': 'none',
        '-o-user-select': 'none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
      }); 
 
      // Для Opera 
      jQuery(this).bind('mousedown', function() { return false; }); 
    }); 
  } 
});

$('.main__top .top-item__val.sponsor').disableSelection();

$('#contractSlider').owlCarousel({
	items: 1,
	loop: false,
	margin: 50,
	dots: true,
	nav: true,
	navText: ['<div class="graph-slider__left"><i class="flaticon-left-arrow"></i></div>', '<div class="graph-slider__right"><i class="flaticon-right-arrow"></i></div>'],
	animateIn: 'fadeIn',
	// animateOut: 'fadeOut',
	fluidSpeed: 100,
});
$('#contractSlider .owl-dot:nth-child(n11)').hide();

$('#contractSlider').on('changed.owl.carousel', function(){
	console.log('test');
	if($('#contractSlider .owl-dot:nth-child(10)').hasClass('active')) {
		$('#contractSlider .owl-dot').hide();
		$('#contractSlider .owl-dot:nth-child(n+11):nth-child(-n+20)').show();
	}

	if($('#contractSlider .owl-dot:nth-child(20)').hasClass('active')) {
		$('#contractSlider .owl-dot').hide();
		$('#contractSlider .owl-dot:nth-child(n+21):nth-child(-n+30)').show();
	}
});

let dot = $('#contractSlider .owl-dot');
	dot.each(function() {
		let index = $(this).index() + 1;
		$(this).html(index);
	});

let curr = $('#contractSlider .owl-dot').length;
console.log(curr);

/*$('#contractSlider .owl-dot:nth-child(n11)').hide();
$('.owl-dot').on('click', function(){
	if($('#contractSlider .owl-dot:nth-child(9)').hasClass('active')) {
		$('#contractSlider .owl-dot').hide();
		$('#contractSlider .owl-dot:nth-child(n+11):nth-child(-n+20)').show();
	}

	if($('#contractSlider .owl-dot:nth-child(19)').hasClass('active')) {
		$('#contractSlider .owl-dot').hide();
		$('#contractSlider .owl-dot:nth-child(n+21):nth-child(-n+30)').show();
	}
});*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmxldCBwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcclxubGV0IGZmID0gL2ZpcmVmb3gvLnRlc3QodXNlckFnZW50KTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJywgd2lkdGg6ICcxMjUlJ30pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDAnKTtcclxuXHJcblx0XHQvKnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0bGV0IG10ID0gLSgkKCdodG1sJykub3V0ZXJIZWlnaHQoKSAvIDEwMCAqIDIwKTtcclxuXHRcdFx0JCgnLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIG10KTtcclxuXHRcdH0sIDEwKTsqL1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0bGV0IGNIID0gJCgnLmNvbnRhaW5lcicpLmhlaWdodCgpIC0gKCQoJy5jb250YWluZXInKS5oZWlnaHQoKSAvIDEwMCAqIDIwKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY0gpO1xyXG5cdFx0XHQkKCcud3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0aGVpZ2h0OiBjSCxcclxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAxMCk7XHJcblxyXG5cdFx0JCgnLmZvb3RlcicpLmNzcygncGFkZGluZy1ib3R0b20nLCAnMjZweCcpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLyogRHJvcGRvd24gKi9cclxuXHQkKCcubWFpbl9fZHJvcGRvd24tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykubmV4dCgnLm1haW5fX2Ryb3Bkb3duLWJsb2NrJykuc2xpZGVUb2dnbGUoNDAwKTtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdC8vICQodGhpcykubmV4dCgpLm1DdXN0b21TY3JvbGxiYXIoXCJkaXNhYmxlXCIpO1xyXG5cdFx0Ly8kKCcubWFpbl9fZHJvcGRvd24tYmxvY2snKS5tQ3VzdG9tU2Nyb2xsYmFyKFwidXBkYXRlXCIpO1xyXG5cdFx0XHQvKnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgbXQgPSAtKCQoJy5jb250YWluZXInKS5vdXRlckhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0XHRcdCQoJy5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBtdCk7XHJcblx0XHRcdH0sIDQwMCk7Ki9cclxuXHRcdFx0LyokKCcuY29udGFpbmVyJykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0TWFyZ2luVG9wOiBtdFxyXG5cdFx0XHR9LCA0MDApOyovXHJcblx0XHRcdFxyXG5cdFx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgY0ggPSAkKCcuY29udGFpbmVyJykuaGVpZ2h0KCkgLSAoJCgnLmNvbnRhaW5lcicpLmhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNIKTtcclxuXHRcdFx0XHQkKCcud3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGNILFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDQwMCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQoJy5kcm9wZG93bi10b3BfX3NlYXJjaCBpbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG4vKiBEcm9wZG93biBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuYXNpZGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcblxyXG4kKCcuYWNxdWFpbnRlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLnBvcHVwX193YWxsZXQtY292ZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdCQoJy5wb3B1cF9fd2FsbGV0IGxhYmVsIHNwYW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLnBvcHVwX193YWxsZXQgbGFiZWwgLmFmdGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuLyokKCcuaGVhZGVyLWl0ZW1fX2J1dHRvbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcclxuXHRcdGlmKGZmICYmIChwciA+IDEpICYmICQod2luZG93KS53aWR0aCgpID4gMTEwMCkge1xyXG5cdFx0XHRsZXQgY0ggPSAkKCcuY29udGFpbmVyJykuaGVpZ2h0KCkgLSAoJCgnLmNvbnRhaW5lcicpLmhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjSCk7XHJcblx0XHRcdCQoJy53cmFwJykuY3NzKHtcclxuXHRcdFx0XHRoZWlnaHQ6IGNILFxyXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxufSk7Ki9cclxuXHJcbi8qIE1hZ25pZmljIHBvcHVwICovXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5yZXBsZW5pc2gnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3dhcm5pbmcnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblxyXG5cdFx0XHRjYWxsYmFja3M6IHtcclxuXHRcdFx0XHRvcGVuOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmKChwciA+IDEpICYmICgkKHdpbmRvdykud2lkdGgoKSA+IDExMDApICYmICQod2luZG93KS5oZWlnaHQoKSA+IDcwMCkge1xyXG5cdFx0XHRcdFx0XHQkKCcubWZwLXdyYXAnKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0XHRcdHRvcDogJzAnXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKGZmICYmIChwciA+IDEpKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5tZnAtd3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0JCgnLnBhcnRuZXInKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3BhcnRuZXInLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblxyXG5cdFx0XHRjYWxsYmFja3M6IHtcclxuXHRcdFx0XHRjaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2FzZGFkJyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbi8qTWFnbmlmaWMgcG9wdXAqL1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcjcG9wdXBXYWxsZXQnLCBmdW5jdGlvbigpe1xyXG5cdHZhciAkdG1wID0gJChcIjx0ZXh0YXJlYT5cIik7XHJcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQoJHRtcCk7XHJcbiAgICAkdG1wLnZhbCgkKHRoaXMpLnRleHQoKSkuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcblxyXG4gICAgJCgnLnBvcHVwX193YWxsZXQgbGFiZWwgc3BhbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wb3B1cF9fd2FsbGV0IGxhYmVsIC5jb3BpZWQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHRcdFx0XHRcdCAgICBcclxuICAgIC8vICR0bXAucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuJCgnLmJsb2NrX19pdGVtLWNvdmVyICsgLmRyb3Bkb3duLWJsb2NrX19sZXZlbCcpLnByZXYoKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdvcGVuJykuc2xpZGVUb2dnbGUoMjAwKTtcclxuXHRcclxuXHQvLyAkKCcuZHJvcGRvd24tYmxvY2tfX2xldmVsLm9wZW4gKyAuYmxvY2tfX2l0ZW0tY292ZXInKS5hZGRDbGFzcygnZmlyc3QnKS5wcmV2KCkucHJldigpLmFkZENsYXNzKCdsYXN0Jyk7XHJcblx0Ly8gJCh0aGlzKS5uZXh0KCkuaGFzQ2xhc3MoJ29wZW4nKS5uZXh0KCkuYWRkQ2xhc3MoJ2ZpcnN0JykucHJldigpLnByZXYoKS5hZGRDbGFzcygnbGFzdCcpO1xyXG5cdGlmKCQodGhpcykubmV4dCgpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuXHRcdCQodGhpcykubmV4dCgpLm5leHQoKS5hZGRDbGFzcygnZmlyc3QnKS5wcmV2KCkucHJldigpLmFkZENsYXNzKCdsYXN0JylcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkubmV4dCgpLnJlbW92ZUNsYXNzKCdmaXJzdCcpLnByZXYoKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ2xhc3QnKVxyXG5cdH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb3B5VG9DbGlwYm9hcmQoZWwpIHtcclxuICAgIHZhciAkdG1wID0gJChcIjx0ZXh0YXJlYT5cIik7XHJcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQoJHRtcCk7XHJcbiAgICAkdG1wLnZhbCgkKGVsKS50ZXh0KCkpLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG5cclxuICAgICQoJy5jb3B5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIFx0JCgnLmNvcHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9LCAzMDAwKTtcclxuICAgIFxyXG4gICAgJHRtcC5yZW1vdmUoKTtcclxufVxyXG5cclxuJCgnYS52aWRlbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgY3VycmVudCA9ICQodGhpcylcclxuXHRjdXJyZW50LmFkZENsYXNzKCdoaWRlJyk7XHJcblx0Y3VycmVudC5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRjdXJyZW50Lm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRjdXJyZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0fSwgNTUwMCk7XHJcbn0pO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7IFxyXG4gIGRpc2FibGVTZWxlY3Rpb24gOiBmdW5jdGlvbigpIHsgXHJcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7IFxyXG4gICAgICB0aGlzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9OyBcclxuICAgICAgdGhpcy51bnNlbGVjdGFibGUgPSBcIm9uXCI7IFxyXG4gXHJcbiAgICAgIGpRdWVyeSh0aGlzKS5jc3MoeyBcclxuICAgICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLW8tdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAgICAgJy1raHRtbC11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG4gICAgICB9KTsgXHJcbiBcclxuICAgICAgLy8g0JTQu9GPIE9wZXJhIFxyXG4gICAgICBqUXVlcnkodGhpcykuYmluZCgnbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSk7IFxyXG4gICAgfSk7IFxyXG4gIH0gXHJcbn0pO1xyXG5cclxuJCgnLm1haW5fX3RvcCAudG9wLWl0ZW1fX3ZhbC5zcG9uc29yJykuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG5cclxuJCgnI2NvbnRyYWN0U2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGl0ZW1zOiAxLFxyXG5cdGxvb3A6IGZhbHNlLFxyXG5cdG1hcmdpbjogNTAsXHJcblx0ZG90czogdHJ1ZSxcclxuXHRuYXY6IHRydWUsXHJcblx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiZ3JhcGgtc2xpZGVyX19sZWZ0XCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZ3JhcGgtc2xpZGVyX19yaWdodFwiPjxpIGNsYXNzPVwiZmxhdGljb24tcmlnaHQtYXJyb3dcIj48L2k+PC9kaXY+J10sXHJcblx0YW5pbWF0ZUluOiAnZmFkZUluJyxcclxuXHQvLyBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcblx0Zmx1aWRTcGVlZDogMTAwLFxyXG59KTtcclxuJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuMTEpJykuaGlkZSgpO1xyXG5cclxuJCgnI2NvbnRyYWN0U2xpZGVyJykub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oKXtcclxuXHRjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cdGlmKCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdDpudGgtY2hpbGQoMTApJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHQkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3QnKS5oaWRlKCk7XHJcblx0XHQkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3Q6bnRoLWNoaWxkKG4rMTEpOm50aC1jaGlsZCgtbisyMCknKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRpZigkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3Q6bnRoLWNoaWxkKDIwKScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90JykuaGlkZSgpO1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuKzIxKTpudGgtY2hpbGQoLW4rMzApJykuc2hvdygpO1xyXG5cdH1cclxufSk7XHJcblxyXG5sZXQgZG90ID0gJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Jyk7XHJcblx0ZG90LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0JCh0aGlzKS5odG1sKGluZGV4KTtcclxuXHR9KTtcclxuXHJcbmxldCBjdXJyID0gJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90JykubGVuZ3RoO1xyXG5jb25zb2xlLmxvZyhjdXJyKTtcclxuXHJcbi8qJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuMTEpJykuaGlkZSgpO1xyXG4kKCcub3dsLWRvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0aWYoJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZCg5KScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90JykuaGlkZSgpO1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuKzExKTpudGgtY2hpbGQoLW4rMjApJykuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0aWYoJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZCgxOSknKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdCcpLmhpZGUoKTtcclxuXHRcdCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdDpudGgtY2hpbGQobisyMSk6bnRoLWNoaWxkKC1uKzMwKScpLnNob3coKTtcclxuXHR9XHJcbn0pOyovIl0sImZpbGUiOiJtYWluLmpzIn0=
