(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SPOCExt", [], factory);
	else if(typeof exports === 'object')
		exports["SPOCExt"] = factory();
	else
		root["SPOCExt"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _spListitems = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SPOC = function () {
		function SPOC() {
			_classCallCheck(this, SPOC);
	
			this._name = 'SPOC';
		}
	
		_createClass(SPOC, [{
			key: 'name',
			get: function get() {
				return this._name;
			}
		}]);
	
		return SPOC;
	}();
	
	;
	
	SPOC.SP = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this._name = 'SP';
		}
	
		_createClass(_class, [{
			key: 'name',
			get: function get() {
				return this._name;
			}
		}]);
	
		return _class;
	}();
	
	SPOC.SP.Site = function () {
		function _class2(url) {
			_classCallCheck(this, _class2);
	
			this.url = url ? url : window._spPageContextInfo.webAbsoluteUrl;
			this.ListItems = _spListitems.ListItems;
		}
	
		return _class2;
	}();
	
	SPOC.SP.User = function () {
		function _class3(username) {
			_classCallCheck(this, _class3);
	
			this.id = username ? username : window._spPageContextInfo.userId;
			this.loginName = username ? username : window._spPageContextInfo.userLoginName;
		}
	
		return _class3;
	}();
	
	exports.default = SPOC;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ListItems = undefined;
	
	var _conversion = __webpack_require__(2);
	
	var _request = __webpack_require__(4);
	
	// SharePoint List Items Functionlity
	
	function ListItems(listTitle) {
	
	    // save reference to this
	    var site = this;
	
	    // Create object to store public methods
	    var methods = {};
	
	    /**
	     * Queries a SharePont list via REST API
	     * @params  Object query filter paramators in obj format
	     * @return promise
	     */
	    methods.query = function (settings, cache, headers) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items';
	
	        listUrl += settings ? '?' + _conversion.Conversion.objToQueryString(settings) : '';
	
	        return _request.Request.get(listUrl, cache);
	    };
	
	    return methods;
	};
	
	exports.ListItems = ListItems;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Utils = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_utils.Utils.Conversion = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: 'objToQueryString',
			value: function objToQueryString(obj) {
				var str = '';
	
				for (var propertyName in obj) {
					str += '&$' + propertyName + '=' + obj[propertyName];
				}
	
				return str;
			}
		}, {
			key: 'spInternalName',
			value: function spInternalName(string) {
				return string.replace(/ /g, '_x0020_');
			}
		}]);
	
		return _class;
	}();
	
	exports.Utils = _utils.Utils;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = function Utils() {
	  _classCallCheck(this, Utils);
	};
	
	exports.default = Utils;
	;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Utils = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(3);
	
	var _storage = __webpack_require__(5);
	
	var _url = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_utils.Utils.Request = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, null, [{
	        key: 'get',
	        value: function get(url, cacheResult) {
	            return new Promise(function (resolve, reject) {
	                var cache = _storage.Storage.get('SPOC-' + url);
	
	                if (cache && cacheResult) {
	                    resolve(cache);
	                } else {
	                    if (!_url.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                        url = _url.Url.convertToXDomain(url);
	
	                        var appweburl = _url.Url.AppWebUrl(),
	                            hostweburl = _url.Url.HostWebUrl();
	
	                        _utils.Utils.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
	                            var executor = new SP.RequestExecutor(appweburl);
	
	                            executor.executeAsync({
	                                url: url,
	                                method: "GET",
	                                headers: {
	                                    "Accept": "application/json; odata=verbose"
	                                },
	                                success: function success(data) {
	                                    resolve(data);
	                                },
	                                error: function error(err) {
	                                    reject(err);
	                                }
	                            });
	                        });
	                    } else {
	                        var req = new XMLHttpRequest();
	
	                        req.open('GET', url, true);
	                        req.setRequestHeader("Accept", "application/json;odata=verbose");
	
	                        req.onreadystatechange = function () {
	                            if (req.readyState === 4) {
	                                if (req.status === 200) {
	                                    var data = JSON.parse(req.responseText);
	
	                                    data = data.d.results ? data.d.results : data.d;
	
	                                    _utils.Utils.Storage.set('SPOC-' + url, data);
	
	                                    resolve(data);
	                                } else {
	                                    reject(Error(JSON.parse(req.statusText)));
	                                }
	                            }
	                        };
	
	                        req.onerror = function (err) {
	                            reject(Error('Network Error'));
	                        };
	
	                        req.send();
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'post',
	        value: function post(url, data, isFile) {
	            return new Promise(function (resolve, reject) {
	                if (!_url.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _url.Url.convertToXDomain(url);
	
	                    var appweburl = _url.Url.AppWebUrl(),
	                        hostweburl = _url.Url.HostWebUrl();
	
	                    _utils.Utils.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
	                        var executor = new SP.RequestExecutor(appweburl),
	                            headers = {
	                            "Accept": "application/json; odata=verbose",
	                            "X-RequestDigest": document.getElementById('__REQUESTDIGEST').value,
	                            "Content-Type": "application/json;odata=verbose"
	                        };
	
	                        if (isFile) {
	                            headers["Content-Type"] = data.byteLength;
	                        }
	
	                        executor.executeAsync({
	                            url: url,
	                            method: "POST",
	                            body: JSON.stringify(data),
	                            headers: headers,
	                            success: function success(data) {
	                                resolve(data);
	                            },
	                            error: function error(err) {
	                                reject(err);
	                            }
	                        });
	                    });
	                } else {
	                    var req = new XMLHttpRequest();
	
	                    req.open('POST', url, true);
	                    req.setRequestHeader("Accept", "application/json;odata=verbose");
	                    req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
	                    req.setRequestHeader("Content-Type", "application/json;odata=verbose");
	
	                    if (isFile) {
	                        req.setRequestHeader("content-length", data.byteLength);
	                    }
	
	                    req.onreadystatechange = function () {
	                        if (req.readyState === 4) {
	                            if (req.status === 200 || req.status === 201 || req.status === 1223) {
	                                resolve(data);
	                            } else {
	                                reject(Error(req.statusText));
	                            }
	                        }
	                    };
	
	                    req.onerror = function (err) {
	                        reject(Error('Network Error'));
	                    };
	
	                    req.send(isFile ? data : JSON.stringify(data));
	                }
	            });
	        }
	    }, {
	        key: 'put',
	        value: function put(url, data) {
	            return new Promise(function (resolve, reject) {
	                if (!_url.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _url.Url.convertToXDomain(url);
	
	                    var appweburl = _url.Url.AppWebUrl(),
	                        hostweburl = _url.Url.HostWebUrl();
	
	                    _utils.Utils.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
	                        var executor = new SP.RequestExecutor(appweburl),
	                            headers = {
	                            "Accept": "application/json; odata=verbose",
	                            "X-RequestDigest": document.getElementById('__REQUESTDIGEST').value,
	                            "Content-Type": "application/json;odata=verbose",
	                            "X-HTTP-Method": "MERGE",
	                            "If-Match": "*"
	                        };
	
	                        executor.executeAsync({
	                            url: url,
	                            method: "POST",
	                            body: JSON.stringify(data),
	                            headers: headers,
	                            success: function success(data) {
	                                resolve(data);
	                            },
	                            error: function error(err) {
	                                reject(err);
	                            }
	                        });
	                    });
	                } else {
	                    var req = new XMLHttpRequest();
	
	                    req.open('POST', url, true);
	                    req.setRequestHeader("Accept", "application/json;odata=verbose");
	                    req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
	                    req.setRequestHeader("Content-Type", "application/json;odata=verbose");
	                    req.setRequestHeader("X-HTTP-Method", "MERGE");
	                    req.setRequestHeader("If-Match", "*");
	
	                    req.onreadystatechange = function () {
	                        if (req.readyState === 4) {
	                            if (req.status === 200 || req.status === 204 || req.status === 1223) {
	                                resolve(data);
	                            } else {
	                                reject(Error(req.statusText));
	                            }
	                        }
	                    };
	
	                    req.onerror = function (err) {
	                        reject(Error('Network Error'));
	                    };
	
	                    req.send(JSON.stringify(data));
	                }
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(url, data) {
	            return new Promise(function (resolve, reject) {
	                if (!_url.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _url.Url.convertToXDomain(url);
	
	                    var appweburl = _url.Url.AppWebUrl(),
	                        hostweburl = _url.Url.HostWebUrl();
	
	                    _utils.Utils.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
	                        var executor = new SP.RequestExecutor(appweburl),
	                            headers = {
	                            "Accept": "application/json; odata=verbose",
	                            "X-RequestDigest": document.getElementById('__REQUESTDIGEST').value,
	                            "Content-Type": "application/json;odata=verbose",
	                            "X-HTTP-Method": "DELETE",
	                            "If-Match": "*"
	                        };
	
	                        executor.executeAsync({
	                            url: url,
	                            method: "POST",
	                            body: JSON.stringify(data),
	                            headers: headers,
	                            success: function success(data) {
	                                resolve(data);
	                            },
	                            error: function error(err) {
	                                reject(err);
	                            }
	                        });
	                    });
	                } else {
	                    var req = new XMLHttpRequest();
	
	                    req.open('POST', url, true);
	                    req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
	                    req.setRequestHeader("X-HTTP-Method", "DELETE");
	                    req.setRequestHeader("If-Match", "*");
	
	                    req.onreadystatechange = function () {
	                        if (req.readyState === 4) {
	                            if (req.status === 200 || req.status === 204 || req.status === 1223) {
	                                resolve(data);
	                            } else {
	                                reject(Error(req.statusText));
	                            }
	                        }
	                    };
	
	                    req.onerror = function (err) {
	                        reject(Error('Network Error'));
	                    };
	
	                    req.send(JSON.stringify(data));
	                }
	            });
	        }
	    }, {
	        key: 'loadRequestor',
	        value: function loadRequestor(url) {
	            return new Promise(function (resolve, reject) {
	                var script = document.createElement('script');
	
	                script.src = url;
	
	                script.addEventListener('load', function () {
	                    resolve(url);
	                }, false);
	
	                script.addEventListener('error', function () {
	                    reject(url);
	                }, false);
	
	                if (!SP.RequestExecutor) {
	                    document.body.appendChild(script);
	                } else {
	                    resolve(url);
	                }
	            });
	        }
	    }]);
	
	    return _class;
	}();
	
	exports.Utils = _utils.Utils;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Utils = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_utils.Utils.Storage = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, null, [{
	        key: 'get',
	        value: function get(key, useLocalStorage) {
	            if (_utils.Utils.Storage.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                return JSON.parse(storageObj.getItem(key));
	            }
	            return null;
	        }
	    }, {
	        key: 'storageAvailable',
	        value: function storageAvailable() {
	            return typeof Storage !== 'undefined';
	        }
	    }, {
	        key: 'set',
	        value: function set(key, data, useLocalStorage) {
	            if (_utils.Utils.Storage.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                storageObj.setItem(key, data === Object(data) ? JSON.stringify(data) : data);
	            }
	        }
	    }, {
	        key: 'get',
	        value: function get(key, useLocalStorage) {
	            if (_utils.Utils.Storage.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                return JSON.parse(storageObj.getItem(key));
	            }
	            return null;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key, useLocalStorage) {
	            if (_utils.Utils.Storage.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                storageObj.removeItem(key);
	            }
	        }
	    }, {
	        key: 'getCookie',
	        value: function getCookie(name) {
	            name = name + '=';
	
	            var ca = document.cookie.split(';');
	
	            for (var i = 0; i < ca.length; i++) {
	                var c = ca[i].trim();
	
	                if (c.indexOf(name) === 0) {
	                    return c.substring(name.length, c.length);
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: 'setCookies',
	        value: function setCookies(name, value, days) {
	            var expires;
	
	            if (days) {
	                var date = new Date();
	
	                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	                expires = '; expires=' + date.toGMTString();
	            } else {
	                expires = '';
	            }
	
	            document.cookie = name + '=' + value + '; ' + expires;
	        }
	    }, {
	        key: 'removeCookies',
	        value: function removeCookies(name) {
	            _utils.Utils.Storage.setCookies(name, '', -1);
	        }
	    }]);
	
	    return _class;
	}();
	
	exports.Utils = _utils.Utils;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Utils = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_utils.Utils.Url = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, null, [{
	        key: 'getQueryString',
	        value: function getQueryString(variable, query) {
	            query = query ? query = query.split('?')[1] : window.location.search.substring(1);
	
	            var vars = query.split("&");
	
	            for (var i = 0; i < vars.length; i++) {
	                var pair = vars[i].split("=");
	
	                if (pair[0] === variable) {
	                    return unescape(pair[1]);
	                }
	            }
	        }
	    }, {
	        key: 'getListNameFromUrl',
	        value: function getListNameFromUrl(url) {
	            var regex = /\%27(.*)\%27/g,
	                match = regex.exec(url);
	
	            return match ? match[1] : null;
	        }
	    }, {
	        key: 'AppWebUrl',
	        value: function AppWebUrl(url) {
	            return decodeURIComponent(_utils.Utils.Url.getQueryString('SPAppWebUrl'));
	        }
	    }, {
	        key: 'HostWebUrl',
	        value: function HostWebUrl(url) {
	            return decodeURIComponent(_utils.Utils.Url.getQueryString('SPHostUrl'));
	        }
	    }, {
	        key: 'isSameDomain',
	        value: function isSameDomain(url) {
	            if (!window.location.origin) {
	                window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	            }
	
	            return url.toLowerCase().indexOf(window.location.origin.toLowerCase()) > -1;
	        }
	    }, {
	        key: 'convertToXDomain',
	        value: function convertToXDomain(url) {
	            url = url.toLowerCase().replace('/_api/', '/_api/SP.AppContextSite(@target)/');
	
	            var domain = url.split('/_api')[0],
	                origin = window.location.href.toLowerCase().split('/pages')[0];
	
	            url = url.split('/_api')[1];
	
	            if (url.indexOf('?') === -1) {
	                url = url + '?';
	            } else {
	                url = url + '&';
	            }
	
	            return origin + '/_api' + url + '@target=%27' + domain + '%27';
	        }
	    }]);
	
	    return _class;
	}();
	
	exports.Utils = _utils.Utils;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=SPOCExt.js.map