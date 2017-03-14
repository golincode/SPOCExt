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
	
	var _spDelve = __webpack_require__(15);
	
	var _spDelve2 = _interopRequireDefault(_spDelve);
	
	var _spFiles = __webpack_require__(16);
	
	var _spFiles2 = _interopRequireDefault(_spFiles);
	
	var _spLists = __webpack_require__(17);
	
	var _spLists2 = _interopRequireDefault(_spLists);
	
	var _spSearch = __webpack_require__(18);
	
	var _spSearch2 = _interopRequireDefault(_spSearch);
	
	var _spUsers = __webpack_require__(19);
	
	var _spUsers2 = _interopRequireDefault(_spUsers);
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SPOC = function () {
		function SPOC() {
			_classCallCheck(this, SPOC);
	
			this._name = 'SPOC';
			window.Promise = window.Promise ? window.Promise : _rsvp2.default.Promise;
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
	
	SPOC.Utils = function () {
		function _class4() {
			_classCallCheck(this, _class4);
	
			this._name = 'Utils';
		}
	
		_createClass(_class4, [{
			key: 'name',
			get: function get() {
				return this._name;
			}
		}]);
	
		return _class4;
	}();
	
	SPOC.Utils = _utils2.default;
	
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
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
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
	        return new _rsvp2.default.Promise(function (resolve, reject) {
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
	                'type': _utils2.default.SP.getListItemType(listTitle, library)
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
	                'type': _utils2.default.SP.getListItemType(listTitle, library)
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
	                'type': _utils2.default.SP.getListItemType(listTitle, library)
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
	
	var _sp = __webpack_require__(4);
	
	var _sp2 = _interopRequireDefault(_sp);
	
	var _request = __webpack_require__(5);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _objects = __webpack_require__(10);
	
	var _objects2 = _interopRequireDefault(_objects);
	
	var _storage = __webpack_require__(11);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _strings = __webpack_require__(12);
	
	var _strings2 = _interopRequireDefault(_strings);
	
	var _templates = __webpack_require__(13);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _url = __webpack_require__(14);
	
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
	Utils.SP = _sp2.default;
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
	
	var SP = function () {
	    function SP() {
	        _classCallCheck(this, SP);
	    }
	
	    _createClass(SP, null, [{
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
	
	    return SP;
	}();
	
	;
	
	exports.default = SP;
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
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Request = function () {
	    function Request() {
	        _classCallCheck(this, Request);
	    }
	
	    _createClass(Request, null, [{
	        key: 'get',
	        value: function get(url, cacheResult) {
	            return new _rsvp2.default.Promise(function (resolve, reject) {
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
	                                    reject(req);
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
	            return new _rsvp2.default.Promise(function (resolve, reject) {
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
	
	                    req.onreadystatechange = function () {
	                        if (req.readyState === 4) {
	                            if (req.status === 200 || req.status === 201 || req.status === 1223) {
	                                resolve(data);
	                            } else {
	                                reject(req);
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
	            return new _rsvp2.default.Promise(function (resolve, reject) {
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
	                                reject(req);
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
	            return new _rsvp2.default.Promise(function (resolve, reject) {
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
	                                reject(req);
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
	            return new _rsvp2.default.Promise(function (resolve, reject) {
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
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {/*!
	 * @overview RSVP - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2016 Yehuda Katz, Tom Dale, Stefan Penner and contributors
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
	 * @version   3.4.0
	 */
	
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.RSVP = global.RSVP || {})));
	}(this, (function (exports) { 'use strict';
	
	function indexOf(callbacks, callback) {
	  for (var i = 0, l = callbacks.length; i < l; i++) {
	    if (callbacks[i] === callback) {
	      return i;
	    }
	  }
	
	  return -1;
	}
	
	function callbacksFor(object) {
	  var callbacks = object._promiseCallbacks;
	
	  if (!callbacks) {
	    callbacks = object._promiseCallbacks = {};
	  }
	
	  return callbacks;
	}
	
	/**
	  @class RSVP.EventTarget
	*/
	var EventTarget = {
	
	  /**
	    `RSVP.EventTarget.mixin` extends an object with EventTarget methods. For
	    Example:
	     ```javascript
	    let object = {};
	     RSVP.EventTarget.mixin(object);
	     object.on('finished', function(event) {
	      // handle event
	    });
	     object.trigger('finished', { detail: value });
	    ```
	     `EventTarget.mixin` also works with prototypes:
	     ```javascript
	    let Person = function() {};
	    RSVP.EventTarget.mixin(Person.prototype);
	     let yehuda = new Person();
	    let tom = new Person();
	     yehuda.on('poke', function(event) {
	      console.log('Yehuda says OW');
	    });
	     tom.on('poke', function(event) {
	      console.log('Tom says OW');
	    });
	     yehuda.trigger('poke');
	    tom.trigger('poke');
	    ```
	     @method mixin
	    @for RSVP.EventTarget
	    @private
	    @param {Object} object object to extend with EventTarget methods
	  */
	  mixin: function mixin(object) {
	    object['on'] = this['on'];
	    object['off'] = this['off'];
	    object['trigger'] = this['trigger'];
	    object._promiseCallbacks = undefined;
	    return object;
	  },
	
	  /**
	    Registers a callback to be executed when `eventName` is triggered
	     ```javascript
	    object.on('event', function(eventInfo){
	      // handle the event
	    });
	     object.trigger('event');
	    ```
	     @method on
	    @for RSVP.EventTarget
	    @private
	    @param {String} eventName name of the event to listen for
	    @param {Function} callback function to be called when the event is triggered.
	  */
	  on: function on(eventName, callback) {
	    if (typeof callback !== 'function') {
	      throw new TypeError('Callback must be a function');
	    }
	
	    var allCallbacks = callbacksFor(this),
	        callbacks = undefined;
	
	    callbacks = allCallbacks[eventName];
	
	    if (!callbacks) {
	      callbacks = allCallbacks[eventName] = [];
	    }
	
	    if (indexOf(callbacks, callback) === -1) {
	      callbacks.push(callback);
	    }
	  },
	
	  /**
	    You can use `off` to stop firing a particular callback for an event:
	     ```javascript
	    function doStuff() { // do stuff! }
	    object.on('stuff', doStuff);
	     object.trigger('stuff'); // doStuff will be called
	     // Unregister ONLY the doStuff callback
	    object.off('stuff', doStuff);
	    object.trigger('stuff'); // doStuff will NOT be called
	    ```
	     If you don't pass a `callback` argument to `off`, ALL callbacks for the
	    event will not be executed when the event fires. For example:
	     ```javascript
	    let callback1 = function(){};
	    let callback2 = function(){};
	     object.on('stuff', callback1);
	    object.on('stuff', callback2);
	     object.trigger('stuff'); // callback1 and callback2 will be executed.
	     object.off('stuff');
	    object.trigger('stuff'); // callback1 and callback2 will not be executed!
	    ```
	     @method off
	    @for RSVP.EventTarget
	    @private
	    @param {String} eventName event to stop listening to
	    @param {Function} callback optional argument. If given, only the function
	    given will be removed from the event's callback queue. If no `callback`
	    argument is given, all callbacks will be removed from the event's callback
	    queue.
	  */
	  off: function off(eventName, callback) {
	    var allCallbacks = callbacksFor(this),
	        callbacks = undefined,
	        index = undefined;
	
	    if (!callback) {
	      allCallbacks[eventName] = [];
	      return;
	    }
	
	    callbacks = allCallbacks[eventName];
	
	    index = indexOf(callbacks, callback);
	
	    if (index !== -1) {
	      callbacks.splice(index, 1);
	    }
	  },
	
	  /**
	    Use `trigger` to fire custom events. For example:
	     ```javascript
	    object.on('foo', function(){
	      console.log('foo event happened!');
	    });
	    object.trigger('foo');
	    // 'foo event happened!' logged to the console
	    ```
	     You can also pass a value as a second argument to `trigger` that will be
	    passed as an argument to all event listeners for the event:
	     ```javascript
	    object.on('foo', function(value){
	      console.log(value.name);
	    });
	     object.trigger('foo', { name: 'bar' });
	    // 'bar' logged to the console
	    ```
	     @method trigger
	    @for RSVP.EventTarget
	    @private
	    @param {String} eventName name of the event to be triggered
	    @param {*} options optional value to be passed to any event handlers for
	    the given `eventName`
	  */
	  trigger: function trigger(eventName, options, label) {
	    var allCallbacks = callbacksFor(this),
	        callbacks = undefined,
	        callback = undefined;
	
	    if (callbacks = allCallbacks[eventName]) {
	      // Don't cache the callbacks.length since it may grow
	      for (var i = 0; i < callbacks.length; i++) {
	        callback = callbacks[i];
	
	        callback(options, label);
	      }
	    }
	  }
	};
	
	var config = {
	  instrument: false
	};
	
	EventTarget['mixin'](config);
	
	function configure(name, value) {
	  if (name === 'onerror') {
	    // handle for legacy users that expect the actual
	    // error to be passed to their function added via
	    // `RSVP.configure('onerror', someFunctionHere);`
	    config['on']('error', value);
	    return;
	  }
	
	  if (arguments.length === 2) {
	    config[name] = value;
	  } else {
	    return config[name];
	  }
	}
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	function isMaybeThenable(x) {
	  return typeof x === 'object' && x !== null;
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	// Date.now is not available in browsers < IE9
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
	var now = Date.now || function () {
	  return new Date().getTime();
	};
	
	function F() {}
	
	var o_create = Object.create || function (o) {
	  if (arguments.length > 1) {
	    throw new Error('Second argument not supported');
	  }
	  if (typeof o !== 'object') {
	    throw new TypeError('Argument must be an object');
	  }
	  F.prototype = o;
	  return new F();
	};
	
	var queue = [];
	
	function scheduleFlush() {
	  setTimeout(function () {
	    for (var i = 0; i < queue.length; i++) {
	      var entry = queue[i];
	
	      var payload = entry.payload;
	
	      payload.guid = payload.key + payload.id;
	      payload.childGuid = payload.key + payload.childId;
	      if (payload.error) {
	        payload.stack = payload.error.stack;
	      }
	
	      config['trigger'](entry.name, entry.payload);
	    }
	    queue.length = 0;
	  }, 50);
	}
	function instrument(eventName, promise, child) {
	  if (1 === queue.push({
	    name: eventName,
	    payload: {
	      key: promise._guidKey,
	      id: promise._id,
	      eventName: eventName,
	      detail: promise._result,
	      childId: child && child._id,
	      label: promise._label,
	      timeStamp: now(),
	      error: config["instrument-with-stack"] ? new Error(promise._label) : null
	    } })) {
	    scheduleFlush();
	  }
	}
	
	/**
	  `RSVP.Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new RSVP.Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = RSVP.Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {*} object value that the returned promise will be resolved with
	  @param {String} label optional string for identifying the returned promise.
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object, label) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop, label);
	  resolve(promise, object);
	  return promise;
	}
	
	function withOwnPromise() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  config.async(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value, undefined);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    thenable._onError = null;
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      if (thenable !== value) {
	        resolve(promise, value, undefined);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && promise.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      reject(promise, GET_THEN_ERROR.error);
	      GET_THEN_ERROR.error = null;
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function resolve(promise, value) {
	  if (promise === value) {
	    fulfill(promise, value);
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onError) {
	    promise._onError(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length === 0) {
	    if (config.instrument) {
	      instrument('fulfilled', promise);
	    }
	  } else {
	    config.async(publish, promise);
	  }
	}
	
	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	  config.async(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var subscribers = parent._subscribers;
	  var length = subscribers.length;
	
	  parent._onError = null;
	
	  subscribers[length] = child;
	  subscribers[length + FULFILLED] = onFulfillment;
	  subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    config.async(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (config.instrument) {
	    instrument(settled === FULFILLED ? 'fulfilled' : 'rejected', promise);
	  }
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null; // release
	    } else {
	        succeeded = true;
	      }
	
	    if (promise === value) {
	      reject(promise, withOwnPromise());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      resolve(promise, value);
	    } else if (failed) {
	      reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  var resolved = false;
	  try {
	    resolver(function (value) {
	      if (resolved) {
	        return;
	      }
	      resolved = true;
	      resolve(promise, value);
	    }, function (reason) {
	      if (resolved) {
	        return;
	      }
	      resolved = true;
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}
	
	function then(onFulfillment, onRejection, label) {
	  var _arguments = arguments;
	
	  var parent = this;
	  var state = parent._state;
	
	  if (state === FULFILLED && !onFulfillment || state === REJECTED && !onRejection) {
	    config.instrument && instrument('chained', parent, parent);
	    return parent;
	  }
	
	  parent._onError = null;
	
	  var child = new parent.constructor(noop, label);
	  var result = parent._result;
	
	  config.instrument && instrument('chained', parent, child);
	
	  if (state) {
	    (function () {
	      var callback = _arguments[state - 1];
	      config.async(function () {
	        return invokeCallback(state, child, callback, result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	function makeSettledResult(state, position, value) {
	  if (state === FULFILLED) {
	    return {
	      state: 'fulfilled',
	      value: value
	    };
	  } else {
	    return {
	      state: 'rejected',
	      reason: value
	    };
	  }
	}
	
	function Enumerator(Constructor, input, abortOnReject, label) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop, label);
	  this._abortOnReject = abortOnReject;
	
	  if (this._validateInput(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._init();
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    reject(this.promise, this._validationError());
	  }
	}
	
	Enumerator.prototype._validateInput = function (input) {
	  return isArray(input);
	};
	
	Enumerator.prototype._validationError = function () {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._init = function () {
	  this._result = new Array(this.length);
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var promise = this.promise;
	  var input = this._input;
	
	  for (var i = 0; promise._state === PENDING && i < length; i++) {
	    this._eachEntry(input[i], i);
	  }
	};
	
	Enumerator.prototype._settleMaybeThenable = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve = c.resolve;
	
	  if (resolve === resolve$1) {
	    var then$$ = getThen(entry);
	
	    if (then$$ === then && entry._state !== PENDING) {
	      entry._onError = null;
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof then$$ !== 'function') {
	      this._remaining--;
	      this._result[i] = this._makeResult(FULFILLED, i, entry);
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, then$$);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve) {
	        return resolve(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve(entry), i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  if (isMaybeThenable(entry)) {
	    this._settleMaybeThenable(entry, i);
	  } else {
	    this._remaining--;
	    this._result[i] = this._makeResult(FULFILLED, i, entry);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (this._abortOnReject && state === REJECTED) {
	      reject(promise, value);
	    } else {
	      this._result[i] = this._makeResult(state, i, value);
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._makeResult = function (state, i, value) {
	  return value;
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `RSVP.Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.resolve(2);
	  let promise3 = RSVP.resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  RSVP.Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `RSVP.all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.reject(new Error("2"));
	  let promise3 = RSVP.reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  RSVP.Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries, label) {
	  return new Enumerator(this, entries, true, /* abort on reject */label).promise;
	}
	
	/**
	  `RSVP.Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new RSVP.Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new RSVP.Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  RSVP.Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `RSVP.Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new RSVP.Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new RSVP.Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  RSVP.Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  RSVP.Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} entries array of promises to observe
	  @param {String} label optional string for describing the promise returned.
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries, label) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  var promise = new Constructor(noop, label);
	
	  if (!isArray(entries)) {
	    reject(promise, new TypeError('You must pass an array to race.'));
	    return promise;
	  }
	
	  for (var i = 0; promise._state === PENDING && i < entries.length; i++) {
	    subscribe(Constructor.resolve(entries[i]), undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	
	  return promise;
	}
	
	/**
	  `RSVP.Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new RSVP.Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = RSVP.Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {*} reason value that the returned promise will be rejected with.
	  @param {String} label optional string for identifying the returned promise.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason, label) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop, label);
	  reject(promise, reason);
	  return promise;
	}
	
	var guidKey = 'rsvp_' + now() + '-';
	var counter = 0;
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise’s eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class RSVP.Promise
	  @param {function} resolver
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver, label) {
	  this._id = counter++;
	  this._label = label;
	  this._state = undefined;
	  this._result = undefined;
	  this._subscribers = [];
	
	  config.instrument && instrument('created', this);
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.cast = resolve$1; // deprecated
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve$1;
	Promise.reject = reject$1;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  _guidKey: guidKey,
	
	  _onError: function _onError(reason) {
	    var promise = this;
	    config.after(function () {
	      if (promise._onError) {
	        config['trigger']('error', reason, promise._label);
	      }
	    });
	  },
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we\'re unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we\'re unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfillment
	    @param {Function} onRejection
	    @param {String} label optional string for labeling the promise.
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn\'t find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    @param {String} label optional string for labeling the promise.
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection, label) {
	    return this.then(undefined, onRejection, label);
	  },
	
	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuthor();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuthor();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @param {String} label optional string for labeling the promise.
	    Useful for tooling.
	    @return {Promise}
	  */
	  'finally': function _finally(callback, label) {
	    var promise = this;
	    var constructor = promise.constructor;
	
	    return promise.then(function (value) {
	      return constructor.resolve(callback()).then(function () {
	        return value;
	      });
	    }, function (reason) {
	      return constructor.resolve(callback()).then(function () {
	        throw reason;
	      });
	    }, label);
	  }
	};
	
	function Result() {
	  this.value = undefined;
	}
	
	var ERROR = new Result();
	var GET_THEN_ERROR$1 = new Result();
	
	function getThen$1(obj) {
	  try {
	    return obj.then;
	  } catch (error) {
	    ERROR.value = error;
	    return ERROR;
	  }
	}
	
	function tryApply(f, s, a) {
	  try {
	    f.apply(s, a);
	  } catch (error) {
	    ERROR.value = error;
	    return ERROR;
	  }
	}
	
	function makeObject(_, argumentNames) {
	  var obj = {};
	  var length = _.length;
	  var args = new Array(length);
	
	  for (var x = 0; x < length; x++) {
	    args[x] = _[x];
	  }
	
	  for (var i = 0; i < argumentNames.length; i++) {
	    var _name = argumentNames[i];
	    obj[_name] = args[i + 1];
	  }
	
	  return obj;
	}
	
	function arrayResult(_) {
	  var length = _.length;
	  var args = new Array(length - 1);
	
	  for (var i = 1; i < length; i++) {
	    args[i - 1] = _[i];
	  }
	
	  return args;
	}
	
	function wrapThenable(_then, promise) {
	  return {
	    then: function then(onFulFillment, onRejection) {
	      return _then.call(promise, onFulFillment, onRejection);
	    }
	  };
	}
	
	/**
	  `RSVP.denodeify` takes a 'node-style' function and returns a function that
	  will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
	  browser when you'd prefer to use promises over using callbacks. For example,
	  `denodeify` transforms the following:
	
	  ```javascript
	  let fs = require('fs');
	
	  fs.readFile('myfile.txt', function(err, data){
	    if (err) return handleError(err);
	    handleData(data);
	  });
	  ```
	
	  into:
	
	  ```javascript
	  let fs = require('fs');
	  let readFile = RSVP.denodeify(fs.readFile);
	
	  readFile('myfile.txt').then(handleData, handleError);
	  ```
	
	  If the node function has multiple success parameters, then `denodeify`
	  just returns the first one:
	
	  ```javascript
	  let request = RSVP.denodeify(require('request'));
	
	  request('http://example.com').then(function(res) {
	    // ...
	  });
	  ```
	
	  However, if you need all success parameters, setting `denodeify`'s
	  second parameter to `true` causes it to return all success parameters
	  as an array:
	
	  ```javascript
	  let request = RSVP.denodeify(require('request'), true);
	
	  request('http://example.com').then(function(result) {
	    // result[0] -> res
	    // result[1] -> body
	  });
	  ```
	
	  Or if you pass it an array with names it returns the parameters as a hash:
	
	  ```javascript
	  let request = RSVP.denodeify(require('request'), ['res', 'body']);
	
	  request('http://example.com').then(function(result) {
	    // result.res
	    // result.body
	  });
	  ```
	
	  Sometimes you need to retain the `this`:
	
	  ```javascript
	  let app = require('express')();
	  let render = RSVP.denodeify(app.render.bind(app));
	  ```
	
	  The denodified function inherits from the original function. It works in all
	  environments, except IE 10 and below. Consequently all properties of the original
	  function are available to you. However, any properties you change on the
	  denodeified function won't be changed on the original function. Example:
	
	  ```javascript
	  let request = RSVP.denodeify(require('request')),
	      cookieJar = request.jar(); // <- Inheritance is used here
	
	  request('http://example.com', {jar: cookieJar}).then(function(res) {
	    // cookieJar.cookies holds now the cookies returned by example.com
	  });
	  ```
	
	  Using `denodeify` makes it easier to compose asynchronous operations instead
	  of using callbacks. For example, instead of:
	
	  ```javascript
	  let fs = require('fs');
	
	  fs.readFile('myfile.txt', function(err, data){
	    if (err) { ... } // Handle error
	    fs.writeFile('myfile2.txt', data, function(err){
	      if (err) { ... } // Handle error
	      console.log('done')
	    });
	  });
	  ```
	
	  you can chain the operations together using `then` from the returned promise:
	
	  ```javascript
	  let fs = require('fs');
	  let readFile = RSVP.denodeify(fs.readFile);
	  let writeFile = RSVP.denodeify(fs.writeFile);
	
	  readFile('myfile.txt').then(function(data){
	    return writeFile('myfile2.txt', data);
	  }).then(function(){
	    console.log('done')
	  }).catch(function(error){
	    // Handle error
	  });
	  ```
	
	  @method denodeify
	  @static
	  @for RSVP
	  @param {Function} nodeFunc a 'node-style' function that takes a callback as
	  its last argument. The callback expects an error to be passed as its first
	  argument (if an error occurred, otherwise null), and the value from the
	  operation as its second argument ('function(err, value){ }').
	  @param {Boolean|Array} [options] An optional paramter that if set
	  to `true` causes the promise to fulfill with the callback's success arguments
	  as an array. This is useful if the node function has multiple success
	  paramters. If you set this paramter to an array with names, the promise will
	  fulfill with a hash with these names as keys and the success parameters as
	  values.
	  @return {Function} a function that wraps `nodeFunc` to return an
	  `RSVP.Promise`
	  @static
	*/
	function denodeify(nodeFunc, options) {
	  var fn = function fn() {
	    var self = this;
	    var l = arguments.length;
	    var args = new Array(l + 1);
	    var promiseInput = false;
	
	    for (var i = 0; i < l; ++i) {
	      var arg = arguments[i];
	
	      if (!promiseInput) {
	        // TODO: clean this up
	        promiseInput = needsPromiseInput(arg);
	        if (promiseInput === GET_THEN_ERROR$1) {
	          var p = new Promise(noop);
	          reject(p, GET_THEN_ERROR$1.value);
	          return p;
	        } else if (promiseInput && promiseInput !== true) {
	          arg = wrapThenable(promiseInput, arg);
	        }
	      }
	      args[i] = arg;
	    }
	
	    var promise = new Promise(noop);
	
	    args[l] = function (err, val) {
	      if (err) reject(promise, err);else if (options === undefined) resolve(promise, val);else if (options === true) resolve(promise, arrayResult(arguments));else if (isArray(options)) resolve(promise, makeObject(arguments, options));else resolve(promise, val);
	    };
	
	    if (promiseInput) {
	      return handlePromiseInput(promise, args, nodeFunc, self);
	    } else {
	      return handleValueInput(promise, args, nodeFunc, self);
	    }
	  };
	
	  fn.__proto__ = nodeFunc;
	
	  return fn;
	}
	
	function handleValueInput(promise, args, nodeFunc, self) {
	  var result = tryApply(nodeFunc, self, args);
	  if (result === ERROR) {
	    reject(promise, result.value);
	  }
	  return promise;
	}
	
	function handlePromiseInput(promise, args, nodeFunc, self) {
	  return Promise.all(args).then(function (args) {
	    var result = tryApply(nodeFunc, self, args);
	    if (result === ERROR) {
	      reject(promise, result.value);
	    }
	    return promise;
	  });
	}
	
	function needsPromiseInput(arg) {
	  if (arg && typeof arg === 'object') {
	    if (arg.constructor === Promise) {
	      return true;
	    } else {
	      return getThen$1(arg);
	    }
	  } else {
	    return false;
	  }
	}
	
	/**
	  This is a convenient alias for `RSVP.Promise.all`.
	
	  @method all
	  @static
	  @for RSVP
	  @param {Array} array Array of promises.
	  @param {String} label An optional label. This is useful
	  for tooling.
	*/
	function all$1(array, label) {
	  return Promise.all(array, label);
	}
	
	function AllSettled(Constructor, entries, label) {
	  this._superConstructor(Constructor, entries, false, /* don't abort on reject */label);
	}
	
	AllSettled.prototype = o_create(Enumerator.prototype);
	AllSettled.prototype._superConstructor = Enumerator;
	AllSettled.prototype._makeResult = makeSettledResult;
	AllSettled.prototype._validationError = function () {
	  return new Error('allSettled must be called with an array');
	};
	
	/**
	  `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing
	  a fail-fast method, it waits until all the promises have returned and
	  shows you all the results. This is useful if you want to handle multiple
	  promises' failure states together as a set.
	
	  Returns a promise that is fulfilled when all the given promises have been
	  settled. The return promise is fulfilled with an array of the states of
	  the promises passed into the `promises` array argument.
	
	  Each state object will either indicate fulfillment or rejection, and
	  provide the corresponding value or reason. The states will take one of
	  the following formats:
	
	  ```javascript
	  { state: 'fulfilled', value: value }
	    or
	  { state: 'rejected', reason: reason }
	  ```
	
	  Example:
	
	  ```javascript
	  let promise1 = RSVP.Promise.resolve(1);
	  let promise2 = RSVP.Promise.reject(new Error('2'));
	  let promise3 = RSVP.Promise.reject(new Error('3'));
	  let promises = [ promise1, promise2, promise3 ];
	
	  RSVP.allSettled(promises).then(function(array){
	    // array == [
	    //   { state: 'fulfilled', value: 1 },
	    //   { state: 'rejected', reason: Error },
	    //   { state: 'rejected', reason: Error }
	    // ]
	    // Note that for the second item, reason.message will be '2', and for the
	    // third item, reason.message will be '3'.
	  }, function(error) {
	    // Not run. (This block would only be called if allSettled had failed,
	    // for instance if passed an incorrect argument type.)
	  });
	  ```
	
	  @method allSettled
	  @static
	  @for RSVP
	  @param {Array} entries
	  @param {String} label - optional string that describes the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled with an array of the settled
	  states of the constituent promises.
	*/
	function allSettled(entries, label) {
	  return new AllSettled(Promise, entries, label).promise;
	}
	
	/**
	  This is a convenient alias for `RSVP.Promise.race`.
	
	  @method race
	  @static
	  @for RSVP
	  @param {Array} array Array of promises.
	  @param {String} label An optional label. This is useful
	  for tooling.
	 */
	function race$1(array, label) {
	  return Promise.race(array, label);
	}
	
	function PromiseHash(Constructor, object, label) {
	  this._superConstructor(Constructor, object, true, label);
	}
	
	PromiseHash.prototype = o_create(Enumerator.prototype);
	PromiseHash.prototype._superConstructor = Enumerator;
	PromiseHash.prototype._init = function () {
	  this._result = {};
	};
	
	PromiseHash.prototype._validateInput = function (input) {
	  return input && typeof input === 'object';
	};
	
	PromiseHash.prototype._validationError = function () {
	  return new Error('Promise.hash must be called with an object');
	};
	
	PromiseHash.prototype._enumerate = function () {
	  var enumerator = this;
	  var promise = enumerator.promise;
	  var input = enumerator._input;
	  var results = [];
	
	  for (var key in input) {
	    if (promise._state === PENDING && Object.prototype.hasOwnProperty.call(input, key)) {
	      results.push({
	        position: key,
	        entry: input[key]
	      });
	    }
	  }
	
	  var length = results.length;
	  enumerator._remaining = length;
	  var result = undefined;
	
	  for (var i = 0; promise._state === PENDING && i < length; i++) {
	    result = results[i];
	    enumerator._eachEntry(result.entry, result.position);
	  }
	};
	
	/**
	  `RSVP.hash` is similar to `RSVP.all`, but takes an object instead of an array
	  for its `promises` argument.
	
	  Returns a promise that is fulfilled when all the given promises have been
	  fulfilled, or rejected if any of them become rejected. The returned promise
	  is fulfilled with a hash that has the same key names as the `promises` object
	  argument. If any of the values in the object are not promises, they will
	  simply be copied over to the fulfilled object.
	
	  Example:
	
	  ```javascript
	  let promises = {
	    myPromise: RSVP.resolve(1),
	    yourPromise: RSVP.resolve(2),
	    theirPromise: RSVP.resolve(3),
	    notAPromise: 4
	  };
	
	  RSVP.hash(promises).then(function(hash){
	    // hash here is an object that looks like:
	    // {
	    //   myPromise: 1,
	    //   yourPromise: 2,
	    //   theirPromise: 3,
	    //   notAPromise: 4
	    // }
	  });
	  ````
	
	  If any of the `promises` given to `RSVP.hash` are rejected, the first promise
	  that is rejected will be given as the reason to the rejection handler.
	
	  Example:
	
	  ```javascript
	  let promises = {
	    myPromise: RSVP.resolve(1),
	    rejectedPromise: RSVP.reject(new Error('rejectedPromise')),
	    anotherRejectedPromise: RSVP.reject(new Error('anotherRejectedPromise')),
	  };
	
	  RSVP.hash(promises).then(function(hash){
	    // Code here never runs because there are rejected promises!
	  }, function(reason) {
	    // reason.message === 'rejectedPromise'
	  });
	  ```
	
	  An important note: `RSVP.hash` is intended for plain JavaScript objects that
	  are just a set of keys and values. `RSVP.hash` will NOT preserve prototype
	  chains.
	
	  Example:
	
	  ```javascript
	  function MyConstructor(){
	    this.example = RSVP.resolve('Example');
	  }
	
	  MyConstructor.prototype = {
	    protoProperty: RSVP.resolve('Proto Property')
	  };
	
	  let myObject = new MyConstructor();
	
	  RSVP.hash(myObject).then(function(hash){
	    // protoProperty will not be present, instead you will just have an
	    // object that looks like:
	    // {
	    //   example: 'Example'
	    // }
	    //
	    // hash.hasOwnProperty('protoProperty'); // false
	    // 'undefined' === typeof hash.protoProperty
	  });
	  ```
	
	  @method hash
	  @static
	  @for RSVP
	  @param {Object} object
	  @param {String} label optional string that describes the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all properties of `promises`
	  have been fulfilled, or rejected if any of them become rejected.
	*/
	function hash(object, label) {
	  return new PromiseHash(Promise, object, label).promise;
	}
	
	function HashSettled(Constructor, object, label) {
	  this._superConstructor(Constructor, object, false, label);
	}
	
	HashSettled.prototype = o_create(PromiseHash.prototype);
	HashSettled.prototype._superConstructor = Enumerator;
	HashSettled.prototype._makeResult = makeSettledResult;
	
	HashSettled.prototype._validationError = function () {
	  return new Error('hashSettled must be called with an object');
	};
	
	/**
	  `RSVP.hashSettled` is similar to `RSVP.allSettled`, but takes an object
	  instead of an array for its `promises` argument.
	
	  Unlike `RSVP.all` or `RSVP.hash`, which implement a fail-fast method,
	  but like `RSVP.allSettled`, `hashSettled` waits until all the
	  constituent promises have returned and then shows you all the results
	  with their states and values/reasons. This is useful if you want to
	  handle multiple promises' failure states together as a set.
	
	  Returns a promise that is fulfilled when all the given promises have been
	  settled, or rejected if the passed parameters are invalid.
	
	  The returned promise is fulfilled with a hash that has the same key names as
	  the `promises` object argument. If any of the values in the object are not
	  promises, they will be copied over to the fulfilled object and marked with state
	  'fulfilled'.
	
	  Example:
	
	  ```javascript
	  let promises = {
	    myPromise: RSVP.Promise.resolve(1),
	    yourPromise: RSVP.Promise.resolve(2),
	    theirPromise: RSVP.Promise.resolve(3),
	    notAPromise: 4
	  };
	
	  RSVP.hashSettled(promises).then(function(hash){
	    // hash here is an object that looks like:
	    // {
	    //   myPromise: { state: 'fulfilled', value: 1 },
	    //   yourPromise: { state: 'fulfilled', value: 2 },
	    //   theirPromise: { state: 'fulfilled', value: 3 },
	    //   notAPromise: { state: 'fulfilled', value: 4 }
	    // }
	  });
	  ```
	
	  If any of the `promises` given to `RSVP.hash` are rejected, the state will
	  be set to 'rejected' and the reason for rejection provided.
	
	  Example:
	
	  ```javascript
	  let promises = {
	    myPromise: RSVP.Promise.resolve(1),
	    rejectedPromise: RSVP.Promise.reject(new Error('rejection')),
	    anotherRejectedPromise: RSVP.Promise.reject(new Error('more rejection')),
	  };
	
	  RSVP.hashSettled(promises).then(function(hash){
	    // hash here is an object that looks like:
	    // {
	    //   myPromise:              { state: 'fulfilled', value: 1 },
	    //   rejectedPromise:        { state: 'rejected', reason: Error },
	    //   anotherRejectedPromise: { state: 'rejected', reason: Error },
	    // }
	    // Note that for rejectedPromise, reason.message == 'rejection',
	    // and for anotherRejectedPromise, reason.message == 'more rejection'.
	  });
	  ```
	
	  An important note: `RSVP.hashSettled` is intended for plain JavaScript objects that
	  are just a set of keys and values. `RSVP.hashSettled` will NOT preserve prototype
	  chains.
	
	  Example:
	
	  ```javascript
	  function MyConstructor(){
	    this.example = RSVP.Promise.resolve('Example');
	  }
	
	  MyConstructor.prototype = {
	    protoProperty: RSVP.Promise.resolve('Proto Property')
	  };
	
	  let myObject = new MyConstructor();
	
	  RSVP.hashSettled(myObject).then(function(hash){
	    // protoProperty will not be present, instead you will just have an
	    // object that looks like:
	    // {
	    //   example: { state: 'fulfilled', value: 'Example' }
	    // }
	    //
	    // hash.hasOwnProperty('protoProperty'); // false
	    // 'undefined' === typeof hash.protoProperty
	  });
	  ```
	
	  @method hashSettled
	  @for RSVP
	  @param {Object} object
	  @param {String} label optional string that describes the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when when all properties of `promises`
	  have been settled.
	  @static
	*/
	function hashSettled(object, label) {
	  return new HashSettled(Promise, object, label).promise;
	}
	
	function rethrow(reason) {
	  setTimeout(function () {
	    throw reason;
	  });
	  throw reason;
	}
	
	/**
	  `RSVP.defer` returns an object similar to jQuery's `$.Deferred`.
	  `RSVP.defer` should be used when porting over code reliant on `$.Deferred`'s
	  interface. New code should use the `RSVP.Promise` constructor instead.
	
	  The object returned from `RSVP.defer` is a plain object with three properties:
	
	  * promise - an `RSVP.Promise`.
	  * reject - a function that causes the `promise` property on this object to
	    become rejected
	  * resolve - a function that causes the `promise` property on this object to
	    become fulfilled.
	
	  Example:
	
	   ```javascript
	   let deferred = RSVP.defer();
	
	   deferred.resolve("Success!");
	
	   deferred.promise.then(function(value){
	     // value here is "Success!"
	   });
	   ```
	
	  @method defer
	  @static
	  @for RSVP
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Object}
	 */
	function defer(label) {
	  var deferred = { resolve: undefined, reject: undefined };
	
	  deferred.promise = new Promise(function (resolve, reject) {
	    deferred.resolve = resolve;
	    deferred.reject = reject;
	  }, label);
	
	  return deferred;
	}
	
	/**
	 `RSVP.map` is similar to JavaScript's native `map` method, except that it
	  waits for all promises to become fulfilled before running the `mapFn` on
	  each item in given to `promises`. `RSVP.map` returns a promise that will
	  become fulfilled with the result of running `mapFn` on the values the promises
	  become fulfilled with.
	
	  For example:
	
	  ```javascript
	
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.resolve(2);
	  let promise3 = RSVP.resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  let mapFn = function(item){
	    return item + 1;
	  };
	
	  RSVP.map(promises, mapFn).then(function(result){
	    // result is [ 2, 3, 4 ]
	  });
	  ```
	
	  If any of the `promises` given to `RSVP.map` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promise's
	  rejection handler. For example:
	
	  ```javascript
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.reject(new Error('2'));
	  let promise3 = RSVP.reject(new Error('3'));
	  let promises = [ promise1, promise2, promise3 ];
	
	  let mapFn = function(item){
	    return item + 1;
	  };
	
	  RSVP.map(promises, mapFn).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(reason) {
	    // reason.message === '2'
	  });
	  ```
	
	  `RSVP.map` will also wait if a promise is returned from `mapFn`. For example,
	  say you want to get all comments from a set of blog posts, but you need
	  the blog posts first because they contain a url to those comments.
	
	  ```javscript
	
	  let mapFn = function(blogPost){
	    // getComments does some ajax and returns an RSVP.Promise that is fulfilled
	    // with some comments data
	    return getComments(blogPost.comments_url);
	  };
	
	  // getBlogPosts does some ajax and returns an RSVP.Promise that is fulfilled
	  // with some blog post data
	  RSVP.map(getBlogPosts(), mapFn).then(function(comments){
	    // comments is the result of asking the server for the comments
	    // of all blog posts returned from getBlogPosts()
	  });
	  ```
	
	  @method map
	  @static
	  @for RSVP
	  @param {Array} promises
	  @param {Function} mapFn function to be called on each fulfilled promise.
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled with the result of calling
	  `mapFn` on each fulfilled promise or value when they become fulfilled.
	   The promise will be rejected if any of the given `promises` become rejected.
	  @static
	*/
	function map(promises, mapFn, label) {
	  return Promise.all(promises, label).then(function (values) {
	    if (!isFunction(mapFn)) {
	      throw new TypeError("You must pass a function as map's second argument.");
	    }
	
	    var length = values.length;
	    var results = new Array(length);
	
	    for (var i = 0; i < length; i++) {
	      results[i] = mapFn(values[i]);
	    }
	
	    return Promise.all(results, label);
	  });
	}
	
	/**
	  This is a convenient alias for `RSVP.Promise.resolve`.
	
	  @method resolve
	  @static
	  @for RSVP
	  @param {*} value value that the returned promise will be resolved with
	  @param {String} label optional string for identifying the returned promise.
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$2(value, label) {
	  return Promise.resolve(value, label);
	}
	
	/**
	  This is a convenient alias for `RSVP.Promise.reject`.
	
	  @method reject
	  @static
	  @for RSVP
	  @param {*} reason value that the returned promise will be rejected with.
	  @param {String} label optional string for identifying the returned promise.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$2(reason, label) {
	  return Promise.reject(reason, label);
	}
	
	/**
	 `RSVP.filter` is similar to JavaScript's native `filter` method, except that it
	  waits for all promises to become fulfilled before running the `filterFn` on
	  each item in given to `promises`. `RSVP.filter` returns a promise that will
	  become fulfilled with the result of running `filterFn` on the values the
	  promises become fulfilled with.
	
	  For example:
	
	  ```javascript
	
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.resolve(2);
	  let promise3 = RSVP.resolve(3);
	
	  let promises = [promise1, promise2, promise3];
	
	  let filterFn = function(item){
	    return item > 1;
	  };
	
	  RSVP.filter(promises, filterFn).then(function(result){
	    // result is [ 2, 3 ]
	  });
	  ```
	
	  If any of the `promises` given to `RSVP.filter` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promise's
	  rejection handler. For example:
	
	  ```javascript
	  let promise1 = RSVP.resolve(1);
	  let promise2 = RSVP.reject(new Error('2'));
	  let promise3 = RSVP.reject(new Error('3'));
	  let promises = [ promise1, promise2, promise3 ];
	
	  let filterFn = function(item){
	    return item > 1;
	  };
	
	  RSVP.filter(promises, filterFn).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(reason) {
	    // reason.message === '2'
	  });
	  ```
	
	  `RSVP.filter` will also wait for any promises returned from `filterFn`.
	  For instance, you may want to fetch a list of users then return a subset
	  of those users based on some asynchronous operation:
	
	  ```javascript
	
	  let alice = { name: 'alice' };
	  let bob   = { name: 'bob' };
	  let users = [ alice, bob ];
	
	  let promises = users.map(function(user){
	    return RSVP.resolve(user);
	  });
	
	  let filterFn = function(user){
	    // Here, Alice has permissions to create a blog post, but Bob does not.
	    return getPrivilegesForUser(user).then(function(privs){
	      return privs.can_create_blog_post === true;
	    });
	  };
	  RSVP.filter(promises, filterFn).then(function(users){
	    // true, because the server told us only Alice can create a blog post.
	    users.length === 1;
	    // false, because Alice is the only user present in `users`
	    users[0] === bob;
	  });
	  ```
	
	  @method filter
	  @static
	  @for RSVP
	  @param {Array} promises
	  @param {Function} filterFn - function to be called on each resolved value to
	  filter the final results.
	  @param {String} label optional string describing the promise. Useful for
	  tooling.
	  @return {Promise}
	*/
	
	function resolveAll(promises, label) {
	  return Promise.all(promises, label);
	}
	
	function resolveSingle(promise, label) {
	  return Promise.resolve(promise, label).then(function (promises) {
	    return resolveAll(promises, label);
	  });
	}
	function filter(promises, filterFn, label) {
	  var promise = isArray(promises) ? resolveAll(promises, label) : resolveSingle(promises, label);
	  return promise.then(function (values) {
	    if (!isFunction(filterFn)) {
	      throw new TypeError("You must pass a function as filter's second argument.");
	    }
	
	    var length = values.length;
	    var filtered = new Array(length);
	
	    for (var i = 0; i < length; i++) {
	      filtered[i] = filterFn(values[i]);
	    }
	
	    return resolveAll(filtered, label).then(function (filtered) {
	      var results = new Array(length);
	      var newLength = 0;
	
	      for (var i = 0; i < length; i++) {
	        if (filtered[i]) {
	          results[newLength] = values[i];
	          newLength++;
	        }
	      }
	
	      results.length = newLength;
	
	      return results;
	    });
	  });
	}
	
	var len = 0;
	var vertxNext = undefined;
	function asap(callback, arg) {
	  queue$1[len] = callback;
	  queue$1[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 1, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    scheduleFlush$1();
	  }
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  var nextTick = process.nextTick;
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // setImmediate should be used instead instead
	  var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
	  if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
	    nextTick = setImmediate;
	  }
	  return function () {
	    return nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    return node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  return function () {
	    return setTimeout(flush, 1);
	  };
	}
	
	var queue$1 = new Array(1000);
	
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue$1[i];
	    var arg = queue$1[i + 1];
	
	    callback(arg);
	
	    queue$1[i] = undefined;
	    queue$1[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertex() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(9);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush$1 = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush$1 = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush$1 = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush$1 = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush$1 = attemptVertex();
	} else {
	  scheduleFlush$1 = useSetTimeout();
	}
	
	var platform = undefined;
	
	/* global self */
	if (typeof self === 'object') {
	  platform = self;
	
	  /* global global */
	} else if (typeof global === 'object') {
	    platform = global;
	  } else {
	    throw new Error('no global: `self` or `global` found');
	  }
	
	var _async$filter;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// defaults
	
	// the default export here is for backwards compat:
	//   https://github.com/tildeio/rsvp.js/issues/434
	config.async = asap;
	config.after = function (cb) {
	  return setTimeout(cb, 0);
	};
	var cast = resolve$2;
	
	var async = function async(callback, arg) {
	  return config.async(callback, arg);
	};
	
	function on() {
	  config['on'].apply(config, arguments);
	}
	
	function off() {
	  config['off'].apply(config, arguments);
	}
	
	// Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
	if (typeof window !== 'undefined' && typeof window['__PROMISE_INSTRUMENTATION__'] === 'object') {
	  var callbacks = window['__PROMISE_INSTRUMENTATION__'];
	  configure('instrument', true);
	  for (var eventName in callbacks) {
	    if (callbacks.hasOwnProperty(eventName)) {
	      on(eventName, callbacks[eventName]);
	    }
	  }
	}var rsvp = (_async$filter = {
	  cast: cast,
	  Promise: Promise,
	  EventTarget: EventTarget,
	  all: all$1,
	  allSettled: allSettled,
	  race: race$1,
	  hash: hash,
	  hashSettled: hashSettled,
	  rethrow: rethrow,
	  defer: defer,
	  denodeify: denodeify,
	  configure: configure,
	  on: on,
	  off: off,
	  resolve: resolve$2,
	  reject: reject$2,
	  map: map
	}, _defineProperty(_async$filter, 'async', async), _defineProperty(_async$filter, 'filter', // babel seems to error if async isn't a computed prop here...
	filter), _async$filter);
	
	exports['default'] = rsvp;
	exports.cast = cast;
	exports.Promise = Promise;
	exports.EventTarget = EventTarget;
	exports.all = all$1;
	exports.allSettled = allSettled;
	exports.race = race$1;
	exports.hash = hash;
	exports.hashSettled = hashSettled;
	exports.rethrow = rethrow;
	exports.defer = defer;
	exports.denodeify = denodeify;
	exports.configure = configure;
	exports.on = on;
	exports.off = off;
	exports.resolve = resolve$2;
	exports.reject = reject$2;
	exports.map = map;
	exports.async = async;
	exports.filter = filter;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=rsvp.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8).setImmediate, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(7).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8).setImmediate, __webpack_require__(8).clearImmediate))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 10 */
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
/* 11 */
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
	                var item = storageObj.getItem(key);
	
	                return item ? JSON.parse(item) : null;
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Delve(userEmail) {
	    var site = this,
	        methods = {};
	
	    methods.board = function (searchTerm, actions, cache) {
	        return new _rsvp2.default.Promise(function (resolve, reject) {
	            var searchUrl, actor;
	
	            if (!searchTerm) {
	                searchTerm = '*';
	            }
	
	            if (userEmail) {
	                searchUrl = site.url + "/_api/search/query?Querytext=%27WorkEmail:" + userEmail + "%27&SelectProperties=%27UserName,DocId%27";
	
	                _utils2.default.Request.get(searchUrl, cache).then(function (result) {
	                    result = _utils2.default.SP.formatSearchResponse(result);
	
	                    if (result.length) {
	                        if (result.length > 1) {
	                            result = result[0];
	                        }
	
	                        actor = result.DocId;
	                        searchUrl = site.url + "/_api/search/query?Querytext='" + searchTerm + "'&amp;Properties='GraphQuery:ACTOR(" + actor + actions ? ", " + actions : "" + ")";
	
	                        _utils2.default.Request.get(searchUrl, cache).then(function (board) {
	                            board = _utils2.default.SP.formatSearchResponse(board);
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
	
	                _utils2.default.Request.get(searchUrl, cache).then(function (board) {
	                    board = _utils2.default.SP.formatSearchResponse(board);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Files(filePath) {
	    var site = this,
	        methods = {};
	
	    methods.generateExternalLink = function (hours) {
	        hours = hours ? hours : 24;
	
	        var listUrl = site.url + "/_api/Web/GetFileByServerRelativeUrl('" + filePath + "')/GetPreAuthorizedAccessUrl(" + hours + ")";
	
	        return _utils2.default.Request.get(listUrl, true);
	    };
	
	    methods.uploadViaModal = function (GUID, returnResultBool) {
	        return new _rsvp2.default.Promise(function (resolve, reject) {
	            var dialogOptions = {};
	
	            dialogOptions.url = site.url + "/_layouts/Upload.aspx?List=" + GUID + "&IsDlg=1";
	
	            dialogOptions.dialogReturnValueCallback = Function.createDelegate(null, function (result, value) {
	                if (returnResultBool) {
	                    resolve(result);
	                } else {
	                    resolve(value);
	                }
	            });
	
	            SP.UI.ModalDialog.showModalDialog(dialogOptions);
	        });
	    };
	
	    methods.upload = function (fileInput, expand) {
	        return new _rsvp2.default.Promise(function (resolve, reject) {
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
	        return new _rsvp2.default.Promise(function (resolve, reject) {
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
	            window.open(_utils2.default.SP.convertToWebApp(url));
	        } else {
	            window.location.href = _utils2.default.SP.convertToWebApp(url);
	        }
	    };
	
	    return methods;
	};
	
	exports.default = Files;
	module.exports = exports['default'];

/***/ },
/* 17 */
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
	
	    methods.update = function (settings) {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SP.getListItemType(listTitle)
	            }
	        };
	
	        if (settings) {
	            defaults = _utils2.default.Objects.merge(defaults, settings);
	        }
	
	        return _utils2.default.Request.put(listUrl, defaults);
	    };
	
	    methods.delete = function () {
	        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
	            defaults = {
	            __metadata: {
	                'type': _utils2.default.SP.getListItemType(listTitle)
	            }
	        };
	
	        return _utils2.default.Request.delete(listUrl, defaults);
	    };
	
	    return methods;
	};
	
	exports.default = Lists;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _rsvp = __webpack_require__(6);
	
	var _rsvp2 = _interopRequireDefault(_rsvp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Search(searchTerm) {
	    var site = this,
	        methods = {};
	
	    methods.query = function (settings, cache) {
	        return new _rsvp2.default.Promise(function (resolve, reject) {
	            var searchUrl = site.url + '/_api/search/query?querytext=%27' + searchTerm + ' +path:' + site.url + '%27';
	
	            searchUrl += settings ? '?' + _utils2.default.Conversion.objToQueryString(settings) : '';
	
	            _utils2.default.Request.get(searchUrl, cache).then(function (result) {
	                result = _utils2.default.SP.formatSearchResponse(result);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	        return _utils2.default.Request.get(listUrl, cache);
	    };
	
	    methods.isMemberOfGroup = function (site, groupName, userId, cache) {
	        var user = userId ? userId : window._spPageContextInfo.userId,
	            listUrl = site.url + "/_api/web/sitegroups/getByName('" + groupName + "')/Users?$filter=Id eq " + user;
	
	        return _utils2.default.Request.get(listUrl, cache);
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