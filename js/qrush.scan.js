const scanSection = document.querySelector('.grid-scan');
const scanner = scanSection.querySelector('.scanner-section');
const results = scanSection.querySelector('.results-section');
const message = scanSection.querySelector('.message-section');

function onScanSuccess(decodedText, decodedResult) {
	QRCodeScanner.stop();
	swapDisplay(scanner, results);

	setTimeout(function () {
		window.location.href = './index.html';
	}, 5000);
}

const QRCodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 100, qrbox: 250 }
);

QRCodeScanner.render(onScanSuccess);