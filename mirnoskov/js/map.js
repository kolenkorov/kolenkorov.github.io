ymaps.ready(init);
var myMap, 
	myPlacemark;

function init(){ 
	myMap = new ymaps.Map("map", {
		center: [57.012935, 40.953260],
		zoom: 17,
	}); 

	myMap.behaviors.disable('scrollZoom');

	myPlacemark = new ymaps.Placemark([57.012935, 40.953260], {
		hintContent: 'Москва!',
		balloonContent: 'Столица России'
	});
	
	myMap.geoObjects.add(myPlacemark);
}