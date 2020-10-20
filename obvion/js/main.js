let userAgent = navigator.userAgent.toLowerCase();
let pr = window.devicePixelRatio; 
let ff = /firefox/.test(userAgent);

$(window).on('load', function(){
	if(ff && (pr > 1) && $(window).width() > 1100) {
		$('.container').css({transform: 'scale(0.8)', width: '125%'});
		$('.container').css('transform-origin', '0 0');

		setTimeout(function(){
			let cH = $('.container').height() - ($('.container').height() / 100 * 20);
			console.log(cH);
			$('.wrap').css({
				height: cH,
				overflow: 'hidden'
			});
		}, 110);

		$('.footer').css('padding-bottom', '26px');
	}

	let header_h = $('header').outerHeight();
	$('.status').css('top', header_h);

	$('.status__close').on('click', function() {
		$(this).parent().removeClass('active');
	});
});


/* Dropdown */
	$('.main__dropdown-top').on('click', function(){
		$(this).next('.main__dropdown-block').slideToggle(400);
		$(this).toggleClass('active');
			
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

		if ($(window).width() <= 450){
			$('html').toggleClass('hidden');
		}
	});

	$(window).on('load', function() {
		if ($(window).width() <= 450){
			let hh = $('.header').outerHeight();
		}
	});

/* Menu end */

$('.acquainted').on('click', function(e){
	e.preventDefault();

	$('.notification').removeClass('active');
	$('.popup__bottom-notification').addClass('active');

	setTimeout(function() {
		$('.popup__bottom-notification').removeClass('active');
	}, 5000);


	setTimeout(function() {
		$('.status.deposit.status__pending').addClass('active');
	}, 4000);
	
	setTimeout(function() {
		$('.status.deposit.status__pending').removeClass('active');
	}, 9000);

	setTimeout(function() {
		$('.status.deposit.status__confirm').addClass('active');
	}, 11000);

	setTimeout(function() {
		$('.status.deposit.status__confirm').removeClass('active');
	}, 16000);

	setTimeout(function() {
		$('.status.deposit.status__refused').addClass('active');
	}, 18000);

	setTimeout(function() {
		$('.status.deposit.status__refused').removeClass('active');
	}, 23000);
});

$('.google').on('click', function(e){
	e.preventDefault();

	$('.popup__secret-key').toggleClass('active');
	$(this).toggleClass('active');
});

$('select').styler();


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
					if((pr > 1.2) && ($(window).width() > 1100) && $(window).height() > 700) {
						$('.mfp-wrap').css({
							height: '100%',
							position: 'fixed',
							top: '0'
						});
					}

					if(ff && (pr > 1.2)) {
						$('.mfp-wrap').css({
							transform: 'scale(0.8)',
						});
					}

					$('html').removeClass('hidden');

					$('.popup__secret-key').removeClass('active');
					$('.popup__bottom a.google').removeClass('active');

					if ($(window).width() >= 960) {
						let p_widht = $('.popup__warning').outerHeight();
						$('.popup__partner').css('height', p_widht);
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
		});
	});
/*Magnific popup*/

$('.popup__wallet a').on('click', function(e){
	e.preventDefault();
});

$('.block__item-cover + .dropdown-block__level').prev().on('click', function(){
	$(this).toggleClass('active');
	$(this).next().toggleClass('open').slideToggle(200);
	
	if($(this).next().hasClass('open')) {
		$(this).next().next().addClass('first').prev().prev().addClass('last')
	} else {
		$(this).next().next().removeClass('first').prev().prev().removeClass('last')
	}

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

let timeout;

function CopyToClipboard(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");

    $('.notification').removeClass('active');

   	$('.copy').removeClass('active');
    if(timeout) {
		clearTimeout(timeout)
	}
   	setTimeout(function() {	
   		$('.copy').addClass('active');
    }, 250);
    timeout = setTimeout(function() {
    	$('.copy').removeClass('active').addClass('test');
    }, 3000);
    
    $tmp.remove();
}

$('a.video, .soon a').on('click', function(e){
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

$('.metamask a').on('click', function() {
	$('.notification').removeClass('active');
	$('.metamask_text').addClass('active');

	setTimeout(function(){
		$('.metamask_text').removeClass('active');
	}, 60000);

	$('.status.output.status__pending').addClass('active');
	setTimeout(function() {
		$('.status.output.status__pending').removeClass('active');
	}, 5000);

	setTimeout(function() {
		$('.status.output.status__confirm').addClass('active');
	}, 7000);

	setTimeout(function() {
		$('.status.output.status__confirm').removeClass('active');
	}, 12000);

	setTimeout(function() {
		$('.status.output.status__refused').addClass('active');
	}, 14000);

	setTimeout(function() {
		$('.status.output.status__refused').removeClass('active');
	}, 19000);
});

$('.sell-obi').on('click', function() {
	$('.notification').removeClass('active');
	$('.sell').addClass('active');

	setTimeout(function(){
		$('.sell').removeClass('active');
	}, 30000);


	$('.status.sell_obi.status__pending').addClass('active');
	setTimeout(function() {
		$('.status.sell_obi.status__pending').removeClass('active');
	}, 5000);

	setTimeout(function() {
		$('.status.sell_obi.status__confirm').addClass('active');
	}, 7000);

	setTimeout(function() {
		$('.status.sell_obi.status__confirm').removeClass('active');
	}, 12000);

	setTimeout(function() {
		$('.status.sell_obi.status__refused').addClass('active');
	}, 14000);

	setTimeout(function() {
		$('.status.deposit.status__refused').removeClass('active');
	}, 19000);
});

window.addEventListener("orientationchange", function() {
   	window.location.reload();
}, false);

setTimeout(function() {
	$('.loading-data').removeClass('active');
}, 5500);

setTimeout(function() {
	$('.notification').removeClass('active');
	$('.warning').addClass('active');

	setTimeout(function() {
		$('.warning').removeClass('active');
	}, 60000);
}, 10500);


$(window).on('load', function(){
	setTimeout(function(){

		let h_graph = $('.main__graph-items .slick-active .main__graph').outerHeight();
		$('.main__graph-items .main__graph').css('height', h_graph);
		let h_diagram = $('.diagram').outerHeight();
		let h_head = $('.main__graph-head').outerHeight();
		console.log(h_diagram);
		$('.main__graph-items .slick-slide').css('max-height', h_diagram+h_head+100);
		
	}, 100);
});

$('.status .top-item__val .active').on('click', function() {
	$(this).removeClass('visible');
	$('.status .top-item__val .noactive').addClass('visible');
});

$('.status .top-item__val .noactive').on('click', function() {
	$(this).removeClass('visible');
	$('.status .top-item__val .active').addClass('visible');
});

$('.graph-slider__icon').on('click', function(){
	$(this).next().toggle().next().toggle();
});

$('#contractSlider').owlCarousel({
	items: 1,
	loop: false,
	margin: 30,
	dots: true,
	nav: true,
	navText: ['<div class="graph-slider__left"><i class="flaticon-left-arrow"></i></div>', '<div class="graph-slider__right"><i class="flaticon-right-arrow"></i></div>'],
	animateIn: 'fadeIn',
	// animateOut: 'fadeOut',
	fluidSpeed: 100,
});
$('#contractSlider .owl-dot:nth-child(n11)').hide();

$('#contractSlider').on('changed.owl.carousel', function(){
	if($('#contractSlider .owl-dot:nth-child(11)').hasClass('active')) {
		$('#contractSlider .owl-dot').addClass('hide');
		$('#contractSlider .owl-dot:nth-child(n+11):nth-child(-n+20)').removeClass('hide').addClass('show');
	}

	if($('#contractSlider .owl-dot:nth-child(21)').hasClass('active')) {
		$('#contractSlider .owl-dot').addClass('hide');
		$('#contractSlider .owl-dot:nth-child(n+21):nth-child(-n+30)').removeClass('hide').addClass('show');
	}
});

$('#contractSlider .owl-prev').on('click', function(){
	console.log('test');
	if($('#contractSlider .owl-dot:nth-child(20)').hasClass('active')) {
		$('#contractSlider .owl-dot').addClass('hide');
		$('#contractSlider .owl-dot:nth-child(n+11):nth-child(-n+20)').removeClass('hide').addClass('show');
	}

	if($('#contractSlider .owl-dot:nth-child(10)').hasClass('active')) {
		$('#contractSlider .owl-dot').hide().addClass('hide');
		$('#contractSlider .owl-dot:nth-child(n+1):nth-child(-n+10)').removeClass('hide').addClass('show');
	}
});
let dot = $('#contractSlider .owl-dot');
	dot.each(function() {
		let index = $(this).index() + 1;
		$(this).html(index);
	});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmxldCBwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcclxubGV0IGZmID0gL2ZpcmVmb3gvLnRlc3QodXNlckFnZW50KTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJywgd2lkdGg6ICcxMjUlJ30pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDAnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxldCBjSCA9ICQoJy5jb250YWluZXInKS5oZWlnaHQoKSAtICgkKCcuY29udGFpbmVyJykuaGVpZ2h0KCkgLyAxMDAgKiAyMCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNIKTtcclxuXHRcdFx0JCgnLndyYXAnKS5jc3Moe1xyXG5cdFx0XHRcdGhlaWdodDogY0gsXHJcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMTEwKTtcclxuXHJcblx0XHQkKCcuZm9vdGVyJykuY3NzKCdwYWRkaW5nLWJvdHRvbScsICcyNnB4Jyk7XHJcblx0fVxyXG5cclxuXHRsZXQgaGVhZGVyX2ggPSAkKCdoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdCQoJy5zdGF0dXMnKS5jc3MoJ3RvcCcsIGhlYWRlcl9oKTtcclxuXHJcblx0JCgnLnN0YXR1c19fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiBEcm9wZG93biAqL1xyXG5cdCQoJy5tYWluX19kcm9wZG93bi10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5uZXh0KCcubWFpbl9fZHJvcGRvd24tYmxvY2snKS5zbGlkZVRvZ2dsZSg0MDApO1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFxyXG5cdFx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgY0ggPSAkKCcuY29udGFpbmVyJykuaGVpZ2h0KCkgLSAoJCgnLmNvbnRhaW5lcicpLmhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNIKTtcclxuXHRcdFx0XHQkKCcud3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGNILFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDQwMCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQoJy5kcm9wZG93bi10b3BfX3NlYXJjaCBpbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG4vKiBEcm9wZG93biBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuYXNpZGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ1MCl7XHJcblx0XHRcdCQoJ2h0bWwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ1MCl7XHJcblx0XHRcdGxldCBoaCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuLyogTWVudSBlbmQgKi9cclxuXHJcbiQoJy5hY3F1YWludGVkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQkKCcubm90aWZpY2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJy5wb3B1cF9fYm90dG9tLW5vdGlmaWNhdGlvbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5wb3B1cF9fYm90dG9tLW5vdGlmaWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCA1MDAwKTtcclxuXHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuc3RhdHVzLmRlcG9zaXQuc3RhdHVzX19wZW5kaW5nJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDQwMDApO1xyXG5cdFxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuc3RhdHVzLmRlcG9zaXQuc3RhdHVzX19wZW5kaW5nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDkwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5kZXBvc2l0LnN0YXR1c19fY29uZmlybScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCAxMTAwMCk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuc3RhdHVzLmRlcG9zaXQuc3RhdHVzX19jb25maXJtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDE2MDAwKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5zdGF0dXMuZGVwb3NpdC5zdGF0dXNfX3JlZnVzZWQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSwgMTgwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5kZXBvc2l0LnN0YXR1c19fcmVmdXNlZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCAyMzAwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmdvb2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0JCgnLnBvcHVwX19zZWNyZXQta2V5JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuXHJcbi8qIE1hZ25pZmljIHBvcHVwICovXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5yZXBsZW5pc2gnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3dhcm5pbmcnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblxyXG5cdFx0XHRjYWxsYmFja3M6IHtcclxuXHRcdFx0XHRvcGVuOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmKChwciA+IDEuMikgJiYgKCQod2luZG93KS53aWR0aCgpID4gMTEwMCkgJiYgJCh3aW5kb3cpLmhlaWdodCgpID4gNzAwKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5tZnAtd3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAnMCdcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoZmYgJiYgKHByID4gMS4yKSkge1xyXG5cdFx0XHRcdFx0XHQkKCcubWZwLXdyYXAnKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHRcdCQoJy5wb3B1cF9fc2VjcmV0LWtleScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQoJy5wb3B1cF9fYm90dG9tIGEuZ29vZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA5NjApIHtcclxuXHRcdFx0XHRcdFx0bGV0IHBfd2lkaHQgPSAkKCcucG9wdXBfX3dhcm5pbmcnKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdFx0XHQkKCcucG9wdXBfX3BhcnRuZXInKS5jc3MoJ2hlaWdodCcsIHBfd2lkaHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0JCgnLnBhcnRuZXInKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3BhcnRuZXInLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuLypNYWduaWZpYyBwb3B1cCovXHJcblxyXG4kKCcucG9wdXBfX3dhbGxldCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy5ibG9ja19faXRlbS1jb3ZlciArIC5kcm9wZG93bi1ibG9ja19fbGV2ZWwnKS5wcmV2KCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnb3BlbicpLnNsaWRlVG9nZ2xlKDIwMCk7XHJcblx0XHJcblx0aWYoJCh0aGlzKS5uZXh0KCkuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkubmV4dCgpLmFkZENsYXNzKCdmaXJzdCcpLnByZXYoKS5wcmV2KCkuYWRkQ2xhc3MoJ2xhc3QnKVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkKHRoaXMpLm5leHQoKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2ZpcnN0JykucHJldigpLnByZXYoKS5yZW1vdmVDbGFzcygnbGFzdCcpXHJcblx0fVxyXG5cclxuXHRpZihmZiAmJiAocHIgPiAxKSAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDExMDApIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0bGV0IGNIID0gJCgnLmNvbnRhaW5lcicpLmhlaWdodCgpIC0gKCQoJy5jb250YWluZXInKS5oZWlnaHQoKSAvIDEwMCAqIDIwKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY0gpO1xyXG5cdFx0XHQkKCcud3JhcCcpLmNzcyh7XHJcblx0XHRcdFx0aGVpZ2h0OiBjSCxcclxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcclxuXHRcdFx0fSk7XHJcblx0XHR9LCA0MDApO1xyXG5cdH1cclxufSk7XHJcblxyXG5sZXQgdGltZW91dDtcclxuXHJcbmZ1bmN0aW9uIENvcHlUb0NsaXBib2FyZChlbCkge1xyXG4gICAgdmFyICR0bXAgPSAkKFwiPHRleHRhcmVhPlwiKTtcclxuICAgICQoXCJib2R5XCIpLmFwcGVuZCgkdG1wKTtcclxuICAgICR0bXAudmFsKCQoZWwpLnRleHQoKSkuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcblxyXG4gICAgJCgnLm5vdGlmaWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgIFx0JCgnLmNvcHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZih0aW1lb3V0KSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dClcclxuXHR9XHJcbiAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcdFxyXG4gICBcdFx0JCgnLmNvcHknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9LCAyNTApO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBcdCQoJy5jb3B5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmFkZENsYXNzKCd0ZXN0Jyk7XHJcbiAgICB9LCAzMDAwKTtcclxuICAgIFxyXG4gICAgJHRtcC5yZW1vdmUoKTtcclxufVxyXG5cclxuJCgnYS52aWRlbywgLnNvb24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgY3VycmVudCA9ICQodGhpcylcclxuXHRjdXJyZW50LmFkZENsYXNzKCdoaWRlJyk7XHJcblx0Y3VycmVudC5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRjdXJyZW50Lm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRjdXJyZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0fSwgNTUwMCk7XHJcbn0pO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7IFxyXG4gIGRpc2FibGVTZWxlY3Rpb24gOiBmdW5jdGlvbigpIHsgXHJcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7IFxyXG4gICAgICB0aGlzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9OyBcclxuICAgICAgdGhpcy51bnNlbGVjdGFibGUgPSBcIm9uXCI7IFxyXG4gXHJcbiAgICAgIGpRdWVyeSh0aGlzKS5jc3MoeyBcclxuICAgICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLW8tdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAgICAgJy1raHRtbC11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG4gICAgICB9KTsgXHJcbiBcclxuICAgICAgLy8g0JTQu9GPIE9wZXJhIFxyXG4gICAgICBqUXVlcnkodGhpcykuYmluZCgnbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSk7IFxyXG4gICAgfSk7IFxyXG4gIH0gXHJcbn0pO1xyXG5cclxuJCgnLm1haW5fX3RvcCAudG9wLWl0ZW1fX3ZhbC5zcG9uc29yJykuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG5cclxuJCgnLm1ldGFtYXNrIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcubm90aWZpY2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJy5tZXRhbWFza190ZXh0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWV0YW1hc2tfdGV4dCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCA2MDAwMCk7XHJcblxyXG5cdCQoJy5zdGF0dXMub3V0cHV0LnN0YXR1c19fcGVuZGluZycpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5vdXRwdXQuc3RhdHVzX19wZW5kaW5nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDUwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5vdXRwdXQuc3RhdHVzX19jb25maXJtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDcwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5vdXRwdXQuc3RhdHVzX19jb25maXJtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDEyMDAwKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5zdGF0dXMub3V0cHV0LnN0YXR1c19fcmVmdXNlZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCAxNDAwMCk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuc3RhdHVzLm91dHB1dC5zdGF0dXNfX3JlZnVzZWQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSwgMTkwMDApO1xyXG59KTtcclxuXHJcbiQoJy5zZWxsLW9iaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLnNlbGwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5zZWxsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDMwMDAwKTtcclxuXHJcblxyXG5cdCQoJy5zdGF0dXMuc2VsbF9vYmkuc3RhdHVzX19wZW5kaW5nJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuc3RhdHVzLnNlbGxfb2JpLnN0YXR1c19fcGVuZGluZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCA1MDAwKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5zdGF0dXMuc2VsbF9vYmkuc3RhdHVzX19jb25maXJtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sIDcwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5zZWxsX29iaS5zdGF0dXNfX2NvbmZpcm0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSwgMTIwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5zZWxsX29iaS5zdGF0dXNfX3JlZnVzZWQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSwgMTQwMDApO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnN0YXR1cy5kZXBvc2l0LnN0YXR1c19fcmVmdXNlZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCAxOTAwMCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgXHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn0sIGZhbHNlKTtcclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0JCgnLmxvYWRpbmctZGF0YScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSwgNTUwMCk7XHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLndhcm5pbmcnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcud2FybmluZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9LCA2MDAwMCk7XHJcbn0sIDEwNTAwKTtcclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRsZXQgaF9ncmFwaCA9ICQoJy5tYWluX19ncmFwaC1pdGVtcyAuc2xpY2stYWN0aXZlIC5tYWluX19ncmFwaCcpLm91dGVySGVpZ2h0KCk7XHJcblx0XHQkKCcubWFpbl9fZ3JhcGgtaXRlbXMgLm1haW5fX2dyYXBoJykuY3NzKCdoZWlnaHQnLCBoX2dyYXBoKTtcclxuXHRcdGxldCBoX2RpYWdyYW0gPSAkKCcuZGlhZ3JhbScpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRsZXQgaF9oZWFkID0gJCgnLm1haW5fX2dyYXBoLWhlYWQnKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0Y29uc29sZS5sb2coaF9kaWFncmFtKTtcclxuXHRcdCQoJy5tYWluX19ncmFwaC1pdGVtcyAuc2xpY2stc2xpZGUnKS5jc3MoJ21heC1oZWlnaHQnLCBoX2RpYWdyYW0raF9oZWFkKzEwMCk7XHJcblx0XHRcclxuXHR9LCAxMDApO1xyXG59KTtcclxuXHJcbiQoJy5zdGF0dXMgLnRvcC1pdGVtX192YWwgLmFjdGl2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHQkKCcuc3RhdHVzIC50b3AtaXRlbV9fdmFsIC5ub2FjdGl2ZScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbn0pO1xyXG5cclxuJCgnLnN0YXR1cyAudG9wLWl0ZW1fX3ZhbCAubm9hY3RpdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcblx0JCgnLnN0YXR1cyAudG9wLWl0ZW1fX3ZhbCAuYWN0aXZlJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxufSk7XHJcblxyXG4kKCcuZ3JhcGgtc2xpZGVyX19pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLm5leHQoKS50b2dnbGUoKS5uZXh0KCkudG9nZ2xlKCk7XHJcbn0pO1xyXG5cclxuJCgnI2NvbnRyYWN0U2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGl0ZW1zOiAxLFxyXG5cdGxvb3A6IGZhbHNlLFxyXG5cdG1hcmdpbjogMzAsXHJcblx0ZG90czogdHJ1ZSxcclxuXHRuYXY6IHRydWUsXHJcblx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiZ3JhcGgtc2xpZGVyX19sZWZ0XCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZ3JhcGgtc2xpZGVyX19yaWdodFwiPjxpIGNsYXNzPVwiZmxhdGljb24tcmlnaHQtYXJyb3dcIj48L2k+PC9kaXY+J10sXHJcblx0YW5pbWF0ZUluOiAnZmFkZUluJyxcclxuXHQvLyBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcblx0Zmx1aWRTcGVlZDogMTAwLFxyXG59KTtcclxuJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuMTEpJykuaGlkZSgpO1xyXG5cclxuJCgnI2NvbnRyYWN0U2xpZGVyJykub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oKXtcclxuXHRpZigkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3Q6bnRoLWNoaWxkKDExKScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdDpudGgtY2hpbGQobisxMSk6bnRoLWNoaWxkKC1uKzIwKScpLnJlbW92ZUNsYXNzKCdoaWRlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHR9XHJcblxyXG5cdGlmKCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdDpudGgtY2hpbGQoMjEpJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHQkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3QnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuKzIxKTpudGgtY2hpbGQoLW4rMzApJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdH1cclxufSk7XHJcblxyXG4kKCcjY29udHJhY3RTbGlkZXIgLm93bC1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cdGlmKCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdDpudGgtY2hpbGQoMjApJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHQkKCcjY29udHJhY3RTbGlkZXIgLm93bC1kb3QnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuKzExKTpudGgtY2hpbGQoLW4rMjApJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdH1cclxuXHJcblx0aWYoJCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZCgxMCknKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdCQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdCcpLmhpZGUoKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0JCgnI2NvbnRyYWN0U2xpZGVyIC5vd2wtZG90Om50aC1jaGlsZChuKzEpOm50aC1jaGlsZCgtbisxMCknKS5yZW1vdmVDbGFzcygnaGlkZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0fVxyXG59KTtcclxubGV0IGRvdCA9ICQoJyNjb250cmFjdFNsaWRlciAub3dsLWRvdCcpO1xyXG5cdGRvdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdCQodGhpcykuaHRtbChpbmRleCk7XHJcblx0fSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
