function QRush() {
	let chests = {};
	let prizes = {};
	let sponsors = {};
	let knownChests = [];
	let claimedPrizes = [];
	let playerLevel = 0;

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

	function setKnownChests(chestsList) {
		knownChests = chestsList;
	}

	function getKnownChests() {
		return knownChests;
	}

	function discoverChest(id) {
		if (chests[id] !== undefined) {
			knownChests.push(id);
		}
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

	function setClaimedPrizes(prizesList) {
		claimedPrizes = prizesList;
	}

	function getClaimedPrizes() {
		return claimedPrizes;
	}

	function collectPrize(id) {
		if (prizes[id]) {
			claimedPrizes.push(id);
			prizes[id].count -= 1;

			playerLevel = Math.min(Math.floor((Math.max(claimedPrizes.length, 0) - 1) / 9) + 1, 5);
		}
	}

	//////////////////// SPONSOR functions ////////////////////

	function setSponsors(sponsorsObject) {
		sponsors = sponsorsObject;
	}

	function getSponsors() {
		return sponsors;
	}

	function addSponsor(sponsor_name, location, contact, email) {
		let sponsorID = getSponsorID(sponsor_name);
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

	function getSponsorID(name) {
		for (let id in sponsors) {
			if (sponsors[id].sponsor_name === name) {
				return id;
			}
		}
		return newSponsorID();
	}

	//////////////////// LOCATION functions ////////////////////

	return {
		setChests,
		getChests,
		addChest,
		removeChest,
		newChestID,

		setKnownChests,
		getKnownChests,
		discoverChest,

		setPrizes,
		getPrizes,
		addPrize,
		removePrize,
		newPrizeID,

		setClaimedPrizes,
		getClaimedPrizes,
		collectPrize,

		setSponsors,
		getSponsors,
		addSponsor,
		removeSponsor,
		newSponsorID,
		getSponsorID,
	};
}