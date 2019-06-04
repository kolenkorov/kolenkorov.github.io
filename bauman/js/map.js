ymaps.ready(init);
let myMap,
	myPlacemark;

function init(){     
	myMap = new ymaps.Map ("map", {
		center: [52.093294, 23.692949],
		zoom: 17
	});

	myPlacemark = new ymaps.Placemark([52.093294, 23.692949]);
	
	myMap.geoObjects.add(myPlacemark);
	myMap.controls.remove('default');
	myMap.behaviors.disable(['scrollZoom', 'drag']);
}