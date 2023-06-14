function onScanSuccess(decodedText, decodedResult) {
	console.log(decodedText);
	html5QrcodeScanner.clear();

	setTimeout(function () {
		window.location.href = './scan.html';
	}, 5000);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 100, qrbox: 300, aspectRatio: 1, disableFlip: true }
);

html5QrcodeScanner.render(onScanSuccess);