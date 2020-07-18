/* Header fixed */
	$(window).scroll(function() {
		if($(this).scrollTop() > 0) {
			$('.header').addClass('sticky');
		}
		else if ($(this).scrollTop() <= 3){
			$('.header').removeClass('sticky');
		}
	});
/* Header fixed end */

/* Menu */
	$('.header__burger').on('click', function () {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	});

	$('.header__menu-item').on('click', function(){
		$('.header__burger').removeClass('active');
		$('.header__menu').removeClass('active');
	});
/* Menu end */

/* Sliders */
	$('.photo__items').owlCarousel({
		loop: true,
	    margin: 30,
	    false: true,
	    dots: true,

	    responsive:{
	        0:{
	            items:1
	        },
	        450:{
	            items:2
	        },
	        780:{
	            items:3
	        }
	    }
	});
	if($(window).width() <= 576) {
		$('.main__items-cover, .advantages__items, .arrangement__items, .infrastructure__items, .process__items, .get__items').addClass('owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 15,
			nav: false,
		})
	} else {
		$('.main__items-cover, .advantages__items, .arrangement__items, .infrastructure__items, .process__items, .get__items').removeClass('owl-carousel').owlCarousel('destroy');
	}
/* Sliders end */

/* Ask-answer */
	$('.ask__item-title').on('click', function(){
		$(this).parent().toggleClass('active');
		$(this).next().slideToggle(250);
	});
/* Ask-answer end */

/* Popup */
	$(document).ready(function(){
		$('.buy').magnificPopup({
			items: [
				{
					src: '.popup__buy',
					type: 'inline'
				}
			],
		});

		$('.call').magnificPopup({
			items: [
				{
					src: '.popup__call',
					type: 'inline'
				}
			],
		});
	});
/* Popup end */

/* Copy */
	$('.copy').on('click', function(e){
		e.preventDefault();
		
		if (document.selection) { 
		    var range = document.body.createTextRange();
		    range.moveToElementText(document.getElementById('copied'));
		    range.select().createTextRange();
		    document.execCommand("Copy"); 

		} else if (window.getSelection) {
		    var range = document.createRange();
		     range.selectNode(document.getElementById('copied'));
		     window.getSelection().addRange(range);
		     document.execCommand("Copy");
		}		
	});
/* Copy end */

/* Scroll */
	$('.header__menu-item a').on('click', function(e){
		e.preventDefault();
		let selector = $(this).attr('href');
		let h = $(selector);
		let hh = 62;
		if($(window).width() <= 780) {
		 	hh = 76;
		}

		$('html, body').animate({
			scrollTop: h.offset().top - hh
		}, 800);
	});

	$('.footer__up').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
/* Scroll end */

/* Map */
	ymaps.ready(function () {
		var center = [55.755374, 37.614035];
		if($(window).width() <= 781) {
			center = [55.755574, 37.615200];
		} 
		if($(window).width() <= 481) {
			center = [55.756874, 37.617300];
		}

	    var myMap = new ymaps.Map('map', {
	            center: center,
	            zoom: 17,
	            controls: [],
	            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
	        }),

	        // Создаём макет содержимого.
	        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	        ),

	        myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {}, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            // iconImageHref: 'img/marker.png',
	            // Размеры метки.
	            // iconImageSize: [40, 44],
	            // Смещение левого верхнего угла иконки относительно
	            // её "ножки" (точки привязки).
	            iconImageOffset: [-20, -32]
	        });

	    myMap.geoObjects
	        .add(myPlacemark);
	});
/* Map end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRlciBmaXhlZCAqL1xyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMCkge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8PSAzKXtcclxuXHRcdFx0JCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuXHRcdH1cclxuXHR9KTtcclxuLyogSGVhZGVyIGZpeGVkIGVuZCAqL1xyXG5cclxuLyogTWVudSAqL1xyXG5cdCQoJy5oZWFkZXJfX2J1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmhlYWRlcl9fbWVudS1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXJfX2J1cmdlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcblxyXG4vKiBTbGlkZXJzICovXHJcblx0JCgnLnBob3RvX19pdGVtcycpLm93bENhcm91c2VsKHtcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0ICAgIG1hcmdpbjogMzAsXHJcblx0ICAgIGZhbHNlOiB0cnVlLFxyXG5cdCAgICBkb3RzOiB0cnVlLFxyXG5cclxuXHQgICAgcmVzcG9uc2l2ZTp7XHJcblx0ICAgICAgICAwOntcclxuXHQgICAgICAgICAgICBpdGVtczoxXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgNDUwOntcclxuXHQgICAgICAgICAgICBpdGVtczoyXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgNzgwOntcclxuXHQgICAgICAgICAgICBpdGVtczozXHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA1NzYpIHtcclxuXHRcdCQoJy5tYWluX19pdGVtcy1jb3ZlciwgLmFkdmFudGFnZXNfX2l0ZW1zLCAuYXJyYW5nZW1lbnRfX2l0ZW1zLCAuaW5mcmFzdHJ1Y3R1cmVfX2l0ZW1zLCAucHJvY2Vzc19faXRlbXMsIC5nZXRfX2l0ZW1zJykuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuXHRcdFx0aXRlbXM6IDEsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdG1hcmdpbjogMTUsXHJcblx0XHRcdG5hdjogZmFsc2UsXHJcblx0XHR9KVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcubWFpbl9faXRlbXMtY292ZXIsIC5hZHZhbnRhZ2VzX19pdGVtcywgLmFycmFuZ2VtZW50X19pdGVtcywgLmluZnJhc3RydWN0dXJlX19pdGVtcywgLnByb2Nlc3NfX2l0ZW1zLCAuZ2V0X19pdGVtcycpLnJlbW92ZUNsYXNzKCdvd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCgnZGVzdHJveScpO1xyXG5cdH1cclxuLyogU2xpZGVycyBlbmQgKi9cclxuXHJcbi8qIEFzay1hbnN3ZXIgKi9cclxuXHQkKCcuYXNrX19pdGVtLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoMjUwKTtcclxuXHR9KTtcclxuLyogQXNrLWFuc3dlciBlbmQgKi9cclxuXHJcbi8qIFBvcHVwICovXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5idXknKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX2J1eScsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5jYWxsJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnLnBvcHVwX19jYWxsJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbi8qIFBvcHVwIGVuZCAqL1xyXG5cclxuLyogQ29weSAqL1xyXG5cdCQoJy5jb3B5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcclxuXHRcdGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHsgXHJcblx0XHQgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuXHRcdCAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29waWVkJykpO1xyXG5cdFx0ICAgIHJhbmdlLnNlbGVjdCgpLmNyZWF0ZVRleHRSYW5nZSgpO1xyXG5cdFx0ICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTsgXHJcblxyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcblx0XHQgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHRcdCAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29waWVkJykpO1xyXG5cdFx0ICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0ICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XHJcblx0XHR9XHRcdFxyXG5cdH0pO1xyXG4vKiBDb3B5IGVuZCAqL1xyXG5cclxuLyogU2Nyb2xsICovXHJcblx0JCgnLmhlYWRlcl9fbWVudS1pdGVtIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHRcdGxldCBoaCA9IDYyO1xyXG5cdFx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzgwKSB7XHJcblx0XHQgXHRoaCA9IDc2O1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIGhoXHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuZm9vdGVyX191cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogMFxyXG5cdFx0fSwgODAwKTtcclxuXHR9KTtcclxuLyogU2Nyb2xsIGVuZCAqL1xyXG5cclxuLyogTWFwICovXHJcblx0eW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGNlbnRlciA9IFs1NS43NTUzNzQsIDM3LjYxNDAzNV07XHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA3ODEpIHtcclxuXHRcdFx0Y2VudGVyID0gWzU1Ljc1NTU3NCwgMzcuNjE1MjAwXTtcclxuXHRcdH0gXHJcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8PSA0ODEpIHtcclxuXHRcdFx0Y2VudGVyID0gWzU1Ljc1Njg3NCwgMzcuNjE3MzAwXTtcclxuXHRcdH1cclxuXHJcblx0ICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuXHQgICAgICAgICAgICBjZW50ZXI6IGNlbnRlcixcclxuXHQgICAgICAgICAgICB6b29tOiAxNyxcclxuXHQgICAgICAgICAgICBjb250cm9sczogW10sXHJcblx0ICAgICAgICAgICAgYmVoYXZpb3JzOiBbXCJkcmFnXCIsIFwiZGJsQ2xpY2tab29tXCIsIFwicmlnaHRNb3VzZUJ1dHRvbk1hZ25pZmllclwiLCBcIm11bHRpVG91Y2hcIl1cclxuXHQgICAgICAgIH0pLFxyXG5cclxuXHQgICAgICAgIC8vINCh0L7Qt9C00LDRkdC8INC80LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cclxuXHQgICAgICAgIE15SWNvbkNvbnRlbnRMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoXHJcblx0ICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuXHQgICAgICAgICksXHJcblxyXG5cdCAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTU4MTQsIDM3LjYxNzYzNV0sIHt9LCB7XHJcblx0ICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuXHQgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuXHQgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcblx0ICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuXHQgICAgICAgICAgICAvLyBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcmtlci5wbmcnLFxyXG5cdCAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXHJcblx0ICAgICAgICAgICAgLy8gaWNvbkltYWdlU2l6ZTogWzQwLCA0NF0sXHJcblx0ICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcblx0ICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuXHQgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjAsIC0zMl1cclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG5cdCAgICAgICAgLmFkZChteVBsYWNlbWFyayk7XHJcblx0fSk7XHJcbi8qIE1hcCBlbmQgKi8iXSwiZmlsZSI6Im1haW4uanMifQ==
