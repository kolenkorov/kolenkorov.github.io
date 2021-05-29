//header 
var scrollPos = 0;
$(window).scroll(function(){
	var st = $(this).scrollTop();
	if (st < scrollPos){
		$('.header').addClass('sticky');
	} 
	else {
		$('.header').removeClass('sticky');
	}
	if($(window).scrollTop() < 5) {
		$('.header').removeClass('sticky');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyIFxyXG52YXIgc2Nyb2xsUG9zID0gMDtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblx0aWYgKHN0IDwgc2Nyb2xsUG9zKXtcclxuXHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcblx0fSBcclxuXHRlbHNlIHtcclxuXHRcdCQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcblx0fVxyXG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA8IDUpIHtcclxuXHRcdCQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcblx0fVxyXG5cdHNjcm9sbFBvcyA9IHN0O1xyXG59KTtcclxuXHJcbi8vc2xpZGVyIFxyXG4kKCcjc2xpZGVyX19idW5uZXInKS5zbGljayh7XHJcblx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdGFycm93czogZmFsc2UsXHJcblx0ZG90czogdHJ1ZSxcclxuXHRzcGVlZDogNzAwLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXJfX3Byb2R1Y3RzJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogNSxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0ZG90czogZmFsc2UsXHJcblx0c3BlZWQ6IDcwMCxcclxuXHJcblx0cmVzcG9uc2l2ZTogW1xyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMTIzMSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDk2MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDQ4MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHRdXHJcbn0pO1xyXG5cclxuJCgnLmdhbGxlcnlfX2l0ZW1zJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMTEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdHNwZWVkOiA3MDAsXHJcblx0XHJcblx0cmVzcG9uc2l2ZTogW1xyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogMTQ0MSxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0c2xpZGVzVG9TaG93OiA5LFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDEyMzEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNyxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA5NjEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNixcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA3NjgsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA1NzcsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogNCxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiA0ODEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMyxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIHtcclxuXHQgICAgICBicmVha3BvaW50OiAzODEsXHJcblx0ICAgICAgc2V0dGluZ3M6IHtcclxuXHQgICAgICBcdHNsaWRlc1RvU2hvdzogMixcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5vdmVydmlld19fc2xpZGVyJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRkb3RzOiBmYWxzZSxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0Ly9mYWRlOiB0cnVlLFxyXG5cdHNwZWVkOiA1MDAsXHJcblx0XHJcblx0cmVzcG9uc2l2ZTogW1xyXG5cdCAgICB7XHJcblx0ICAgICAgYnJlYWtwb2ludDogOTYxLFxyXG5cdCAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcblx0ICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAge1xyXG5cdCAgICAgIGJyZWFrcG9pbnQ6IDcwMCxcclxuXHQgICAgICBzZXR0aW5nczoge1xyXG5cdCAgICAgIFx0dmVydGljYWw6IGZhbHNlLFxyXG5cdCAgICAgICAgY2VudGVyUGFkZGluZzogMCxcclxuXHQgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XVxyXG59KTtcclxuXHJcbiQoJy5nYWxsZXJ5X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFxyXG5cdCQoJy5maW5lYXJ0X19vdmVydmlldy1pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5zbGljaygndW5zbGljaycpO1xyXG5cdCQoaHJlZikuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNsaWNrKCk7XHJcbn0pO1xyXG5cclxuLy9tZW51XHJcbiQoJy5oZWFkZXJfX2J1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHQkKCcuaGVhZGVyX19ibG9jay13cmFwJykuc2xpZGVUb2dnbGUoMjUwKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnaHRtbCcpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG4vL1VzZXJcclxuJCgnLmhlYWRlcl9fdXNlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5oZWFkZXJfX3VzZXItdG9vbGJhcicpLnNsaWRlVG9nZ2xlKDApO1xyXG59KTtcclxuXHJcbi8vYXNpZGVcclxuJCgnLmFydGlzdCAuYXNpZGVfX2hlYWRpbmcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0JCgnLmFydGlzdCwgLmFydGlzdF9fbGlzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuYXJ0aXN0X19saXN0LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKCcuYXJ0aXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJy5hcnRpc3RfX2xpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vRHJvcGRvd25cclxuJCgnLml0ZW0taW5mb19faWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2Nsb3NlJykubmV4dCgnLml0ZW0taW5mb19fZHJvcGRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG4gICAgbGV0IGRyb3Bkb3duID0gJCgnLml0ZW0taW5mb19fZHJvcGRvd24nKTtcclxuICAgIGlmICghZHJvcGRvd24uaXMoZS50YXJnZXQpIFxyXG4gICAgICAgICYmIGRyb3Bkb3duLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnZmxhdGljb24tbGV0dGVyLXgnKSkge1xyXG4gICAgICAgICAgICAkKCcuaXRlbS1pbmZvX19pY29uJykucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLml0ZW0taW5mb19faWNvbicpLnBhcmVudCgpLnBhcmVudCgnbGFiZWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vQXNpZGVcclxuJCgnLmFydGlzdF9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5hcnRpc3RfX3N1Ymxpc3QnKS5zbGlkZVRvZ2dsZSgyNTApO1xyXG59KTtcclxuXHJcbi8vUG9wdXBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCdhLm9wZW5fY29ubmVjdCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fY29ubmVjdCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCdhLm9wZW5fdGVybXMnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucG9wdXBfX3Rlcm1zJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9lcnJvcicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fZXJyb3InLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnYS5vcGVuX2JpZCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fYmlkJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cdCQoJ2Eub3Blbl9jaGVja291dCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5wb3B1cF9fY2hlY2tvdXQnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdCQoJy5wcm9kdWN0X19pbWFnZS1yZXNpemUnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGUgOiAnaW1hZ2UnLFx0XHRcclxuXHR9KTtcclxufSk7XHJcblxyXG4vL2J1dHRvbnMgZmlsbFxyXG4kKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLmJ1dHRvbiAuYnRuX2ZpbGwnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fYmxhbmsnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9ibGFuaycpLmFkZENsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLmJ1dHRvbiAuYnRuX2ZpbGwnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fYmxhbmsnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9ibGFuaycpLnJlbW92ZUNsYXNzKCdmaWxsJyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLmJ1dHRvbiAuYnRuX2JsYW5rJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5uZXh0KCcuYnRuX2ZpbGwnKS5yZW1vdmVDbGFzcygnZmlsbCcpO1xyXG5cdCQodGhpcykucHJldignLmJ0bl9maWxsJykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuYnV0dG9uIC5idG5fYmxhbmsnLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbGwnKTtcclxuXHQkKHRoaXMpLm5leHQoJy5idG5fZmlsbCcpLmFkZENsYXNzKCdmaWxsJyk7XHJcblx0JCh0aGlzKS5wcmV2KCcuYnRuX2ZpbGwnKS5hZGRDbGFzcygnZmlsbCcpO1xyXG59KTtcclxuXHJcbiQoJy5pdGVtLXN0YXRzX19mYXZvcml0ZXMsIC5pdGVtLXN0YXRzX19saWtlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy9TZWxlY3RcclxuJCgnc2VsZWN0Jykuc3R5bGVyKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
