import storageHandlerObj from '../storagehandler/storagehandler';

const apiServiceHandler = () => {
	let storeObj = storageHandlerObj();

	function GetJsonData(url, callback) {
		if (!url) {
			return false;
		} else {
			fetch(url)
				.then(resp => resp.json()) // Transform the data into json
				.then(function(data) {
					//storeObj.addDataToStorage(data);
					callback(data);
				})
				.catch(function() {
					console.log('error i Fetch: ' + url);
				});
		}
	}

	function PostJsonData(url, postdata, callback) {
		if (!url) {
			return false;
		} else {
			//console.log("Searchservicen hämtar Arrangemangdata");
			$.ajax({
				async: true,
				type: 'post',
				url: url,
				data: postdata,
				success: function(data) {
					console.log('Hämtar Data: ');
					//storeObj.addDataToStorage(data);
					callback(data);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert('Nått blev fel vid hämtning av POST json!');
				}
			});
		}
	}

	function GetJsonDataFromStorage(url, callback) {
		if (!storeObj.chkifSession()) {
			GetJsonData(url, function(data) {
				storeObj.addDataToStorage(data);
				storeObj.setSession();
				callback(data);
			});
		} else {
			let currdata = storeObj.getDataFromStorage();

			if (currdata) {
				callback(currdata);
			} else {
				GetJsonData(url, function(data) {
					storeObj.addDataToStorage(data);
					callback(data);
				});
				console.log('hämta ny data');
			}
		}
	}
	function GetJsonPostDataFromStorage(url, postdata, callback) {
		if (!storeObj.chkifSession()) {
			PostJsonData(url, postdata, function(data) {
				storeObj.addDataToStorage(data);
				storeObj.setSession();
				callback(data);
			});
		} else {
			let currdata = storeObj.getDataFromStorage();

			if (currdata) {
				callback(currdata);
			} else {
				PostJsonData(url, postdata, function(data) {
					storeObj.addDataToStorage(data);
					callback(data);
				});
				console.log('hämta ny Postdata');
			}
		}
	}

	function updateGetJson(url, callback) {
		GetJsonData(url, function(data) {
			callback(data);
		});
	}

	function GetJsonDataAutocomplete(url, callback) {
		GetJsonData(url, function(data) {
			storeObj.addDataToStorage(data);
			storeObj.setSession();
			callback(data);
		});
	}

	return {
		Getjson: GetJsonDataFromStorage,
		GetjsonAuto: GetJsonDataAutocomplete,
		GetjsonDetail: GetJsonData,
		UpdgetJson: updateGetJson,
		UpdPostjson: PostJsonData,
		Postjson: GetJsonPostDataFromStorage
	};
};

export default apiServiceHandler;
