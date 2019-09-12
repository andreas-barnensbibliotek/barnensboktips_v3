let _ = require('lodash');
const hello = () => {
	return {
		skrik: msg => {
			alert('Hello2! ');
			return 'TEST igen dettaeller' + _.add(6, 4) + ' --- ' + msg;
		},
		alfvalue: 'detta är ett simpelt värde från hello test!'
	};
};
export default hello;
