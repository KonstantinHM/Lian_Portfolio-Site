// display the map function

ymaps.ready(function () {

	var myMap

	myMap = new ymaps.Map("map", {
		center: [55.1596, 61.4026],
		zoom: 17
	});

	myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');
	
	myMap.behaviors.disable(['drag', 'scrollZoom']);

	myPlacemark = new ymaps.Placemark([55.1596, 61.4026], {
		balloonContentHeader: '<span style="color: #041608; font-size: 14px; font-weight: 700; text-transform: uppercase;">Mulitix Big Wordpress Theme</span>',
		balloonContentBody: '<span style="color: #777777; font-size: 14px; font-weight: 300;">110-00 Rockaway Blvd</span>',
		balloonContentFooter: '<span style="color: #777777; font-size: 14px; font-weight: 300;">South Ozone Park, NY 11420</span>',
		hintContent: "Our office"
	});

	myMap.geoObjects.add(myPlacemark);
});
