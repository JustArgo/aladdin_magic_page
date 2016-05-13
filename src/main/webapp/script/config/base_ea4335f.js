define('script/config/base', ['require', 'exports', 'module'],function(require, exports, module) {
/**
 * Created by GUANZQ1 on 2016-1-12.
 */
var conf = module.exports;
		
    conf.baseUrl = 'http://127.0.0.1:8080/';

    conf.isMock = false;

    /**
     * 切换环境
     */
	conf.isTestEnvironment = true;
	
    if (conf.isTestEnvironment) {
        //conf.baseUrl = 'http://localhost:3088/tiyan/';
        conf.isMock = true; // 如果需要使用挡板数据，请打开注释;
    }
});