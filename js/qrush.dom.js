//////////////////// GENERAL FUNCTIONS ////////////////////

function swapDisplay(element1, element2) {
	element1.classList.toggle('hidden');
	element2.classList.toggle('hidden');
}

// Generate a QR code for sponsor form

// function generateQRCode(data) {
// 	const srcString = "https://api.qrserver.com/v1/create-qr-code/?data=" + data + "&size=512x512";
// 	const imgElement = document.createElement("img");
// 	imgElement.classList.add("qr-code");
// 	imgElement.src = srcString;
// 	return imgElement;
// }