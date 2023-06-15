describe("QRush Factory Function", function () {
	let qRush;

	beforeEach(function () {
		qRush = QRush();
	});

	//////////////////// DUMMY INFORMATION BEGINS HERE ////////////////////

	let dummyChests = {
		1000: { 'prize_ids': [2000], 'location': [-33.9220352, 18.4220006] },
		1001: { 'prize_ids': [], 'location': [-33.923069, 18.4238172] },
		1002: { 'prize_ids': [2001, 2003], 'location': [-33.9117977, 18.4226978] },
		1003: { 'prize_ids': [], 'location': [-33.9327695, 18.4230611] },
		1004: { 'prize_ids': [], 'location': [-33.9278084, 18.4165421] },
		1005: { 'prize_ids': [2002], 'location': [-33.9319319, 18.408851] },
	};

	let dummyPrizes = {
		2000: { 'sponsor_id': 3000, 'prize_title': "Pick n Pay R50 discount", 'count': 120, 'url': "./img/prizes/picknpay_r50_discount.jpeg" },
		2001: { 'sponsor_id': 3001, 'prize_title': "2 Ster-Kinekor Tickets", 'count': 12, 'url': "./img/prizes/ster-kinekor_2_tickets.png" },
		2002: { 'sponsor_id': 3002, 'prize_title': "10GB Telkom Data Bundle", 'count': 318, 'url': "./img/prizes/telkom_10gb_discount.jpeg" },
		2003: { 'sponsor_id': 3004, 'prize_title': "R200 Uber Voucher", 'count': 169, 'url': "./img/prizes/uber_r200_voucher.jpg" },
	};

	let dummySponsors = {
		3000: { 'sponsor_name': "Pick n Pay Family Strand Street", 'location': [-33.920699, 18.421795], 'contact': "Daniel Gray", 'email': "info@picknpay.com" },
		3001: { 'sponsor_name': "Ster-Kinekor V&A Waterfront", 'location': [-33.9044466, 18.4193801], 'contact': "Steffany Gretzinger", 'email': "steffanygretzinger@cinema.com" },
		3002: { 'sponsor_name': "Telkom Direct Sea Point", 'location': [-33.9113301, 18.3937723], 'contact': "Tamlyn Malcolm", 'email': "tamlyn@telkom.com" },
		3003: { 'sponsor_name': "Uber", 'location': [0, 0], 'contact': "Ruby Rider", 'email': "uber@uber.com" },
	};

	let dummyKnownChests = [1000, 1004, 1005];
	let dummyClaimedPrizes = [2000, 2002];

	let newChest = { 'prize_ids': [], 'location': [-33.920699, 18.421795] };
	let newChestInfo = { 'location': [-33.920699, 18.421795] };

	let newPrize = { 'sponsor_id': 3004, 'prize_title': "Food Lover's 30% Discount", 'count': 50, 'url': "./img/prizes/food_lover_30percent_discount.jpg" };
	let newPrizeInfo = { 'sponsor_id': 3004, 'prize_title': "Food Lover's 30% Discount", 'count': 50, 'url': "./img/prizes/food_lover_30percent_discount.jpg" };

	let newSponsor = { 'sponsor_id': 3004, 'sponsor_name': "Food Lover's Eatery Newspaper House", 'address': "Shop 122, St George's Mall, Church St, Cape Town City Centre, Cape Town, 8001", 'contact': "Brad Glover", 'email': "bradglover@foodlover.com" };
	let newSponsorInfo = { 'sponsor_name': "Food Lover's Eatery Newspaper House", 'address': "Shop 122, St George's Mall, Church St, Cape Town City Centre, Cape Town, 8001", 'contact': "Brad Glover", 'email': "bradglover@foodlover.com" };

	let newChestWithPrize = { 'chest_id': 1006, 'prize_ids': [2004], 'location': [-33.920699, 18.421795] };

	//////////////////// DUMMY INFORMATION ENDS HERE ////////////////////

	describe("functionName", function () {
		it("description of test", function () {
			assert.equal(true, true);
		});
	});

	//////////////////// TESTS BEGIN HERE ////////////////////

	describe("setChests, getChests", function () {
		it("should set chests using dummy info and return the same dummy info", function () {
			qRush.setChests(dummyChests);
			assert.deepEqual(qRush.getChests(), dummyChests);
		});
	});

	describe("addChest, removeChest", function () {
		it("should be able to add a chest", function () {
			const expectedChests = JSON.parse(JSON.stringify(dummyChests));
			expectedChests[1006] = newChest;

			qRush.setChests(dummyChests);
			qRush.addChest(newChestInfo.location);
			assert.deepEqual(qRush.getChests(), expectedChests);
		});
	});

	describe("setPrizes, getPrizes", function () {
		it("should set prizes using dummy info and return the same dummy info", function () {
			qRush.setPrizes(dummyPrizes);
			assert.deepEqual(qRush.getPrizes(), dummyPrizes);
		});
	});

	describe("addPrize, removePrize", function () {
		it("should be able to add a prize", function () {
			const expectedPrizes = JSON.parse(JSON.stringify(dummyPrizes));
			expectedPrizes[2004] = newPrize;

			qRush.setPrizes(dummyPrizes);
			qRush.addPrize(newPrizeInfo.sponsor_id, newPrizeInfo.prize_title, newPrizeInfo.count, newPrizeInfo.url);
			assert.deepEqual(qRush.getPrizes(), expectedPrizes);
		});
	});

	//////////////////// TESTS END HERE ////////////////////
});