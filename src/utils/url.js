import { Utils } from './utils';

Utils.Url = class {
    static getQueryString(variable, query) {
        query = query ? query = query.split('?')[1] : window.location.search.substring(1);

        var vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");

            if (pair[0] === variable) {
                return unescape(pair[1]);
            }
        }
    };

    static getListNameFromUrl(url) {
        var regex = /\%27(.*)\%27/g,
            match = regex.exec(url);

        return match ? match[1] : null;
    };

    static AppWebUrl(url) {
        return decodeURIComponent(Utils.Url.getQueryString('SPAppWebUrl'));
    };

    static HostWebUrl(url) {
        return decodeURIComponent(Utils.Url.getQueryString('SPHostUrl'));
    };

    static isSameDomain(url) {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + 
                (window.location.port ? ':' + window.location.port : '');
        }

        return url.toLowerCase().indexOf(window.location.origin.toLowerCase()) > -1;
    };

    static convertToXDomain(url) {
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
    };
};

export { Utils };
