function QRush() {
	let chests = {};
	let prizes = {};
	let sponsors = {};

	//////////////////// CHEST functions ////////////////////

	function setChests(chestsObject) {
		chests = chestsObject;
	}

	function getChests() {
		return chests;
	}

	function addChest(location) {
		let chestID = newChestID();
		chests[chestID] = { 'prize_ids': [], 'location': location };
		return chestID;
	}

	function removeChest(id) {
		delete chests[id];
	}

	function newChestID() {
		const chestIDs = Object.keys(chests);
		if (chestIDs.length > 0) {
			return parseInt(chestIDs[chestIDs.length - 1]) + 1;
		}
		return 1000;
	}

	//////////////////// PRIZE functions ////////////////////

	function setPrizes(prizesObject) {
		prizes = prizesObject;
	}

	function getPrizes() {
		return prizes;
	}

	function addPrize(sponsor_id, prize_title, count, url) {
		let prizeID = newPrizeID();
		prizes[prizeID] = { 'sponsor_id': sponsor_id, 'prize_title': prize_title, 'count': count, 'url': url };
		return prizeID;
	}

	function removePrize(id) {
		delete prizes[id];
	}

	function newPrizeID() {
		const prizeIDs = Object.keys(prizes);
		if (prizeIDs.length > 0) {
			return parseInt(prizeIDs[prizeIDs.length - 1]) + 1;
		}
		return 2000;
	}

	//////////////////// SPONSOR functions ////////////////////

	function setSponsors(sponsorsObject) {
		sponsors = sponsorsObject;
	}

	function getSponsors() {
		return sponsors;
	}

	function addSponsor(sponsor_name, location, contact, email) {
		let sponsorID = newSponsorID();
		sponsors[sponsorID] = { 'sponsor_name': sponsor_name, 'location': location, 'contact': contact, 'email': email };
		return sponsorID;
	}

	function removeSponsor(id) {
		delete sponsors[id];
	}

	function newSponsorID() {
		const sponsorIDs = Object.keys(sponsors);
		if (sponsorIDs.length > 0) {
			return parseInt(sponsorIDs[sponsorIDs.length - 1]) + 1;
		}
		return 3000;
	}

	return {
		setChests,
		getChests,
		addChest,
		removeChest,
		newChestID,

		setPrizes,
		getPrizes,
		addPrize,
		removePrize,
		newPrizeID,

		setSponsors,
		getSponsors,
		addSponsor,
		removeSponsor,
		newSponsorID,
	};
}