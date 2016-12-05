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
	
	var _spListitems2 = _interopRequireDefault(_spListitems);
	
	var _spDelve = __webpack_require__(11);
	
	var _spDelve2 = _interopRequireDefault(_spDelve);
	
	var _spFiles = __webpack_require__(12);
	
	var _spFiles2 = _interopRequireDefault(_spFiles);
	
	var _spLists = __webpack_require__(13);
	
	var _spLists2 = _interopRequireDefault(_spLists);
	
	var _spSearch = __webpack_require__(14);
	
	var _spSearch2 = _interopRequireDefault(_spSearch);
	
	var _spUsers = __webpack_require__(15);
	
	var _spUsers2 = _interopRequireDefault(_spUsers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
			this.ListItems = _spListitems2.default;
			this.Delve = _spDelve2.default;
			this.Files = _spFiles2.default;
			this.Lists = _spLists2.default;
			this.Search = _spSearch2.default;
		}
	
		return _class2;
	}();
	
	SPOC.SP.User = function () {
		function _class3(username) {
			_classCallCheck(this, _class3);
	
			this.id = username ? username : window._spPageContextInfo.userId;
			this.loginName = username ? username : window._spPageContextInfo.userLoginName;
	
			this.Profile = _spUsers2.default;
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
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListItems(listTitle) {
	    var site = this,
	        methods = {};
	
	    methods.query = function (settings, cache, headers) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items';
	
	        listUrl += settings ? '?' + _utils2.default.Conversion.objToQueryString(settings) : '';
	
	        return _utils2.default.Request.get(listUrl, cache);
	    };
	
	    methods.queryCSOM = function (camlQuery) {
	        return new Promise(function (resolve, reject) {
	            var ctx = new SP.ClientContext(site.url),
	                list = ctx.get_web().get_lists().getByTitle(listTitle),
	                query;
	
	            if (camlQuery) {
	                query = new SP.CamlQuery();
	                query.set_viewXml(camlQuery);
	            } else {
	                query = SP.CamlQuery.createAllItemsQuery();
	            }
	
	            var items = list.getItems(query);
	
	            ctx.load(items);
	
	            ctx.executeQueryAsync(function () {
	                var result = items.get_data().map(function (i) {
	                    return i.get_fieldValues();
	                });
	
	                resolve(result);
	            }, function (err) {
	                reject(err);
	            });
	        });
	    };
	
	    methods.create = function (data, library) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items',
	            defaults = {
	            __metadata: {
	                'type': SP.getListItemType(listTitle, library)
	            }
	        };
	
	        if (data) {
	            defaults = _utils2.default.Objects.merge(defaults, data);
	        }
	
	        return _utils2.default.Request.post(listUrl, defaults);
	    };
	
	    methods.update = function (id, data, library) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SPHelper.getListItemType(listTitle, library)
	            }
	        };
	
	        if (data) {
	            defaults = _utils2.default.Objects.merge(defaults, data);
	        }
	
	        return _utils2.default.Request.put(listUrl, defaults);
	    };
	
	    methods.delete = function (id, library) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SPHelper.getListItemType(listTitle, library)
	            }
	        };
	
	        return _utils2.default.Request.delete(listUrl, defaults);
	    };
	
	    return methods;
	};
	
	exports.default = ListItems;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _conversion = __webpack_require__(3);
	
	var _conversion2 = _interopRequireDefault(_conversion);
	
	var _sphelper = __webpack_require__(4);
	
	var _sphelper2 = _interopRequireDefault(_sphelper);
	
	var _request = __webpack_require__(5);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _objects = __webpack_require__(6);
	
	var _objects2 = _interopRequireDefault(_objects);
	
	var _storage = __webpack_require__(7);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _strings = __webpack_require__(8);
	
	var _strings2 = _interopRequireDefault(_strings);
	
	var _templates = __webpack_require__(9);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _url = __webpack_require__(10);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = function () {
		function Utils() {
			_classCallCheck(this, Utils);
	
			this._name = 'Utils';
		}
	
		_createClass(Utils, [{
			key: 'name',
			get: function get() {
				return this._name;
			}
		}]);
	
		return Utils;
	}();
	
	;
	
	Utils.Conversion = _conversion2.default;
	Utils.Request = _request2.default;
	Utils.SPHelper = _sphelper2.default;
	Utils.Objects = _objects2.default;
	Utils.Storage = _storage2.default;
	Utils.Strings = _strings2.default;
	Utils.Tpl = _templates2.default;
	Utils.Url = _url2.default;
	
	exports.default = Utils;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Conversion = function () {
		function Conversion() {
			_classCallCheck(this, Conversion);
		}
	
		_createClass(Conversion, null, [{
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
	
		return Conversion;
	}();
	
	;
	
	exports.default = Conversion;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SPHelper = function () {
	    function SPHelper() {
	        _classCallCheck(this, SPHelper);
	    }
	
	    _createClass(SPHelper, null, [{
	        key: "getListItemType",
	        value: function getListItemType(name, library) {
	            var meta = library ? "Item" : "ListItem";
	
	            name = name[0].toUpperCase() + name.substring(1);
	
	            return "SP.Data." + name.replace(/ /g, '_x0020_') + meta;
	        }
	    }, {
	        key: "isAppWeb",
	        value: function isAppWeb() {
	            return window.location.href.toLowerCase().indexOf('sphosturl') > -1;
	        }
	    }, {
	        key: "convertToWebApp",
	        value: function convertToWebApp(url) {
	            if (url.toLowerCase().indexOf('WopiFrame.aspx') > -1) {
	                return url;
	            }
	
	            var ext = _utils2.default.Strings.getFileExtension(url);
	
	            if (ext === 'docx' || ext === 'pptx' || ext === 'xlsx') {
	                return window._spPageContextInfo.webAbsoluteUrl + '/_layouts/15/WopiFrame.aspx?sourcedoc=' + url;
	            }
	
	            return url;
	        }
	    }, {
	        key: "formatSearchResponse",
	        value: function formatSearchResponse(data) {
	            var result = data.query.PrimaryQueryResult.RelevantResults.Table.Rows,
	                finalarray = [],
	                item,
	                obj,
	                i,
	                a;
	
	            result = result.results || [result];
	
	            for (i = 0; i < result.length; i++) {
	                item = result[i].Cells.results;
	                obj = {};
	
	                for (a = 0; a < item.length; a++) {
	                    obj[item[a].Key] = item[a].Value;
	                }
	
	                finalarray.push(obj);
	            }
	
	            return finalarray;
	        }
	    }]);
	
	    return SPHelper;
	}();
	
	;
	
	exports.default = SPHelper;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Request = function () {
	    function Request() {
	        _classCallCheck(this, Request);
	    }
	
	    _createClass(Request, null, [{
	        key: 'get',
	        value: function get(url, cacheResult) {
	            return new Promise(function (resolve, reject) {
	                var cache = _utils2.default.Storage.get('SPOC-' + url);
	
	                if (cache && cacheResult) {
	                    resolve(cache);
	                } else {
	                    if (!_utils2.default.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                        url = _utils2.default.Url.convertToXDomain(url);
	
	                        var appweburl = _utils2.default.Url.AppWebUrl(),
	                            hostweburl = _utils2.default.Url.HostWebUrl();
	
	                        this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
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
	
	                                    _utils2.default.Storage.set('SPOC-' + url, data);
	
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
	                if (!_utils2.default.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _utils2.default.Url.convertToXDomain(url);
	
	                    var appweburl = _utils2.default.Url.AppWebUrl(),
	                        hostweburl = _utils2.default.Url.HostWebUrl();
	
	                    this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
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
	                if (!_utils2.default.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _utils2.default.Url.convertToXDomain(url);
	
	                    var appweburl = _utils2.default.Url.AppWebUrl(),
	                        hostweburl = _utils2.default.Url.HostWebUrl();
	
	                    this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
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
	                if (!_utils2.default.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
	                    url = _utils2.default.Url.convertToXDomain(url);
	
	                    var appweburl = _utils2.default.Url.AppWebUrl(),
	                        hostweburl = _utils2.default.Url.HostWebUrl();
	
	                    this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function () {
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
	
	    return Request;
	}();
	
	;
	
	exports.default = Request;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Objects = function () {
	    function Objects() {
	        _classCallCheck(this, Objects);
	    }
	
	    _createClass(Objects, null, [{
	        key: "findObjectByProperty",
	        value: function findObjectByProperty(data, prop, value) {
	            for (var i = 0; i < data.length; i++) {
	                if (data[i][prop] === value) {
	                    return data[i];
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: "merge",
	        value: function merge(obj1, obj2) {
	            for (var p in obj2) {
	                try {
	                    if (obj2[p].constructor === Object) {
	                        obj1[p] = this.merge(obj1[p], obj2[p]);
	                    } else {
	                        obj1[p] = obj2[p];
	                    }
	                } catch (e) {
	                    obj1[p] = obj2[p];
	                }
	            }
	
	            return obj1;
	        }
	    }]);
	
	    return Objects;
	}();
	
	;
	
	exports.default = Objects;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Storage = function () {
	    function Storage() {
	        _classCallCheck(this, Storage);
	    }
	
	    _createClass(Storage, null, [{
	        key: 'get',
	        value: function get(key, useLocalStorage) {
	            if (this.storageAvailable()) {
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
	            if (this.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                storageObj.setItem(key, data === Object(data) ? JSON.stringify(data) : data);
	            }
	        }
	    }, {
	        key: 'get',
	        value: function get(key, useLocalStorage) {
	            if (this.storageAvailable()) {
	                var storageObj = useLocalStorage ? localStorage : sessionStorage;
	
	                return JSON.parse(storageObj.getItem(key));
	            }
	            return null;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key, useLocalStorage) {
	            if (this.storageAvailable()) {
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
	            this.setCookies(name, '', -1);
	        }
	    }]);
	
	    return Storage;
	}();
	
	;
	
	exports.default = Storage;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Strings = function () {
		function Strings() {
			_classCallCheck(this, Strings);
		}
	
		_createClass(Strings, null, [{
			key: "cut",
			value: function cut(value, requiredLength) {
				return value.length > requiredLength ? value.substr(0, requiredLength - 3) + "..." : value;
			}
		}, {
			key: "getFileExtension",
			value: function getFileExtension(value) {
				return value.split('.').pop();
			}
		}]);
	
		return Strings;
	}();
	
	;
	
	exports.default = Strings;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tpl = function () {
	    function Tpl() {
	        _classCallCheck(this, Tpl);
	    }
	
	    _createClass(Tpl, null, [{
	        key: "getProperty",
	        value: function getProperty(propertyName, obj) {
	            var parts = propertyName.split("."),
	                length = parts.length,
	                i,
	                property = obj || this;
	
	            for (i = 0; i < length; i++) {
	                property = property[parts[i]];
	            }
	
	            return property;
	        }
	    }, {
	        key: "render",
	        value: function render(tpl, data) {
	            var regex = /{{(.*?)}}/g,
	                matches = tpl.match(regex);
	
	            if (matches && matches.length) {
	                for (var i = 0, len = matches.length; i < len; i++) {
	                    tpl = tpl.replace(new RegExp(matches[i], 'g'), this.getProperty(matches[i].replace(/{{|}}/g, ""), data));
	                }
	            }
	
	            return tpl;
	        }
	    }]);
	
	    return Tpl;
	}();
	
	;
	
	exports.default = Tpl;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Url = function () {
	    function Url() {
	        _classCallCheck(this, Url);
	    }
	
	    _createClass(Url, null, [{
	        key: "getQueryString",
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
	        key: "getListNameFromUrl",
	        value: function getListNameFromUrl(url) {
	            var regex = /\%27(.*)\%27/g,
	                match = regex.exec(url);
	
	            return match ? match[1] : null;
	        }
	    }, {
	        key: "AppWebUrl",
	        value: function AppWebUrl(url) {
	            return decodeURIComponent(this.getQueryString('SPAppWebUrl'));
	        }
	    }, {
	        key: "HostWebUrl",
	        value: function HostWebUrl(url) {
	            return decodeURIComponent(this.getQueryString('SPHostUrl'));
	        }
	    }, {
	        key: "isSameDomain",
	        value: function isSameDomain(url) {
	            if (!window.location.origin) {
	                window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	            }
	
	            return url.toLowerCase().indexOf(window.location.origin.toLowerCase()) > -1;
	        }
	    }, {
	        key: "convertToXDomain",
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
	
	    return Url;
	}();
	
	;
	
	exports.default = Url;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	function Delve(userEmail) {
	    var site = this,
	        methods = {};
	
	    methods.board = function (searchTerm, actions, cache) {
	        return new Promise(function (resolve, reject) {
	            var searchUrl, actor;
	
	            if (!searchTerm) {
	                searchTerm = '*';
	            }
	
	            if (userEmail) {
	                searchUrl = site.url + "/_api/search/query?Querytext=%27WorkEmail:" + userEmail + "%27&SelectProperties=%27UserName,DocId%27";
	
	                _utils.Utils.Request.get(searchUrl, cache).then(function (result) {
	                    result = _utils.Utils.SPHelper.formatSearchResponse(result);
	
	                    if (result.length) {
	                        if (result.length > 1) {
	                            result = result[0];
	                        }
	
	                        actor = result.DocId;
	                        searchUrl = site.url + "/_api/search/query?Querytext='" + searchTerm + "'&amp;Properties='GraphQuery:ACTOR(" + actor + actions ? ", " + actions : "" + ")";
	
	                        _utils.Utils.Request.get(searchUrl, cache).then(function (board) {
	                            board = _utils.Utils.SPHelper.formatSearchResponse(board);
	                            resolve(board);
	                        }, function (err) {
	                            reject(err);
	                        });
	                    } else {
	                        resolve(null);
	                    }
	                }, function (err) {
	                    reject(err);
	                });
	            } else {
	                searchUrl = site.url + "/_api/search/query?Querytext='" + searchTerm + "'&amp;Properties='GraphQuery:ACTOR(ME" + actions ? ", " + actions : "" + ")";
	
	                _utils.Utils.Request.get(searchUrl, cache).then(function (board) {
	                    board = _utils.Utils.SPHelper.formatSearchResponse(board);
	                    resolve(board);
	                }, function (err) {
	                    reject(err);
	                });
	            }
	        });
	    };
	
	    return methods;
	};
	
	exports.default = Delve;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Files(filePath) {
	    var site = this,
	        methods = {};
	
	    methods.generateExternalLink = function (hours) {
	        hours = hours ? hours : 24;
	
	        var listUrl = site.url + "/_api/Web/GetFileByServerRelativeUrl('" + filePath + "')/GetPreAuthorizedAccessUrl(" + hours + ")";
	
	        return _utils2.default.Request.get(listUrl, true);
	    };
	
	    methods.uploadViaModal = function (GUID) {
	        return new Promise(function (resolve, reject) {
	            var dialogOptions = {};
	
	            dialogOptions.url = site.url + "/_layouts/Upload.aspx?List=" + GUID + "&IsDlg=1";
	
	            dialogOptions.dialogReturnValueCallback = Function.createDelegate(null, function (result, value) {
	                resolve(value);
	            });
	
	            SP.UI.ModalDialog.showModalDialog(dialogOptions);
	        });
	    };
	
	    methods.upload = function (fileInput, expand) {
	        return new Promise(function (resolve, reject) {
	            var reader = new FileReader();
	
	            reader.onloadend = function (e) {
	                var parts = fileInput.value.split('\\'),
	                    fileName = parts[parts.length - 1],
	                    url = site.url + "/_api/Web/GetFolderByServerRelativeUrl('" + filePath + "')/files/add(overwrite=true, url='" + fileName + "')" + (expand ? "?$" + expand : "");
	
	                _utils2.default.Request.post(url, e.target.result, true).then(function (result) {
	                    resolve(result);
	                }, function (result) {
	                    reject(result);
	                });
	            };
	
	            reader.onerror = function (e) {
	                reject(e.target.error);
	            };
	
	            reader.readAsArrayBuffer(fileInput.files[0]);
	        });
	    };
	
	    methods.uploadFile = function (file, expand) {
	        return new Promise(function (resolve, reject) {
	            var reader = new FileReader();
	
	            reader.onloadend = function (e) {
	                var fileName = file ? file.name : "",
	                    url = site.url + "/_api/Web/GetFolderByServerRelativeUrl('" + filePath + "')/files/add(overwrite=true, url='" + fileName + "')" + (expand ? "?$" + expand : "");
	
	                _utils2.default.Request.post(url, e.target.result, true).then(function (result) {
	                    resolve(result);
	                }, function (result) {
	                    reject(result);
	                });
	            };
	
	            reader.onerror = function (e) {
	                reject(e.target.error);
	            };
	
	            reader.readAsArrayBuffer(file);
	        });
	    };
	
	    methods.query = function (cache) {
	        var url = site.url + "/_api/web/getfilebyserverrelativeurl('" + filePath + "')/ListItemAllFields";
	
	        return _utils2.default.Request.get(url, cache);
	    };
	
	    methods.download = function () {
	        window.open('/_layouts/download.aspx?SourceUrl=' + site.url + filePath);
	    };
	
	    methods.openInWebApps = function (newTab) {
	        var url = site.url + filePath;
	
	        if (newTab) {
	            window.open(_utils2.default.SPHelper.convertToWebApp(url));
	        } else {
	            window.location.href = _utils2.default.SPHelper.convertToWebApp(url);
	        }
	    };
	
	    return methods;
	};
	
	exports.default = Files;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Lists(listTitle) {
	    var site = this,
	        methods = {};
	
	    methods.query = function (settings, cache) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/';
	
	        listUrl += settings ? '?' + _utils2.default.Conversion.objToQueryString(settings) : '';
	
	        return _utils2.default.Request.get(listUrl, cache);
	    };
	
	    methods.create = function (settings) {
	        var defaults = {
	            __metadata: {
	                'type': 'SP.List'
	            },
	            BaseTemplate: 100,
	            Description: ''
	        };
	
	        if (settings) {
	            defaults = _utils2.default.Objects.merge(defaults, settings);
	        }
	
	        return _utils2.default.Request.post(site.url + '/_api/web/lists', defaults);
	    };
	
	    methods.update = function (data) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SPHelper.getListItemType(listTitle)
	            }
	        };
	
	        if (data) {
	            defaults = _utils2.default.Objects.merge(defaults, data);
	        }
	
	        return _utils2.default.Request.put(listUrl, defaults);
	    };
	
	    methods.delete = function () {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SPHelper.getListItemType(listTitle)
	            }
	        };
	
	        return _utils2.default.Request.delete(listUrl, defaults);
	    };
	
	    return methods;
	};
	
	exports.default = Lists;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Search(searchTerm) {
	    var site = this,
	        methods = {};
	
	    methods.query = function (settings, cache) {
	        return new Promise(function (resolve, reject) {
	            var searchUrl = site.url + '/_api/search/query?querytext=%27' + searchTerm + ' +path:' + site.url + '%27';
	
	            searchUrl += settings ? '?' + _utils2.default.Conversion.objToQueryString(settings) : '';
	
	            _utils2.default.Request.get(searchUrl, cache).then(function (result) {
	                result = _utils2.default.SPHelper.formatSearchResponse(result);
	                resolve(result);
	            }, function (err) {
	                reject(err);
	            });
	        });
	    };
	
	    return methods;
	};
	
	exports.default = Search;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	function Profile() {
	    var user = this,
	        methods = {},
	        loginNamePrefix = 'i:0%23.f|membership|';
	
	    methods.query = function (cache) {
	        var listUrl = window._spPageContextInfo.webAbsoluteUrl;
	
	        if (user.loginName) {
	            listUrl += "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v=%27" + loginNamePrefix + user.loginName + "%27";
	        } else {
	            listUrl += "/_api/SP.UserProfiles.PeopleManager/GetMyProperties/UserProfileProperties";
	        }
	
	        return _utils.Utils.Request.get(listUrl, cache);
	    };
	
	    methods.isMemberOfGroup = function (site, groupName, userId, cache) {
	        var user = userId ? userId : window._spPageContextInfo.userId,
	            listUrl = site.url + "/_api/web/sitegroups/getByName('" + groupName + "')/Users?$filter=Id eq " + user;
	
	        return _utils.Utils.Request.get(listUrl, cache);
	    };
	
	    return methods;
	};
	
	exports.default = Profile;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=SPOCExt.js.map