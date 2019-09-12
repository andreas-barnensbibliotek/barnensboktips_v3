const storagehandler = () => {
	let _storage = Storages.localStorage;
	//console.log('storage: ' + _storage);
	let _session = Storages.sessionStorage;

	// LOCALSTORAGE
	// används för att rätt listningar skall visas om användaren öppnar sidan för förstagången = alla arr annars senaste sökningen och
	// om användaren går till detalj skall senaste sökningen visas.

	function SetSession() {
		_session.set('session', 'true');
		console.log('session true');
	}

	function chkIfsessionActive() {
		let sess = _session.get('session');
		if (sess) {
			return true;
		} else {
			return false;
		}
	}

	function isCurrentdataSet() {
		let tmpdata = _storage.get('currentdata');
		if (tmpdata) {
			console.log('currentdata =  true DATA Finns i localstorage');
			return true;
		}
		console.log('currentdata = false Det finns ingen data');
		return false;
	}

	function addDataToStorageHandler(stdata) {
		if (stdata) {
			// _storage.removeAll();
			console.log('ADD currentdata to storage: ' + stdata);
			_storage.remove('currentdata');
			_storage.set('currentdata', stdata);
		}
		return stdata;
	}

	function getDataFromStorageHandler() {
		let stdata;
		if (isCurrentdataSet()) {
			stdata = _storage.get('currentdata');
			console.log('GET currentdata from storage: ' + stdata);
		}
		return stdata;
	}

	function resetStorage() {
		_storage.remove('currentdata');
		_storage.remove('my-page-storage');
	}

	return {
		checkStorageData: isCurrentdataSet,
		addDataToStorage: addDataToStorageHandler,
		getDataFromStorage: getDataFromStorageHandler,
		setSession: SetSession,
		chkifSession: chkIfsessionActive,
		resetstorage: resetStorage
	};
};

export default storagehandler;
