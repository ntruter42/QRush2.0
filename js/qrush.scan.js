const scanSection = document.querySelector('.grid-scan');
const scannerSection = scanSection.querySelector('.scanner-section');
const resultSection = scanSection.querySelector('.results-section');
const instructionSection = scanSection.querySelector('.instruction-section');
const notificationSection = scanSection.querySelector('.notification-section');
const collectSection = scanSection.querySelector('.collect-button-section');

function onScanSuccess(decodedText, decodedResult) {
	QRCodeScanner.clear();
	toggleHidden(scannerSection, resultSection, instructionSection, notificationSection);
	if (qRush.discoverChest(decodedText)) {
		updateLocalStorage();
		toggleHidden(collectSection);
	} else {
		let notification = notificationSection.querySelector('#notification');
		notification.classList.remove('positive', 'negative', 'neutral');
		notification.classList.add('negative');
		notification.innerHTML = "Oops! Not a treasure chest. 🙃<br>Keep searching, adventurer! 🗺️";
	}

	// setTimeout(function () {
	// 	window.location.href = './scan.html';
	// }, 5000);
}

const QRCodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 100, qrbox: 200, aspectRatio: 1 }
);

QRCodeScanner.render(onScanSuccess);

// overwrite inline rules set by api
(function readerStyling() {
	let reader = document.getElementById("reader");

	reader.style.border = "none";
	reader.style.padding = "0 1rem";
})();