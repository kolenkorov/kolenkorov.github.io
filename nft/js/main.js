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
	      	slidesToScroll: 9,
	      }
	    },
	    {
	      breakpoint: 1231,
	      settings: {
	      	slidesToShow: 7,
	      	slidesToScroll: 7,
	      }
	    },
	    {
	      breakpoint: 961,
	      settings: {
	      	slidesToShow: 6,
	      	slidesToScroll: 6,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 5,
	      	slidesToScroll: 5,
	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	      	slidesToShow: 4,
	      	slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	      	slidesToShow: 3,
	      	slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 381,
	      settings: {
	      	slidesToShow: 2,
	      	slidesToScroll: 2,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyIFxyXG52YXIgc2Nyb2xsUG9zID0gMDtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdCQoJy5oZWFkZXIudG9wJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG5cdFxyXG5cdGlmICgoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gc2Nyb2xsUG9zKSA8IC0xOCkge1xyXG5cdFx0JCgnLmhlYWRlci50b3AnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHR9IFxyXG5cdGVsc2UgaWYgKHN0ID4gc2Nyb2xsUG9zKSB7XHJcblx0XHQkKCcuaGVhZGVyLnRvcCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG5cdH1cclxuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCA1KSB7XHJcblx0XHQkKCcuaGVhZGVyLnRvcCcpLnJlbW92ZUNsYXNzKCdzdGlja3kgZml4ZWQnKTtcclxuXHR9XHJcblx0c2Nyb2xsUG9zID0gc3Q7XHJcbn0pO1xyXG5cclxuLy9zbGlkZXIgXHJcbiQoJyNzbGlkZXJfX2J1bm5lcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXJyb3dzOiBmYWxzZSxcclxuXHRkb3RzOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogNSxcclxuXHRzbGlkZXNUb1Njcm9sbDogNSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblx0aW5maW5pdGU6IGZhbHNlLFxyXG5cclxuXHRyZXNwb25zaXZlOiBbXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxMjMxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogNCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5NjEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMyxcclxuXHQgICAgICBcdHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdCAgICAgIFx0c2xpZGVzVG9TY3JvbGw6IDIsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNDgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5nYWxsZXJ5X19pdGVtcycpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDExLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxMSxcclxuXHRpbmZpbml0ZTogZmFsc2UsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDE0NDEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogOSxcclxuXHQgICAgICBcdHNsaWRlc1RvU2Nyb2xsOiA5LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDEyMzEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNyxcclxuXHQgICAgICBcdHNsaWRlc1RvU2Nyb2xsOiA3LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk2MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA2LFxyXG5cdCAgICAgIFx0c2xpZGVzVG9TY3JvbGw6IDYsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogNSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA1NzcsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNCxcclxuXHQgICAgICBcdHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDQ4MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdCAgICAgIFx0c2xpZGVzVG9TY3JvbGw6IDMsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMzgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0ICAgICAgXHRzbGlkZXNUb1Njcm9sbDogMixcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5vdmVydmlld19fc2xpZGVyJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRkb3RzOiBmYWxzZSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0Ly9mYWRlOiB0cnVlLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk2MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG5cdCAgICAgICAgY2VudGVyUGFkZGluZzogMCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA3MDAsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHZlcnRpY2FsOiBmYWxzZSxcclxuXHQgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7XHJcblxyXG4kKCcuZ2FsbGVyeV9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcclxuXHQkKCcuZmluZWFydF9fb3ZlcnZpZXctaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuXHQkKGhyZWYpLmFkZENsYXNzKCdhY3RpdmUnKS5zbGljaygpO1xyXG59KTtcclxuXHJcbi8qX19fKi9cclxuXHJcbiQoJy5hYm91dF9pbmZvX2ltYWdlcycpLnNsaWNrKHtcclxuXHRhcnJvd3M6IGZhbHNlLFxyXG5cdGRvdHM6IHRydWUsXHJcblx0aW5maW5pdGU6IGZhbHNlLFxyXG5cdHNsaWRlc1RvU2hvdzogMVxyXG59KTtcclxuXHJcbiQoJy5jYWJpbmV0X2Jsb2NrcycpLnNsaWNrKHtcclxuXHRpbmZpbml0ZTogZmFsc2UsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgc3dpcGU6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHdhaXRGb3JBbmltYXRlOiBmYWxzZVxyXG59KTtcclxuXHJcbi8vbWVudVxyXG4kKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0JCgnLmhlYWRlcl9fYmxvY2std3JhcCcpLnNsaWRlVG9nZ2xlKDI1MCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJ2h0bWwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuLy9Vc2VyXHJcbiQoJy5oZWFkZXJfX3VzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKS5zbGlkZVRvZ2dsZSgwKTtcclxufSk7XHJcblxyXG4vL2FzaWRlXHJcbiQoJy5hcnRpc3QgLmFzaWRlX19oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5hcnRpc3QsIC5hcnRpc3RfX2xpc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmFydGlzdF9fbGlzdC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLmFydGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuYXJ0aXN0X19saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vL0Ryb3Bkb3duXHJcbiQoJy5pdGVtLWluZm9fX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZScpLm5leHQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykucGFyZW50KCkucGFyZW50KCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgIGxldCBkcm9wZG93biA9ICQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJyk7XHJcbiAgICBpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSBcclxuICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZsYXRpY29uLWxldHRlci14JykpIHtcclxuICAgICAgICAgICAgJCgnLml0ZW0taW5mb19faWNvbicpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLWluZm9fX2ljb24nKS5wYXJlbnQoKS5wYXJlbnQoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vL0FzaWRlXHJcbiQoJy5hcnRpc3RfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYXJ0aXN0X19zdWJsaXN0Jykuc2xpZGVUb2dnbGUoMjUwKTtcclxufSk7XHJcblxyXG4vL1BvcHVwXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnYS5vcGVuX2Nvbm5lY3QnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Nvbm5lY3QnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX3Rlcm1zJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX190ZXJtcycsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fZXJyb3InKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Vycm9yJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9iaWQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2JpZCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fY2hlY2tvdXQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2NoZWNrb3V0JyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcucHJvZHVjdF9faW1hZ2UtcmVzaXplJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHR0eXBlIDogJ2ltYWdlJyxcdFx0XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy9idXR0b25zIGZpbGxcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9ibGFuaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9maWxsJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fZmlsbCcpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLmJ1dHRvbiAuYnRuX2JsYW5rJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2ZpbGwnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9maWxsJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcblxyXG4kKCcuaXRlbS1zdGF0c19fZmF2b3JpdGVzLCAuaXRlbS1zdGF0c19fbGlrZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vU2VsZWN0XHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuXHJcbi8qX19fKi9cclxuXHJcbi8vIERyb3Bkb3duXHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZhcV9hcnRpY2xlX2Ryb3Bkb3duX2xpIHNwYW4nLCBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGUgPSAkKHRoaXMpLFxyXG5cdFx0aW5mbyA9IGUucGFyZW50KCkuZmluZCgnLmZhcV9hcnRpY2xlX2Ryb3Bkb3duX2luZm8nKTtcclxuXHJcblx0XHRpZiAoZS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0Y2xvc2UoKTtcclxuXHJcblx0XHRcdGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRpbmZvLnNsaWRlVXAoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZhcV9jbG9zZSgpO1xyXG5cclxuXHRcdFx0ZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdGluZm8uc2xpZGVEb3duKCk7XHJcblx0XHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZmFxX2Nsb3NlKCkge1xyXG5cdCQoJy5mYXFfYXJ0aWNsZV9kcm9wZG93bl9saSBzcGFuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJy5mYXFfYXJ0aWNsZV9kcm9wZG93bl9pbmZvJykuc2xpZGVVcCgpO1xyXG59XHJcblxyXG4vLyBQbGF5L3N0b3BcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudmlkZW8nLCBmdW5jdGlvbigpe1xyXG5cdGxldCBlID0gJCh0aGlzKSxcclxuXHRcdGFjdGl2ZSA9IGUuaGFzQ2xhc3MoJ3N0b3AnKSxcclxuXHRcdHZpZGVvID0gZS5maW5kKCd2aWRlbycpO1xyXG5cclxuXHRlLnJlbW92ZUNsYXNzKCdzdG9wJyk7XHJcblx0dmlkZW8ucHJvcCgnY29udHJvbHMnLCB0cnVlKTtcclxuXHR2aWRlby5nZXQoMCkucGxheSgpOyBcclxuXHJcblx0aWYgKGFjdGl2ZSA9PSBmYWxzZSkge1xyXG5cdFx0ZS5hZGRDbGFzcygnc3RvcCcpO1xyXG5cdFx0dmlkZW8uZ2V0KDApLnBhdXNlKCk7IFxyXG5cdFx0dmlkZW8ucHJvcCgnY29udHJvbHMnLCBmYWxzZSk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIENhYmluZXQgbmF2aWdhdGlvblxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYWJpbmV0X25hdl9saScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBlID0gJCh0aGlzKTtcclxuXHJcbiAgICAkKCcuY2FiaW5ldF9uYXZfbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBlLmFkZENsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4vLyBDb3B5XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhYmluZXRfdG9wX3VzZXJfbGluaycsIGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgZSA9ICQodGhpcyksXHJcblx0XHR2YWwgPSBlLnRleHQoKSxcclxuXHRcdGYgPSAkKCc8aW5wdXQ+Jyk7XHJcblxyXG5cdGUudG9nZ2xlQ2xhc3MoJ2ljb24tY29weSBpY29uLWNvcHlfZmlsbCcpXHJcblxyXG5cdCQoJ2JvZHknKS5hcHBlbmQoZik7XHJcblx0Zi52YWwodmFsKS5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG5cdGYucmVtb3ZlKCk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRlLnRvZ2dsZUNsYXNzKCdpY29uLWNvcHkgaWNvbi1jb3B5X2ZpbGwnKVxyXG5cdH0sIDEwMDApO1xyXG59KTtcclxuXHJcbi8vIENyZWF0ZSBjaGVja1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5jcmVhdGVfY2hlY2suaW5hY3RpdmUgLmNyZWF0ZV9jaGVja19pbmZvJykuc2xpZGVVcCgpO1xyXG59KVxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jcmVhdGVfY2hlY2suaW5hY3RpdmUgbGFiZWwnLCBmdW5jdGlvbiAoKSB7XHJcblx0JCgnLmNyZWF0ZV9jaGVjay5hY3RpdmUnKS50b2dnbGVDbGFzcygnYWN0aXZlIGluYWN0aXZlJykuZmluZCgnLmNyZWF0ZV9jaGVja19pbmZvJykuc2xpZGVVcCgpLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuXHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUgaW5hY3RpdmUnKS5maW5kKCcuY3JlYXRlX2NoZWNrX2luZm8nKS5zbGlkZURvd24oKTtcclxufSlcclxuXHJcbi8vIERhdGFwaWtlclxyXG5cclxuJCggZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoKTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
