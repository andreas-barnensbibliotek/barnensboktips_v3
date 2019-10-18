import hello from './components/test';
import handlebarHandler from './handlebar/handlebarUsageExemple';

var dt = require('./components/old');
let ny = hello();
console.log(ny.skrik());
alert(ny.alfvalue);
let _ = require('lodash');
dt.testarold('funkar detta');

$(function() {
	let _HBObj = handlebarHandler();
	alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));
	console.log('innan jplist2');
	jplist.init();
	function visaHBExemple() {
		let templ = '../../htmlTemplate/hb_exemple.hbs';
		_HBObj.HandlebarServiceExemple(templ, function(data) {
			$('#handlebarTmplExemple').html(data);
		});
	}
	visaHBExemple();
});
