/*Owl Carousel */
	$("#main_slider").owlCarousel({
		loop: true,
		slideBy: 3,
		dots: true,
		dotsContainer: '.banner__slider-dots',
		nav: false,
		items: 1,
	});

	let dot = $('.main__slider-dots .owl-dot');
	dot.each(function() {
		let index = $(this).index() + 1;
		$(this).html("<span>"+index+"</span>");
	});

	$(window).on('load resize', carousel);
	let slider = $('.footer__items');
	function carousel(){
		if($(window).width() <= 480){
			slider.addClass('owl-carousel').addClass('footer__slider');
			
			$(".footer__slider").owlCarousel({
				loop: false,
				margin: 20,
				autoplay: false,
				slideBy: 4,
				items: 2,
				nav: true,
				navText: ['<i class="flaticon-arrow"></i>','<i class="flaticon-arrow">'],
				dots: false,
			});
				
		}
		else{
			$(".footer__slider").trigger('destroy.owl.carousel');
			slider.removeClass('owl-carousel').removeClass('footer__slider');
		}
	}

	$(window).on('load resize', carouselSim);
	let slider_sim = $('.similar .products__items');
	function carouselSim(){
		if($(window).width() <= 576){
			slider_sim.addClass('owl-carousel').addClass('similar__slider');
			
			$(".similar__slider").owlCarousel({
				loop: false,
				margin: 20,
				autoplay: false,
				slideBy: 4,
				items: 1,
				nav: true,
				navText: ['<i class="flaticon-left"></i>','<i class="flaticon-right">'],
				dots: false,
			});
				
		}
		else{
			$(".similar__slider").trigger('destroy.owl.carousel');
			slider_sim.removeClass('owl-carousel').removeClass('similar__slider');
		}
	}
/*Owl Carousel end*/

/* Custom scroll */
	$('.basket__drop-items').mCustomScrollbar({
		theme: "dark",
		scrollInertia: 150,
		contentTouchScroll: true,
		scrollbarPosition:"inside"
	});
/* Custom scroll end */

/* Basket show */
	$('.basket__button').on('click', function(){
		$(this).next('.basket__drop').slideToggle(150);

		if($(window).width() <= 480) {
			$('body').toggleClass('hide');
		}
	});
/* Basket show end */

/* Profile dropdown */
	$('.item__profile').on('click', function(){
		$(this).toggleClass('active');
		$('.item__profile-dropdown').slideToggle(150);
	});
/* Profile dropdown end */

/* Active menu */
	$('.header__info-item.item__menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');


		if($(window).width() > 960) {
			$('.header__menu').slideToggle(250);
		} else {
			$('.header__info').toggleClass('active__menu');
		}
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 142 && $(this).width() > 960) {
			$('.header').addClass('sticky');
		}
		else{
			$('.header').removeClass('sticky');
		}
	});

	$(window).on('load resize', function(){
		if($(window).width() <= 960) {
			$('.header').removeClass('inner');
			$('.banner').prev().removeClass('inner');
		} else {
			$('.header').addClass('inner');
			$('.banner').prev().removeClass('inner');
		}
	});

/* Active menu end */

/* More */
	$('.company__more').on('click', function(e){
		e.preventDefault();
		$('.company__hide').slideToggle(400);
	});
/* More end */

/* Magnific popup */
	$(document).ready(function(){
		$('.product-open').magnificPopup({
			items: [
				{
					src: '.popup__product',
					type: 'inline'
				}
			],
		});

		$('.login').magnificPopup({
			items: [
				{
					src: '.popup__login',
					type: 'inline'
				}
			],
		});
	});
/* Magnific popup end */

/* Info tooltip */
	$('.products__item-info span').on('click', function(){
		$(this).parent().toggleClass('active');
		$(this).parent().find('.products__item-tooltip').toggleClass('active');
	});

	$('.item__tooltip-close').on('click', function(){
		$('.products__item-tooltip').removeClass('active');
		$('.products__item-info').removeClass('active');
	});

	$('.popup__product-info span').on('click', function(){
		$(this).parent().toggleClass('active');
		$(this).parent().find('.popup__product-tooltip').toggleClass('active');
	});

	$('.item__tooltip-close').on('click', function(){
		$('.popup__product-tooltip').removeClass('active');
		$('.popup__product-info').removeClass('active');
	});
/* Info tooltip end */

/* Form styler */
	$('.item__city select').styler({	
		onSelectOpened: function(){
			let _srollBar = $('.jq-selectbox__dropdown ul');
			_srollBar.mCustomScrollbar({
				scrollInertia: 150,
				contentTouchScroll: true,
				scrollbarPosition:"inside"
			});
		}
	});

	if($(window).width() <= 576) {
		$('.item__city select').styler("destroy");
		$('.item__city select').styler({
			selectSearch: true,
		});
		$('.jq-selectbox__dropdown').prepend('<div class="jq-selectbox__title">Изменить город</div>');
	}
/* Form styler end */

/* History orders */
	$('.orders__title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(200);
	});
/* History orders end */

/* Tabs */
	$('.main__tab a').on('click', function(e){
		e.preventDefault();
		$('.main__tab').removeClass('active');
		$('.main__tab-block').removeClass('active');
		$(this).parent().addClass('active');
		let href = $(this).attr('href');

		$(href).addClass('active');
	});
/* Tabs end */

/* Select city */
	$('.select-city').on('click', function(e) {
		e.preventDefault();
		$('.header__info').removeClass('active__menu');
		$('.item__menu').removeClass('active');
		$('.header__city').show();
	})

	$('.header__city-block a').on('click', function(e) {
		e.preventDefault();
		$('.header__city').hide();
	});
/* Select city end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qT3dsIENhcm91c2VsICovXHJcblx0JChcIiNtYWluX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVCeTogMyxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRkb3RzQ29udGFpbmVyOiAnLmJhbm5lcl9fc2xpZGVyLWRvdHMnLFxyXG5cdFx0bmF2OiBmYWxzZSxcclxuXHRcdGl0ZW1zOiAxLFxyXG5cdH0pO1xyXG5cclxuXHRsZXQgZG90ID0gJCgnLm1haW5fX3NsaWRlci1kb3RzIC5vd2wtZG90Jyk7XHJcblx0ZG90LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0JCh0aGlzKS5odG1sKFwiPHNwYW4+XCIraW5kZXgrXCI8L3NwYW4+XCIpO1xyXG5cdH0pO1xyXG5cclxuXHQkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgY2Fyb3VzZWwpO1xyXG5cdGxldCBzbGlkZXIgPSAkKCcuZm9vdGVyX19pdGVtcycpO1xyXG5cdGZ1bmN0aW9uIGNhcm91c2VsKCl7XHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA0ODApe1xyXG5cdFx0XHRzbGlkZXIuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpLmFkZENsYXNzKCdmb290ZXJfX3NsaWRlcicpO1xyXG5cdFx0XHRcclxuXHRcdFx0JChcIi5mb290ZXJfX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRcdFx0c2xpZGVCeTogNCxcclxuXHRcdFx0XHRpdGVtczogMixcclxuXHRcdFx0XHRuYXY6IHRydWUsXHJcblx0XHRcdFx0bmF2VGV4dDogWyc8aSBjbGFzcz1cImZsYXRpY29uLWFycm93XCI+PC9pPicsJzxpIGNsYXNzPVwiZmxhdGljb24tYXJyb3dcIj4nXSxcclxuXHRcdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHQkKFwiLmZvb3Rlcl9fc2xpZGVyXCIpLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdHNsaWRlci5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJykucmVtb3ZlQ2xhc3MoJ2Zvb3Rlcl9fc2xpZGVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgY2Fyb3VzZWxTaW0pO1xyXG5cdGxldCBzbGlkZXJfc2ltID0gJCgnLnNpbWlsYXIgLnByb2R1Y3RzX19pdGVtcycpO1xyXG5cdGZ1bmN0aW9uIGNhcm91c2VsU2ltKCl7XHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA1NzYpe1xyXG5cdFx0XHRzbGlkZXJfc2ltLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKS5hZGRDbGFzcygnc2ltaWxhcl9fc2xpZGVyJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKFwiLnNpbWlsYXJfX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRcdFx0c2xpZGVCeTogNCxcclxuXHRcdFx0XHRpdGVtczogMSxcclxuXHRcdFx0XHRuYXY6IHRydWUsXHJcblx0XHRcdFx0bmF2VGV4dDogWyc8aSBjbGFzcz1cImZsYXRpY29uLWxlZnRcIj48L2k+JywnPGkgY2xhc3M9XCJmbGF0aWNvbi1yaWdodFwiPiddLFxyXG5cdFx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdCQoXCIuc2ltaWxhcl9fc2xpZGVyXCIpLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdHNsaWRlcl9zaW0ucmVtb3ZlQ2xhc3MoJ293bC1jYXJvdXNlbCcpLnJlbW92ZUNsYXNzKCdzaW1pbGFyX19zbGlkZXInKTtcclxuXHRcdH1cclxuXHR9XHJcbi8qT3dsIENhcm91c2VsIGVuZCovXHJcblxyXG4vKiBDdXN0b20gc2Nyb2xsICovXHJcblx0JCgnLmJhc2tldF9fZHJvcC1pdGVtcycpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG5cdFx0dGhlbWU6IFwiZGFya1wiLFxyXG5cdFx0c2Nyb2xsSW5lcnRpYTogMTUwLFxyXG5cdFx0Y29udGVudFRvdWNoU2Nyb2xsOiB0cnVlLFxyXG5cdFx0c2Nyb2xsYmFyUG9zaXRpb246XCJpbnNpZGVcIlxyXG5cdH0pO1xyXG4vKiBDdXN0b20gc2Nyb2xsIGVuZCAqL1xyXG5cclxuLyogQmFza2V0IHNob3cgKi9cclxuXHQkKCcuYmFza2V0X19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5uZXh0KCcuYmFza2V0X19kcm9wJykuc2xpZGVUb2dnbGUoMTUwKTtcclxuXHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA0ODApIHtcclxuXHRcdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbi8qIEJhc2tldCBzaG93IGVuZCAqL1xyXG5cclxuLyogUHJvZmlsZSBkcm9wZG93biAqL1xyXG5cdCQoJy5pdGVtX19wcm9maWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLml0ZW1fX3Byb2ZpbGUtZHJvcGRvd24nKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdH0pO1xyXG4vKiBQcm9maWxlIGRyb3Bkb3duIGVuZCAqL1xyXG5cclxuLyogQWN0aXZlIG1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19pbmZvLWl0ZW0uaXRlbV9fbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cclxuXHRcdGlmKCQod2luZG93KS53aWR0aCgpID4gOTYwKSB7XHJcblx0XHRcdCQoJy5oZWFkZXJfX21lbnUnKS5zbGlkZVRvZ2dsZSgyNTApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLmhlYWRlcl9faW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmVfX21lbnUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxNDIgJiYgJCh0aGlzKS53aWR0aCgpID4gOTYwKSB7XHJcblx0XHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKXtcclxuXHRcdGlmKCQod2luZG93KS53aWR0aCgpIDw9IDk2MCkge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lubmVyJyk7XHJcblx0XHRcdCQoJy5iYW5uZXInKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ2lubmVyJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2lubmVyJyk7XHJcblx0XHRcdCQoJy5iYW5uZXInKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ2lubmVyJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG4vKiBBY3RpdmUgbWVudSBlbmQgKi9cclxuXHJcbi8qIE1vcmUgKi9cclxuXHQkKCcuY29tcGFueV9fbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmNvbXBhbnlfX2hpZGUnKS5zbGlkZVRvZ2dsZSg0MDApO1xyXG5cdH0pO1xyXG4vKiBNb3JlIGVuZCAqL1xyXG5cclxuLyogTWFnbmlmaWMgcG9wdXAgKi9cclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnByb2R1Y3Qtb3BlbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fcHJvZHVjdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5sb2dpbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fbG9naW4nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuLyogTWFnbmlmaWMgcG9wdXAgZW5kICovXHJcblxyXG4vKiBJbmZvIHRvb2x0aXAgKi9cclxuXHQkKCcucHJvZHVjdHNfX2l0ZW0taW5mbyBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcucHJvZHVjdHNfX2l0ZW0tdG9vbHRpcCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLml0ZW1fX3Rvb2x0aXAtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnByb2R1Y3RzX19pdGVtLXRvb2x0aXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcucHJvZHVjdHNfX2l0ZW0taW5mbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnBvcHVwX19wcm9kdWN0LWluZm8gc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnBvcHVwX19wcm9kdWN0LXRvb2x0aXAnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5pdGVtX190b29sdGlwLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5wb3B1cF9fcHJvZHVjdC10b29sdGlwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnBvcHVwX19wcm9kdWN0LWluZm8nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIEluZm8gdG9vbHRpcCBlbmQgKi9cclxuXHJcbi8qIEZvcm0gc3R5bGVyICovXHJcblx0JCgnLml0ZW1fX2NpdHkgc2VsZWN0Jykuc3R5bGVyKHtcdFxyXG5cdFx0b25TZWxlY3RPcGVuZWQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxldCBfc3JvbGxCYXIgPSAkKCcuanEtc2VsZWN0Ym94X19kcm9wZG93biB1bCcpO1xyXG5cdFx0XHRfc3JvbGxCYXIubUN1c3RvbVNjcm9sbGJhcih7XHJcblx0XHRcdFx0c2Nyb2xsSW5lcnRpYTogMTUwLFxyXG5cdFx0XHRcdGNvbnRlbnRUb3VjaFNjcm9sbDogdHJ1ZSxcclxuXHRcdFx0XHRzY3JvbGxiYXJQb3NpdGlvbjpcImluc2lkZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA1NzYpIHtcclxuXHRcdCQoJy5pdGVtX19jaXR5IHNlbGVjdCcpLnN0eWxlcihcImRlc3Ryb3lcIik7XHJcblx0XHQkKCcuaXRlbV9fY2l0eSBzZWxlY3QnKS5zdHlsZXIoe1xyXG5cdFx0XHRzZWxlY3RTZWFyY2g6IHRydWUsXHJcblx0XHR9KTtcclxuXHRcdCQoJy5qcS1zZWxlY3Rib3hfX2Ryb3Bkb3duJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImpxLXNlbGVjdGJveF9fdGl0bGVcIj7QmNC30LzQtdC90LjRgtGMINCz0L7RgNC+0LQ8L2Rpdj4nKTtcclxuXHR9XHJcbi8qIEZvcm0gc3R5bGVyIGVuZCAqL1xyXG5cclxuLyogSGlzdG9yeSBvcmRlcnMgKi9cclxuXHQkKCcub3JkZXJzX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDIwMCk7XHJcblx0fSk7XHJcbi8qIEhpc3Rvcnkgb3JkZXJzIGVuZCAqL1xyXG5cclxuLyogVGFicyAqL1xyXG5cdCQoJy5tYWluX190YWIgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLm1haW5fX3RhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5tYWluX190YWItYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGxldCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0JChocmVmKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIFRhYnMgZW5kICovXHJcblxyXG4vKiBTZWxlY3QgY2l0eSAqL1xyXG5cdCQoJy5zZWxlY3QtY2l0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJy5oZWFkZXJfX2luZm8nKS5yZW1vdmVDbGFzcygnYWN0aXZlX19tZW51Jyk7XHJcblx0XHQkKCcuaXRlbV9fbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5oZWFkZXJfX2NpdHknKS5zaG93KCk7XHJcblx0fSlcclxuXHJcblx0JCgnLmhlYWRlcl9fY2l0eS1ibG9jayBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmhlYWRlcl9fY2l0eScpLmhpZGUoKTtcclxuXHR9KTtcclxuLyogU2VsZWN0IGNpdHkgZW5kICovIl0sImZpbGUiOiJtYWluLmpzIn0=
