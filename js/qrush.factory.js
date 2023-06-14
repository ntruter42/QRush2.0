function QRush() {
	let chests = {};

	function setChests(chestsInput) {
		chests = chestsInput;
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

	return {
		setChests,
		getChests,
		addChest,
		removeChest,

		newChestID,
	};
}