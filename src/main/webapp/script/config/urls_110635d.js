define('script/config/urls', ['require', 'exports', 'module', 'components/jquery/jquery', 'script/config/base'],function(require, exports, module) {
var $ = require('components/jquery/jquery');
var baseConfig = require('script/config/base'),
        URLMap = {};

    // 请求服务器端接口数据
    mergeUrl({
        getSubnodes: 'getSubnodes'
    });

    // 请求挡板数据
    if (baseConfig.isMock) {
        $.extend(URLMap, {
            getSubnodes: 'getSubnodes',
            getEnter: 'getEnter'
        });
    }

    // 合并接口地址与接口路径
    function mergeUrl(urlMap) {
        $.each(urlMap, function(key, value) {
            var
                baseUrl = /^(http[s]?\:\/\/){1}/.test(value) ? '' : baseConfig.baseUrl;
            urlMap[key] = baseUrl + value;
        });
        $.extend(URLMap, urlMap);
    }

    module.exports = URLMap;
});