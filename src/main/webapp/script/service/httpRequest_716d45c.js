define('script/service/httpRequest', ['require', 'exports', 'module', "script/config/config", 'components/jquery/jquery'],function(require, exports, module) {
var config = require("script/config/config");
var $ = require('components/jquery/jquery');

module.exports = function(url, params, settings) {
        var _url = config.base.isMock ? 'test/' + url + '.json' : config.urls[url],
            timeout = 20000;

        // 默认为jsonp请求
        settings = settings || {};
        if (!settings.method) {
            settings.method = 'getJsonp';
        }

        if (config.base.isMock) {
            settings.method = 'get';
        }


        params = params || {};

        if (settings.method=='get') {
            return $.get(_url, params, null, 'json').then(function(respones) {
				
                return respones;
            }, function(error) {

                return error;
            });
        }

        if (settings.method=='getJsonp') {

            var _jspnpcallback = 'jsonp_callback_' + new Date().getTime();

            return $.ajax({
                url: _url,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'jsonpcallback',
                jsonpCallback: _jspnpcallback,
                data: params
            }).then(function(respones) {

                return respones;
            }, function(error) {

                return error;
            });
        }

        if (settings.method == 'post') {
            return $.post(_url, params, null, 'json').then(function(respones) {
				
                return respones;
            }, function(error) {

                return error;
            });
        }

        var
            _opt = {
            url: _url,
            timeout: timeout
        };

        if(settings.method == 'upload') {
            _opt = $.extend(_opt, {
                    type: 'POST',
                    dataType: 'json',
                    data: avalon.param(params),
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        Pragma: 'no-cache'
                    }
                }
            );
        }

        return $.ajax(_opt).then(function(respone) {
			
            return respone;
        }, function(error) {
			
            return error;
        });
    };
});