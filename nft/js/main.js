//header 
var scrollPos = 0;
$(window).scroll(function(){
	var st = $(this).scrollTop();

	$('.header.top').addClass('sticky');
	
	if (($(window).scrollTop() - scrollPos) < -18) {
		$('.header.top').addClass('fixed');
	} 
	else if (st > scrollPos) {
		$('.header.top').removeClass('fixed');
	}
	if($(window).scrollTop() < 5) {
		$('.header.top').removeClass('sticky fixed');
	}
	scrollPos = st;
});

//slider 
$('#slider__bunner').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
});

$('.slider__products').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	arrows: true,
	dots: false,
	infinite: false,

	responsive: [
	    {
	      breakpoint: 1231,
	      settings: {
	      	slidesToShow: 4,
	      	slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 961,
	      settings: {
	      	slidesToShow: 3,
	      	slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 2,
	      	slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	      	slidesToShow: 1,
	      	slidesToScroll: 1,
	      }
	    },
	]
});

$('.gallery__items').slick({
	slidesToShow: 11,
	slidesToScroll: 11,
	infinite: false,
	arrows: true,
	
	responsive: [
	    {
	      breakpoint: 1441,
	      settings: {
	      	slidesToShow: 9,
	      }
	    },
	    {
	      breakpoint: 1231,
	      settings: {
	      	slidesToShow: 7,
	      }
	    },
	    {
	      breakpoint: 961,
	      settings: {
	      	slidesToShow: 6,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 5,
	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	      	slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	      	slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 381,
	      settings: {
	      	slidesToShow: 2,
	      }
	    },
	]
});

$('.overview__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	//fade: true,
	
	responsive: [
	    {
	      breakpoint: 961,
	      settings: {
	        vertical: false,
	        centerPadding: 0,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	      	vertical: false,
	        centerPadding: 0,
	        slidesToShow: 1,
	      }
	    },
	]
});

$('.gallery__item').on('click', function(e) {
	e.preventDefault();
	let href = $(this).attr('href');
	
	$('.fineart__overview-items').removeClass('active').slick('unslick');
	$(href).addClass('active').slick();
});

/*___*/

$('.about_info_images').slick({
	arrows: false,
	dots: true,
	infinite: false,
	slidesToShow: 1
});

$('.cabinet_blocks').slick({
	infinite: false,
    slidesToShow: 1,
    dots: true,
    adaptiveHeight: true,
    draggable: false,
    swipe: false,
    arrows: false,
    waitForAnimate: false
});

//menu
$('.header__burger').on('click', function(){
	$(this).toggleClass('active')
	$('.header__block-wrap').slideToggle(250).toggleClass('active');
	$('html').toggleClass('hidden');
});

//User
$('.header__user').on('click', function() {
	$('.header__user-toolbar').slideToggle(0);
});

//aside
$('.artist .aside__heading').on('click', function(){
	$(this).addClass('active')
	$('.artist, .artist__list').addClass('active');
});

$('.artist__list-close').on('click', function(){
	$('.artist').removeClass('active');
	$('.artist__list').removeClass('active');
});


//Dropdown
$('.item-info__icon').on('click', function() {
	$(this).toggleClass('close').next('.item-info__dropdown').toggleClass('active');
	$(this).parent().parent('label').toggleClass('active');
});

$(document).mouseup(function (e){
    let dropdown = $('.item-info__dropdown');
    if (!dropdown.is(e.target) 
        && dropdown.has(e.target).length === 0) {
        if (!$(e.target).hasClass('flaticon-letter-x')) {
            $('.item-info__icon').removeClass('close');
            dropdown.removeClass('active');
            $('.item-info__icon').parent().parent('label').toggleClass('active');
        }
    }
});

//Aside
$('.artist__item').on('click', function() {
	$(this).toggleClass('active').find('.artist__sublist').slideToggle(250);
});

//Popup
$(document).ready(function(){
	$('a.open_connect').magnificPopup({
		items: [
			{
				src: '.popup__connect',
				type: 'inline'
			}
		],
	});
	$('a.open_terms').magnificPopup({
		items: [
			{
				src: '.popup__terms',
				type: 'inline'
			}
		],
	});
	$('a.open_error').magnificPopup({
		items: [
			{
				src: '.popup__error',
				type: 'inline'
			}
		],
	});
	$('a.open_bid').magnificPopup({
		items: [
			{
				src: '.popup__bid',
				type: 'inline'
			}
		],
	});
	$('a.open_checkout').magnificPopup({
		items: [
			{
				src: '.popup__checkout',
				type: 'inline'
			}
		],
	});

	$('.product__image-resize').magnificPopup({
		type : 'image',		
	});
});

//buttons fill
$('body').on('mouseenter', '.button .btn_fill', function(){
	$(this).removeClass('fill');
	$(this).next('.btn_blank').addClass('fill');
	$(this).prev('.btn_blank').addClass('fill');
});
$('body').on('mouseleave', '.button .btn_fill', function(){
	$(this).addClass('fill');
	$(this).next('.btn_blank').removeClass('fill');
	$(this).prev('.btn_blank').removeClass('fill');
});
$('body').on('mouseenter', '.button .btn_blank', function(){
	$(this).addClass('fill');
	$(this).next('.btn_fill').removeClass('fill');
	$(this).prev('.btn_fill').removeClass('fill');
});
$('body').on('mouseleave', '.button .btn_blank', function(){
	$(this).removeClass('fill');
	$(this).next('.btn_fill').addClass('fill');
	$(this).prev('.btn_fill').addClass('fill');
});

$('.item-stats__favorites, .item-stats__likes').on('click', function(){
	$(this).toggleClass('active');
});

//Select
$('select').styler();


/*___*/

// Dropdown

$(document).on('click', '.faq_article_dropdown_li span', function () {
	var e = $(this),
		info = e.parent().find('.faq_article_dropdown_info');

		if (e.hasClass('active')) {
			close();

			e.removeClass('active');
			info.slideUp();
		} else {
			faq_close();

			e.addClass('active');
			info.slideDown();
		}
});

function faq_close() {
	$('.faq_article_dropdown_li span').removeClass('active');
	$('.faq_article_dropdown_info').slideUp();
}

// Play/stop

$(document).on('click', '.video', function(){
	let e = $(this),
		active = e.hasClass('stop'),
		video = e.find('video');

	e.removeClass('stop');
	video.prop('controls', true);
	video.get(0).play(); 

	if (active == false) {
		e.addClass('stop');
		video.get(0).pause(); 
		video.prop('controls', false);
	}
});

// Cabinet navigation

$(document).on('click', '.cabinet_nav_li', function () {
    let e = $(this);

    $('.cabinet_nav_li').removeClass('active');
    e.addClass('active');
});

// Copy

$(document).on('click', '.cabinet_top_user_link', function () {
	var e = $(this),
		val = e.text(),
		f = $('<input>');

	e.toggleClass('icon-copy icon-copy_fill')

	$('body').append(f);
	f.val(val).select();
	document.execCommand('copy');
	f.remove();

	setTimeout(function() {
		e.toggleClass('icon-copy icon-copy_fill')
	}, 1000);
});

// Create check

$(document).ready(function () {
	$('.create_check.inactive .create_check_info').slideUp();
})

$(document).on('click', '.create_check.inactive label', function () {
	$('.create_check.active').toggleClass('active inactive').find('.create_check_info').slideUp().find('input').val('');
	$(this).parent().toggleClass('active inactive').find('.create_check_info').slideDown();
})

// Datapiker

$( function() {
    $('#datepicker').datepicker();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyIFxyXG52YXIgc2Nyb2xsUG9zID0gMDtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdCQoJy5oZWFkZXIudG9wJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG5cdFxyXG5cdGlmICgoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gc2Nyb2xsUG9zKSA8IC0xOCkge1xyXG5cdFx0JCgnLmhlYWRlci50b3AnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHR9IFxyXG5cdGVsc2UgaWYgKHN0ID4gc2Nyb2xsUG9zKSB7XHJcblx0XHQkKCcuaGVhZGVyLnRvcCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG5cdH1cclxuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCA1KSB7XHJcblx0XHQkKCcuaGVhZGVyLnRvcCcpLnJlbW92ZUNsYXNzKCdzdGlja3kgZml4ZWQnKTtcclxuXHR9XHJcblx0c2Nyb2xsUG9zID0gc3Q7XHJcbn0pO1xyXG5cclxuLy9zbGlkZXIgXHJcbiQoJyNzbGlkZXJfX2J1bm5lcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXJyb3dzOiBmYWxzZSxcclxuXHRkb3RzOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogNSxcclxuXHRzbGlkZXNUb1Njcm9sbDogNSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblx0aW5maW5pdGU6IGZhbHNlLFxyXG5cclxuXHRyZXNwb25zaXZlOiBbXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxMjMxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogNCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5NjEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMyxcclxuXHQgICAgICBcdHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdCAgICAgIFx0c2xpZGVzVG9TY3JvbGw6IDIsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNDgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5nYWxsZXJ5X19pdGVtcycpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDExLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxMSxcclxuXHRpbmZpbml0ZTogZmFsc2UsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDE0NDEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogOSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxMjMxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDcsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogOTYxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNTc3LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNDgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMzgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7XHJcblxyXG4kKCcub3ZlcnZpZXdfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0ZG90czogZmFsc2UsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdC8vZmFkZTogdHJ1ZSxcclxuXHRcclxuXHRyZXNwb25zaXZlOiBbXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5NjEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuXHQgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzAwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHR2ZXJ0aWNhbDogZmFsc2UsXHJcblx0ICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxyXG5cdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHRdXHJcbn0pO1xyXG5cclxuJCgnLmdhbGxlcnlfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGxldCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHJcblx0JCgnLmZpbmVhcnRfX292ZXJ2aWV3LWl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnNsaWNrKCd1bnNsaWNrJyk7XHJcblx0JChocmVmKS5hZGRDbGFzcygnYWN0aXZlJykuc2xpY2soKTtcclxufSk7XHJcblxyXG4vKl9fXyovXHJcblxyXG4kKCcuYWJvdXRfaW5mb19pbWFnZXMnKS5zbGljayh7XHJcblx0YXJyb3dzOiBmYWxzZSxcclxuXHRkb3RzOiB0cnVlLFxyXG5cdGluZmluaXRlOiBmYWxzZSxcclxuXHRzbGlkZXNUb1Nob3c6IDFcclxufSk7XHJcblxyXG4kKCcuY2FiaW5ldF9ibG9ja3MnKS5zbGljayh7XHJcblx0aW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgIHN3aXBlOiBmYWxzZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICB3YWl0Rm9yQW5pbWF0ZTogZmFsc2VcclxufSk7XHJcblxyXG4vL21lbnVcclxuJCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5oZWFkZXJfX2Jsb2NrLXdyYXAnKS5zbGlkZVRvZ2dsZSgyNTApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG59KTtcclxuXHJcbi8vVXNlclxyXG4kKCcuaGVhZGVyX191c2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCgnLmhlYWRlcl9fdXNlci10b29sYmFyJykuc2xpZGVUb2dnbGUoMCk7XHJcbn0pO1xyXG5cclxuLy9hc2lkZVxyXG4kKCcuYXJ0aXN0IC5hc2lkZV9faGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuXHQkKCcuYXJ0aXN0LCAuYXJ0aXN0X19saXN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJy5hcnRpc3RfX2xpc3QtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQoJy5hcnRpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLmFydGlzdF9fbGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5cclxuLy9Ecm9wZG93blxyXG4kKCcuaXRlbS1pbmZvX19pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2UnKS5uZXh0KCcuaXRlbS1pbmZvX19kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnbGFiZWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcbiAgICBsZXQgZHJvcGRvd24gPSAkKCcuaXRlbS1pbmZvX19kcm9wZG93bicpO1xyXG4gICAgaWYgKCFkcm9wZG93bi5pcyhlLnRhcmdldCkgXHJcbiAgICAgICAgJiYgZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdmbGF0aWNvbi1sZXR0ZXIteCcpKSB7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLWluZm9fX2ljb24nKS5yZW1vdmVDbGFzcygnY2xvc2UnKTtcclxuICAgICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuaXRlbS1pbmZvX19pY29uJykucGFyZW50KCkucGFyZW50KCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9Bc2lkZVxyXG4kKCcuYXJ0aXN0X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuZmluZCgnLmFydGlzdF9fc3VibGlzdCcpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcbn0pO1xyXG5cclxuLy9Qb3B1cFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdCQoJ2Eub3Blbl9jb25uZWN0JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19jb25uZWN0JyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl90ZXJtcycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fdGVybXMnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2Vycm9yJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19lcnJvcicsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fYmlkJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19iaWQnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2NoZWNrb3V0JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19jaGVja291dCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHJcblx0JCgnLnByb2R1Y3RfX2ltYWdlLXJlc2l6ZScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZSA6ICdpbWFnZScsXHRcdFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vYnV0dG9ucyBmaWxsXHJcbiQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuYnV0dG9uIC5idG5fZmlsbCcsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9ibGFuaycpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2JsYW5rJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuYnV0dG9uIC5idG5fZmlsbCcsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9ibGFuaycpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2JsYW5rJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuYnV0dG9uIC5idG5fYmxhbmsnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fZmlsbCcpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2ZpbGwnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy5idXR0b24gLmJ0bl9ibGFuaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9maWxsJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fZmlsbCcpLmFkZENsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG5cclxuJCgnLml0ZW0tc3RhdHNfX2Zhdm9yaXRlcywgLml0ZW0tc3RhdHNfX2xpa2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4vL1NlbGVjdFxyXG4kKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuXHJcblxyXG4vKl9fXyovXHJcblxyXG4vLyBEcm9wZG93blxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5mYXFfYXJ0aWNsZV9kcm9wZG93bl9saSBzcGFuJywgZnVuY3Rpb24gKCkge1xyXG5cdHZhciBlID0gJCh0aGlzKSxcclxuXHRcdGluZm8gPSBlLnBhcmVudCgpLmZpbmQoJy5mYXFfYXJ0aWNsZV9kcm9wZG93bl9pbmZvJyk7XHJcblxyXG5cdFx0aWYgKGUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdGNsb3NlKCk7XHJcblxyXG5cdFx0XHRlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0aW5mby5zbGlkZVVwKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmYXFfY2xvc2UoKTtcclxuXHJcblx0XHRcdGUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRpbmZvLnNsaWRlRG93bigpO1xyXG5cdFx0fVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZhcV9jbG9zZSgpIHtcclxuXHQkKCcuZmFxX2FydGljbGVfZHJvcGRvd25fbGkgc3BhbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuZmFxX2FydGljbGVfZHJvcGRvd25faW5mbycpLnNsaWRlVXAoKTtcclxufVxyXG5cclxuLy8gUGxheS9zdG9wXHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnZpZGVvJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgZSA9ICQodGhpcyksXHJcblx0XHRhY3RpdmUgPSBlLmhhc0NsYXNzKCdzdG9wJyksXHJcblx0XHR2aWRlbyA9IGUuZmluZCgndmlkZW8nKTtcclxuXHJcblx0ZS5yZW1vdmVDbGFzcygnc3RvcCcpO1xyXG5cdHZpZGVvLnByb3AoJ2NvbnRyb2xzJywgdHJ1ZSk7XHJcblx0dmlkZW8uZ2V0KDApLnBsYXkoKTsgXHJcblxyXG5cdGlmIChhY3RpdmUgPT0gZmFsc2UpIHtcclxuXHRcdGUuYWRkQ2xhc3MoJ3N0b3AnKTtcclxuXHRcdHZpZGVvLmdldCgwKS5wYXVzZSgpOyBcclxuXHRcdHZpZGVvLnByb3AoJ2NvbnRyb2xzJywgZmFsc2UpO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBDYWJpbmV0IG5hdmlnYXRpb25cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FiaW5ldF9uYXZfbGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZSA9ICQodGhpcyk7XHJcblxyXG4gICAgJCgnLmNhYmluZXRfbmF2X2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gQ29weVxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYWJpbmV0X3RvcF91c2VyX2xpbmsnLCBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGUgPSAkKHRoaXMpLFxyXG5cdFx0dmFsID0gZS50ZXh0KCksXHJcblx0XHRmID0gJCgnPGlucHV0PicpO1xyXG5cclxuXHRlLnRvZ2dsZUNsYXNzKCdpY29uLWNvcHkgaWNvbi1jb3B5X2ZpbGwnKVxyXG5cclxuXHQkKCdib2R5JykuYXBwZW5kKGYpO1xyXG5cdGYudmFsKHZhbCkuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuXHRmLnJlbW92ZSgpO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0ZS50b2dnbGVDbGFzcygnaWNvbi1jb3B5IGljb24tY29weV9maWxsJylcclxuXHR9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyBDcmVhdGUgY2hlY2tcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQkKCcuY3JlYXRlX2NoZWNrLmluYWN0aXZlIC5jcmVhdGVfY2hlY2tfaW5mbycpLnNsaWRlVXAoKTtcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3JlYXRlX2NoZWNrLmluYWN0aXZlIGxhYmVsJywgZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5jcmVhdGVfY2hlY2suYWN0aXZlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZSBpbmFjdGl2ZScpLmZpbmQoJy5jcmVhdGVfY2hlY2tfaW5mbycpLnNsaWRlVXAoKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlIGluYWN0aXZlJykuZmluZCgnLmNyZWF0ZV9jaGVja19pbmZvJykuc2xpZGVEb3duKCk7XHJcbn0pXHJcblxyXG4vLyBEYXRhcGlrZXJcclxuXHJcbiQoIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI2RhdGVwaWNrZXInKS5kYXRlcGlja2VyKCk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
