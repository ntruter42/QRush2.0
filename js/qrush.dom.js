var qRush = QRush();
qRush.setChests(JSON.parse(localStorage.getItem('qrush_chests')) || {});
qRush.setPrizes(JSON.parse(localStorage.getItem('qrush_prizes')) || {});
qRush.setSponsors(JSON.parse(localStorage.getItem('qrush_sponsors')) || {});
qRush.setKnownChests(JSON.parse(localStorage.getItem('qrush_known_chests')) || []);
qRush.setClaimedPrizes(JSON.parse(localStorage.getItem('qrush_claimed_prizes')) || []);

//////////////////// DUMMY DATA starts here ////////////////////
let dummyChests = {
	1000: { 'prize_ids': ["2000"], 'location': [-33.9220352, 18.4220006] },
	1001: { 'prize_ids': [], 'location': [-33.923069, 18.4238172] },
	1002: { 'prize_ids': ["2001", "2003"], 'location': [-33.9117977, 18.4226978] },
	1003: { 'prize_ids': [], 'location': [-33.9327695, 18.4230611] },
	1004: { 'prize_ids': [], 'location': [-33.9278084, 18.4165421] },
	1005: { 'prize_ids': ["2002"], 'location': [-33.9319319, 18.408851] },
};
let dummyPrizes = {
	2000: { 'sponsor_id': "3000", 'prize_title': "Pick n Pay R50 discount", 'count': 120, 'url': "./img/prizes/picknpay_r50_discount.jpeg" },
	2001: { 'sponsor_id': "3001", 'prize_title': "2 Ster-Kinekor Tickets", 'count': 12, 'url': "./img/prizes/ster-kinekor_2_tickets.png" },
	2002: { 'sponsor_id': "3002", 'prize_title': "10GB Telkom Data Bundle", 'count': 318, 'url': "./img/prizes/telkom_10gb_discount.jpeg" },
	2003: { 'sponsor_id': "3004", 'prize_title': "R200 Uber Voucher", 'count': 169, 'url': "./img/prizes/uber_r200_voucher.jpg" },
};
let dummySponsors = {
	3000: { 'sponsor_name': "Pick n Pay Family Strand Street", 'location': [-33.920699, 18.421795], 'contact': "Daniel Gray", 'email': "info@picknpay.com" },
	3001: { 'sponsor_name': "Ster-Kinekor V&A Waterfront", 'location': [-33.9044466, 18.4193801], 'contact': "Steffany Gretzinger", 'email': "steffanygretzinger@cinema.com" },
	3002: { 'sponsor_name': "Telkom Direct Sea Point", 'location': [-33.9113301, 18.3937723], 'contact': "Tamlyn Malcolm", 'email': "tamlyn@telkom.com" },
	3003: { 'sponsor_name': "Uber", 'location': [0, 0], 'contact': "Ruby Rider", 'email': "uber@uber.com" },
};
let dummyKnownChests = ["1000", "1004", "1005"];
let dummyClaimedPrizes = ["2000", "2002"];
qRush.setChests(dummyChests);
qRush.setPrizes(dummyPrizes);
qRush.setSponsors(dummySponsors);
qRush.setKnownChests(dummyKnownChests);
qRush.setClaimedPrizes(dummyClaimedPrizes);
qRush.updatePlayerLevel();
updateLocalStorage();
//////////////////// DUMMY DATA ends here ////////////////////

//////////////////// GENERAL FUNCTIONS ////////////////////

function updateLocalStorage() {
	localStorage.setItem('qrush_chests', JSON.stringify(qRush.getChests()));
	localStorage.setItem('qrush_prizes', JSON.stringify(qRush.getPrizes()));
	localStorage.setItem('qrush_sponsors', JSON.stringify(qRush.getSponsors()));
	localStorage.setItem('qrush_known_chests', JSON.stringify(qRush.getKnownChests()));
	localStorage.setItem('qrush_claimed_prizes', JSON.stringify(qRush.getClaimedPrizes()));
}

function toggleHidden(...elements) {
	for (let element of elements) {
		element.classList.toggle('hidden');
	}
}

// Generate a QR code for sponsor form

// function generateQRCode(data) {
// 	const srcString = "https://api.qrserver.com/v1/create-qr-code/?data=" + data + "&size=512x512";
// 	const imgElement = document.createElement("img");
// 	imgElement.classList.add("qr-code");
// 	imgElement.src = srcString;
// 	return imgElement;
// }