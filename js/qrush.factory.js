function QRush() {
	let chests = {};
	let prizes = {};

	//////////////////// CHEST functions ////////////////////

	function setChests(chestsObject) {
		chests = chestsObject;
	}

	function getChests() {
		return chests;
	}

	function addChest(location) {
		chests[newChestID()] = { 'prize_ids': [], 'location': location };
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

	function addPrize() {
		// TODO: finish this function
		prizes[newPrizeID()] = {};
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
	};
}