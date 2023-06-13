function onScanSuccess(decodedText, decodedResult) {
	console.log(decodedText);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 120, qrbox: 300, aspectRatio: 1, disableFlip: true }
);

html5QrcodeScanner.render(onScanSuccess);