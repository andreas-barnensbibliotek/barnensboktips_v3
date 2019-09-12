var $ = require("jquery");
//var appsettingsobject = require("./../appsettings.js");
var handelbarhelpers = require("../handlebar/handlebarHelpers.js");

module.exports = {   
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata, callback) {
        handelbarhelpers.init();
        
        $.get(usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);           
            $(targetClass).html(temptpl(currentdata));
            callback();
        }, 'html');
    }
}