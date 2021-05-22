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

$('.gallery__items').owlCarousel({
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
});

//menu
$('.header__burger').on('click', function(){
	$(this).toggleClass('active')
	$('.header__block').toggleClass('active');
});

//User
$('.header__user').on('click', function() {
	$('.header__user-toolbar').slideToggle(0);
});

//aside
$('.artist__burger').on('click', function(){
	$(this).toggleClass('active')
	$('.artist__list').slideToggle(250);
});


//Dropdown
$('.item-info__icon').on('click', function() {
	$(this).toggleClass('close').next('.item-info__dropdown').toggleClass('active');
});

$(document).mouseup(function (e){
    let dropdown = $('.item-info__dropdown');
    if (!dropdown.is(e.target) 
        && dropdown.has(e.target).length === 0) {
        if (!$(e.target).hasClass('flaticon-letter-x')) {
            $('.item-info__icon').removeClass('close');
            dropdown.removeClass('active');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vU2VsZWN0XHJcbiQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuXHJcbi8vc2xpZGVyIFxyXG4kKCcjc2xpZGVyX19idW5uZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRpdGVtczogMSxcclxuXHRtYXJnaW46IDEwLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6IHRydWUsXHJcblx0aXRlbXM6IDUsXHJcblx0bWFyZ2luOiAzMCxcclxuXHRuYXY6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHQgICAgMDoge1xyXG5cdCAgICAgICBpdGVtczogMSxcclxuXHQgICAgfSxcclxuXHQgICAgNDgxOiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDIsXHJcblx0ICAgIH0sXHJcblx0ICAgIDc2ODoge1xyXG5cdCAgICAgICAgaXRlbXM6IDMsXHJcblx0ICAgIH0sXHJcblx0ICAgIDEyMDE6IHtcclxuXHQgICAgXHRpdGVtczogNCxcclxuXHQgICAgfSxcclxuXHQgICAgMTQ0MToge1xyXG5cdCAgICBcdGl0ZW1zOiA1LFxyXG5cdCAgICB9XHJcblx0fVxyXG59KTtcclxuXHJcbiQoJy5nYWxsZXJ5X19pdGVtcycpLm93bENhcm91c2VsKHtcclxuXHRsb29wOiB0cnVlLFxyXG5cdGl0ZW1zOiAxMSxcclxuXHRtYXJnaW46IDIwXHQsXHJcblx0bmF2OiB0cnVlLFxyXG5cdGRvdHM6IGZhbHNlLFxyXG5cclxuXHRyZXNwb25zaXZlOiB7XHJcblx0ICAgIDA6IHtcclxuXHQgICAgICAgaXRlbXM6IDIsXHJcblx0ICAgIH0sXHJcblx0ICAgIDM4MToge1xyXG5cdCAgICAgICBcdGl0ZW1zOiAzLFxyXG5cdCAgICB9LFxyXG5cdCAgICA0ODE6IHtcclxuXHQgICAgICAgXHRpdGVtczogNCxcclxuXHQgICAgfSxcclxuXHQgICAgNTc3OiB7XHJcblx0ICAgICAgIFx0aXRlbXM6IDUsXHJcblx0ICAgIH0sXHJcblx0ICAgIDc2ODoge1xyXG5cdCAgICAgICAgaXRlbXM6IDYsXHJcblx0ICAgIH0sXHJcblx0ICAgIDk2MToge1xyXG5cdCAgICAgICAgaXRlbXM6IDcsXHJcblx0ICAgIH0sXHJcblx0ICAgIDEyMDE6IHtcclxuXHQgICAgXHRpdGVtczogOSxcclxuXHQgICAgfSxcclxuXHQgICAgMTQ0MToge1xyXG5cdCAgICBcdGl0ZW1zOiAxMSxcclxuXHQgICAgfVxyXG5cdH1cclxufSk7XHJcblxyXG4kKCcub3ZlcnZpZXdfX3NsaWRlcicpLm93bENhcm91c2VsKHtcclxuXHRsb29wOiB0cnVlLFxyXG5cdGl0ZW1zOiAxLFxyXG5cdG1hcmdpbjogMzAsXHJcblx0bmF2OiB0cnVlLFxyXG5cdGRvdHM6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vbWVudVxyXG4kKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0JCgnLmhlYWRlcl9fYmxvY2snKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy9Vc2VyXHJcbiQoJy5oZWFkZXJfX3VzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKS5zbGlkZVRvZ2dsZSgwKTtcclxufSk7XHJcblxyXG4vL2FzaWRlXHJcbiQoJy5hcnRpc3RfX2J1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHQkKCcuYXJ0aXN0X19saXN0Jykuc2xpZGVUb2dnbGUoMjUwKTtcclxufSk7XHJcblxyXG5cclxuLy9Ecm9wZG93blxyXG4kKCcuaXRlbS1pbmZvX19pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2UnKS5uZXh0KCcuaXRlbS1pbmZvX19kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgIGxldCBkcm9wZG93biA9ICQoJy5pdGVtLWluZm9fX2Ryb3Bkb3duJyk7XHJcbiAgICBpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSBcclxuICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZsYXRpY29uLWxldHRlci14JykpIHtcclxuICAgICAgICAgICAgJCgnLml0ZW0taW5mb19faWNvbicpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vQXNpZGVcclxuJCgnLmFydGlzdF9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5hcnRpc3RfX3N1Ymxpc3QnKS5zbGlkZVRvZ2dsZSgyNTApO1xyXG59KTtcclxuXHJcbi8vUG9wdXBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCdhLm9wZW5fY29ubmVjdCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fY29ubmVjdCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fdGVybXMnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX3Rlcm1zJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9lcnJvcicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fZXJyb3InLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2JpZCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fYmlkJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9jaGVja291dCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fY2hlY2tvdXQnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdCQoJy5wcm9kdWN0X19pbWFnZS1yZXNpemUnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGUgOiAnaW1hZ2UnLFx0XHRcclxuXHR9KTtcclxufSk7XHJcblxyXG4vL2J1dHRvbnMgZmlsbFxyXG4kKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLmJ1dHRvbiAuYnRuX2ZpbGwnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fYmxhbmsnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9ibGFuaycpLmFkZENsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLmJ1dHRvbiAuYnRuX2ZpbGwnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fYmxhbmsnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9ibGFuaycpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLmJ1dHRvbiAuYnRuX2JsYW5rJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2ZpbGwnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9maWxsJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuYnV0dG9uIC5idG5fYmxhbmsnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fZmlsbCcpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2ZpbGwnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
