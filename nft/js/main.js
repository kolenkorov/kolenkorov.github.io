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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vU2VsZWN0XHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuXHJcbi8vc2xpZGVyIFxyXG4kKCcjc2xpZGVyX19idW5uZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRpdGVtczogMSxcclxuXHRtYXJnaW46IDEwLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDUsXHJcblx0bWFyZ2luOiAzMCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHQgICAgMDoge1xyXG5cdCAgICAgICBpdGVtczogMSxcclxuXHQgICAgfSxcclxuXHQgICAgNDgxOiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDIsXHJcblx0ICAgIH0sXHJcblx0ICAgIDc2ODoge1xyXG5cdCAgICAgICAgaXRlbXM6IDMsXHJcblx0ICAgIH0sXHJcblx0ICAgIDEyMDE6IHtcclxuXHQgICAgXHRpdGVtczogNCxcclxuXHQgICAgfSxcclxuXHQgICAgMTQ0MToge1xyXG5cdCAgICBcdGl0ZW1zOiA1LFxyXG5cdCAgICB9XHJcblx0fVxyXG59KTtcclxuXHJcbi8qJCgnLmdhbGxlcnlfX2l0ZW1zJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDExLFxyXG5cdG1hcmdpbjogMjBcdCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHQgICAgMDoge1xyXG5cdCAgICAgICBpdGVtczogMixcclxuXHQgICAgfSxcclxuXHQgICAgMzgxOiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDMsXHJcblx0ICAgIH0sXHJcblx0ICAgIDQ4MToge1xyXG5cdCAgICAgICBcdGl0ZW1zOiA0LFxyXG5cdCAgICB9LFxyXG5cdCAgICA1Nzc6IHtcclxuXHQgICAgICAgXHRpdGVtczogNSxcclxuXHQgICAgfSxcclxuXHQgICAgNzY4OiB7XHJcblx0ICAgICAgICBpdGVtczogNixcclxuXHQgICAgfSxcclxuXHQgICAgOTYxOiB7XHJcblx0ICAgICAgICBpdGVtczogNyxcclxuXHQgICAgfSxcclxuXHQgICAgMTIwMToge1xyXG5cdCAgICBcdGl0ZW1zOiA5LFxyXG5cdCAgICB9LFxyXG5cdCAgICAxNDQxOiB7XHJcblx0ICAgIFx0aXRlbXM6IDExLFxyXG5cdCAgICB9XHJcblx0fVxyXG59KTtcclxuXHJcbiQoJy5vdmVydmlld19fc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDEsXHJcblx0bWFyZ2luOiAzMCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcbn0pOyovXHJcblxyXG4vL21lbnVcclxuJCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdCQoJy5oZWFkZXJfX2Jsb2NrLXdyYXAnKS5zbGlkZVRvZ2dsZSgyNTApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG59KTtcclxuXHJcbi8vVXNlclxyXG4kKCcuaGVhZGVyX191c2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCgnLmhlYWRlcl9fdXNlci10b29sYmFyJykuc2xpZGVUb2dnbGUoMCk7XHJcbn0pO1xyXG5cclxuLy9hc2lkZVxyXG4kKCcuYXJ0aXN0IC5hc2lkZV9faGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuXHQkKCcuYXJ0aXN0LCAuYXJ0aXN0X19saXN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJy5hcnRpc3RfX2xpc3QtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQoJy5hcnRpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLmFydGlzdF9fbGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5cclxuLy9Ecm9wZG93blxyXG4kKCcuaXRlbS1pbmZvX19pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2UnKS5uZXh0KCcuaXRlbS1pbmZvX19kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnbGFiZWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcbiAgICBsZXQgZHJvcGRvd24gPSAkKCcuaXRlbS1pbmZvX19kcm9wZG93bicpO1xyXG4gICAgaWYgKCFkcm9wZG93bi5pcyhlLnRhcmdldCkgXHJcbiAgICAgICAgJiYgZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdmbGF0aWNvbi1sZXR0ZXIteCcpKSB7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLWluZm9fX2ljb24nKS5yZW1vdmVDbGFzcygnY2xvc2UnKTtcclxuICAgICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuaXRlbS1pbmZvX19pY29uJykucGFyZW50KCkucGFyZW50KCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9Bc2lkZVxyXG4kKCcuYXJ0aXN0X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuZmluZCgnLmFydGlzdF9fc3VibGlzdCcpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcbn0pO1xyXG5cclxuLy9Qb3B1cFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdCQoJ2Eub3Blbl9jb25uZWN0JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19jb25uZWN0JyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl90ZXJtcycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fdGVybXMnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2Vycm9yJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19lcnJvcicsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fYmlkJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19iaWQnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2NoZWNrb3V0JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnBvcHVwX19jaGVja291dCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHJcblx0JCgnLnByb2R1Y3RfX2ltYWdlLXJlc2l6ZScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZSA6ICdpbWFnZScsXHRcdFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vYnV0dG9ucyBmaWxsXHJcbiQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuYnV0dG9uIC5idG5fZmlsbCcsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9ibGFuaycpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2JsYW5rJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuYnV0dG9uIC5idG5fZmlsbCcsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9ibGFuaycpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2JsYW5rJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuYnV0dG9uIC5idG5fYmxhbmsnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fZmlsbCcpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2ZpbGwnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy5idXR0b24gLmJ0bl9ibGFuaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykubmV4dCgnLmJ0bl9maWxsJykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLnByZXYoJy5idG5fZmlsbCcpLmFkZENsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG5cclxuJCgnLml0ZW0tc3RhdHNfX2Zhdm9yaXRlcywgLml0ZW0tc3RhdHNfX2xpa2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4vL1NsaWNrXHJcbiQoJy5nYWxsZXJ5X19pdGVtcycpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Nob3c6IDExLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdGFycm93czogdHJ1ZSxcclxuXHQvLyBjZW50ZXJQYWRkaW5nOiAwLFxyXG5cdGFzTmF2Rm9yOiAnLm92ZXJ2aWV3X19zbGlkZXInLFxyXG5cdHNwZWVkOiA3MDAsXHJcblx0Zm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuXHRcclxuXHRyZXNwb25zaXZlOiBbXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAxNDQwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHRzbGlkZXNUb1Nob3c6IDksXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA3LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk2MCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA2LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA1LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDM4MCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHRdXHJcbn0pO1xyXG5cclxuJCgnLm92ZXJ2aWV3X19zbGlkZXInKS5zbGljayh7XHJcblx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdGFzTmF2Rm9yOiAnLmdhbGxlcnlfX2l0ZW1zJyxcclxuXHRkb3RzOiBmYWxzZSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0c3BlZWQ6IDcwMCxcclxuXHRcclxuXHRyZXNwb25zaXZlOiBbXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5ODAsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuXHQgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogNzAwLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgXHR2ZXJ0aWNhbDogZmFsc2UsXHJcblx0ICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxyXG5cdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHRdXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
