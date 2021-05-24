//Select
$('select').styler();


//slider 
$('#slider__bunner').owlCarousel({
	loop: true,
	items: 1,
	margin: 10,
});

$('.slider__products').owlCarousel({
	loop: true,
	items: 5,
	margin: 30,
	nav: true,
	dots: false,

	responsive: {
	    0: {
	       items: 1,
	    },
	    481: {
	       	items: 2,
	    },
	    768: {
	        items: 3,
	    },
	    1201: {
	    	items: 4,
	    },
	    1441: {
	    	items: 5,
	    }
	}
});

/*$('.gallery__items').owlCarousel({
	loop: true,
	items: 11,
	margin: 20	,
	nav: true,
	dots: false,

	responsive: {
	    0: {
	       items: 2,
	    },
	    381: {
	       	items: 3,
	    },
	    481: {
	       	items: 4,
	    },
	    577: {
	       	items: 5,
	    },
	    768: {
	        items: 6,
	    },
	    961: {
	        items: 7,
	    },
	    1201: {
	    	items: 9,
	    },
	    1441: {
	    	items: 11,
	    }
	}
});

$('.overview__slider').owlCarousel({
	loop: true,
	items: 1,
	margin: 30,
	nav: true,
	dots: false,
});*/

//menu
$('.header__burger').on('click', function(){
	$(this).toggleClass('active')
	$('.header__block').toggleClass('active');
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

//Slick
$('.gallery__items').slick({
	slidesToShow: 11,
	slidesToScroll: 1,
	arrows: true,
	// centerPadding: 0,
	asNavFor: '.overview__slider',
	speed: 700,
	focusOnSelect: true,
	
	responsive: [
	    {
	      breakpoint: 1440,
	      settings: {
	      	slidesToShow: 9,
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	      	slidesToShow: 7,
	      }
	    },
	    {
	      breakpoint: 960,
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
	      breakpoint: 576,
	      settings: {
	      	slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 380,
	      settings: {
	      	slidesToShow: 2,
	      }
	    },
	]
});

$('.overview__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.gallery__items',
	dots: false,
	arrows: true,
	speed: 700,
	
	responsive: [
	    {
	      breakpoint: 980,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vU2VsZWN0XHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuXHJcbi8vc2xpZGVyIFxyXG4kKCcjc2xpZGVyX19idW5uZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRpdGVtczogMSxcclxuXHRtYXJnaW46IDEwLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDUsXHJcblx0bWFyZ2luOiAzMCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHQgICAgMDoge1xyXG5cdCAgICAgICBpdGVtczogMSxcclxuXHQgICAgfSxcclxuXHQgICAgNDgxOiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDIsXHJcblx0ICAgIH0sXHJcblx0ICAgIDc2ODoge1xyXG5cdCAgICAgICAgaXRlbXM6IDMsXHJcblx0ICAgIH0sXHJcblx0ICAgIDEyMDE6IHtcclxuXHQgICAgXHRpdGVtczogNCxcclxuXHQgICAgfSxcclxuXHQgICAgMTQ0MToge1xyXG5cdCAgICBcdGl0ZW1zOiA1LFxyXG5cdCAgICB9XHJcblx0fVxyXG59KTtcclxuXHJcbi8qJCgnLmdhbGxlcnlfX2l0ZW1zJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDExLFxyXG5cdG1hcmdpbjogMjBcdCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHQgICAgMDoge1xyXG5cdCAgICAgICBpdGVtczogMixcclxuXHQgICAgfSxcclxuXHQgICAgMzgxOiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDMsXHJcblx0ICAgIH0sXHJcblx0ICAgIDQ4MToge1xyXG5cdCAgICAgICBcdGl0ZW1zOiA0LFxyXG5cdCAgICB9LFxyXG5cdCAgICA1Nzc6IHtcclxuXHQgICAgICAgXHRpdGVtczogNSxcclxuXHQgICAgfSxcclxuXHQgICAgNzY4OiB7XHJcblx0ICAgICAgICBpdGVtczogNixcclxuXHQgICAgfSxcclxuXHQgICAgOTYxOiB7XHJcblx0ICAgICAgICBpdGVtczogNyxcclxuXHQgICAgfSxcclxuXHQgICAgMTIwMToge1xyXG5cdCAgICBcdGl0ZW1zOiA5LFxyXG5cdCAgICB9LFxyXG5cdCAgICAxNDQxOiB7XHJcblx0ICAgIFx0aXRlbXM6IDExLFxyXG5cdCAgICB9XHJcblx0fVxyXG59KTtcclxuXHJcbiQoJy5vdmVydmlld19fc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDEsXHJcblx0bWFyZ2luOiAzMCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcbn0pOyovXHJcblxyXG4vL21lbnVcclxuJCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5oZWFkZXJfX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJ2h0bWwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuLy9Vc2VyXHJcbiQoJy5oZWFkZXJfX3VzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKS5zbGlkZVRvZ2dsZSgwKTtcclxufSk7XHJcblxyXG4vL2FzaWRlXHJcbiQoJy5hcnRpc3QgLmFzaWRlX19oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5hcnRpc3QsIC5hcnRpc3RfX2xpc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmFydGlzdF9fbGlzdC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLmFydGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuYXJ0aXN0X19saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vL0Ryb3Bkb3duXHJcbiQoJy5pdGVtLWluZm9fX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZScpLm5leHQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykucGFyZW50KCkucGFyZW50KCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgIGxldCBkcm9wZG93biA9ICQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJyk7XHJcbiAgICBpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSBcclxuICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZsYXRpY29uLWxldHRlci14JykpIHtcclxuICAgICAgICAgICAgJCgnLml0ZW0taW5mb19faWNvbicpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLWluZm9fX2ljb24nKS5wYXJlbnQoKS5wYXJlbnQoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vL0FzaWRlXHJcbiQoJy5hcnRpc3RfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYXJ0aXN0X19zdWJsaXN0Jykuc2xpZGVUb2dnbGUoMjUwKTtcclxufSk7XHJcblxyXG4vL1BvcHVwXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnYS5vcGVuX2Nvbm5lY3QnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Nvbm5lY3QnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX3Rlcm1zJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX190ZXJtcycsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fZXJyb3InKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2Vycm9yJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9iaWQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2JpZCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fY2hlY2tvdXQnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX2NoZWNrb3V0JyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcucHJvZHVjdF9faW1hZ2UtcmVzaXplJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHR0eXBlIDogJ2ltYWdlJyxcdFx0XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy9idXR0b25zIGZpbGxcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy5idXR0b24gLmJ0bl9maWxsJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2JsYW5rJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fYmxhbmsnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5idXR0b24gLmJ0bl9ibGFuaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9maWxsJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fZmlsbCcpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLmJ1dHRvbiAuYnRuX2JsYW5rJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2ZpbGwnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9maWxsJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcblxyXG4kKCcuaXRlbS1zdGF0c19fZmF2b3JpdGVzLCAuaXRlbS1zdGF0c19fbGlrZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vU2xpY2tcclxuJCgnLmdhbGxlcnlfX2l0ZW1zJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMTEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdC8vIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0YXNOYXZGb3I6ICcub3ZlcnZpZXdfX3NsaWRlcicsXHJcblx0c3BlZWQ6IDcwMCxcclxuXHRmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogOSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDcsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogOTYwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMzgwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7XHJcblxyXG4kKCcub3ZlcnZpZXdfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXNOYXZGb3I6ICcuZ2FsbGVyeV9faXRlbXMnLFxyXG5cdGRvdHM6IGZhbHNlLFxyXG5cdGFycm93czogdHJ1ZSxcclxuXHRzcGVlZDogNzAwLFxyXG5cdFxyXG5cdHJlc3BvbnNpdmU6IFtcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk4MCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG5cdCAgICAgICAgY2VudGVyUGFkZGluZzogMCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA3MDAsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHZlcnRpY2FsOiBmYWxzZSxcclxuXHQgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdF1cclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
