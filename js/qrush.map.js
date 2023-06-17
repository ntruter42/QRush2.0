function QMap() {
	var map = {};
	var markers = [];
	var circles = [];

	function drawMap(location, zoom) {
		map = L.map('map').setView(location, zoom);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
	}

	function addMarker(location, type) {
		let icon;

		switch (type) {
			case "player":
				icon = L.icon({
					iconUrl: './assets/icon/person.png',
					iconSize: [64, 64],
					iconAnchor: [32, 52],
					popupAnchor: [-8, -8],
					shadowUrl: './assets/icon/chest-shadow.png',
					shadowSize: [32, 32],
					shadowAnchor: [16, 4],
				});
				break;
			case "chest":
				icon = L.icon({
					iconUrl: './assets/icon/chest.png',
					iconSize: [32, 32],
					iconAnchor: [16, 16],
					popupAnchor: [-8, -8],
					shadowUrl: './assets/icon/chest-shadow.png',
					shadowSize: [32, 32],
					shadowAnchor: [16, 2],
				});
				break;
			default:
				break;
		}

		let marker = L.marker(location, { icon: icon }).addTo(map);
		markers.push(marker);
	}

	function addCircle(location) {
		let circle = L.circle(location, 500).addTo(map);
		circles.push(circle);
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
		addCircle,
		userLocation,
		addressToCoordinates,
	};
}

let startLocation = [-33.92835836470535, 18.423887682529877];
let zoomLevel = 15;
let markerType = "player";

let qMap = QMap();
qMap.drawMap(startLocation, zoomLevel);
qMap.addMarker(startLocation, markerType);
qMap.addCircle(startLocation);