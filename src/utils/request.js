import Utils from './utils';
import RSVP from 'rsvp';

class Request {
    static get(url, cacheResult) {
        return new RSVP.Promise(function(resolve, reject) {
            var cache = Utils.Storage.get('SPOC-' + url);

            if (cache && cacheResult) {
                resolve(cache);
            } 
            else {
                if (!Utils.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
                    url = Utils.Url.convertToXDomain(url);

                    var appweburl = Utils.Url.AppWebUrl(),
                        hostweburl = Utils.Url.HostWebUrl();

                    this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function() {
                        var executor = new SP.RequestExecutor(appweburl);

                        executor.executeAsync({
                            url: url,
                            method: "GET",
                            headers: {
                                "Accept": "application/json; odata=verbose"
                            },
                            success: function(data) {
                                resolve(data);
                            },
                            error: function(err) {
                                reject(err);
                            }
                        });
                    });
                } 
                else {
                    var req = new XMLHttpRequest();

                    req.open('GET', url, true);
                    req.setRequestHeader("Accept", "application/json;odata=verbose");

                    req.onreadystatechange = function() {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                var data = JSON.parse(req.responseText);

                                data = data.d.results ? data.d.results : data.d;

                                Utils.Storage.set('SPOC-' + url, data);

                                resolve(data);
                            } 
                            else {
                                reject(Error(JSON.parse(req.statusText)));
                            }
                        }
                    };

                    req.onerror = function(err) {
                        reject(Error('Network Error'));
                    };

                    req.send();
                }
            }
        });
    };

    static post(url, data, isFile) {
        return new RSVP.Promise(function(resolve, reject) {
            if (!Utils.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
                url = Utils.Url.convertToXDomain(url);

                var appweburl = Utils.Url.AppWebUrl(),
                    hostweburl = Utils.Url.HostWebUrl();

                this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function() {
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
                        success: function(data) {
                            resolve(data);
                        },
                        error: function(err) {
                            reject(err);
                        }
                    });
                });
            } 
            else {
                var req = new XMLHttpRequest();

                req.open('POST', url, true);
                req.setRequestHeader("Accept", "application/json;odata=verbose");
                req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
                req.setRequestHeader("Content-Type", "application/json;odata=verbose");

                if (isFile) {
                    req.setRequestHeader("content-length", data.byteLength);
                }

                req.onreadystatechange = function() {
                    if (req.readyState === 4) {
                        if (req.status === 200 || req.status === 201 || req.status === 1223) {
                            resolve(data);
                        } 
                        else {
                            reject(Error(req.statusText));
                        }
                    }
                };

                req.onerror = function(err) {
                    reject(Error('Network Error'));
                };

                req.send(isFile ? data : JSON.stringify(data));
            }
            
        });
    };

    static put(url, data) {
        return new RSVP.Promise(function(resolve, reject) {
            if (!Utils.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
                url = Utils.Url.convertToXDomain(url);

                var appweburl = Utils.Url.AppWebUrl(),
                    hostweburl = Utils.Url.HostWebUrl();

                this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function() {
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
                        success: function(data) {
                            resolve(data);
                        },
                        error: function(err) {
                            reject(err);
                        }
                    });
                });
            } 
            else {
                var req = new XMLHttpRequest();

                req.open('POST', url, true);
                req.setRequestHeader("Accept", "application/json;odata=verbose");
                req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
                req.setRequestHeader("Content-Type", "application/json;odata=verbose");
                req.setRequestHeader("X-HTTP-Method", "MERGE");
                req.setRequestHeader("If-Match", "*");

                req.onreadystatechange = function() {
                    if (req.readyState === 4) {
                        if (req.status === 200 || req.status === 204 || req.status === 1223) {
                            resolve(data);
                        } 
                        else {
                            reject(Error(req.statusText));
                        }
                    }
                };

                req.onerror = function(err) {
                    reject(Error('Network Error'));
                };

                req.send(JSON.stringify(data));
            }
        });
    };

    static delete(url, data) {
        return new RSVP.Promise(function(resolve, reject) {
            if (!Utils.Url.isSameDomain(url) && url.toLowerCase().indexOf('_api/web') > -1) {
                url = Utils.Url.convertToXDomain(url);

                var appweburl = Utils.Url.AppWebUrl(),
                    hostweburl = Utils.Url.HostWebUrl();

                this.Request.loadRequestor(hostweburl + '/_layouts/15/SP.RequestExecutor.js').then(function() {
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
                        success: function(data) {
                            resolve(data);
                        },
                        error: function(err) {
                            reject(err);
                        }
                    });
                });
            } 
            else {
                var req = new XMLHttpRequest();

                req.open('POST', url, true);
                req.setRequestHeader("X-RequestDigest", document.getElementById('__REQUESTDIGEST').value);
                req.setRequestHeader("X-HTTP-Method", "DELETE");
                req.setRequestHeader("If-Match", "*");

                req.onreadystatechange = function() {
                    if (req.readyState === 4) {
                        if (req.status === 200 || req.status === 204 || req.status === 1223) {
                            resolve(data);
                        } 
                        else {
                            reject(Error(req.statusText));
                        }
                    }
                };

                req.onerror = function(err) {
                    reject(Error('Network Error'));
                };

                req.send(JSON.stringify(data));
            }
        });
    };

    static loadRequestor(url) {
        return new RSVP.Promise(function(resolve, reject) {
            var script = document.createElement('script');

            script.src = url;

            script.addEventListener('load', function() {
                resolve(url);
            }, false);

            script.addEventListener('error', function() {
                reject(url);
            }, false);

            if (!SP.RequestExecutor) {
                document.body.appendChild(script);
            } 
            else {
                resolve(url);
            }
        });
    };
};

export default Request;
