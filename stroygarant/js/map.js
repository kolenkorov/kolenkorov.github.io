 ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init(){     
		myMap = new ymaps.Map ("map", {
			center: [45.023420, 37.511022],
			zoom: 14
		});

		myPlacemark = new ymaps.Placemark([45.023420, 37.511022]);
		
		myMap.geoObjects.add(myPlacemark);
		myMap.controls.remove('default');
		myMap.behaviors.disable('scrollZoom');
	}


/*ymaps.ready(init);

function init () {
	var myMap = new ymaps.Map('map', {
			center: [45.023420, 37.511022],
			zoom: 14
		});

}*/