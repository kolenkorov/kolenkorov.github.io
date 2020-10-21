/* Menu */
	$('.header__burger').on('click', function () {
		$('.header__nav').toggleClass('active');
	});

	$('.header__nav-item').on('click', function(){
		$('.header__nav').removeClass('active');
	});

	$('.header__nav-close').on('click', function(){
		$('.header__nav').removeClass('active');
	});
/* Menu end */

/* Sliders */
	$('#products_slider').owlCarousel({
		loop:true,
	    margin:10,
	    nav:true,
	    items: 1,
	});

	$('#partners_slider').owlCarousel({
		loop: true,
	    margin: 30,
	    nav: true,
	    dots: false,

	    responsive:{
	        0:{
	            items:1
	        },
	        450:{
	            items:2
	        },
	        577:{
	            items:3
	        },
	        781:{
	            items:4
	        }
	    }
	});
/* Sliders end */


/* Scroll */
	$('.header__nav-item a').on('click', function(e){
		e.preventDefault();
		$('.header__nav-item').removeClass('active');
		$(this).parent().addClass('active');
		let selector = $(this).attr('href');
		let h = $(selector);
		let hh = $('header').outerHeight();

		$('html, body').animate({
			scrollTop: h.offset().top - hh
		}, 800);
	});

/* Scroll end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcuaGVhZGVyX19uYXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5oZWFkZXJfX25hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXJfX25hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmhlYWRlcl9fbmF2LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXJfX25hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIFNsaWRlcnMgKi9cclxuXHQkKCcjcHJvZHVjdHNfc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bG9vcDp0cnVlLFxyXG5cdCAgICBtYXJnaW46MTAsXHJcblx0ICAgIG5hdjp0cnVlLFxyXG5cdCAgICBpdGVtczogMSxcclxuXHR9KTtcclxuXHJcblx0JCgnI3BhcnRuZXJzX3NsaWRlcicpLm93bENhcm91c2VsKHtcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0ICAgIG1hcmdpbjogMzAsXHJcblx0ICAgIG5hdjogdHJ1ZSxcclxuXHQgICAgZG90czogZmFsc2UsXHJcblxyXG5cdCAgICByZXNwb25zaXZlOntcclxuXHQgICAgICAgIDA6e1xyXG5cdCAgICAgICAgICAgIGl0ZW1zOjFcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICA0NTA6e1xyXG5cdCAgICAgICAgICAgIGl0ZW1zOjJcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICA1Nzc6e1xyXG5cdCAgICAgICAgICAgIGl0ZW1zOjNcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICA3ODE6e1xyXG5cdCAgICAgICAgICAgIGl0ZW1zOjRcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cdH0pO1xyXG4vKiBTbGlkZXJzIGVuZCAqL1xyXG5cclxuXHJcbi8qIFNjcm9sbCAqL1xyXG5cdCQoJy5oZWFkZXJfX25hdi1pdGVtIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJy5oZWFkZXJfX25hdi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblx0XHRsZXQgaGggPSAkKCdoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIGhoXHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG5cclxuLyogU2Nyb2xsIGVuZCAqLyJdLCJmaWxlIjoibWFpbi5qcyJ9
