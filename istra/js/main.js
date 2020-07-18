/* Header fixed */
	/*$(window).scroll(function() {
		if($(this).scrollTop() > 0) {
			$('.header').addClass('sticky');
		}
		else if ($(this).scrollTop() <= 3){
			$('.header').removeClass('sticky');
		}
	});*/
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


	function loadScript(url, callback){
	  var script = document.createElement("script");

	  if (script.readyState){  // IE
		script.onreadystatechange = function(){
		  if (script.readyState == "loaded" ||
				  script.readyState == "complete"){
			script.onreadystatechange = null;
			callback();
		  }
		};
	  } else {  // Другие браузеры
		script.onload = function(){
		  callback();
		};
	  }
	 
	  script.src = url;
	  document.getElementsByTagName("head")[0].appendChild(script);
	}

	on_start_scroll = false;
  	$(window).scroll(function(){
		if(!on_start_scroll){
			if( $("#map").length > 0 ){
				loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", function(){
					ymaps.load(init_map);
				}); 
			}
            loadScript("/js/jquery.fancybox.min.js",function(){});
            $('head').append('<link rel="stylesheet" href="/css/jquery.fancybox.min.css" type="text/css" />');

			on_start_scroll=true;
		}
  	});
/* Map */
	function init_map () {
        ymaps.ready(function () {
            var center = [55.734370, 37.660210]; // -0,00044 -0,0036
            if($(window).width() <= 981) {
                center = [55.734570, 37.662775]; // -0,00024 -0,002435
            } 
            if($(window).width() <= 481) {
                center = [55.735950, 37.664875]; // -0,00106 -0,000335
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

                myPlacemark = new ymaps.Placemark([55.734810, 37.665210], {}, { // 55.734810, 37.665210
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
    }
/* Map end */




    $(document).on("submit", "form", function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            target_name = $(this).find("input[name=form_type]").val();
            ym(62668078,'reachGoal',target_name);
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            //$(".form").trigger("reset");
        });
        return false;
    });




$(window).scroll(function(){
    if($(window).scrollTop()+$(window).height()>=$(document).height()){
        ym(62668078,'reachGoal','page_end');
    }
})














//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRlciBmaXhlZCAqL1xyXG5cdC8qJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcblx0XHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDw9IDMpe1xyXG5cdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG5cdFx0fVxyXG5cdH0pOyovXHJcbi8qIEhlYWRlciBmaXhlZCBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5oZWFkZXJfX21lbnUtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuaGVhZGVyX19idXJnZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcuaGVhZGVyX19tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG4vKiBNZW51IGVuZCAqL1xyXG5cclxuLyogU2xpZGVycyAqL1xyXG5cdCQoJy5waG90b19faXRlbXMnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdCAgICBtYXJnaW46IDMwLFxyXG5cdCAgICBmYWxzZTogdHJ1ZSxcclxuXHQgICAgZG90czogdHJ1ZSxcclxuXHJcblx0ICAgIHJlc3BvbnNpdmU6e1xyXG5cdCAgICAgICAgMDp7XHJcblx0ICAgICAgICAgICAgaXRlbXM6MVxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIDQ1MDp7XHJcblx0ICAgICAgICAgICAgaXRlbXM6MlxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIDc4MDp7XHJcblx0ICAgICAgICAgICAgaXRlbXM6M1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblx0fSk7XHJcblx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNTc2KSB7XHJcblx0XHQkKCcubWFpbl9faXRlbXMtY292ZXIsIC5hZHZhbnRhZ2VzX19pdGVtcywgLmFycmFuZ2VtZW50X19pdGVtcywgLmluZnJhc3RydWN0dXJlX19pdGVtcywgLnByb2Nlc3NfX2l0ZW1zLCAuZ2V0X19pdGVtcycpLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGl0ZW1zOiAxLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRtYXJnaW46IDE1LFxyXG5cdFx0XHRuYXY6IGZhbHNlLFxyXG5cdFx0fSlcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnLm1haW5fX2l0ZW1zLWNvdmVyLCAuYWR2YW50YWdlc19faXRlbXMsIC5hcnJhbmdlbWVudF9faXRlbXMsIC5pbmZyYXN0cnVjdHVyZV9faXRlbXMsIC5wcm9jZXNzX19pdGVtcywgLmdldF9faXRlbXMnKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoJ2Rlc3Ryb3knKTtcclxuXHR9XHJcbi8qIFNsaWRlcnMgZW5kICovXHJcblxyXG4vKiBBc2stYW5zd2VyICovXHJcblx0JCgnLmFza19faXRlbS10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcblx0fSk7XHJcbi8qIEFzay1hbnN3ZXIgZW5kICovXHJcblxyXG4vKiBQb3B1cCAqL1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuYnV5JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnLnBvcHVwX19idXknLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuY2FsbCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fY2FsbCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG4vKiBQb3B1cCBlbmQgKi9cclxuXHJcbi8qIENvcHkgKi9cclxuXHQkKCcuY29weScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHJcblx0XHRpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7IFxyXG5cdFx0ICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcblx0XHQgICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcGllZCcpKTtcclxuXHRcdCAgICByYW5nZS5zZWxlY3QoKS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuXHRcdCAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7IFxyXG5cclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG5cdFx0ICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblx0XHQgICAgIHJhbmdlLnNlbGVjdE5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcGllZCcpKTtcclxuXHRcdCAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcclxuXHRcdCAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xyXG5cdFx0fVx0XHRcclxuXHR9KTtcclxuLyogQ29weSBlbmQgKi9cclxuXHJcbi8qIFNjcm9sbCAqL1xyXG5cdCQoJy5oZWFkZXJfX21lbnUtaXRlbSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblx0XHRsZXQgaGggPSA2MjtcclxuXHRcdGlmKCQod2luZG93KS53aWR0aCgpIDw9IDc4MCkge1xyXG5cdFx0IFx0aGggPSA3NjtcclxuXHRcdH1cclxuXHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogaC5vZmZzZXQoKS50b3AgLSBoaFxyXG5cdFx0fSwgODAwKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmZvb3Rlcl9fdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IDBcclxuXHRcdH0sIDgwMCk7XHJcblx0fSk7XHJcbi8qIFNjcm9sbCBlbmQgKi9cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsLCBjYWxsYmFjayl7XHJcblx0ICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcblx0ICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUpeyAgLy8gSUVcclxuXHRcdHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0ICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT0gXCJsb2FkZWRcIiB8fFxyXG5cdFx0XHRcdCAgc2NyaXB0LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKXtcclxuXHRcdFx0c2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHQgIH1cclxuXHRcdH07XHJcblx0ICB9IGVsc2UgeyAgLy8g0JTRgNGD0LPQuNC1INCx0YDQsNGD0LfQtdGA0YtcclxuXHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG5cdFx0ICBjYWxsYmFjaygpO1xyXG5cdFx0fTtcclxuXHQgIH1cclxuXHQgXHJcblx0ICBzY3JpcHQuc3JjID0gdXJsO1xyXG5cdCAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblx0fVxyXG5cclxuXHRvbl9zdGFydF9zY3JvbGwgPSBmYWxzZTtcclxuICBcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHRcdGlmKCFvbl9zdGFydF9zY3JvbGwpe1xyXG5cdFx0XHRpZiggJChcIiNtYXBcIikubGVuZ3RoID4gMCApe1xyXG5cdFx0XHRcdGxvYWRTY3JpcHQoXCJodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2xhbmc9cnVfUlVcIiwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHltYXBzLmxvYWQoaW5pdF9tYXApO1xyXG5cdFx0XHRcdH0pOyBcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBsb2FkU2NyaXB0KFwiL2pzL2pxdWVyeS5mYW5jeWJveC5taW4uanNcIixmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICAkKCdoZWFkJykuYXBwZW5kKCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvanF1ZXJ5LmZhbmN5Ym94Lm1pbi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPicpO1xyXG5cclxuXHRcdFx0b25fc3RhcnRfc2Nyb2xsPXRydWU7XHJcblx0XHR9XHJcbiAgXHR9KTtcclxuLyogTWFwICovXHJcblx0ZnVuY3Rpb24gaW5pdF9tYXAgKCkge1xyXG4gICAgICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IFs1NS43MzQzNzAsIDM3LjY2MDIxMF07IC8vIC0wLDAwMDQ0IC0wLDAwMzZcclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTgxKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBbNTUuNzM0NTcwLCAzNy42NjI3NzVdOyAvLyAtMCwwMDAyNCAtMCwwMDI0MzVcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNDgxKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBbNTUuNzM1OTUwLCAzNy42NjQ4NzVdOyAvLyAtMCwwMDEwNiAtMCwwMDAzMzVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcnM6IFtcImRyYWdcIiwgXCJkYmxDbGlja1pvb21cIiwgXCJyaWdodE1vdXNlQnV0dG9uTWFnbmlmaWVyXCIsIFwibXVsdGlUb3VjaFwiXVxyXG4gICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvtC30LTQsNGR0Lwg0LzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBmb250LXdlaWdodDogYm9sZDtcIj4kW3Byb3BlcnRpZXMuaWNvbkNvbnRlbnRdPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1LjczNDgxMCwgMzcuNjY1MjEwXSwge30sIHsgLy8gNTUuNzM0ODEwLCAzNy42NjUyMTBcclxuICAgICAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGljb25JbWFnZUhyZWY6ICdpbWcvbWFya2VyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uSW1hZ2VTaXplOiBbNDAsIDQ0XSxcclxuICAgICAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yMCwgLTMyXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzXHJcbiAgICAgICAgICAgICAgICAuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuLyogTWFwIGVuZCAqL1xyXG5cclxuXHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwic3VibWl0XCIsIFwiZm9ybVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCJtYWlsLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgdGFyZ2V0X25hbWUgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFtuYW1lPWZvcm1fdHlwZV1cIikudmFsKCk7XHJcbiAgICAgICAgICAgIHltKDYyNjY4MDc4LCdyZWFjaEdvYWwnLHRhcmdldF9uYW1lKTtcclxuICAgICAgICAgICAgYWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG4gICAgICAgICAgICAvLyQoXCIuZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkrJCh3aW5kb3cpLmhlaWdodCgpPj0kKGRvY3VtZW50KS5oZWlnaHQoKSl7XHJcbiAgICAgICAgeW0oNjI2NjgwNzgsJ3JlYWNoR29hbCcsJ3BhZ2VfZW5kJyk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
