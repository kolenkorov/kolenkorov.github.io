//header 
var scrollPos = 0;
$(window).scroll(function(){
	var st = $(this).scrollTop();
	//console.log(st);

	console.log(($(window).scrollTop() - scrollPos));

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
	speed: 700,
});

$('.slider__products').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	speed: 700,

	responsive: [
	    {
	      breakpoint: 1231,
	      settings: {
	      	slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 961,
	      settings: {
	      	slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	      	slidesToShow: 1,
	      }
	    },
	]
});

$('.gallery__items').slick({
	slidesToShow: 11,
	slidesToScroll: 1,
	arrows: true,
	speed: 700,
	
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
	speed: 500,
	
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyIFxyXG52YXIgc2Nyb2xsUG9zID0gMDtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblx0Ly9jb25zb2xlLmxvZyhzdCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKCgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBzY3JvbGxQb3MpKTtcclxuXHJcblx0JCgnLmhlYWRlci50b3AnKS5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcblx0XHJcblx0aWYgKCgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBzY3JvbGxQb3MpIDwgLTE4KSB7XHJcblx0XHQkKCcuaGVhZGVyLnRvcCcpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG5cdH0gXHJcblx0ZWxzZSBpZiAoc3QgPiBzY3JvbGxQb3MpIHtcclxuXHRcdCQoJy5oZWFkZXIudG9wJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0fVxyXG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA8IDUpIHtcclxuXHRcdCQoJy5oZWFkZXIudG9wJykucmVtb3ZlQ2xhc3MoJ3N0aWNreSBmaXhlZCcpO1xyXG5cdH1cclxuXHRzY3JvbGxQb3MgPSBzdDtcclxufSk7XHJcblxyXG4vL3NsaWRlciBcclxuJCgnI3NsaWRlcl9fYnVubmVyJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRhcnJvd3M6IGZhbHNlLFxyXG5cdGRvdHM6IHRydWUsXHJcblx0c3BlZWQ6IDcwMCxcclxufSk7XHJcblxyXG4kKCcuc2xpZGVyX19wcm9kdWN0cycpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdGRvdHM6IGZhbHNlLFxyXG5cdHNwZWVkOiA3MDAsXHJcblxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDEyMzEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5NjEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMyxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA3NjgsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMixcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA0ODEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5nYWxsZXJ5X19pdGVtcycpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDExLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdGFycm93czogdHJ1ZSxcclxuXHRzcGVlZDogNzAwLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDE0NDEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogOSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxMjMxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDcsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogOTYxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNTc3LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNDgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMzgxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7XHJcblxyXG4kKCcub3ZlcnZpZXdfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0ZG90czogZmFsc2UsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdC8vZmFkZTogdHJ1ZSxcclxuXHRzcGVlZDogNTAwLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk2MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG5cdCAgICAgICAgY2VudGVyUGFkZGluZzogMCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA3MDAsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHZlcnRpY2FsOiBmYWxzZSxcclxuXHQgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7XHJcblxyXG4kKCcuZ2FsbGVyeV9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcclxuXHQkKCcuZmluZWFydF9fb3ZlcnZpZXctaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuXHQkKGhyZWYpLmFkZENsYXNzKCdhY3RpdmUnKS5zbGljaygpO1xyXG59KTtcclxuXHJcbi8vbWVudVxyXG4kKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0JCgnLmhlYWRlcl9fYmxvY2std3JhcCcpLnNsaWRlVG9nZ2xlKDI1MCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJ2h0bWwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuLy9Vc2VyXHJcbiQoJy5oZWFkZXJfX3VzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKS5zbGlkZVRvZ2dsZSgwKTtcclxufSk7XHJcblxyXG4vL2FzaWRlXHJcbiQoJy5hcnRpc3QgLmFzaWRlX19oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5hcnRpc3QsIC5hcnRpc3RfX2xpc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmFydGlzdF9fbGlzdC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLmFydGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuYXJ0aXN0X19saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vL0Ryb3Bkb3duXHJcbiQoJy5pdGVtLWluZm9fX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZScpLm5leHQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykucGFyZW50KCkucGFyZW50KCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgIGxldCBkcm9wZG93biA9ICQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJyk7XHJcbiAgICBpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSBcclxuICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZsYXRpY29uLWxldHRlci14JykpIHtcclxuICAgICAgICAgICAgJCgnLml0ZW0taW5mb19faWNvbicpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLWluZm9fX2ljb24nKS5wYXJlbnQoKS5wYXJlbnQoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vL0FzaWRlXHJcbiQoJy5hcnRpc3RfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYXJ0aXN0X19zdWJsaXN0Jykuc2xpZGVUb2dnbGUoMjUwKTtcclxufSk7XHJcblxyXG4vL1BvcHVwXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnYS5vcGVuX2Nvbm5lY3QnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Nvbm5lY3QnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX3Rlcm1zJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX190ZXJtcycsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fZXJyb3InKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Vycm9yJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9iaWQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2JpZCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fY2hlY2tvdXQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2NoZWNrb3V0JyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcucHJvZHVjdF9faW1hZ2UtcmVzaXplJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHR0eXBlIDogJ2ltYWdlJyxcdFx0XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy9idXR0b25zIGZpbGxcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9ibGFuaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9maWxsJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fZmlsbCcpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLmJ1dHRvbiAuYnRuX2JsYW5rJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2ZpbGwnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9maWxsJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcblxyXG4kKCcuaXRlbS1zdGF0c19fZmF2b3JpdGVzLCAuaXRlbS1zdGF0c19fbGlrZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vU2VsZWN0XHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
