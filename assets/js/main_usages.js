import hello from './components/test';
var dt = require('./components/old');
let ny = hello();
//console.log(ny.skrik());
alert(ny.alfvalue);
//let _ = require('lodash');
dt.testarold('funkar detta');
$(function() {
	alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));
	console.log('innan jplist2');
	//jplist.init();
});
