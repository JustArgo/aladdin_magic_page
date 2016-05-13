define('script/service/service', ['require', 'exports', 'module', 'components/jquery/jquery', "script/service/httpRequest"],function(require, exports, module) {
var $ = require('components/jquery/jquery');
var request = require("script/service/httpRequest");

module.exports = {
	getSubnodes: function(params) {
		params = $.extend(params,{});
		return request('getSubnodes', params);
	},
	getEnter: function(params) {
		params = $.extend(params, {});
		return request('getEnter', params);
	}
};


});