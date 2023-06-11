let latitude = -33.92835836470535;
let longitude = 18.423887682529877;
let zoomLevel = 10;

function drawMap(lat, lon, zoom) {
	// create map object
	let map = L.map('map').setView([lat, lon], zoom);

	// draw map
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	}).addTo(map);

	return map;
}

function addMarker(mLat, mLon, map) {
	// create marker object and add it to the map
	let marker = L.marker([mLat, mLon]).addTo(map);
}

