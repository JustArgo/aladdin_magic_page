/**
 * Created by GUANZQ1 on 2016-1-12.
 */
define('script/config/config', ['require', 'exports', 'module', 'script/config/base', 'script/config/urls'],function(require, exports, module){
    exports.base = require('script/config/base');
    exports.urls = require('script/config/urls');
});