	function loadScript(url, callback){ // Подключение скрипта через js
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


	function init_map () { // инициализация карты в #map
    var myMap = new ymaps.Map('map', {
            center: [59.91,30.335266],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark1 = new ymaps.Placemark([59.945265, 30.285218], {
            balloonContent: 'Санкт-Петербург, Средний пр-т В.О. 7<br>Время работы: 11.00 - 21.00<br>+7 (812) 490-69-22',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/map-icon.svg',
            // Размеры метки.
            iconImageSize: [25, 28],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        
        myPlacemark2 = new ymaps.Placemark([59.921385, 30.355196], {
            balloonContent: 'Санкт-Петербург, Лиговский проспект 82<br>Время работы: 11.00 - 21.00<br>+7 (812) 490-69-11',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-icon.svg',
            // Размеры метки.
            iconImageSize: [25, 28],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        
        myPlacemark3 = new ymaps.Placemark([59.929493, 30.317359], {
            balloonContent: 'Санкт-Петербург, Спасский пер. 2/44<br>Время работы: 11.00 - 21.00<br>+7 (812) 490-69-33',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-icon.svg',
            // Размеры метки.
            iconImageSize: [25, 28],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        
        myPlacemark4 = new ymaps.Placemark([59.871346, 30.381625], {
            balloonContent: 'Санкт-Петербург, Бухарестская 74 к.3 (ТК Международный 3 этаж)<br>Время работы: 11.00 - 21.00<br>+7 (812) 331-62-05',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-icon.svg',
            // Размеры метки.
            iconImageSize: [25, 28],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);
	};


	on_start_scroll = false;
  	$(window).scroll(function(){ // Вставка карты при начале прокрутки
		if(!on_start_scroll){
			if( $("#map").length > 0 ){
				loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=9b740800-3306-49f0-82c2-247b7a66de00", function(){
					ymaps.load(init_map);
				}); 
			}

			on_start_scroll=true;
		}
      });
      

    //    ---------------------



    
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ5YW1hcF9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHRmdW5jdGlvbiBsb2FkU2NyaXB0KHVybCwgY2FsbGJhY2speyAvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0LrRgNC40L/RgtCwINGH0LXRgNC10LcganNcblx0ICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuXHQgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSl7ICAvLyBJRVxuXHRcdHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdCAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlID09IFwibG9hZGVkXCIgfHxcblx0XHRcdFx0ICBzY3JpcHQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpe1xuXHRcdFx0c2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdCAgfVxuXHRcdH07XG5cdCAgfSBlbHNlIHsgIC8vINCU0YDRg9Cz0LjQtSDQsdGA0LDRg9C30LXRgNGLXG5cdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0ICBjYWxsYmFjaygpO1xuXHRcdH07XG5cdCAgfVxuXHQgXG5cdCAgc2NyaXB0LnNyYyA9IHVybDtcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gaW5pdF9tYXAgKCkgeyAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQutCw0YDRgtGLINCyICNtYXBcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs1OS45MSwzMC4zMzUyNjZdLFxuICAgICAgICAgICAgem9vbTogMTFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8g0KHQvtC30LTQsNGR0Lwg0LzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxuICAgICAgICBNeUljb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKFxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcbiAgICAgICAgKSxcblxuICAgICAgICBteVBsYWNlbWFyazEgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1OS45NDUyNjUsIDMwLjI4NTIxOF0sIHtcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCh0YDQtdC00L3QuNC5INC/0YAt0YIg0JIu0J4uIDc8YnI+0JLRgNC10LzRjyDRgNCw0LHQvtGC0Ys6IDExLjAwIC0gMjEuMDA8YnI+KzcgKDgxMikgNDkwLTY5LTIyJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2VXaXRoQ29udGVudCcsXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9pY29ucy9tYXAtaWNvbi5zdmcnLFxuICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyNSwgMjhdLFxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XG4gICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI0LCAtMjRdLFxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxuICAgICAgICAgICAgaWNvbkNvbnRlbnRPZmZzZXQ6IFsxNSwgMTVdLFxuICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxuICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBteVBsYWNlbWFyazIgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1OS45MjEzODUsIDMwLjM1NTE5Nl0sIHtcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCb0LjQs9C+0LLRgdC60LjQuSDQv9GA0L7RgdC/0LXQutGCIDgyPGJyPtCS0YDQtdC80Y8g0YDQsNCx0L7RgtGLOiAxMS4wMCAtIDIxLjAwPGJyPis3ICg4MTIpIDQ5MC02OS0xMScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxuICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvaWNvbnMvbWFwLWljb24uc3ZnJyxcbiAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXG4gICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjUsIDI4XSxcbiAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxuICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cbiAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yNCwgLTI0XSxcbiAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0YHQu9C+0Y8g0YEg0YHQvtC00LXRgNC20LjQvNGL0Lwg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGB0LvQvtGPINGBINC60LDRgNGC0LjQvdC60L7QuS5cbiAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcbiAgICAgICAgICAgIC8vINCc0LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cbiAgICAgICAgICAgIGljb25Db250ZW50TGF5b3V0OiBNeUljb25Db250ZW50TGF5b3V0XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbXlQbGFjZW1hcmszID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTkuOTI5NDkzLCAzMC4zMTczNTldLCB7XG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzLCDQodC/0LDRgdGB0LrQuNC5INC/0LXRgC4gMi80NDxicj7QktGA0LXQvNGPINGA0LDQsdC+0YLRizogMTEuMDAgLSAyMS4wMDxicj4rNyAoODEyKSA0OTAtNjktMzMnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxuICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXG4gICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcbiAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2ljb25zL21hcC1pY29uLnN2ZycsXG4gICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzI1LCAyOF0sXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cbiAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjQsIC0yNF0sXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXG4gICAgICAgICAgICBpY29uQ29udGVudE9mZnNldDogWzE1LCAxNV0sXG4gICAgICAgICAgICAvLyDQnNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXG4gICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG15UGxhY2VtYXJrNCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU5Ljg3MTM0NiwgMzAuMzgxNjI1XSwge1xuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JHRg9GF0LDRgNC10YHRgtGB0LrQsNGPIDc0INC6LjMgKNCi0Jog0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0LkgMyDRjdGC0LDQtik8YnI+0JLRgNC10LzRjyDRgNCw0LHQvtGC0Ys6IDExLjAwIC0gMjEuMDA8YnI+KzcgKDgxMikgMzMxLTYyLTA1JyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2VXaXRoQ29udGVudCcsXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJ2ltZy9pY29ucy9tYXAtaWNvbi5zdmcnLFxuICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyNSwgMjhdLFxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XG4gICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI0LCAtMjRdLFxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxuICAgICAgICAgICAgaWNvbkNvbnRlbnRPZmZzZXQ6IFsxNSwgMTVdLFxuICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxuICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcbiAgICAgICAgfSk7XG5cbiAgICBteU1hcC5nZW9PYmplY3RzXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmsxKVxuICAgICAgICAuYWRkKG15UGxhY2VtYXJrMilcbiAgICAgICAgLmFkZChteVBsYWNlbWFyazMpXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcms0KTtcblx0fTtcblxuXG5cdG9uX3N0YXJ0X3Njcm9sbCA9IGZhbHNlO1xuICBcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXsgLy8g0JLRgdGC0LDQstC60LAg0LrQsNGA0YLRiyDQv9GA0Lgg0L3QsNGH0LDQu9C1INC/0YDQvtC60YDRg9GC0LrQuFxuXHRcdGlmKCFvbl9zdGFydF9zY3JvbGwpe1xuXHRcdFx0aWYoICQoXCIjbWFwXCIpLmxlbmd0aCA+IDAgKXtcblx0XHRcdFx0bG9hZFNjcmlwdChcImh0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVSZhbXA7YXBpa2V5PTliNzQwODAwLTMzMDYtNDlmMC04MmMyLTI0N2I3YTY2ZGUwMFwiLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHltYXBzLmxvYWQoaW5pdF9tYXApO1xuXHRcdFx0XHR9KTsgXG5cdFx0XHR9XG5cblx0XHRcdG9uX3N0YXJ0X3Njcm9sbD10cnVlO1xuXHRcdH1cbiAgICAgIH0pO1xuICAgICAgXG5cbiAgICAvLyAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiAgICAiXSwiZmlsZSI6InlhbWFwX2FwaS5qcyJ9
