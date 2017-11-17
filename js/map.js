function tenisMap() {
	var tenisCenter = new google.maps.LatLng(50.351369, 16.156353);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: tenisCenter, zoom: 16};

	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:tenisCenter});
	marker.setMap(map);
}