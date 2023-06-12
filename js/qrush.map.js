let latitude = -33.92835836470535;
let longitude = 18.423887682529877;
let zoomLevel = 15;

function drawMap(lat, lon, zoom) {
	// create map object
	// let map = L.map('map').locate({setView: true, maxZoom: 16});
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

let map = drawMap(latitude, longitude, zoomLevel);

// map.locate({ setView: true, maxZoom: 16 });
// function onLocationFound(e) {
// 	var radius = e.accuracy;

// 	L.marker(e.latlng).addTo(map)
// 		.bindPopup("You are within " + radius + " meters from this point").openPopup();

// 	L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);

// function onLocationError(e) {
// 	alert(e.message);
// }

// map.on('locationerror', onLocationError);