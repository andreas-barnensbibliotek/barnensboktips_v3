import apiServiceHandler from '../service/apiServiceHandler';

const HBusageExemple = () => {
	let _apiObj = apiServiceHandler();

	function ServiceApi(tmpl, url, callback) {
		$curtmpl = tmpl;
		_apiObj.GetjsonDetail(url, function(data) {
			callback($curtmpl(data));
		});
	}

	function HandelbarService(tmpl, callback) {
		let $curtmpl = require('../../../htmlTemplate/hb_exemple.hbs');
		callback($curtmpl());
	}

	return {
		HandlebarServiceApiCallExemple: ServiceApi,
		HandlebarServiceExemple: HandelbarService
	};
};

export default HBusageExemple;
