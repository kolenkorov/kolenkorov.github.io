ymaps.ready(init);

function init () {
	if(document.body.clientWidth <= '500'){
		var myMap = new ymaps.Map('map', {
			center: [59.929546, 30.333210],
			zoom: 11,
		});

		myPlacemark1 = new ymaps.Placemark([59.944941, 30.258960], {
			}, {
				iconLayout: 'default#image',
				iconImageClipRect: [[0,0], [55, 67]],
				iconImageHref: '../img/sprite.png',
				iconImageSize: [50, 57],
				iconImageOffset: [-15, -27],
		}),

		myPlacemark2 = new ymaps.Placemark([59.916482, 30.398944], {
			}, {
				iconLayout: 'default#image',
				iconImageClipRect: [[0,0], [55, 67]],
				iconImageHref: '../img/sprite.png',
				iconImageSize: [50, 57],
				iconImageOffset: [-15, -27]
		});

		myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
		myMap.controls.remove('default');
		myMap.behaviors.disable('scrollZoom');
	}

	var myMap = new ymaps.Map('map', {
		center: [59.929546, 30.333210],
		zoom: 12,
	});

	myPlacemark1 = new ymaps.Placemark([59.944941, 30.258960], {
		}, {
			iconLayout: 'default#image',
			iconImageClipRect: [[0,0], [55, 67]],
			iconImageHref: '../img/sprite.png',
			iconImageSize: [50, 57],
			iconImageOffset: [-15, -27],
	}),

	myPlacemark2 = new ymaps.Placemark([59.916482, 30.398944], {
		}, {
			iconLayout: 'default#image',
			iconImageClipRect: [[0,0], [55, 67]],
			iconImageHref: '../img/sprite.png',
			iconImageSize: [50, 57],
			iconImageOffset: [-15, -27]
	});

	myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
	myMap.controls.remove('default');
	myMap.behaviors.disable('scrollZoom');
}