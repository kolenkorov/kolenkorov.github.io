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
	    items: 1,
		loop:true,
	    margin:10,
	    nav:true,
	    responsive: false,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcuaGVhZGVyX19uYXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5oZWFkZXJfX25hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXJfX25hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmhlYWRlcl9fbmF2LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXJfX25hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIFNsaWRlcnMgKi9cclxuXHQkKCcjcHJvZHVjdHNfc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdCAgICBpdGVtczogMSxcclxuXHRcdGxvb3A6dHJ1ZSxcclxuXHQgICAgbWFyZ2luOjEwLFxyXG5cdCAgICBuYXY6dHJ1ZSxcclxuXHQgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdCQoJyNwYXJ0bmVyc19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdCAgICBtYXJnaW46IDMwLFxyXG5cdCAgICBuYXY6IHRydWUsXHJcblx0ICAgIGRvdHM6IGZhbHNlLFxyXG5cclxuXHQgICAgcmVzcG9uc2l2ZTp7XHJcblx0ICAgICAgICAwOntcclxuXHQgICAgICAgICAgICBpdGVtczoxXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgNDUwOntcclxuXHQgICAgICAgICAgICBpdGVtczoyXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgNTc3OntcclxuXHQgICAgICAgICAgICBpdGVtczozXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgNzgxOntcclxuXHQgICAgICAgICAgICBpdGVtczo0XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHR9KTtcclxuLyogU2xpZGVycyBlbmQgKi9cclxuXHJcblxyXG4vKiBTY3JvbGwgKi9cclxuXHQkKCcuaGVhZGVyX19uYXYtaXRlbSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcuaGVhZGVyX19uYXYtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cdFx0bGV0IGhoID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogaC5vZmZzZXQoKS50b3AgLSBoaFxyXG5cdFx0fSwgODAwKTtcclxuXHR9KTtcclxuXHJcbi8qIFNjcm9sbCBlbmQgKi8iXSwiZmlsZSI6Im1haW4uanMifQ==
