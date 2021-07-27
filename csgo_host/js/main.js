$('.reviews__items').owlCarousel({
	items: 1,
	loop: true,
	center: true,
	autoplay: true,
	autoplaySpeed: 800,
});


$(window).scroll(function(){
	if($(window).scrollTop() > 5) {
		$('.header').addClass('sticky');
	} else {
		$('.header').removeClass('sticky');
	}
});

jQuery(window).scroll(function(){
    var $sections = $('.section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-200;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('.header__nav-item.anc a').parent().removeClass('active');
			$('.header__nav-item.anc a[href="#'+id+'"]').parent().addClass('active');

        }
    })
 });


/* Scroll */
	$('.header__nav-item.anc a, .footer__nav a').on('click', function(e){
		e.preventDefault();

		let selector = $(this).attr('href');
		let h = $(selector);


		$('html, body').animate({
			scrollTop: h.offset().top - 140
		}, 800);
	});
/* Scroll end */

$(window).on('load resize', function(){
	if($(window).width() <= 780) {
		$('.header__buttons').appendTo($('.header__nav'));
	}
});

$('.header__burger').on('click', function(){
	$(this).toggleClass('active');
	$('.header__nav').slideToggle(250);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5yZXZpZXdzX19pdGVtcycpLm93bENhcm91c2VsKHtcclxuXHRpdGVtczogMSxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGNlbnRlcjogdHJ1ZSxcclxuXHRhdXRvcGxheTogdHJ1ZSxcclxuXHRhdXRvcGxheVNwZWVkOiA4MDAsXHJcbn0pO1xyXG5cclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1KSB7XHJcblx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIHZhciAkc2VjdGlvbnMgPSAkKCcuc2VjdGlvbicpO1xyXG5cdCRzZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKGksZWwpe1xyXG4gICAgICAgIHZhciB0b3AgID0gJChlbCkub2Zmc2V0KCkudG9wLTIwMDtcclxuICAgICAgICB2YXIgYm90dG9tID0gdG9wICskKGVsKS5oZWlnaHQoKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQoZWwpLmF0dHIoJ2lkJyk7XHJcbiAgICBcdGlmKCBzY3JvbGwgPiB0b3AgJiYgc2Nyb2xsIDwgYm90dG9tKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbmF2LWl0ZW0uYW5jIGEnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQoJy5oZWFkZXJfX25hdi1pdGVtLmFuYyBhW2hyZWY9XCIjJytpZCsnXCJdJykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gfSk7XHJcblxyXG5cclxuLyogU2Nyb2xsICovXHJcblx0JCgnLmhlYWRlcl9fbmF2LWl0ZW0uYW5jIGEsIC5mb290ZXJfX25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogaC5vZmZzZXQoKS50b3AgLSAxNDBcclxuXHRcdH0sIDgwMCk7XHJcblx0fSk7XHJcbi8qIFNjcm9sbCBlbmQgKi9cclxuXHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpe1xyXG5cdGlmKCQod2luZG93KS53aWR0aCgpIDw9IDc4MCkge1xyXG5cdFx0JCgnLmhlYWRlcl9fYnV0dG9ucycpLmFwcGVuZFRvKCQoJy5oZWFkZXJfX25hdicpKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuaGVhZGVyX19uYXYnKS5zbGlkZVRvZ2dsZSgyNTApO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
