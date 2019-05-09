/* Sticky menu */

let hh = $('.main-header').height();
let mh = $('.main-menu').outerHeight();
let nav = $('.main');
let groups = $('.main-groups').outerHeight();

if($(window).width() <= 780) {
	hh = 0;
}

$(window).scroll(function() {
	if($(this).scrollTop() >= hh) {
		nav.addClass('main-menu--sticky');
		nav.removeClass('main-menu--static');
	}
	else{
		nav.removeClass('main-menu--sticky');
		nav.addClass('main-menu--static');
	}
});

/* Sticky menu end */

/* Scroll */


jQuery(function($){
    let static = '.main-menu--static a';
    let sticky = '.main-menu--sticky a';
    let offset1 = 50;

    if($(window).width() <= 780) {
    	offset1 = -5;
    }

	$(window).on('load', function(){
		if (window.location.hash) {
		    let target = window.location.hash;
		    // убираем хеш из строки(отключаем дефолтный "прыжок")
			history.replaceState("", document.title, window.location.pathname + window.location.search);
		    
		    // анимируем скролл
		    let target_offset = $(target).offset() ? $(target).offset().top : 0;
		    let customoffset = (mh + offset1);
		    $('html, body').animate({
		        scrollTop: target_offset - customoffset
		    },500);
		}
	});

    $(".footer-info__nav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        let target = this.hash;
        let target_offset = $(target).offset() ? $(target).offset().top : 0;
        let customoffset = (mh + offset1);
        $('html, body').animate({
            scrollTop: target_offset - customoffset
        }, 500, function(){

        });
    });

    $(document).on('click', sticky, function(e) {
        //e.preventDefault();
        let target = this.hash;
        let target_offset = $(target).offset() ? $(target).offset().top : 0;
        let customoffset = (mh + offset1);
        $('html, body').animate({
            scrollTop: target_offset - customoffset
        }, 500, function(){

        });
    });

    $(document).on('click', static, function(e) {
        //e.preventDefault();
        offset = 195;

        if($(window).width() <= 1170) {
        	offset = 465;
        }

        let target = this.hash;
        let target_offset = $(target).offset() ? $(target).offset().top : 0;
        let customoffset = (mh + 75 + offset);
        $('html, body').animate({
            scrollTop: target_offset - customoffset
        }, 500, function(){

        });
    });
});

/* Scroll end */


/* Select */

$('.type-select').on('click', function() {
	$(this).toggleClass('type-select--open');
});

/* Select end */

/* Autoheight */

let maxHeight = 0;
$(".design-item__heading").each(function(){
	if ( $(this).height() > maxHeight ) {
		maxHeight = $(this).height();
	}
});
 
$(".design-item__heading").height(maxHeight);

/* Autoheight end */

/* Phone */

if($(window).width() <= 781) {
	$('.main-menu__call a').removeClass('call-open');
	$('.main-menu__call a').attr('href', 'tel:375297772370');
}

/* Phone end */

/* Menu */

let burger_icon = $('.main-menu__burger');
let menu  = $('.main-menu__nav');

burger_icon.on('click', function(){
	menu.toggleClass("nav-active");
	$('body').toggleClass('overflow');
})

/* Menu end */

/* Owl Carousel */

$('#slider_1').owlCarousel({
	loop:true,
	margin:10,
	mouseDrag: false,
	items:1,
	nav:true,
	navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
	dots:true
});

$(window).on('load resize', unwrap);

let pTags = $(".product-item");

function unwrap(){
	var pTags = $(".product-item");
	if($(window).width() <= 991) {
		$('#slider_2').trigger('destroy.owl.carousel');

		if ( pTags.parent().is(".product-items__page")) {
			pTags.unwrap();
		}

		$('#slider_2').owlCarousel({
			loop:true,
			margin:5,
			mouseDrag: false,
			items:3,
			dots:true,
			nav:true,
			navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
			responsive : {
				0 : {
					items:1,
					margin: 15
				},
				577 : {
					items:2,
					margin: 15
				},
				781 : {
					items: 3
				}
			}
		});

		

	} else {
		$('#slider_2').trigger('destroy.owl.carousel');
		$('#slider_2').owlCarousel({
			loop:true,
			margin:0,
			mouseDrag: false,
			items:1,
			dots:true
		});

		let dot = $('#slider_2.product-items .owl-dot');
		dot.each(function() {
			let index = $(this).index() + 1;
			$(this).html(index);
		});
	}
}

$(".works-photo__info").on('click', function(e) {
	e.preventDefault();
});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	prevArrow: '<button class="slick-prev"><i class="flaticon flaticon-left-arrow"></i></button>',
	nextArrow: '<button class="slick-next"><i class="flaticon flaticon-right-arrow"></i></button>',
	dots: true,
	centerMode: true,
	centerPadding: 0,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 781,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
			}
		},
		{
			breakpoint: 577,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('#slider_4').owlCarousel({
	loop:true,
	margin:30,
	mouseDrag: false,
	items:2,
	video:true,
	lazyLoad:true,
	nav:true,
	navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
	dots:true,
	responsive : {
		0 : {
			items:1
		},
		577 : {
			items: 2,
		},
	}
});

$('#slider_5').owlCarousel({
	loop:true,
	margin:30,
	mouseDrag: false,
	items:3,
	nav:true,
	center: true,
	navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
	dots:false,
	responsive : {
		0 : {
			items:1
		},
		781 : {
			items: 3,
		},
	}
});


$("#slider_acces").owlCarousel({
	loop:true,
	margin:10,
	mouseDrag: false,
	items:4,
	dots:true,
	nav:true,
	navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
	responsive : {
		0 : {
			items: 1,
			margin: 15
		},
		577 : {
			items: 2,
			margin: 15
		},
		781 : {
			items: 3
		},

		992 : {
			items: 4
		}
	}
});

$(window).on('load resize', dataSlider);

let data = $('.data-items');

function dataSlider(){

	if($(window).width() <= 991){
		data.addClass('owl-carousel').addClass('carousel_6');
		
		$(".carousel_6").owlCarousel({
			loop: true,
			margin: 30,
			mouseDrag: false,
			autoplay: false,
			slideBy: 4,
			items: 3,
			nav: true,
			navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
			dots:true,

			responsive : {
				0 : {
					items:1
				},
				577 : {
					items:2
				},
				781 : {
					items: 3,
				},
			}
		});
			
	}
	else{
		$(".carousel_6").trigger('destroy.owl.carousel');
		data.removeClass('owl-carousel').removeClass('carousel_6');
	}
}

$('#slider_utp').owlCarousel({
	loop:true,
	margin:0,
	mouseDrag: false,
	items:1,
	video:true,
	lazyLoad:true,
	nav:true,
	navText: ['<i class="flaticon flaticon-left-arrow"></i>','<i class="flaticon flaticon-right-arrow"></i>'],
	dots:true,
});
/* Owl Carousel end */

/* Form Styler*/

$('.main-header__city .city').styler();

/* Form Styler end */

/* Magnific popup */

$(document).ready(function(){
	$('.call-open').magnificPopup({
		items: [
			{
				src: '.call-popup',
				type: 'inline'
			}
		],
	});
	$('.message-open').magnificPopup({
		items: [
			{
				src: '.message-popup',
				type: 'inline'
			}
		],
	});
});

/* Magnific popup */

/* Ajax form */

$(document).ready(function() {	
	$("#form_1").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_1").trigger("reset");
		});
		return false;
	});
	
	$("#form_2").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_2").trigger("reset");
		});
		return false;
	});
});

/* Ajax form end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFN0aWNreSBtZW51ICovXHJcblxyXG5sZXQgaGggPSAkKCcubWFpbi1oZWFkZXInKS5oZWlnaHQoKTtcclxubGV0IG1oID0gJCgnLm1haW4tbWVudScpLm91dGVySGVpZ2h0KCk7XHJcbmxldCBuYXYgPSAkKCcubWFpbicpO1xyXG5sZXQgZ3JvdXBzID0gJCgnLm1haW4tZ3JvdXBzJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbmlmKCQod2luZG93KS53aWR0aCgpIDw9IDc4MCkge1xyXG5cdGhoID0gMDtcclxufVxyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRpZigkKHRoaXMpLnNjcm9sbFRvcCgpID49IGhoKSB7XHJcblx0XHRuYXYuYWRkQ2xhc3MoJ21haW4tbWVudS0tc3RpY2t5Jyk7XHJcblx0XHRuYXYucmVtb3ZlQ2xhc3MoJ21haW4tbWVudS0tc3RhdGljJyk7XHJcblx0fVxyXG5cdGVsc2V7XHJcblx0XHRuYXYucmVtb3ZlQ2xhc3MoJ21haW4tbWVudS0tc3RpY2t5Jyk7XHJcblx0XHRuYXYuYWRkQ2xhc3MoJ21haW4tbWVudS0tc3RhdGljJyk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8qIFN0aWNreSBtZW51IGVuZCAqL1xyXG5cclxuLyogU2Nyb2xsICovXHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uKCQpe1xyXG4gICAgbGV0IHN0YXRpYyA9ICcubWFpbi1tZW51LS1zdGF0aWMgYSc7XHJcbiAgICBsZXQgc3RpY2t5ID0gJy5tYWluLW1lbnUtLXN0aWNreSBhJztcclxuICAgIGxldCBvZmZzZXQxID0gNTA7XHJcblxyXG4gICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzgwKSB7XHJcbiAgICBcdG9mZnNldDEgPSAtNTtcclxuICAgIH1cclxuXHJcblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0ICAgIGxldCB0YXJnZXQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRcdCAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRhdC10Ygg0LjQtyDRgdGC0YDQvtC60Lgo0L7RgtC60LvRjtGH0LDQtdC8INC00LXRhNC+0LvRgtC90YvQuSBcItC/0YDRi9C20L7QulwiKVxyXG5cdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShcIlwiLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0XHQgICAgXHJcblx0XHQgICAgLy8g0LDQvdC40LzQuNGA0YPQtdC8INGB0LrRgNC+0LvQu1xyXG5cdFx0ICAgIGxldCB0YXJnZXRfb2Zmc2V0ID0gJCh0YXJnZXQpLm9mZnNldCgpID8gJCh0YXJnZXQpLm9mZnNldCgpLnRvcCA6IDA7XHJcblx0XHQgICAgbGV0IGN1c3RvbW9mZnNldCA9IChtaCArIG9mZnNldDEpO1xyXG5cdFx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXRfb2Zmc2V0IC0gY3VzdG9tb2Zmc2V0XHJcblx0XHQgICAgfSw1MDApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuICAgICQoXCIuZm9vdGVyLWluZm9fX25hdiBhW2hyZWZePScjJ11cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5oYXNoO1xyXG4gICAgICAgIGxldCB0YXJnZXRfb2Zmc2V0ID0gJCh0YXJnZXQpLm9mZnNldCgpID8gJCh0YXJnZXQpLm9mZnNldCgpLnRvcCA6IDA7XHJcbiAgICAgICAgbGV0IGN1c3RvbW9mZnNldCA9IChtaCArIG9mZnNldDEpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXRfb2Zmc2V0IC0gY3VzdG9tb2Zmc2V0XHJcbiAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHN0aWNreSwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmhhc2g7XHJcbiAgICAgICAgbGV0IHRhcmdldF9vZmZzZXQgPSAkKHRhcmdldCkub2Zmc2V0KCkgPyAkKHRhcmdldCkub2Zmc2V0KCkudG9wIDogMDtcclxuICAgICAgICBsZXQgY3VzdG9tb2Zmc2V0ID0gKG1oICsgb2Zmc2V0MSk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldF9vZmZzZXQgLSBjdXN0b21vZmZzZXRcclxuICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgc3RhdGljLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb2Zmc2V0ID0gMTk1O1xyXG5cclxuICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA8PSAxMTcwKSB7XHJcbiAgICAgICAgXHRvZmZzZXQgPSA0NjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5oYXNoO1xyXG4gICAgICAgIGxldCB0YXJnZXRfb2Zmc2V0ID0gJCh0YXJnZXQpLm9mZnNldCgpID8gJCh0YXJnZXQpLm9mZnNldCgpLnRvcCA6IDA7XHJcbiAgICAgICAgbGV0IGN1c3RvbW9mZnNldCA9IChtaCArIDc1ICsgb2Zmc2V0KTtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0X29mZnNldCAtIGN1c3RvbW9mZnNldFxyXG4gICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKiBTY3JvbGwgZW5kICovXHJcblxyXG5cclxuLyogU2VsZWN0ICovXHJcblxyXG4kKCcudHlwZS1zZWxlY3QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCd0eXBlLXNlbGVjdC0tb3BlbicpO1xyXG59KTtcclxuXHJcbi8qIFNlbGVjdCBlbmQgKi9cclxuXHJcbi8qIEF1dG9oZWlnaHQgKi9cclxuXHJcbmxldCBtYXhIZWlnaHQgPSAwO1xyXG4kKFwiLmRlc2lnbi1pdGVtX19oZWFkaW5nXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRpZiAoICQodGhpcykuaGVpZ2h0KCkgPiBtYXhIZWlnaHQgKSB7XHJcblx0XHRtYXhIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG5cdH1cclxufSk7XHJcbiBcclxuJChcIi5kZXNpZ24taXRlbV9faGVhZGluZ1wiKS5oZWlnaHQobWF4SGVpZ2h0KTtcclxuXHJcbi8qIEF1dG9oZWlnaHQgZW5kICovXHJcblxyXG4vKiBQaG9uZSAqL1xyXG5cclxuaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzgxKSB7XHJcblx0JCgnLm1haW4tbWVudV9fY2FsbCBhJykucmVtb3ZlQ2xhc3MoJ2NhbGwtb3BlbicpO1xyXG5cdCQoJy5tYWluLW1lbnVfX2NhbGwgYScpLmF0dHIoJ2hyZWYnLCAndGVsOjM3NTI5Nzc3MjM3MCcpO1xyXG59XHJcblxyXG4vKiBQaG9uZSBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHJcbmxldCBidXJnZXJfaWNvbiA9ICQoJy5tYWluLW1lbnVfX2J1cmdlcicpO1xyXG5sZXQgbWVudSAgPSAkKCcubWFpbi1tZW51X19uYXYnKTtcclxuXHJcbmJ1cmdlcl9pY29uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0bWVudS50b2dnbGVDbGFzcyhcIm5hdi1hY3RpdmVcIik7XHJcblx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xyXG59KVxyXG5cclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIE93bCBDYXJvdXNlbCAqL1xyXG5cclxuJCgnI3NsaWRlcl8xJykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6dHJ1ZSxcclxuXHRtYXJnaW46MTAsXHJcblx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRpdGVtczoxLFxyXG5cdG5hdjp0cnVlLFxyXG5cdG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmbGF0aWNvbiBmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPicsJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tcmlnaHQtYXJyb3dcIj48L2k+J10sXHJcblx0ZG90czp0cnVlXHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIHVud3JhcCk7XHJcblxyXG5sZXQgcFRhZ3MgPSAkKFwiLnByb2R1Y3QtaXRlbVwiKTtcclxuXHJcbmZ1bmN0aW9uIHVud3JhcCgpe1xyXG5cdHZhciBwVGFncyA9ICQoXCIucHJvZHVjdC1pdGVtXCIpO1xyXG5cdGlmKCQod2luZG93KS53aWR0aCgpIDw9IDk5MSkge1xyXG5cdFx0JCgnI3NsaWRlcl8yJykudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcclxuXHJcblx0XHRpZiAoIHBUYWdzLnBhcmVudCgpLmlzKFwiLnByb2R1Y3QtaXRlbXNfX3BhZ2VcIikpIHtcclxuXHRcdFx0cFRhZ3MudW53cmFwKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0JCgnI3NsaWRlcl8yJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjo1LFxyXG5cdFx0XHRtb3VzZURyYWc6IGZhbHNlLFxyXG5cdFx0XHRpdGVtczozLFxyXG5cdFx0XHRkb3RzOnRydWUsXHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uIGZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPiddLFxyXG5cdFx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHRcdDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAxNVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NTc3IDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MixcclxuXHRcdFx0XHRcdG1hcmdpbjogMTVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc4MSA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOiAzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNzbGlkZXJfMicpLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHQkKCcjc2xpZGVyXzInKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjAsXHJcblx0XHRcdG1vdXNlRHJhZzogZmFsc2UsXHJcblx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdGRvdHM6dHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGRvdCA9ICQoJyNzbGlkZXJfMi5wcm9kdWN0LWl0ZW1zIC5vd2wtZG90Jyk7XHJcblx0XHRkb3QuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdFx0JCh0aGlzKS5odG1sKGluZGV4KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuJChcIi53b3Jrcy1waG90b19faW5mb1wiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy5zbGlkZXItZm9yJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRhcnJvd3M6IGZhbHNlLFxyXG5cdGZhZGU6IHRydWUsXHJcblx0YXNOYXZGb3I6ICcuc2xpZGVyLW5hdidcclxufSk7XHJcbiQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2hvdzogMyxcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRhc05hdkZvcjogJy5zbGlkZXItZm9yJyxcclxuXHRwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiPjxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT48L2J1dHRvbj4nLFxyXG5cdG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmbGF0aWNvbiBmbGF0aWNvbi1yaWdodC1hcnJvd1wiPjwvaT48L2J1dHRvbj4nLFxyXG5cdGRvdHM6IHRydWUsXHJcblx0Y2VudGVyTW9kZTogdHJ1ZSxcclxuXHRjZW50ZXJQYWRkaW5nOiAwLFxyXG5cdGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcblx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA3ODEsXHJcblx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGNlbnRlck1vZGU6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA1NzcsXHJcblx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRdXHJcbn0pO1xyXG5cclxuJCgnI3NsaWRlcl80Jykub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6dHJ1ZSxcclxuXHRtYXJnaW46MzAsXHJcblx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRpdGVtczoyLFxyXG5cdHZpZGVvOnRydWUsXHJcblx0bGF6eUxvYWQ6dHJ1ZSxcclxuXHRuYXY6dHJ1ZSxcclxuXHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uIGZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPiddLFxyXG5cdGRvdHM6dHJ1ZSxcclxuXHRyZXNwb25zaXZlIDoge1xyXG5cdFx0MCA6IHtcclxuXHRcdFx0aXRlbXM6MVxyXG5cdFx0fSxcclxuXHRcdDU3NyA6IHtcclxuXHRcdFx0aXRlbXM6IDIsXHJcblx0XHR9LFxyXG5cdH1cclxufSk7XHJcblxyXG4kKCcjc2xpZGVyXzUnKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDp0cnVlLFxyXG5cdG1hcmdpbjozMCxcclxuXHRtb3VzZURyYWc6IGZhbHNlLFxyXG5cdGl0ZW1zOjMsXHJcblx0bmF2OnRydWUsXHJcblx0Y2VudGVyOiB0cnVlLFxyXG5cdG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmbGF0aWNvbiBmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPicsJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tcmlnaHQtYXJyb3dcIj48L2k+J10sXHJcblx0ZG90czpmYWxzZSxcclxuXHRyZXNwb25zaXZlIDoge1xyXG5cdFx0MCA6IHtcclxuXHRcdFx0aXRlbXM6MVxyXG5cdFx0fSxcclxuXHRcdDc4MSA6IHtcclxuXHRcdFx0aXRlbXM6IDMsXHJcblx0XHR9LFxyXG5cdH1cclxufSk7XHJcblxyXG5cclxuJChcIiNzbGlkZXJfYWNjZXNcIikub3dsQ2Fyb3VzZWwoe1xyXG5cdGxvb3A6dHJ1ZSxcclxuXHRtYXJnaW46MTAsXHJcblx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRpdGVtczo0LFxyXG5cdGRvdHM6dHJ1ZSxcclxuXHRuYXY6dHJ1ZSxcclxuXHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uIGZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPiddLFxyXG5cdHJlc3BvbnNpdmUgOiB7XHJcblx0XHQwIDoge1xyXG5cdFx0XHRpdGVtczogMSxcclxuXHRcdFx0bWFyZ2luOiAxNVxyXG5cdFx0fSxcclxuXHRcdDU3NyA6IHtcclxuXHRcdFx0aXRlbXM6IDIsXHJcblx0XHRcdG1hcmdpbjogMTVcclxuXHRcdH0sXHJcblx0XHQ3ODEgOiB7XHJcblx0XHRcdGl0ZW1zOiAzXHJcblx0XHR9LFxyXG5cclxuXHRcdDk5MiA6IHtcclxuXHRcdFx0aXRlbXM6IDRcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGRhdGFTbGlkZXIpO1xyXG5cclxubGV0IGRhdGEgPSAkKCcuZGF0YS1pdGVtcycpO1xyXG5cclxuZnVuY3Rpb24gZGF0YVNsaWRlcigpe1xyXG5cclxuXHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA5OTEpe1xyXG5cdFx0ZGF0YS5hZGRDbGFzcygnb3dsLWNhcm91c2VsJykuYWRkQ2xhc3MoJ2Nhcm91c2VsXzYnKTtcclxuXHRcdFxyXG5cdFx0JChcIi5jYXJvdXNlbF82XCIpLm93bENhcm91c2VsKHtcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0bWFyZ2luOiAzMCxcclxuXHRcdFx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRcdFx0YXV0b3BsYXk6IGZhbHNlLFxyXG5cdFx0XHRzbGlkZUJ5OiA0LFxyXG5cdFx0XHRpdGVtczogMyxcclxuXHRcdFx0bmF2OiB0cnVlLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uIGZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPiddLFxyXG5cdFx0XHRkb3RzOnRydWUsXHJcblxyXG5cdFx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHRcdDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ1NzcgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoyXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3ODEgOiB7XHJcblx0XHRcdFx0XHRpdGVtczogMyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFx0XHJcblx0fVxyXG5cdGVsc2V7XHJcblx0XHQkKFwiLmNhcm91c2VsXzZcIikudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcclxuXHRcdGRhdGEucmVtb3ZlQ2xhc3MoJ293bC1jYXJvdXNlbCcpLnJlbW92ZUNsYXNzKCdjYXJvdXNlbF82Jyk7XHJcblx0fVxyXG59XHJcblxyXG4kKCcjc2xpZGVyX3V0cCcpLm93bENhcm91c2VsKHtcclxuXHRsb29wOnRydWUsXHJcblx0bWFyZ2luOjAsXHJcblx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRpdGVtczoxLFxyXG5cdHZpZGVvOnRydWUsXHJcblx0bGF6eUxvYWQ6dHJ1ZSxcclxuXHRuYXY6dHJ1ZSxcclxuXHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24gZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uIGZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPiddLFxyXG5cdGRvdHM6dHJ1ZSxcclxufSk7XHJcbi8qIE93bCBDYXJvdXNlbCBlbmQgKi9cclxuXHJcbi8qIEZvcm0gU3R5bGVyKi9cclxuXHJcbiQoJy5tYWluLWhlYWRlcl9fY2l0eSAuY2l0eScpLnN0eWxlcigpO1xyXG5cclxuLyogRm9ybSBTdHlsZXIgZW5kICovXHJcblxyXG4vKiBNYWduaWZpYyBwb3B1cCAqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCcuY2FsbC1vcGVuJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLmNhbGwtcG9wdXAnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnLm1lc3NhZ2Utb3BlbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5tZXNzYWdlLXBvcHVwJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qIE1hZ25pZmljIHBvcHVwICovXHJcblxyXG4vKiBBamF4IGZvcm0gKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1x0XHJcblx0JChcIiNmb3JtXzFcIikuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdHVybDogXCJmb3JtL2Zvcm0tMS5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5maW5kKFwiaW5wdXRcIikudmFsKFwiXCIpO1xyXG5cdFx0XHRhbGVydChcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDISDQodC60L7RgNC+INC80Ysg0YEg0LLQsNC80Lgg0YHQstGP0LbQtdC80YHRjy5cIik7XHJcblx0XHRcdCQoXCIjZm9ybV8xXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoXCIjZm9ybV8yXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwiZm9ybS9mb3JtLTIucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG5cdFx0XHQkKFwiI2Zvcm1fMlwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vKiBBamF4IGZvcm0gZW5kICovIl0sImZpbGUiOiJtYWluLmpzIn0=
