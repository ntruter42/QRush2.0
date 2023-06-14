
function QMap() {
	var map = {};
	var markers = [];

	function drawMap([lat, lon], zoom) {
		map = L.map('map').setView([lat, lon], zoom);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
	}

	function addMarker(mLat, mLon) {
		let marker = L.marker([mLat, mLon]).addTo(map);
		markers.push(marker);
	}

	function userLocation() {
		map.locate({ setView: true, maxZoom: 18 });

		map.on('locationfound', function (e) {
			let radius = e.accuracy;

			L.marker(e.latlng).addTo(map)
				.bindPopup("You are within " + radius + " meters from this point").openPopup();

			L.circle(e.latlng, radius).addTo(map);
		});

		map.on('locationerror', function (e) {
			alert(e.message);
		});
	}

	function addressToCoordinates(address) {
		let coordinates = [0, 0];
		// convert address string into coordinates list => [latitude, longitude]
		return coordinates;
	}

	return {
		drawMap,
		addMarker,
		userLocation,
		addressToCoordinates,
	};
}

// let latitude = -33.92835836470535;
// let longitude = 18.423887682529877;
// let zoomLevel = 15;

// let qMap = QMap();
// qMap.drawMap([latitude, longitude], zoomLevel);